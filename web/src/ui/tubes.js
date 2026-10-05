// Provette ed esami: rack grafico, ordine di prelievo e configurazione del protocollo della propria struttura.
import { esc, icon, $, $$ } from '../core/dom.js';
import { BY_TYPE } from '../core/data.js';
import { store } from '../core/store.js';
import { toast, openSheet } from '../core/ui.js';
import { tubeSvg } from '../viz/tubes.js';
import { DISCLAIMER, pageHead } from './common.js';
import { ORDER_NOTE } from '../data/tubes.js';

const cfg = () => store.get('tubeCfg', {});

function effective(e) {
  const c = cfg()[e.id] || {};
  return { ...e, title: c.title || e.title, exams: c.exams || e.tube.exams, note: c.note || '', ord: c.ord ?? e.ord };
}

export function renderTubes(root) {
  const tubes = BY_TYPE.tube.map(effective).sort((a, b) => a.ord - b.ord);
  root.innerHTML = `<div class="page">
    ${pageHead({ title: 'Provette ed esami', sub: 'Colore → additivo → esami → modalità', icon: 'test-tubes', c: '--c-provette' })}
    <div class="card pad" style="overflow:hidden"><div class="rack">${tubes.map((e) => `<button class="rk" data-go="/e/${e.id}" aria-label="${esc(e.title)}">${tubeSvg({ color: e.tube.color, cap: e.tube.cap, fill: e.tube.fill, h: 150, label: e.title })}<span>${e.ord}</span></button>`).join('')}</div>
      <div class="xs muted center" style="margin-top:6px">Tocca una provetta per i dettagli</div></div>
    <div class="sec-title"><h2>Ordine di prelievo</h2></div>
    <div class="list">${tubes.map((e, i) => `<button class="item" data-go="/e/${e.id}"><div class="tile-ic sm" style="background:${e.tube.cap};--c:0 0 0">${e.ord}</div><div class="grow"><div class="t">${esc(e.title)}</div><div class="d">${esc(e.exams)}${e.note ? ' · ' + esc(e.note) : ''}</div></div>${icon('chevron-right', 'go')}</button>`).join('')}</div>
    <div class="callout warn" style="margin-top:12px">${icon('triangle-alert')}<div>${esc(ORDER_NOTE)}</div></div>
    <button class="btn block" id="cfg" style="margin-top:14px">${icon('settings')}Configura il protocollo della mia struttura</button>
    <p class="small muted" style="margin-top:8px">Puoi rinominare le provette, modificare gli esami associati, l’ordine e aggiungere note. Resta solo su questo dispositivo.</p>
    ${DISCLAIMER}</div>`;
  $('#cfg', root).onclick = () => openCfg(() => renderTubes(root));
  return { title: 'Provette', tab: 'home' };
}

function openCfg(done) {
  const tubes = BY_TYPE.tube.map(effective).sort((a, b) => a.ord - b.ord);
  const sh = openSheet({ title: 'Protocollo della struttura', html: `<div class="stack">${tubes.map((e) => `<div class="card pad stack" data-t="${e.id}">
    <div class="row">${tubeSvg({ color: e.tube.color, cap: e.tube.cap, fill: 70, h: 56, w: 20 })}<b class="grow">${esc(BY_TYPE.tube.find((x) => x.id === e.id).title)}</b></div>
    <label class="field"><span>Nome nella tua struttura</span><input class="input" data-f="title" value="${esc(e.title)}"></label>
    <label class="field"><span>Esami / uso</span><textarea class="textarea" data-f="exams">${esc(e.exams)}</textarea></label>
    <div class="grid2"><label class="field"><span>Ordine</span><input class="input" inputmode="numeric" data-f="ord" value="${e.ord}"></label><label class="field"><span>Nota</span><input class="input" data-f="note" value="${esc(e.note)}"></label></div></div>`).join('')}
    <div class="row"><button class="btn grow" id="sv">Salva</button><button class="btn ghost" id="rs">Ripristina</button></div></div>` });
  $('#sv', sh.el).onclick = () => {
    const c = {};
    $$('[data-t]', sh.el).forEach((box) => {
      const id = box.dataset.t; const base = BY_TYPE.tube.find((x) => x.id === id);
      const o = {};
      const v = (k) => $(`[data-f=${k}]`, box).value.trim();
      if (v('title') && v('title') !== base.title) o.title = v('title');
      if (v('exams') && v('exams') !== base.tube.exams) o.exams = v('exams');
      if (v('note')) o.note = v('note');
      const n = parseInt(v('ord'), 10); if (isFinite(n) && n !== base.ord) o.ord = n;
      if (Object.keys(o).length) c[id] = o;
    });
    store.set('tubeCfg', c); sh.close(); toast('Protocollo salvato'); done();
  };
  $('#rs', sh.el).onclick = () => { store.del('tubeCfg'); sh.close(); toast('Ripristinato'); done(); };
}
