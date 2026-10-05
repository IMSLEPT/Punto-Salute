// Scale di valutazione (punteggio automatico) e calcolatore con procedimento.
import { esc, icon, $, $$ } from '../core/dom.js';
import { BY_TYPE, BY_ID } from '../core/data.js';
import { rt, block } from '../core/text.js';
import { TYPES } from '../core/types.js';
import { listOf, pageHead, DISCLAIMER } from './common.js';
import { metaBlock, mapBlock } from './entity.js';

const LV = { ok: 'ok', warn: 'warn', danger: 'danger' };

// ---------------------------------------------------------------- NEWS2
const N2 = {
  fr: [[8, 3], [11, 1], [20, 0], [24, 2], [999, 3]],
  sp1: [[91, 3], [93, 2], [95, 1], [999, 0]],
  pa: [[90, 3], [100, 2], [110, 1], [219, 0], [999, 3]],
  fc: [[40, 3], [50, 1], [90, 0], [110, 1], [130, 2], [999, 3]],
  t: [[35.0, 3], [36.0, 1], [38.0, 0], [39.0, 1], [999, 2]],
};
const band = (tab, v) => (tab.find(([m]) => v <= m) || [0, 0])[1];
function news2(v) {
  const parts = [];
  parts.push(['Frequenza respiratoria', band(N2.fr, v.fr)]);
  let sp;
  if (v.scale2) sp = v.o2 ? (v.sp <= 83 ? 3 : v.sp <= 85 ? 2 : v.sp <= 87 ? 1 : v.sp <= 92 ? 0 : v.sp <= 94 ? 1 : v.sp <= 96 ? 2 : 3) : (v.sp <= 83 ? 3 : v.sp <= 85 ? 2 : v.sp <= 87 ? 1 : 0);
  else sp = band(N2.sp1, Math.floor(v.sp));
  parts.push(['SpO₂', sp]);
  parts.push(['Ossigeno supplementare', v.o2 ? 2 : 0]);
  parts.push(['PA sistolica', band(N2.pa, v.pa)]);
  parts.push(['Frequenza cardiaca', band(N2.fc, v.fc)]);
  parts.push(['Stato di coscienza', v.cvpu ? 3 : 0]);
  parts.push(['Temperatura', band(N2.t, Math.round(v.t * 10) / 10)]);
  const tot = parts.reduce((s, p) => s + p[1], 0);
  const single3 = parts.some((p) => p[1] === 3);
  let res;
  if (tot >= 7) res = ['Rischio alto', 'danger', 'Risposta di emergenza: team di emergenza/area critica, monitoraggio continuo.'];
  else if (tot >= 5) res = ['Rischio medio', 'warn', 'Revisione urgente da parte di un clinico competente; monitoraggio ravvicinato.'];
  else if (single3) res = ['Rischio basso–medio (singolo parametro = 3)', 'warn', 'Revisione urgente in reparto: un parametro con punteggio 3 richiede valutazione immediata.'];
  else res = ['Rischio basso', 'ok', 'Continua il monitoraggio secondo frequenza minima del protocollo (di norma ogni 4–12 ore).'];
  return { tot, parts, res };
}

function resultBox(label, tot, lv, text, steps) {
  return `<div class="callout ${LV[lv]}" style="margin-top:14px">${icon(lv === 'ok' ? 'circle-check' : lv === 'warn' ? 'triangle-alert' : 'octagon-alert')}<div><div style="font-size:1.5rem;font-weight:800">${tot}</div><b>${esc(label)}</b><div class="small" style="margin-top:4px">${esc(text)}</div></div></div>${steps || ''}`;
}

