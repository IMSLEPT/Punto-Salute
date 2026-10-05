// Schema illustrato (SVG autonomo): intestazione, figura, blocchi a icone, "da ricordare".
import { digest, sortByPriority, gist, easy, bare } from './digest.js';
import { rng, PALETTES, INK, INK2, wrap, textBlock, xml, iconG, svgDoc, footerSvg, measure } from './util.js';
import { cardFigure, placeSvg, getSnapshot } from './figures.js';
import { TYPES } from '../core/types.js';

export const SCHEME_STYLES = [
  { id: 'blocchi', name: 'A blocchi' },
  { id: 'flusso', name: 'A flusso' },
  { id: 'tabella', name: 'A tabella' },
];

const W = 1240, M = 40;
const rr = (x, y, w, h, r, fill, stroke, sw = 2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}/>`;
const TYPE_ICON = (t) => (TYPES[t] || TYPES.term).icon;

function prepSections(d, R, maxSecs, maxItems) {
  let secs = sortByPriority(d.sections).filter((s) => s.items.some((i) => ['i', 's', 'r'].includes(i.k)));
  if (secs.length > maxSecs) {
    const must = secs.slice(0, maxSecs - 3);
    const rest = R.shuffle(secs.slice(must.length)).slice(0, 3);
    secs = secs.filter((s) => must.includes(s) || rest.includes(s));
  }
  // ordine "naturale" della scheda
  const order = d.sections.map((s) => s.k);
  secs.sort((a, b) => order.indexOf(a.k) - order.indexOf(b.k));
  return secs.map((s) => {
    const pts = s.items.filter((i) => ['i', 's', 'r'].includes(i.k));
    let idx = pts.map((_, i) => i);
    const ordered = s.items.some((i) => i.k === 's');
    if (pts.length > maxItems) idx = ordered ? idx.slice(0, maxItems) : [0, ...R.shuffle(idx.slice(1)).slice(0, maxItems - 1)].sort((a, b) => a - b);
    const lines = idx.map((i) => (pts[i].k === 's' && ordered ? `${pts[i].n || ''}. ` : '') + easy(pts[i].t, 118).replace(/\*\*/g, ''));
    const warn = s.items.find((i) => i.k === 'warn' || i.k === 'danger');
    return { ...s, lines, warn: warn ? gist(warn.t, 110) : null, ordered };
  });
}

function header(d, pal, R) {
  const [c, t] = pal[0];
  const tl = wrap(d.title, 50, 800, W - 2 * M - 150, 3);
  const h = Math.max(190, 90 + tl.length * 60 + 40);
  const style = R.int(2);
  let b = '';
  b += `<defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${pal[1][0]}"/></linearGradient></defs>`;
  b += `<path d="M0 0 H${W} V${h - 30} Q${W / 2} ${h + 20} 0 ${h - 30} Z" fill="url(#hg)"/>`;
  b += `<circle cx="${M + 52}" cy="${h / 2 - 8}" r="52" fill="#ffffff" opacity=".95"/>`;
  b += iconG(TYPE_ICON(d.type), M + 52 - 30, h / 2 - 8 - 30, 60, c, 1.8);
  b += textBlock({ x: M + 130, y: 56, lines: [(d.typeLabel + (d.cat ? ' · ' + d.cat : '')).toUpperCase()], size: 22, weight: 700, fill: '#ffffffcc' });
  b += textBlock({ x: M + 130, y: 118, lines: tl, size: 50, weight: 800, fill: '#fff', lh: 1.15 });
  return { svg: b, h: h + 10, style };
}

