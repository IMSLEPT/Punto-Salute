// Ricerca universale a schermo intero con mappa clinica del risultato principale.
import { $, $$, el, esc, icon, debounce } from '../core/dom.js';
import { search } from '../core/search.js';
import { TYPES, MAP_ORDER } from '../core/types.js';
import { BY_ID, get } from '../core/data.js';
import { recents } from '../core/store.js';
import { itemRow, emptyState } from './common.js';
import { mapBlock, chipFor } from './entity.js';
import { routeFor } from '../core/text.js';
import { navigate } from '../core/router.js';

export const SUGGEST = ['iperkaliemia', 'PICC', 'emocoltura', 'BPCO', 'drenaggio toracico', 'potassio', 'catetere vescicale', 'ematemesi', 'NEWS2', 'Braden'];

let ov = null;

export function closeSearch() {
  if (!ov) return;
  const o = ov; ov = null;
  o.classList.remove('show');
  setTimeout(() => o.remove(), 220);
}
document.addEventListener('ps:close-search', closeSearch);

export function openSearch(initial = '') {
  if (ov) return;
  ov = el(`<div class="searchov" id="searchov" role="dialog" aria-label="Ricerca">
    <div class="sbar">
      <button class="iconbtn" data-x aria-label="Chiudi ricerca">${icon('arrow-left')}</button>
      <input class="input" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Cerca patologie, procedure, esami, farmaci…" value="${esc(initial)}">
      <button class="iconbtn" data-clear aria-label="Cancella">${icon('x')}</button>
    </div>
    <div class="sres"></div></div>`);
  document.body.append(ov);
  requestAnimationFrame(() => ov && ov.classList.add('show'));
  const input = $('input', ov);
  const res = $('.sres', ov);
  let activeType = 'all';

  const idle = () => {
    const rec = recents.list().map(get).filter(Boolean).slice(0, 6);
    res.innerHTML = `
      <div class="res-group">${icon('sparkles')} Prova a cercare</div>
      <div class="chips wrap">${SUGGEST.map((s) => `<button class="chip" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div>
      ${rec.length ? `<div class="res-group">${icon('history')} Visti di recente</div><div class="list">${rec.map((e) => itemRow(e)).join('')}</div>` : ''}
      <div class="disclaimer">${icon('network')}<div>La ricerca collega automaticamente anatomia, fisiologia, patologie, segni e sintomi, esami, assistenza infermieristica e procedure correlate.</div></div>`;
  };

  const run = () => {
    const q = input.value.trim();
    if (!q) { idle(); return; }
    const all = search(q, { limit: 200 });
    if (!all.length) { res.innerHTML = emptyState('search-x', 'Nessun risultato', 'Prova con un sinonimo, un’abbreviazione (es. “K”, “CVC”, “EGA”) o meno parole.'); return; }
    const counts = {};
    all.forEach((r) => (counts[r.e.type] = (counts[r.e.type] || 0) + 1));
    const types = MAP_ORDER.filter((t) => counts[t]);
    const filtered = activeType === 'all' ? all : all.filter((r) => r.e.type === activeType);
    const top = all[0];
    const showMap = top.score >= 60 && activeType === 'all';
    const byType = {};
    filtered.forEach((r) => (byType[r.e.type] ||= []).push(r.e));

    res.innerHTML = `
      <div class="chips" style="padding-left:0;margin:6px 0 4px">
        <button class="chip ${activeType === 'all' ? 'active' : ''}" data-type="all">Tutto · ${all.length}</button>
        ${types.map((t) => `<button class="chip ${activeType === t ? 'active' : ''}" data-type="${t}">${esc(TYPES[t].plural)} · ${counts[t]}</button>`).join('')}
      </div>
      ${showMap ? `<div class="res-group">${icon('network')} Percorso clinico</div>
        <div class="list" style="margin-bottom:6px">${itemRow(top.e, q)}</div>${mapBlock(top.e.id, { limit: 5, title: 'Collegato a ' + top.e.title })}` : ''}
      ${Object.entries(byType).map(([t, arr]) => `<div class="res-group">${icon(TYPES[t].icon)} ${esc(TYPES[t].plural)}</div>
        <div class="list">${arr.slice(0, activeType === 'all' ? 6 : 60).map((e) => itemRow(e, q)).join('')}</div>
        ${activeType === 'all' && arr.length > 6 ? `<button class="chip" style="margin-top:8px" data-type="${t}">Mostra tutti (${arr.length})</button>` : ''}`).join('')}`;
  };

  const runD = debounce(run, 90);
  input.addEventListener('input', () => { activeType = 'all'; runD(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { input.blur(); } });
  ov.addEventListener('click', (e) => {
    if (e.target.closest('[data-x]')) { closeSearch(); return; }
    if (e.target.closest('[data-clear]')) { input.value = ''; activeType = 'all'; idle(); input.focus(); return; }
    const q = e.target.closest('[data-q]');
    if (q) { input.value = q.dataset.q; activeType = 'all'; run(); return; }
    const ty = e.target.closest('[data-type]');
    if (ty) { activeType = ty.dataset.type; run(); $('.sres', ov).scrollTop = 0; return; }
    const more = e.target.closest('[data-more]');
    if (more) { /* gestito in main: apre elenco completo */ }
    const go = e.target.closest('[data-go]');
    if (go) { closeSearch(); }
  }, true);
  run();
  setTimeout(() => input.focus(), 120);
}
