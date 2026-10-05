// Note personali: protocolli locali annotati sulle schede + piani assistenziali salvati.
import { esc, icon } from '../core/dom.js';
import { notes, store } from '../core/store.js';
import { get } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { routeFor } from '../core/text.js';
import { emptyState } from './common.js';

export function renderNotes(root) {
  const all = Object.entries(notes.all()).map(([id, text]) => ({ e: get(id), text })).filter((x) => x.e);
  const plans = store.get('plans', []);
  root.innerHTML = `<div class="page">
    <div class="phead"><div class="tile-ic" style="--c:var(--c-assistenza)">${icon('file-text')}</div><div><h1>Note</h1><p>Protocolli locali, appunti e piani assistenziali</p></div></div>
    <div class="sec-title"><h2>Piani assistenziali</h2><button class="more" data-go="/assistenza/piano">Apri</button></div>
    ${plans.length ? `<div class="list">${plans.slice(0, 6).map((p) => `<button class="item" data-go="/assistenza/piano/${p.id}"><div class="tile-ic sm" style="--c:var(--c-assistenza)">${icon('clipboard-list')}</div><div class="grow"><div class="t">${esc(p.name || 'Piano senza nome')}</div><div class="d">${(p.items || []).length} problema/i · aggiornato ${new Date(p.updated || Date.now()).toLocaleDateString('it-IT')}</div></div>${icon('chevron-right', 'go')}</button>`).join('')}</div>` : `<div class="card pad small muted">Nessun piano salvato. Costruiscine uno da <a class="lk" data-go="/assistenza/piano/nuovo">Assistenza → Nuovo piano</a>.</div>`}
    <div class="sec-title"><h2>Appunti sulle schede</h2></div>
    ${all.length ? `<div class="list">${all.map(({ e, text }) => `<button class="item" data-go="${routeFor(e)}"><div class="tile-ic sm" style="--c:var(${TYPES[e.type].c})">${icon(TYPES[e.type].icon)}</div><div class="grow"><div class="t">${esc(e.title)}</div><div class="d">${esc(text)}</div></div>${icon('chevron-right', 'go')}</button>`).join('')}</div>`
      : emptyState('file-text', 'Nessun appunto', 'In fondo a ogni scheda trovi “Protocollo locale e appunti”: ciò che scrivi compare qui. I dati restano solo sul tuo dispositivo.')}
  </div>`;
  return { title: 'Note', tab: 'note' };
}
