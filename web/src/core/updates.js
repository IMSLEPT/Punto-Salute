// Aggiornamento facoltativo delle fonti e delle novità (solo lettura, nessun dato inviato).
// Il feed contiene SOLO: registro delle fonti (edizioni), novità e avvisi per scheda. Il testo clinico delle schede
// cambia esclusivamente con gli aggiornamenti dell'app, così ogni modifica clinica resta controllata.
import { store } from './store.js';
import { SOURCES } from '../data/sources.js';

export const DEFAULT_FEED = 'https://imslept.github.io/Punto-Salute/feed/sources.json';
const WEEK = 7 * 86400000;
const isStr = (x, n) => typeof x === 'string' && x.length <= n;

export const updates = {
  cfg() { return { on: false, url: DEFAULT_FEED, last: 0, status: '', ...store.get('updates', {}) }; },
  set(p) { store.set('updates', { ...this.cfg(), ...p }); },
  feed() { return store.get('feed', null); },
  available() { return !!(window.PuntoSalute && typeof PuntoSalute.fetchFeed === 'function'); },
};

/** Valida il feed: forma, tipi e lunghezze (le stringhe vengono sempre mostrate come testo, mai come HTML). */
export function validateFeed(f) {
  if (!f || f.schema !== 1 || typeof f.sources !== 'object') return null;
  const out = { generated: isStr(f.generated, 20) ? f.generated : '', sources: {}, notices: [], alerts: {} };
  for (const [k, s] of Object.entries(f.sources)) {
    if (!/^[a-z0-9-]{1,40}$/.test(k) || !s || !isStr(s.t, 400)) continue;
    out.sources[k] = { t: s.t, y: isStr(s.y, 300) ? s.y : '' };
  }
  for (const n of (Array.isArray(f.notices) ? f.notices : []).slice(0, 50)) {
    if (n && isStr(n.id, 60) && isStr(n.title, 160) && isStr(n.text, 800)) out.notices.push({ id: n.id, date: isStr(n.date, 20) ? n.date : '', title: n.title, text: n.text, rel: (Array.isArray(n.rel) ? n.rel : []).filter((x) => /^[a-z0-9-]{1,60}$/.test(x)).slice(0, 12) });
  }
  for (const [id, arr] of Object.entries(f.alerts || {})) {
    if (!/^[a-z0-9-]{1,60}$/.test(id) || !Array.isArray(arr)) continue;
    out.alerts[id] = arr.slice(0, 5).filter((a) => a && isStr(a.t, 500)).map((a) => ({ d: isStr(a.d, 20) ? a.d : '', t: a.t, s: isStr(a.s, 300) ? a.s : '' }));
  }
  return out;
}

/** Applica il feed salvato al registro delle fonti (sovrascrive titolo/edizione delle fonti note, aggiunge le nuove). */
export function applyStoredFeed() {
  const f = updates.feed();
  if (!f) return;
  for (const [k, s] of Object.entries(f.sources || {})) SOURCES[k] = { ...(SOURCES[k] || {}), t: s.t, y: s.y, updated: f.generated };
}

export function alertsFor(id) { return (updates.feed()?.alerts || {})[id] || []; }
export function notices() { return updates.feed()?.notices || []; }

let pending = null;
window.__psFeed = (ok, body) => {
  const p = pending; pending = null;
  if (!p) return;
  if (!ok) { p.reject(new Error(String(body || 'rete non disponibile'))); return; }
  try { p.resolve(JSON.parse(body)); } catch { p.reject(new Error('risposta non valida')); }
};

/** Scarica il feed tramite il ponte nativo (la WebView blocca ogni altro accesso alla rete). */
export function checkUpdates({ force = false } = {}) {
  const c = updates.cfg();
  if (!force && (!c.on || Date.now() - c.last < WEEK)) return Promise.resolve(null);
  if (!updates.available()) { updates.set({ status: 'Disponibile solo nell’app Android.' }); return Promise.resolve(null); }
  if (!/^https:\/\//.test(c.url)) { updates.set({ status: 'Indirizzo del feed non valido (serve https).' }); return Promise.resolve(null); }
  return new Promise((resolve, reject) => {
    pending = { resolve, reject };
    try { PuntoSalute.fetchFeed(c.url); } catch (e) { pending = null; reject(e); }
    setTimeout(() => { if (pending) { pending = null; reject(new Error('tempo scaduto')); } }, 20000);
  }).then((raw) => {
    const f = validateFeed(raw);
    if (!f) { updates.set({ last: Date.now(), status: 'Feed non riconosciuto: ignorato.' }); return null; }
    store.set('feed', f);
    updates.set({ last: Date.now(), status: `Aggiornato (feed del ${f.generated || '—'}).` });
    applyStoredFeed();
    return f;
  }).catch((e) => { updates.set({ status: 'Controllo non riuscito: ' + e.message }); return null; });
}