function figurePanel(d, pal, x, y, w, h) {
  const [c, t] = pal[0];
  let b = rr(x, y, w, h, 28, '#f8fafc', '#e2e8f0', 2);
  const snap = getSnapshot(d.id);
  const fig = cardFigure(d.e);
  if (snap) {
    b += `<clipPath id="snapclip"><rect x="${x + 10}" y="${y + 10}" width="${w - 20}" height="${h - 20}" rx="20"/></clipPath><image href="${snap}" x="${x + 10}" y="${y + 10}" width="${w - 20}" height="${h - 20}" preserveAspectRatio="xMidYMid slice" clip-path="url(#snapclip)"/>`;
    b += textBlock({ x: x + w / 2, y: y + h - 18, lines: ['Vista 3D dell’app'], size: 17, weight: 600, fill: '#334155', anchor: 'middle' });
    return { svg: b, kind: '3D' };
  }
  if (fig) {
    b += placeSvg(fig, x + 14, y + 14, w - 28, h - (fig.caption ? 64 : 28));
    if (fig.caption) b += textBlock({ x: x + w / 2, y: y + h - 18, lines: wrap(fig.caption, 17, 600, w - 40, 1), size: 17, weight: 600, fill: '#334155', anchor: 'middle' });
    return { svg: b, kind: 'figura' };
  }
  // illustrazione: icona grande con "corona" di parole chiave
  const cx = x + w / 2, cy = y + h / 2 - 8;
  b += `<circle cx="${cx}" cy="${cy}" r="${Math.min(w, h) * 0.34}" fill="${t}"/><circle cx="${cx}" cy="${cy}" r="${Math.min(w, h) * 0.27}" fill="${c}"/>`;
  const s = Math.min(w, h) * 0.3;
  b += iconG(TYPE_ICON(d.type), cx - s / 2, cy - s / 2, s, '#fff', 1.6);
  const cand = [...d.aliases, ...d.rel.map((r) => r.title)].filter((k) => k && k.length < 28 && k.toLowerCase() !== d.title.toLowerCase());
  let kline = '';
  for (const k of cand) { const t = kline ? kline + '  ·  ' + k : k; if (measure(t, 18, 600) > w - 40) break; kline = t; }
  b += textBlock({ x: cx, y: y + h - 20, lines: [kline], size: 18, weight: 600, fill: '#475569', anchor: 'middle' });
  return { svg: b, kind: 'icona' };
}

function leadBox(d, pal, x, y, w, h) {
  const [c, t] = pal[0];
  const lines = wrap(easy(d.summaryRich || '', 420).replace(/\*\*/g, ''), 25, 500, w - 60, Math.floor((h - 90) / 33));
  let b = rr(x, y, w, h, 28, t, c, 3);
  b += `<rect x="${x + 28}" y="${y + 26}" width="124" height="34" rx="17" fill="${c}"/>${textBlock({ x: x + 90, y: y + 50, lines: ['IN BREVE'], size: 18, weight: 800, fill: '#fff', anchor: 'middle' })}`;
  b += textBlock({ x: x + 30, y: y + 100, lines, size: 25, weight: 500, fill: INK, lh: 1.32 });
  // parole chiave in fondo al riquadro
  const kws = [...new Set([...(d.aliases || []).filter((a) => a.length < 26 && a.toLowerCase() !== d.title.toLowerCase()), ...d.rel.map((r) => r.title).filter((a) => a.length < 26)])].slice(0, 5);
  let cx = x + 30, cy = y + h - 64;
  for (const k of kws) {
    const cw = measure(k, 19, 600) + 28;
    if (cx + cw > x + w - 24) break;
    b += rr(cx, cy, cw, 38, 19, '#ffffff', c, 2) + textBlock({ x: cx + 14, y: cy + 26, lines: [k], size: 19, weight: 600, fill: INK });
    cx += cw + 10;
  }
  return b;
}