export function renderScales(root) {
  const items = BY_TYPE.scale || [];
  root.innerHTML = `<div class="page">${pageHead({ title: 'Scale e valutazione', sub: 'Punteggio automatico e interpretazione', icon: 'gauge', c: '--c-scale' })}
    ${listOf(items, '', { sub: null })}
    <div class="callout warn" style="margin-top:14px">${icon('triangle-alert')}<div>Verifica sempre licenza, versione ufficiale e scale adottate dalla tua struttura (es. NEWS2 o altri sistemi locali).</div></div>${DISCLAIMER}</div>`;
  root.querySelectorAll('.item .d').forEach((d) => d.remove());
  return { title: 'Scale', tab: 'home' };
}

export function renderScale(root, id) {
  const e = BY_ID.get(id);
  if (!e) { root.innerHTML = '<div class="page">Non trovata</div>'; return { title: 'Scala' }; }
  const t = TYPES.scale;
  const ctx = { self: e.id, seen: new Set() };
  const head = `<div class="ehead" style="--c:var(${t.c})"><span class="kind">${icon(t.icon)}Scala di valutazione</span><h1>${esc(e.title)}</h1><p class="sum">${rt(e.summary, ctx)}</p></div>`;
  let form = '';
  if (e.scale.special === 'news2') {
    form = `<div class="card pad stack" id="form">
      ${[['fr', 'Frequenza respiratoria', 'atti/min', 16], ['sp', 'Saturazione SpO₂', '%', 97], ['pa', 'Pressione sistolica', 'mmHg', 120], ['fc', 'Frequenza cardiaca', 'bpm', 75], ['t', 'Temperatura', '°C', 36.8]].map(([k, l, u, d]) => `<label class="field"><span>${l} (${u})</span><input class="input" inputmode="decimal" data-k="${k}" value="${d}"></label>`).join('')}
      <div class="grid2"><label class="field"><span>Ossigeno supplementare</span><select class="select" data-k="o2"><option value="0">Aria ambiente</option><option value="1">Ossigeno</option></select></label>
      <label class="field"><span>Coscienza</span><select class="select" data-k="cvpu"><option value="0">Vigile (Alert)</option><option value="1">Nuova confusione / V / P / U</option></select></label></div>
      <label class="field"><span>Scala SpO₂</span><select class="select" data-k="scale2"><option value="0">Scala 1 (standard)</option><option value="1">Scala 2 (target 88–92%, solo se prescritta)</option></select></label></div><div id="out"></div>`;
  } else {
    form = `<div class="stack" id="form">${e.scale.groups.map((g) => `<div class="card pad"><div style="font-weight:700;margin-bottom:8px">${esc(g.label)}</div><div class="opts">${g.opts.map(([l, p], i) => `<label class="opt"><input type="radio" name="${g.id}" value="${p}" ${i === 0 && g.opts.length > 8 ? '' : ''}><span><b>${p}</b> · ${esc(l)}</span></label>`).join('')}</div></div>`).join('')}</div><div id="out"></div>`;
  }
  root.innerHTML = `<div class="page flush" style="--c:var(${t.c})">${head}<div style="padding:14px 16px 28px">${form}
    <div class="sec-title"><h2>Come si usa</h2></div><div class="card pad body" style="--c:var(${t.c})">${block(e.sections.cos, ctx)}</div>
    ${mapBlock(e.id)}${metaBlock(e)}</div></div>`;
  const out = $('#out', root);
  const update = () => {
    if (e.scale.special === 'news2') {
      const g = (k) => $(`[data-k=${k}]`, root).value;
      const v = { fr: +g('fr'), sp: +g('sp'), pa: +g('pa'), fc: +g('fc'), t: +g('t'), o2: g('o2') === '1', cvpu: g('cvpu') === '1', scale2: g('scale2') === '1' };
      if ([v.fr, v.sp, v.pa, v.fc, v.t].some((x) => !isFinite(x))) { out.innerHTML = ''; return; }
      const r = news2(v);
      out.innerHTML = resultBox(r.res[0], r.tot, r.res[1], r.res[2], `<div class="card pad small" style="margin-top:12px"><b>Dettaglio</b><table class="tbl" style="min-width:0;margin-top:6px"><tbody>${r.parts.map(([l, p]) => `<tr><td>${l}</td><td><b>${p}</b></td></tr>`).join('')}</tbody></table></div>`);
      return;
    }
    const groups = e.scale.groups;
    const vals = groups.map((g) => { const c = $(`input[name=${g.id}]:checked`, root); return c ? +c.value : null; });
    const done = vals.filter((x) => x !== null).length;
    if (done < groups.length) { out.innerHTML = `<div class="small muted" style="margin-top:12px">Compilate ${done} su ${groups.length} voci</div>`; return; }
    const tot = vals.reduce((a, b) => a + b, 0);
    const b = e.scale.bands.find((x) => tot <= x.max) || e.scale.bands[e.scale.bands.length - 1];
    let label = b.label;
    if (e.id === 'glasgow') { const [E, V, M] = vals; label += ` — E${E} V${V} M${M}`; }
    out.innerHTML = resultBox(label, tot, b.level, b.text, '');
  };
  root.addEventListener('input', update);
  root.addEventListener('change', update);
  update();
  return { title: e.title, tab: 'home' };
}

