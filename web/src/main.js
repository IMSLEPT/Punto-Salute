import './styles/base.css';
import './styles/extra.css';
import { $, $$, el, esc, icon } from './core/dom.js';
import { settings, favs, store, notes } from './core/store.js';
import { route, startRouter, navigate, currentRoute, savedScroll } from './core/router.js';
import { openSheet, openModal, shareText, toast, closeTopOverlay } from './core/ui.js';
import { BY_ID, get, relatedGroups } from './core/data.js';
import { TYPES, MODULES } from './core/types.js';
import { block, rt, routeFor } from './core/text.js';
import { openSearch, closeSearch } from './ui/search.js';
import { renderHome } from './ui/home.js';
import { renderNotes } from './ui/notes.js';
import { renderProfile } from './ui/profile.js';
import { renderEntity, entityToText, chipFor, mapBlock } from './ui/entity.js';
import { renderTypeList, renderHub, renderFavorites } from './ui/lists.js';
import { LOGO } from './ui/common.js';
import { renderTubes } from './ui/tubes.js';
import './viz/tubes.js';
import { renderScales, renderScale, renderCalcHub, renderCalc } from './ui/tools.js';

const root = document.documentElement;
const app = $('#app');
app.innerHTML = `
  <header class="topbar" id="topbar"></header>
  <main id="view" tabindex="-1"></main>
  <nav class="tabbar" id="tabbar" aria-label="Navigazione principale"></nav>`;
const view = $('#view');
const topbar = $('#topbar');
const tabbar = $('#tabbar');

// ------------------------------------------------------------------ tema
function systemDark() {
  try { if (window.PuntoSalute && typeof PuntoSalute.isNight === 'function') return !!PuntoSalute.isNight(); } catch { /* noop */ }
  return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
}
let barOverride = null;
export function applyTheme() {
  const s = settings.get();
  const dark = s.theme === 'dark' || (s.theme === 'auto' && systemDark());
  root.dataset.theme = dark ? 'dark' : 'light';
  root.style.setProperty('--fs', String(s.fs));
  root.dataset.reduceMotion = s.motion === false ? '1' : '0';
  syncBars();
}
function syncBars() {
  const dark = root.dataset.theme === 'dark';
  let status = dark ? '#0E1D2D' : '#FFFFFF';
  let lightIcons = dark;
  if (barOverride) { status = barOverride[0]; lightIcons = barOverride[1]; }
  const nav = dark ? '#0E1D2D' : '#FFFFFF';
  try { window.PuntoSalute && PuntoSalute.setBars && PuntoSalute.setBars(status, nav, lightIcons); } catch { /* noop */ }
  const m = document.querySelector('meta[name=theme-color]');
  if (m) m.content = status;
}
window.__psTheme = applyTheme;
applyTheme();
if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);

// ------------------------------------------------------------------ tab bar
const TABS = [
  { id: 'home', path: '/', label: 'Home', icon: 'house' },
  { id: 'cerca', path: null, label: 'Cerca', icon: 'search' },
  { id: 'preferiti', path: '/preferiti', label: 'Preferiti', icon: 'heart' },
  { id: 'note', path: '/note', label: 'Note', icon: 'file-text' },
  { id: 'profilo', path: '/profilo', label: 'Profilo', icon: 'user' },
];
tabbar.innerHTML = TABS.map((t) => `<button class="tab" data-tab="${t.id}" data-path="${t.path || ''}"><span class="pill">${icon(t.icon)}</span>${t.label}</button>`).join('');

function setTab(id) { $$('.tab', tabbar).forEach((b) => b.classList.toggle('active', b.dataset.tab === id)); }

function setBar(d) {
  const depth = history.state?.d ?? 0;
  if (d.bar === 'none') { topbar.classList.add('hidden'); }
  else {
    topbar.classList.remove('hidden');
    topbar.innerHTML = `
      ${depth > 0 ? `<button class="iconbtn" data-back aria-label="Indietro">${icon('arrow-left')}</button>` : `<div style="width:8px"></div>`}
      <div class="title">${d.kicker ? `<small>${esc(d.kicker)}</small>` : ''}${esc(d.title || '')}</div>
      ${(d.actions || []).join('')}
      <button class="iconbtn" data-open-search aria-label="Cerca">${icon('search')}</button>`;
  }
  tabbar.classList.toggle('hidden', d.tabs === false);
  setTab(d.tab || 'home');
  barOverride = d.bars || null;
  syncBars();
}

// ------------------------------------------------------------------ rotte
const R = (pattern, fn) => route(pattern, fn);

