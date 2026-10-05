// Router a hash con pila di cronologia propria e gestione del tasto indietro Android.
import { closeTopOverlay } from './ui.js';

const routes = [];
let current = { path: '/', params: {}, query: {} };
let onChange = () => {};
const scrollPos = new Map();
const TAB_ROOTS = ['/', '/preferiti', '/note', '/profilo'];

export function route(pattern, handler, opts = {}) {
  const keys = [];
  const re = new RegExp('^' + pattern.replace(/\/:([a-zA-Z]+)/g, (_, k) => { keys.push(k); return '/([^/]+)'; }) + '/?$');
  routes.push({ re, keys, handler, opts, pattern });
}

function parse(hash) {
  let h = hash.replace(/^#/, '') || '/';
  const [path, qs] = h.split('?');
  const query = {};
  if (qs) for (const kv of qs.split('&')) { const [k, v] = kv.split('='); query[decodeURIComponent(k)] = decodeURIComponent(v || ''); }
  return { path: path || '/', query };
}

export function currentRoute() { return current; }

export function navigate(path, { replace = false } = {}) {
  const view = document.getElementById('view');
  if (view) scrollPos.set(history.state?.k, view.scrollTop);
  const target = '#' + path;
  if (location.hash === target) { resolve(); return; }
  const d = (history.state?.d ?? 0) + (replace ? 0 : 1);
  const state = { d, k: Math.random().toString(36).slice(2) };
  if (replace) history.replaceState(state, '', target); else history.pushState(state, '', target);
  resolve();
}

function resolve(restore = false) {
  const { path, query } = parse(location.hash);
  for (const r of routes) {
    const m = r.re.exec(path);
    if (m) {
      const params = {};
      r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
      current = { path, params, query, pattern: r.pattern, opts: r.opts };
      onChange(current, r, restore);
      return;
    }
  }
  navigate('/', { replace: true });
}

export function startRouter(cb) {
  onChange = cb;
  if (!history.state) history.replaceState({ d: 0, k: 'root' }, '', location.hash || '#/');
  window.addEventListener('popstate', () => resolve(true));
  resolve();
}

export function savedScroll() { return scrollPos.get(history.state?.k); }

export function back() {
  if ((history.state?.d ?? 0) > 0) { history.back(); return true; }
  return false;
}

/** Chiamato dal guscio Android alla pressione del tasto indietro. true = gestito. */
window.__psBack = () => {
  if (closeTopOverlay()) return true;
  if (document.getElementById('searchov')) { document.dispatchEvent(new CustomEvent('ps:close-search')); return true; }
  if (window.__psCustomBack && window.__psCustomBack()) return true;
  if ((history.state?.d ?? 0) > 0) { history.back(); return true; }
  const p = current.path;
  if (p !== '/' && TAB_ROOTS.includes(p)) { navigate('/', { replace: true }); return true; }
  return false;
};