// ---------------------------------------------------------------- calcolatore
export function renderCalcHub(root) {
  const items = BY_TYPE.calc || [];
  root.innerHTML = `<div class="page">${pageHead({ title: 'Calcolatore', sub: 'Ogni risultato mostra il procedimento', icon: 'calculator', c: '--c-calcolatore' })}
    <div class="callout warn">${icon('triangle-alert')}<div><b>Doppio controllo.</b> I risultati sono di supporto: verifica prescrizione, unità e protocollo aziendale prima di somministrare.</div></div>
    <div style="height:12px"></div>${listOf(items)}${DISCLAIMER}</div>`;
  return { title: 'Calcolatore', tab: 'home' };
}

export function renderCalc(root, id) {
  const e = BY_ID.get(id);
  if (!e) { root.innerHTML = '<div class="page">Non trovato</div>'; return { title: 'Calcolo' }; }
  const t = TYPES.calc;
  const ctx = { self: e.id, seen: new Set() };
  root.innerHTML = `<div class="page flush" style="--c:var(${t.c})"><div class="ehead" style="--c:var(${t.c})"><span class="kind">${icon(t.icon)}Calcolo</span><h1>${esc(e.title)}</h1><p class="sum">${rt(e.summary, ctx)}</p></div>
    <div style="padding:14px 16px 28px"><div class="card pad stack" id="form">${e.calc.inputs.map((i) => `<label class="field"><span>${esc(i.label)}${i.unit ? ` (${esc(i.unit)})` : ''}</span><input class="input input-lg" inputmode="decimal" data-i="${i.id}" value="${i.def ?? ''}" placeholder="0"></label>`).join('')}</div>
    <div id="out"></div>${mapBlock(e.id)}${metaBlock(e)}</div></div>`;
  const out = $('#out', root);
  const upd = () => {
    const v = {};
    for (const i of e.calc.inputs) { const x = parseFloat(String($(`[data-i=${i.id}]`, root).value).replace(',', '.')); if (!isFinite(x)) { out.innerHTML = ''; return; } v[i.id] = x; }
    let r;
    try { r = e.calc.run(v); } catch { out.innerHTML = ''; return; }
    if (/Infinity|NaN/.test(r.result)) { out.innerHTML = '<div class="callout warn" style="margin-top:14px">' + icon('triangle-alert') + '<div>Controlla i valori inseriti (nessuna divisione per zero).</div></div>'; return; }
    out.innerHTML = `<div class="callout ok" style="margin-top:14px">${icon('calculator')}<div><div class="xs muted">RISULTATO</div><div style="font-size:1.35rem;font-weight:800">${esc(r.result)}</div></div></div>
      <div class="card pad" style="margin-top:12px"><b>Procedimento</b><ol class="steps body" style="margin-top:10px;--c:var(${t.c})">${r.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol></div>`;
  };
  root.addEventListener('input', upd);
  upd();
  return { title: e.title, tab: 'home' };
}
