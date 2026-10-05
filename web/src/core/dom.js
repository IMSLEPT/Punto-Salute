import { LUCIDE } from '../gen/icons.js';
import { CUSTOM_ICONS } from './icons-custom.js';

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

/** Icona inline (Lucide + icone personalizzate). */
export function icon(name, cls = '') {
  const inner = CUSTOM_ICONS[name] || LUCIDE[name] || LUCIDE['circle'] || '';
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
}

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/** Normalizza per ricerca: minuscolo, senza accenti, solo alfanumerici. */
export function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9+]+/g, ' ')
    .trim();
}

export const debounce = (fn, ms = 120) => {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
};

export const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const fmt = (n, d = 2) => {
  if (!isFinite(n)) return '—';
  const r = Math.round(n * 10 ** d) / 10 ** d;
  return r.toLocaleString('it-IT', { maximumFractionDigits: d });
};