function blocksGrid(secs, pal, R, y0, bullet) {
  const colW = (W - 2 * M - 36) / 2;
  const cols = [y0, y0];
  let b = '';
  const items = secs.map((s, i) => {
    const bl = s.lines.map((ln) => wrap(ln, 21, 400, colW - 64, 3));
    const wl = s.warn ? wrap('⚠ ' + s.warn, 20, 600, colW - 52, 3) : null;
    const h = 78 + bl.reduce((a, l) => a + l.length * 27 + 10, 0) + (wl ? wl.length * 26 + 28 : 0) + 8;
    return { s, bl, wl, h, i };
  });
  for (const it of items) {
    const c = cols[0] <= cols[1] ? 0 : 1;
    const x = M + c * (colW + 36), y = cols[c];
    const [col, tint] = pal[it.i % pal.length];
    b += rr(x, y, colW, it.h, 24, '#ffffff', col, 3);
    b += `<path d="M${x} ${y + 24} a24 24 0 0 1 24 -24 h${colW - 48} a24 24 0 0 1 24 24 v36 h-${colW} z" fill="${col}"/>`;
    b += iconG(it.s.icon, x + 18, y + 14, 32, '#fff');
    b += textBlock({ x: x + 62, y: y + 44, lines: wrap(it.s.friendly, 26, 700, colW - 80, 1), size: 26, weight: 700, fill: '#fff' });
    let ly = y + 60 + 30;
    it.bl.forEach((ln) => {
      if (bullet === 0) b += `<circle cx="${x + 26}" cy="${ly - 8}" r="5.5" fill="${col}"/>`;
      else if (bullet === 1) b += `<path d="M${x + 19} ${ly - 8} l5 5 l10 -11" fill="none" stroke="${col}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
      else b += `<path d="M${x + 20} ${ly - 14} l12 7 l-12 7 z" fill="${col}"/>`;
      b += textBlock({ x: x + 46, y: ly, lines: ln, size: 21, fill: INK });
      ly += ln.length * 27 + 10;
    });
    if (it.wl) {
      b += rr(x + 14, ly - 6, colW - 28, it.wl.length * 26 + 20, 14, '#fee2e2', '#dc2626', 2);
      b += textBlock({ x: x + 28, y: ly + 22, lines: it.wl, size: 20, weight: 600, fill: '#991b1b', lh: 1.25 });
    }
    cols[c] += it.h + 24;
  }
  return { svg: b, y: Math.max(...cols) };
}

function blocksFlow(secs, pal, y0) {
  const bw = W - 2 * M - 120, x = M + 120;
  let b = '', y = y0;
  secs.forEach((s, i) => {
    const [col, tint] = pal[i % pal.length];
    const bl = s.lines.map((ln) => wrap(ln, 22, 400, bw - 60, 3));
    const wl = s.warn ? wrap('⚠ ' + s.warn, 20, 600, bw - 56, 3) : null;
    const h = 74 + bl.reduce((a, l) => a + l.length * 28 + 8, 0) + (wl ? wl.length * 26 + 26 : 0);
    // numero e freccia
    b += `<circle cx="${M + 50}" cy="${y + 44}" r="38" fill="${col}"/>${textBlock({ x: M + 50, y: y + 56, lines: [String(i + 1)], size: 36, weight: 800, fill: '#fff', anchor: 'middle' })}`;
    b += rr(x, y, bw, h, 24, tint, col, 3);
    b += iconG(s.icon, x + 20, y + 18, 32, col);
    b += textBlock({ x: x + 66, y: y + 46, lines: wrap(s.friendly, 28, 700, bw - 90, 1), size: 28, weight: 700, fill: col });
    let ly = y + 86;
    bl.forEach((ln) => { b += `<circle cx="${x + 30}" cy="${ly - 8}" r="5" fill="${col}"/>` + textBlock({ x: x + 50, y: ly, lines: ln, size: 22, fill: INK, lh: 1.28 }); ly += ln.length * 28 + 8; });
    if (wl) { b += rr(x + 14, ly - 8, bw - 28, wl.length * 26 + 20, 14, '#fee2e2', '#dc2626', 2) + textBlock({ x: x + 28, y: ly + 20, lines: wl, size: 20, weight: 600, fill: '#991b1b', lh: 1.25 }); }
    if (i < secs.length - 1) b += `<path d="M${M + 50} ${y + 84} V${y + h + 22}" stroke="${col}" stroke-width="5" stroke-linecap="round" opacity=".6"/><path d="M${M + 38} ${y + h + 12} l12 14 l12 -14" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
    y += h + 38;
  });
  return { svg: b, y: y - 14 };
}

function blocksTable(secs, pal, y0) {
  const x = M, lw = 300, rw = W - 2 * M - lw;
  let b = '', y = y0;
  secs.forEach((s, i) => {
    const [col, tint] = pal[i % pal.length];
    const bl = s.lines.map((ln) => wrap(ln, 21, 400, rw - 60, 3));
    const wl = s.warn ? wrap('⚠ ' + s.warn, 20, 600, rw - 56, 3) : null;
    const h = Math.max(96, 36 + bl.reduce((a, l) => a + l.length * 27 + 8, 0) + (wl ? wl.length * 26 + 26 : 0));
    b += `<rect x="${x}" y="${y}" width="${lw}" height="${h}" fill="${col}" ${i === 0 ? `rx="0"` : ''}/>`;
    b += `<rect x="${x + lw}" y="${y}" width="${rw}" height="${h}" fill="${i % 2 ? '#ffffff' : tint}"/>`;
    b += iconG(s.icon, x + 20, y + h / 2 - 17, 34, '#fff');
    const ll = wrap(s.friendly, 24, 700, lw - 90, 3);
    b += textBlock({ x: x + 66, y: y + h / 2 - ((ll.length - 1) * 30) / 2 + 8, lines: ll, size: 24, weight: 700, fill: '#fff', lh: 1.2 });
    let ly = y + 34;
    bl.forEach((ln) => { b += `<circle cx="${x + lw + 24}" cy="${ly - 8}" r="5" fill="${col}"/>` + textBlock({ x: x + lw + 42, y: ly, lines: ln, size: 21, fill: INK }); ly += ln.length * 27 + 8; });
    if (wl) b += rr(x + lw + 14, ly - 8, rw - 28, wl.length * 26 + 20, 12, '#fee2e2', '#dc2626', 2) + textBlock({ x: x + lw + 28, y: ly + 20, lines: wl, size: 20, weight: 600, fill: '#991b1b' });
    y += h;
  });
  b += `<rect x="${x}" y="${y0}" width="${W - 2 * M}" height="${y - y0}" fill="none" stroke="#cbd5e1" stroke-width="3" rx="4"/>`;
  return { svg: b, y };
}

function remember(d, secs, R) {
  const pts = [];
  for (const s of d.sections) for (const it of s.items) if (it.k === 'danger' || it.k === 'warn') pts.push(gist(it.t, 120));
  for (const s of secs) if (s.lines[0]) pts.push(`${s.friendly}: ${gist(s.lines[0], 90)}`);
  return [...new Set(R.shuffle(pts.slice(0, 5)).concat(pts.slice(5)))].slice(0, 4);
}

export function buildScheme(e, { style = 0, seed = 1 } = {}) {
  const d = digest(e);
  const R = rng(seed * 15485863 + 7);
  const pal = PALETTES[R.int(PALETTES.length)];
  const st = SCHEME_STYLES[style % SCHEME_STYLES.length];
  const maxSecs = st.id === 'tabella' ? 8 : 8;
  const secs = prepSections(d, R, maxSecs, st.id === 'flusso' ? 3 : 4);
  const hd = header(d, pal, R);
  let y = hd.h + 10;
  let body = hd.svg;
  const rowH = 330, figW = 470;
  body += leadBox(d, pal, M, y, W - 2 * M - figW - 24, rowH);
  const fp = figurePanel(d, pal, W - M - figW, y, figW, rowH);
  body += fp.svg;
  y += rowH + 36;
  let blocks;
  if (st.id === 'blocchi') blocks = blocksGrid(secs, pal, R, y, R.int(3));
  else if (st.id === 'flusso') blocks = blocksFlow(secs, pal, y);
  else blocks = blocksTable(secs, pal, y);
  body += blocks.svg;
  y = blocks.y + 36;
  const rem = remember(d, secs, R);
  if (rem.length) {
    const lines = rem.map((r) => wrap(r, 22, 500, W - 2 * M - 110, 3));
    const h = 78 + lines.reduce((a, l) => a + l.length * 28 + 10, 0);
    body += rr(M, y, W - 2 * M, h, 26, INK);
    body += iconG('sparkles', M + 24, y + 20, 34, '#fde68a', 1.8);
    body += textBlock({ x: M + 72, y: y + 46, lines: ['DA RICORDARE PER L’ESAME'], size: 24, weight: 800, fill: '#fde68a' });
    let ly = y + 86;
    lines.forEach((ln) => { body += `<circle cx="${M + 34}" cy="${ly - 8}" r="5" fill="#fde68a"/>` + textBlock({ x: M + 54, y: ly, lines: ln, size: 22, weight: 500, fill: '#f8fafc' }); ly += ln.length * 28 + 10; });
    y += h + 30;
  }
  const H = y + 100;
  body += footerSvg(W, H - 80, d, d.sources.length ? ` · fonti: ${d.sources.slice(0, 3).map((s) => s.split(' – ')[0].split(' (')[0]).join('; ')}` : '');
  return { svg: svgDoc(W, H, body, { title: `Schema: ${d.title}` }), w: W, h: H, kind: 'schema', id: d.id, title: d.title, styleName: st.name, figureKind: fp.kind, d };
}
