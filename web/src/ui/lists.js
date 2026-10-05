// Elenchi generici per modulo (raggruppati per categoria) e hub Pratica / Clinica.
import { esc, icon } from '../core/dom.js';
import { MODULES, TYPES } from '../core/types.js';
import { BY_TYPE, ALL, get } from '../core/data.js';
import { listOf, pageHead, emptyState, DISCLAIMER } from './common.js';
import { moduleTile } from './home.js';
import { favs } from '../core/store.js';
import { itemRow } from './common.js';

export function groupBy(arr, fn) {
  const m = new Map();
  for (const x of arr) { const k = fn(x) || 'Altro'; if (!m.has(k)) m.set(k, []); m.get(k).push(x); }
  return m;
}

/** Elenco di un tipo di scheda con filtro a chip per categoria. */
export function renderTypeList(root, { types, module, groupKey = 'cat', filterLabel = 'Tutte', extraTop = '', sortGroups = null }) {
  const m = MODULES.find((x) => x.id === module);
  const items = types.flatMap((t) => BY_TYPE[t] || []);
  const groups = groupBy(items, (e) => e[groupKey]);
  let keys = [...groups.keys()];
  keys = sortGroups ? sortGroups(keys) : keys.sort((a, b) => a.localeCompare(b, 'it'));
  root.innerHTML = `<div class="page">
    ${pageHead({ title: m.name, sub: m.sub, icon: m.icon, c: m.c })}
    ${extraTop}
    <div class="chips" id="cats"><button class="chip active" data-cat="*">${esc(filterLabel)} · ${items.length}</button>${keys.map((k) => `<button class="chip" data-cat="${esc(k)}">${esc(k)}</button>`).join('')}</div>
    <div id="lst">${keys.map((k) => `<div class="grp" data-g="${esc(k)}"><div class="res-group">${esc(k)}</div>${listOf(groups.get(k).sort((a, b) => a.title.localeCompare(b.title, 'it')))}</div>`).join('')}</div>
    ${DISCLAIMER}</div>`;
  root.querySelector('#cats').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-cat]'); if (!b) return;
    root.querySelectorAll('#cats .chip').forEach((c) => c.classList.toggle('active', c === b));
    root.querySelectorAll('#lst .grp').forEach((g) => (g.hidden = b.dataset.cat !== '*' && g.dataset.g !== b.dataset.cat));
  });
  return { title: m.name, tab: tabFor(types[0]) };
}

export function tabFor(type) {
  if (['anat'].includes(type)) return 'anatomia';
  if (['proc', 'dev', 'tube', 'care', 'ndx', 'calc', 'scale'].includes(type)) return 'pratica';
  return 'clinica';
}

export function renderHub(root, kind) {
  const ids = kind === 'pratica'
    ? ['assistenza', 'procedure', 'provette', 'dispositivi', 'calcolatore', 'scale']
    : ['patologie', 'specialistiche', 'emergenze', 'farmaci', 'terminologia'];
  const title = kind === 'pratica' ? 'Pratica clinica' : 'Conoscenza clinica';
  const sub = kind === 'pratica' ? 'Procedure, dispositivi, assistenza e strumenti di calcolo' : 'Patologie, specialità, emergenze, farmaci e terminologia';
  root.innerHTML = `<div class="page">
    <div class="phead"><div><h1>${title}</h1><p>${sub}</p></div></div>
    <div class="grid2">${ids.map((id) => moduleTile(MODULES.find((m) => m.id === id))).join('')}</div>
    ${DISCLAIMER}</div>`;
  return { title, tab: kind };
}

export function renderFavorites(root) {
  const list = favs.list().map(get).filter(Boolean);
  root.innerHTML = `<div class="page">
    <div class="phead"><div class="tile-ic" style="--c:var(--c-emergenze)">${icon('bookmark')}</div><div><h1>Salvate</h1><p>Le tue schede preferite, disponibili offline</p></div></div>
    ${list.length ? listOf(list) : emptyState('bookmark', 'Ancora nulla', 'Tocca “Salva” in alto in qualsiasi scheda per ritrovarla qui.')}</div>`;
  return { title: 'Salvate', tab: 'home' };
}
