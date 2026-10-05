// Persistenza locale (localStorage con fallback in memoria). Nessun dato lascia il dispositivo.
const NS = 'ps:';
const mem = new Map();
let ok = true;
try { localStorage.setItem(NS + '_t', '1'); localStorage.removeItem(NS + '_t'); } catch { ok = false; }

export const store = {
  get(k, d) {
    try {
      const raw = ok ? localStorage.getItem(NS + k) : mem.get(k);
      return raw == null ? d : JSON.parse(raw);
    } catch { return d; }
  },
  set(k, v) {
    const raw = JSON.stringify(v);
    try { if (ok) localStorage.setItem(NS + k, raw); else mem.set(k, raw); } catch { mem.set(k, raw); }
  },
  del(k) { try { if (ok) localStorage.removeItem(NS + k); mem.delete(k); } catch { /* noop */ } },
  keys() {
    const out = [];
    try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(NS)) out.push(k.slice(NS.length)); } } catch { /* noop */ }
    return out;
  },
  exportAll() {
    const o = {};
    for (const k of this.keys()) o[k] = this.get(k);
    return o;
  },
  importAll(o) { for (const [k, v] of Object.entries(o || {})) this.set(k, v); },
};

// ---- stato applicativo derivato
export const settings = {
  get() { return { theme: 'auto', fs: 1, motion: true, ...store.get('settings', {}) }; },
  set(p) { store.set('settings', { ...this.get(), ...p }); },
};

export const favs = {
  list() { return store.get('favs', []); },
  has(id) { return this.list().includes(id); },
  toggle(id) {
    const l = this.list();
    const i = l.indexOf(id);
    if (i >= 0) l.splice(i, 1); else l.unshift(id);
    store.set('favs', l);
    return i < 0;
  },
};

export const recents = {
  list() { return store.get('recents', []); },
  push(id) {
    const l = this.list().filter((x) => x !== id);
    l.unshift(id);
    store.set('recents', l.slice(0, 24));
  },
};

export const notes = {
  get(id) { return store.get('notes', {})[id] || ''; },
  set(id, text) {
    const n = store.get('notes', {});
    if (text && text.trim()) n[id] = text; else delete n[id];
    store.set('notes', n);
  },
  all() { return store.get('notes', {}); },
};
