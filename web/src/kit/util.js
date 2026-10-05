// Utilità comuni del kit di studio: numeri casuali con seme (varianti riproducibili), colori, escape SVG.
export function rng(seed = 1) {
  let a = (seed >>> 0) || 1;
  const f = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  f.int = (n) => Math.floor(f() * n);
  f.pick = (arr) => arr[f.int(arr.length)];
  f.shuffle = (arr) => { const o = [...arr]; for (let i = o.length - 1; i > 0; i--) { const j = f.int(i + 1); [o[i], o[j]] = [o[j], o[i]]; } return o; };
  return f;
}

export const xml = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// tavolozze: [colore principale, tinta chiara, testo scuro] per ogni ramo
export const PALETTES = [
  [['#0ea5e9', '#e0f2fe'], ['#0d9488', '#ccfbf1'], ['#7c3aed', '#ede9fe'], ['#ea580c', '#ffedd5'], ['#c026d3', '#fae8ff'], ['#16a34a', '#dcfce7'], ['#dc2626', '#fee2e2'], ['#ca8a04', '#fef9c3']],
  [['#2563eb', '#dbeafe'], ['#059669', '#d1fae5'], ['#d97706', '#fef3c7'], ['#db2777', '#fce7f3'], ['#0891b2', '#cffafe'], ['#7c3aed', '#ede9fe'], ['#65a30d', '#ecfccb'], ['#e11d48', '#ffe4e6']],
  [['#0b7285', '#e3fafc'], ['#1971c2', '#d0ebff'], ['#6741d9', '#e5dbff'], ['#e8590c', '#ffe8cc'], ['#2f9e44', '#d3f9d8'], ['#c2255c', '#ffdeeb'], ['#f08c00', '#fff3bf'], ['#364fc7', '#dbe4ff']],
];
export const INK = '#0f172a';
export const INK2 = '#475569';

/** Misura il testo con la stessa famiglia usata nel disegno (canvas 2D). */
let _ctx = null;
export const FONT = "Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";
export function measure(text, size, weight = 400) {
  if (!_ctx) _ctx = document.createElement('canvas').getContext('2d');
  _ctx.font = `${weight} ${size}px ${FONT}`;
  return _ctx.measureText(text).width;
}

/** Va a capo per larghezza; restituisce righe (max righe con ellissi). */
export function wrap(text, size, weight, width, maxLines = 99) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (measure(t, size, weight) <= width || !cur) {
      if (!cur && measure(w, size, weight) > width) {
        // parola piu' larga della riga: spezza
        let part = '';
        for (const ch of w) { if (measure(part + ch, size, weight) > width && part) { lines.push(part); part = ''; } part += ch; }
        cur = part;
      } else cur = t;
    } else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const keep = lines.slice(0, maxLines);
    let last = keep[maxLines - 1];
    while (last.length > 1 && measure(last + '…', size, weight) > width) last = last.slice(0, -1);
    keep[maxLines - 1] = last.replace(/[\s,;:]+$/, '') + '…';
    return keep;
  }
  return lines;
}

/** <text> con righe multiple e **grassetto** inline semplice. */
export function textBlock({ x, y, lines, size, weight = 400, fill = INK, lh = 1.28, anchor = 'start' }) {
  const out = lines.map((ln, i) => `<tspan x="${x}" dy="${i ? size * lh : 0}">${xml(ln)}</tspan>`).join('');
  return `<text x="${x}" y="${y}" font-family="${xml(FONT)}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${out}</text>`;
}

import { LUCIDE } from '../gen/icons.js';
import { CUSTOM_ICONS } from '../core/icons-custom.js';
/** Icona Lucide come gruppo SVG posizionato (x, y = angolo in alto a sinistra). */
export function iconG(name, x, y, size, color = '#fff', sw = 2) {
  const inner = CUSTOM_ICONS[name] || LUCIDE[name] || LUCIDE.circle || '';
  const s = size / 24;
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
}

export function svgDoc(w, h, body, { bg = '#ffffff', title = '' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${xml(title)}"><rect width="${w}" height="${h}" fill="${bg}"/>${body}</svg>`;
}

export function footerSvg(w, y, d, extra = '') {
  const txt = `Punto Salute · ${d.title} · scheda v${d.v}, revisione ${d.rev} · contenuto didattico: verifica protocollo locale e fonti aggiornate${extra}`;
  const lines = wrap(txt, 17, 400, w - 80, 2);
  return `<line x1="40" y1="${y}" x2="${w - 40}" y2="${y}" stroke="#e2e8f0" stroke-width="2"/>${textBlock({ x: 40, y: y + 30, lines, size: 17, fill: '#64748b' })}`;
}