R('/', (r) => renderHome(r));
R('/pratica', (r) => renderHub(r, 'pratica'));
R('/clinica', (r) => renderHub(r, 'clinica'));
R('/preferiti', (r) => renderFavorites(r));
R('/note', (r) => renderNotes(r));
R('/profilo', (r) => renderProfile(r));
R('/impostazioni', (r) => renderProfile(r));
R('/anatomia', async (r, cur) => { const m = await import('./ui/anatomy.js'); return m.renderAnatomy(r, cur); });
R('/provette', (r) => renderTubes(r));
R('/scale', (r) => renderScales(r));
R('/scala/:id', (r, { params }) => renderScale(r, params.id));
R('/calcolatore', (r) => renderCalcHub(r));
R('/calcolatore/:id', (r, { params }) => renderCalc(r, params.id));
R('/e/:id', (r, { params }) => renderEntity(r, params.id));
R('/patologie', (r) => renderTypeList(r, { types: ['patho'], module: 'patologie', groupKey: 'cat' }));
R('/procedure', (r) => renderTypeList(r, { types: ['proc'], module: 'procedure', groupKey: 'cat' }));
R('/dispositivi', (r) => renderTypeList(r, { types: ['dev'], module: 'dispositivi', groupKey: 'cat' }));
R('/emergenze', (r) => renderTypeList(r, { types: ['emerg'], module: 'emergenze', groupKey: 'cat' }));

let first = true;
startRouter(async (cur, rt0, restore) => {
  closeSearch();
  while (closeTopOverlay()) { /* chiude overlay residui */ }
  view.classList.remove('enter');
  let d;
  try {
    d = await rt0.handler(view, cur);
  } catch (err) {
    console.error(err);
    view.innerHTML = `<div class="page"><div class="empty">${icon('triangle-alert')}<h3>Errore</h3><p>${esc(err.message)}</p></div></div>`;
    d = { title: 'Errore' };
  }
  setBar(d || {});
  if (restore) { const y = savedScroll(); view.scrollTop = y || 0; } else view.scrollTop = 0;
  void view.offsetWidth;
  view.classList.add('enter');
  if (first) { first = false; const b = $('#boot'); if (b) { b.classList.add('gone'); setTimeout(() => b.remove(), 400); } }
});

// ------------------------------------------------------------------ eventi globali
document.addEventListener('click', (ev) => {
  const t = ev.target;
  const tab = t.closest('[data-tab]');
  if (tab) { if (tab.dataset.tab === 'cerca') openSearch(); else navigate(tab.dataset.path, { replace: true }); return; }
  if (t.closest('[data-back]')) { window.__psBack(); return; }
  if (t.closest('[data-open-search]')) { openSearch(); return; }
  const sq = t.closest('[data-search]');
  if (sq) { openSearch(sq.dataset.search); return; }
  const fav = t.closest('[data-fav]');
  if (fav) {
    const on = favs.toggle(fav.dataset.fav);
    fav.classList.toggle('on', on);
    const sp = fav.querySelector('span'); if (sp) sp.textContent = on ? 'Salvata' : 'Salva';
    toast(on ? 'Aggiunta ai preferiti' : 'Rimossa dai preferiti');
    return;
  }
  const sh = t.closest('[data-share]');
  if (sh) { const e = get(sh.dataset.share); if (e) shareText(e.title, entityToText(e)); return; }
  const term = t.closest('[data-term]');
  if (term) { openTerm(term.dataset.term); return; }
  const more = t.closest('[data-more]');
  if (more) { openMore(more.dataset.more); return; }
  const ext = t.closest('[data-ext]');
  if (ext) { try { PuntoSalute.openExternal(ext.dataset.ext); } catch { window.open(ext.dataset.ext, '_blank'); } return; }
  const go = t.closest('[data-go]');
  if (go) { ev.preventDefault(); navigate(go.dataset.go); }
});

function openTerm(id) {
  const e = get(id);
  if (!e) return;
  const t = TYPES[e.type];
  const ctx = { self: e.id, seen: new Set() };
  const parts = [];
  for (const k of ['def', 'ctx', 'inf']) if (e.sections?.[k]) parts.push(block(e.sections[k], ctx));
  openSheet({
    title: e.title,
    html: `<div class="body" style="--c:var(${t.c})">${e.summary ? `<p><b>${rt(e.summary, ctx)}</b></p>` : ''}${parts.join('')}</div>
      ${mapBlock(e.id, { limit: 5, title: 'Collegamenti' })}
      <div class="row" style="margin-top:16px"><button class="btn block" data-go="${routeFor(e)}">Apri la scheda completa</button></div>`,
  });
}

function openMore(spec) {
  const [type, id] = spec.split(':');
  const g = relatedGroups(id).find((x) => x.type === type);
  if (!g) return;
  openSheet({ title: TYPES[type].plural, html: `<div class="chips wrap">${g.items.map((e) => chipFor(e)).join('')}</div>` });
}

// chiude eventuali sheet quando si naviga da un loro elemento
document.addEventListener('click', (ev) => {
  if (ev.target.closest('.sheet [data-go], .modal [data-go]')) { setTimeout(() => { while (closeTopOverlay()) { /* */ } }, 0); }
}, true);

window.__ps = { navigate, openSearch, get, BY_ID };
