// Infografiche illustrate (SVG autonomo): stile "poster" con pittogrammi, organi 3D reali (BodyParts3D) e figure delle schede.
// Tre impaginazioni: colonne, griglia illustrata, centro con pannelli.
import { digest, sortByPriority, gist, ideas, easy, bare } from './digest.js';
import { rng, wrap, textBlock, xml, iconG, svgDoc, measure, FONT } from './util.js';
import { pictoFor } from './picto.js';
import { cardFigure, placeSvg, getSnapshot } from './figures.js';
import { TYPES } from '../core/types.js';

export const INFO_STYLES = [
  { id: 'colonne', name: 'A colonne illustrate' },
  { id: 'griglia', name: 'Griglia illustrata' },
  { id: 'centro', name: 'Figura al centro' },
];

const THEMES = [
  { bg: ['#fff7ed', '#ffedd5'], ink: '#3b1d0e', accent: '#ea580c', cols: [['#f59e0b', '#fffbeb'], ['#ef4444', '#fef2f2'], ['#22c55e', '#f0fdf4'], ['#3b82f6', '#eff6ff'], ['#8b5cf6', '#f5f3ff'], ['#ec4899', '#fdf2f8']] },
  { bg: ['#eff6ff', '#dbeafe'], ink: '#0f172a', accent: '#2563eb', cols: [['#0ea5e9', '#e0f2fe'], ['#14b8a6', '#ccfbf1'], ['#8b5cf6', '#ede9fe'], ['#f97316', '#ffedd5'], ['#ec4899', '#fce7f3'], ['#22c55e', '#dcfce7']] },
  { bg: ['#f0fdf4', '#dcfce7'], ink: '#052e16', accent: '#15803d', cols: [['#16a34a', '#f0fdf4'], ['#0d9488', '#f0fdfa'], ['#ca8a04', '#fefce8'], ['#2563eb', '#eff6ff'], ['#dc2626', '#fef2f2'], ['#7c3aed', '#f5f3ff']] },
];
const W = 1240, M = 44;
const rr = (x, y, w, h, r, fill, stroke, sw = 2, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw}"` : ''} ${extra}/>`;
const TYPE_ICON = (t) => (TYPES[t] || TYPES.term).icon;

/** Idee brevi di una sezione, pronte per le righe. */
const up0 = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const splitArrows = (arr) => arr.flatMap((x) => (x.length > 40 ? x.split(/\s*→\s*/) : [x])).map((x) => x.trim()).filter(Boolean);
const IDEAS = (sec) => splitArrows(ideas(sec.items, 56));
function rowsOf(sec, n, len = 74, R = null) {
  let list = IDEAS(sec).map((x) => up0(gist(x, len))).filter((x) => x.length > 3);
  list = [...new Set(list)];
  if (list.length > n) {
    const idx = list.map((_, i) => i);
    const keep = R ? [0, ...R.shuffle(idx.slice(1)).slice(0, n - 1)].sort((a, b) => a - b) : idx.slice(0, n);
    list = keep.map((i) => list[i]);
  }
  return list;
}

function picks(d, R, n, minIdeas = 2) {
  const all = sortByPriority(d.sections).filter((s) => IDEAS(s).length >= minIdeas);
  const base = all.length >= n ? all : sortByPriority(d.sections).filter((s) => IDEAS(s).length >= 1);
  let ch = base.slice(0, n);
  if (base.length > n + 1 && R.int(2)) { // variante: sostituisce l'ultima con un'altra sezione tra le successive
    const alt = base.slice(n, n + 3);
    ch = [...base.slice(0, n - 1), R.pick(alt)];
  }
  const order = d.sections.map((s) => s.k);
  return ch.sort((a, b) => order.indexOf(a.k) - order.indexOf(b.k));
}

function decor(theme) {
  const c = theme.accent;
  let b = `<defs><linearGradient id="ibg" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="${theme.bg[0]}"/><stop offset="1" stop-color="${theme.bg[1]}"/></linearGradient></defs>`;
  b += `<rect width="100%" height="100%" fill="url(#ibg)"/>`;
  const plus = (x, y, s, o) => `<path d="M${x - s} ${y}h${2 * s}M${x} ${y - s}v${2 * s}" stroke="${c}" stroke-width="${s / 2.2}" stroke-linecap="round" opacity="${o}"/>`;
  b += plus(70, 110, 14, 0.18) + plus(W - 70, 150, 12, 0.16) + plus(120, 360, 10, 0.12) + plus(W - 110, 420, 14, 0.12);
  b += `<path d="M20 80h60l12-30 18 62 14-32h40" fill="none" stroke="${c}" stroke-width="3" opacity="0.18" stroke-linecap="round" stroke-linejoin="round"/>`;
  return b;
}

function title(d, theme) {
  const t = d.title.toUpperCase();
  let size = 74;
  let lines = wrap(t, size, 900, W - 2 * M - 40, 4);
  while (lines.length > 3 && size > 46) { size -= 6; lines = wrap(t, size, 900, W - 2 * M - 40, 4); }
  let b = '';
  const y0 = 100;
  lines.forEach((ln, i) => {
    const last = i === lines.length - 1;
    const words = ln.split(' ');
    let main = ln, acc = '';
    if (last && words.length > 1) { acc = ' ' + words.pop(); main = words.join(' '); } else if (last && words.length === 1) { main = ''; acc = ln; }
    b += `<text x="${W / 2}" y="${y0 + i * size * 1.02}" font-family="${xml(FONT)}" font-size="${size}" font-weight="900" text-anchor="middle"><tspan fill="${theme.ink}">${xml(main)}</tspan><tspan fill="${theme.accent}">${xml(acc)}</tspan></text>`;
  });
  let y = y0 + (lines.length - 1) * size * 1.02 + 40;
  const sub = (d.typeLabel + (d.cat ? ' · ' + d.cat : '')).toUpperCase();
  const sw = measure(sub, 24, 800) + 56;
  b += rr(W / 2 - sw / 2, y, sw, 46, 23, theme.ink);
  b += textBlock({ x: W / 2, y: y + 32, lines: [sub], size: 24, weight: 800, fill: '#ffffff', anchor: 'middle' });
  y += 46 + 28;
  const lead = wrap(easy(d.summaryRich || '', 200).replace(/\*\*/g, ''), 26, 500, W - 2 * M - 80, 3);
  b += textBlock({ x: W / 2, y: y + 18, lines: lead, size: 26, weight: 500, fill: theme.ink, anchor: 'middle', lh: 1.3 });
  y += lead.length * 34 + 30;
  return { svg: b, y };
}

function ring(cx, cy, r, p, style) {
  const [c] = [p.color];
  let b = '';
  if (style === 0) b += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="${c}" stroke-width="4"/>`;
  else if (style === 1) b += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
  else b += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity=".14"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${c}" stroke-width="3"/>`;
  const s = r * 1.05;
  b += iconG(p.icon, cx - s / 2, cy - s / 2, s, style === 1 ? '#fff' : c, 2);
  return b;
}

function footer(d, theme, y, key) {
  let b = '';
  if (key) {
    const lines = wrap(key, 28, 800, W - 2 * M - 120, 2);
    const h = 40 + lines.length * 36;
    b += rr(M, y, W - 2 * M, h, 34, '#ffffff', theme.accent, 4);
    b += iconG('sparkles', M + 26, y + h / 2 - 20, 40, theme.accent, 1.8);
    b += textBlock({ x: M + 86, y: y + h / 2 - ((lines.length - 1) * 36) / 2 + 10, lines, size: 28, weight: 800, fill: theme.ink, lh: 1.25 });
    y += h + 26;
  }
  const txt = `Punto Salute · ${d.title} · scheda v${d.v}, revisione ${d.rev} · contenuto didattico: verifica protocollo locale e fonti aggiornate${d.sources.length ? ' · fonti: ' + d.sources.slice(0, 3).map((s) => s.split(' – ')[0].split(' (')[0]).join('; ') : ''}`;
  const lines = wrap(txt, 17, 400, W - 2 * M, 2);
  b += `<line x1="${M}" y1="${y}" x2="${W - M}" y2="${y}" stroke="${theme.accent}" stroke-opacity=".3" stroke-width="2"/>`;
  b += textBlock({ x: M, y: y + 30, lines, size: 17, fill: '#64748b' });
  return { svg: b, y: y + 30 + lines.length * 22 + 24 };
}

function keyMessage(d) {
  for (const s of d.sections) for (const it of s.items) if (it.k === 'danger' || it.k === 'warn') return gist(it.t, 120);
  const pun = d.sections.find((s) => s.k === 'pun');
  if (pun && pun.items[0]) return gist(pun.items[0].t, 120);
  for (const k of ['assist', 'inf', 'all', 'err', 'compl', 'monit', 'ctr', 'tec']) {
    const s = d.sections.find((x) => x.k === k);
    const it = s && s.items.find((x) => ['i', 's', 'r'].includes(x.k));
    if (it) return `${s.friendly}: ${gist(it.t, 96)}`;
  }
  return `Ricorda: ${gist(d.summary || d.title, 100)}`;
}

/** Illustrazione per riquadro (x,y,w,h): ritratto 3D, istantanea scelta, figura della scheda o grande pittogramma. */
function illus(d, ctxIll0, slot, x, y, w, h, theme, col, fig) {
  const snap = slot === 0 ? getSnapshot(d.id) : null;
  const useFig = !!fig && !snap;
  if (useFig && slot === 0) return placeSvg(fig, x, y, w, h);
  const ctxIll = useFig ? [null, ...ctxIll0] : ctxIll0;
  const ill = ctxIll[slot] || null;
  if (ill && ill.iso) {
    const k = Math.min(w, h);
    return `<image href="${ill.iso}" x="${x + (w - k) / 2}" y="${y + (h - k) / 2}" width="${k}" height="${k}" preserveAspectRatio="xMidYMid meet"/><text x="${x + w / 2}" y="${y + h - 2}" font-family="${xml(FONT)}" font-size="17" font-weight="700" fill="#64748b" text-anchor="middle">${xml(ill.title)}</text>`;
  }
  if (snap && slot === 0) return `<clipPath id="sc${slot}${x}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22"/></clipPath><image href="${snap}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#sc${slot}${x})"/>`;
  const r = Math.min(w, h) * 0.3;
  const cx = x + w / 2, cy = y + h / 2 - (h > 400 ? 40 : 0);
  let out = `<circle cx="${cx}" cy="${cy}" r="${r * 1.25}" fill="${col}" opacity=".12"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}"/>${iconG(TYPE_ICON(d.type), cx - r * 0.55, cy - r * 0.55, r * 1.1, '#fff', 1.8)}`;
  if (h > 400) {
    // parole chiave sotto l'icona
    const kws = [...new Set([...(d.aliases || []), ...d.rel.map((q) => q.title)].map((k) => k.split(' (')[0]).filter((k) => k && k.length < 26 && k.toLowerCase() !== d.title.toLowerCase()))].slice(0, 6);
    let ky = cy + r * 1.25 + 30, kx = x + 20;
    for (const k of kws) {
      const kw = measure(k, 19, 600) + 28;
      if (kx + kw > x + w - 20) { kx = x + 20; ky += 50; }
      if (ky + 40 > y + h - 10) break;
      out += rr(kx, ky, kw, 38, 19, '#ffffff', col, 2) + textBlock({ x: kx + 14, y: ky + 26, lines: [k], size: 19, weight: 600, fill: '#334155' });
      kx += kw + 10;
    }
  }
  return out;
}

// ---------------------------------------------------------------- impaginazione 1: colonne
function columns(d, R, theme, ctxIll, fig) {
  const secs = picks(d, R, 3);
  const n = Math.max(1, secs.length);
  const gap = 24, cw = (W - 2 * M - gap * (n - 1)) / n;
  const head = title(d, theme);
  let body = head.svg;
  let y = head.y + 6;
  const rowStyle = R.int(3);
  const cols = secs.map((s, i) => {
    const [c, tint] = theme.cols[i % theme.cols.length];
    const tw = cw - 2 * 18 - 2 * 38 - 26;
    const rows = rowsOf(s, 6, 74, R).map((t) => ({ t, lines: wrap(t, 21, 500, tw, 3), p: pictoFor(t, s.k, c) }));
    const rh = rows.map((r) => Math.max(88, r.lines.length * 27 + 34));
    return { s, c, tint, rows, rh, h: 14 + (26 + wrap(s.friendly.toUpperCase(), 27, 900, cw - 56, 2).length * 32) + 10 + 290 + 16 + rh.reduce((a, b) => a + b, 0) + 18 };
  });
  const H0 = Math.max(...cols.map((c) => c.h));
  cols.forEach((col, i) => {
    const x = M + i * (cw + gap);
    body += rr(x, y, cw, H0, 30, col.tint, col.c, 4);
    const tl = wrap(col.s.friendly.toUpperCase(), 27, 900, cw - 56, 2);
    const hh = 26 + tl.length * 32;
    body += rr(x + 14, y + 14, cw - 28, hh, 20, col.c);
    body += textBlock({ x: x + cw / 2, y: y + 14 + hh / 2 - ((tl.length - 1) * 32) / 2 + 9, lines: tl, size: 27, weight: 900, fill: '#fff', anchor: 'middle', lh: 1.18 });
    body += illus(d, ctxIll, i, x + 14, y + 14 + hh + 10, cw - 28, 290, theme, col.c, fig);
    let ry = y + 14 + hh + 10 + 290 + 16;
    col.rows.forEach((r, k) => {
      const h = col.rh[k];
      body += ring(x + 18 + 38, ry + h / 2, 34, r.p, rowStyle);
      body += textBlock({ x: x + 18 + 86, y: ry + h / 2 - ((r.lines.length - 1) * 27) / 2 + 7, lines: r.lines, size: 21, weight: 500, fill: theme.ink, lh: 1.28 });
      if (k < col.rows.length - 1) body += `<line x1="${x + 20}" y1="${ry + h}" x2="${x + cw - 20}" y2="${ry + h}" stroke="${col.c}" stroke-opacity=".45" stroke-width="2" stroke-dasharray="5 6"/>`;
      ry += h;
    });
  });
  y += H0 + 30;
  const f = footer(d, theme, y, keyMessage(d));
  body += f.svg;
  return { body, H: f.y };
}

// ---------------------------------------------------------------- impaginazione 2: griglia illustrata
const up = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
function splitTitle(s) {
  const [a, b] = splitTitle0(s);
  let ti = up(a), tx = b;
  if (tx && norm0(tx).startsWith(norm0(ti))) tx = tx.slice(ti.length).replace(/^[\s,;:—–-]+/, '');
  return [ti, up(tx)];
}
const norm0 = (x) => String(x).toLowerCase().replace(/[^a-z0-9àèéìòù]+/g, ' ').trim();
function splitTitle0(s) {
  const t = bare(s);
  let m = /^([^:—–]{4,38})\s*[:—–]\s+(.+)$/.exec(t);
  if (m) return [m[1].trim(), m[2].trim()];
  m = /^(.{6,34}?)[\s]*\((.+)\)\.?$/.exec(t);
  if (m) return [m[1].trim(), m[2].trim()];
  const g = gist(t, 32);
  return [g.replace(/…$/, ''), t.length > g.length + 8 ? t : ''];
}
function grid(d, R, theme, ctxIll, fig) {
  const secs = picks(d, R, 3, 1);
  const cards = [];
  for (const s of secs) for (const it of splitArrows(ideas(s.items, 90))) { const [ti, tx] = splitTitle(it); cards.push({ s, ti, tx, p: pictoFor(ti + ' ' + tx, s.k) }); }
  let list = cards;
  const MAX = 10;
  if (list.length > MAX) { const idx = list.map((_, i) => i); const keep = [...idx.slice(0, 3), ...R.shuffle(idx.slice(3)).slice(0, MAX - 3)].sort((a, b) => a - b); list = keep.map((i) => list[i]); }
  if (list.length % 2 && list.length > 2) list = list.slice(0, list.length - 1);
  const head = title(d, theme);
  let body = head.svg;
  let y = head.y + 4;
  const gap = 22, cw = (W - 2 * M - gap) / 2;
  // fascia illustrata: istantanea 3D, figura della scheda e/o organi reali
  const snapU = getSnapshot(d.id);
  const pics = [];
  if (snapU) pics.push({ kind: 'snap', url: snapU });
  if (fig) pics.push({ kind: 'fig' });
  for (const it of ctxIll) { if (it.iso) pics.push({ kind: 'iso', url: it.iso, title: it.title }); }
  if (pics.length) {
    const n = Math.min(3, pics.length), ph = 250, pw = (W - 2 * M - 2 * 18) / 3;
    const total = n * pw + (n - 1) * 18, x0 = (W - total) / 2;
    pics.slice(0, n).forEach((pc, i) => {
      const x = x0 + i * (pw + 18);
      body += rr(x, y, pw, ph, 26, '#ffffff', theme.cols[i % theme.cols.length][0], 3);
      if (pc.kind === 'fig') body += placeSvg(fig, x + 12, y + 12, pw - 24, ph - 24);
      else if (pc.kind === 'snap') body += `<clipPath id="gs${i}"><rect x="${x + 8}" y="${y + 8}" width="${pw - 16}" height="${ph - 16}" rx="20"/></clipPath><image href="${pc.url}" x="${x + 8}" y="${y + 8}" width="${pw - 16}" height="${ph - 16}" preserveAspectRatio="xMidYMid slice" clip-path="url(#gs${i})"/>`;
      else body += `<image href="${pc.url}" x="${x + 10}" y="${y + 8}" width="${pw - 20}" height="${ph - 44}" preserveAspectRatio="xMidYMid meet"/><text x="${x + pw / 2}" y="${y + ph - 14}" font-family="${xml(FONT)}" font-size="19" font-weight="800" fill="#475569" text-anchor="middle">${xml(wrap(pc.title, 19, 800, pw - 30, 1)[0])}</text>`;
    });
    y += ph + 26;
  }
  const rowsH = [];
  const laid = list.map((c, i) => {
    const [col, tint] = theme.cols[secs.indexOf(c.s) % theme.cols.length];
    const tw = cw - 24 - 170 - 24;
    const tl = wrap(c.ti, 27, 800, tw, 2);
    const xl = c.tx ? wrap(c.tx, 21, 400, tw, 4) : [];
    const h = Math.max(190, 36 + tl.length * 34 + xl.length * 27 + 24);
    return { ...c, col, tint, tl, xl, h, i };
  });
  for (let r = 0; r < laid.length; r += 2) rowsH.push(Math.max(laid[r].h, laid[r + 1] ? laid[r + 1].h : 0));
  laid.forEach((c) => {
    const r = Math.floor(c.i / 2), cx = c.i % 2;
    const x = M + cx * (cw + gap);
    const yy = y + rowsH.slice(0, r).reduce((a, b) => a + b + gap, 0);
    const h = rowsH[r];
    body += rr(x, yy, cw, h, 26, '#ffffff', c.col, 3);
    // illustrazione a sinistra
    body += rr(x + 14, yy + 14, 160, h - 28, 20, c.tint);
    {
      const rad = 54, ccx = x + 14 + 80, ccy = yy + h / 2;
      body += `<circle cx="${ccx}" cy="${ccy}" r="${rad + 10}" fill="${c.col}" opacity=".15"/><circle cx="${ccx}" cy="${ccy}" r="${rad}" fill="${c.col}"/>${iconG(c.p.icon, ccx - 30, ccy - 30, 60, '#fff', 1.9)}`;
    }
    body += `<circle cx="${x + 30}" cy="${yy + 30}" r="20" fill="${c.col}"/>${textBlock({ x: x + 30, y: yy + 38, lines: [String(c.i + 1)], size: 22, weight: 900, fill: '#fff', anchor: 'middle' })}`;
    const tx0 = x + 14 + 160 + 18;
    const blockH = c.tl.length * 34 + (c.xl.length ? 8 + c.xl.length * 27 : 0);
    let ty = yy + h / 2 - blockH / 2 + 26;
    body += textBlock({ x: tx0, y: ty, lines: c.tl, size: 27, weight: 800, fill: c.col === theme.cols[0][0] ? theme.ink : c.col, lh: 1.25 });
    if (c.xl.length) body += textBlock({ x: tx0, y: ty + c.tl.length * 34 + 6, lines: c.xl, size: 21, weight: 400, fill: '#334155', lh: 1.28 });
  });
  y += rowsH.reduce((a, b) => a + b + gap, 0) + 8;
  const f = footer(d, theme, y, keyMessage(d));
  body += f.svg;
  return { body, H: f.y };
}

// ---------------------------------------------------------------- impaginazione 3: centro con pannelli
function center(d, R, theme, ctxIll, fig) {
  const used = new Set();
  const find = (keys, fallbackSkip) => {
    for (const k of keys) { const s = d.sections.find((x) => x.k === k && !used.has(x.k) && IDEAS(x).length >= 1); if (s) { used.add(s.k); return s; } }
    const s = sortByPriority(d.sections).find((x) => !used.has(x.k) && IDEAS(x).length >= 1);
    if (s) used.add(s.k);
    return s || null;
  };
  const tilesSec = find(['sintomi', 'segni', 'compl', 'sch', 'cos', 'def', 'conc', 'pos']);
  const leftSec = find(['cause', 'fisio', 'ind', 'prep', 'pos', 'rapp', 'mecc']);
  const rightSec = find(['tratt', 'assist', 'tec', 'gest', 'azioni', 'inf', 'cl']);
  const head = title(d, theme);
  let body = head.svg;
  let y = head.y + 4;
  const PW = 372, CW = W - 2 * M - 2 * PW - 2 * 20;
  const panelRows = (sec, x, y0, col, tint, h0) => {
    if (!sec) return { svg: '', h: 0 };
    const rows = rowsOf(sec, 7, 70, R).map((t) => ({ t, lines: wrap(t, 20, 600, PW - 28 - 80, 3), p: pictoFor(t, sec.k, col) }));
    const rh = rows.map((r) => Math.max(76, r.lines.length * 26 + 28));
    const H = 78 + rh.reduce((a, b) => a + b, 0) + 14;
    let s = rr(x, y0, PW, H, 26, tint, col, 3) + rr(x + 10, y0 + 10, PW - 20, 56, 18, col);
    s += textBlock({ x: x + PW / 2, y: y0 + 10 + 38, lines: [wrap(sec.friendly.toUpperCase(), 25, 900, PW - 50, 1)[0]], size: 25, weight: 900, fill: '#fff', anchor: 'middle' });
    let ry = y0 + 78;
    rows.forEach((r, i) => {
      s += ring(x + 14 + 30, ry + rh[i] / 2, 26, r.p, 0);
      s += textBlock({ x: x + 14 + 70, y: ry + rh[i] / 2 - ((r.lines.length - 1) * 26) / 2 + 7, lines: r.lines, size: 20, weight: 600, fill: theme.ink, lh: 1.25 });
      ry += rh[i];
    });
    return { svg: s, h: H };
  };
  const [c0, t0] = theme.cols[0], [c1, t1] = theme.cols[3 % theme.cols.length], [c2] = theme.cols[1];
  const left = panelRows(leftSec, M, y, c1, t1);
  const right = panelRows(rightSec, W - M - PW, y, c0, t0);
  const midH = Math.max(left.h, right.h, 520);
  body += left.svg + right.svg;
  // figura centrale
  const cx = M + PW + 20, cw = CW;
  body += rr(cx, y, cw, midH, 34, '#eef6fb', c2, 3);
  const ctx = ctxIll[0];
  if (ctx && ctx.ctx) body += `<image href="${ctx.ctx}" x="${cx + 10}" y="${y + 10}" width="${cw - 20}" height="${midH - 70}" preserveAspectRatio="xMidYMid meet"/><text x="${cx + cw / 2}" y="${y + midH - 22}" font-family="${xml(FONT)}" font-size="19" font-weight="800" fill="#475569" text-anchor="middle">${xml('Dove: ' + ctx.title)}</text>`;
  else body += illus(d, ctxIll, 0, cx + 14, y + 14, cw - 28, midH - 28, theme, c2, fig);
  y += midH + 26;
  // tessere numerate
  if (tilesSec) {
    const items = rowsOf(tilesSec, 8, 60, R);
    const per = Math.min(4, Math.max(2, items.length > 4 ? 4 : items.length)), gap = 18;
    const tw = (W - 2 * M - gap * (per - 1)) / per;
    body += `<line x1="${M}" y1="${y + 28}" x2="${M + 120}" y2="${y + 28}" stroke="${theme.accent}" stroke-width="4"/><line x1="${W - M - 120}" y1="${y + 28}" x2="${W - M}" y2="${y + 28}" stroke="${theme.accent}" stroke-width="4"/>`;
    const lab = tilesSec.friendly.toUpperCase();
    const lw = measure(lab, 34, 900) + 70;
    body += rr(W / 2 - lw / 2, y, lw, 56, 28, theme.accent) + textBlock({ x: W / 2, y: y + 39, lines: [lab], size: 34, weight: 900, fill: '#fff', anchor: 'middle' });
    y += 84;
    const tiles = items.map((t, i) => ({ t, lines: wrap(t, 21, 600, tw - 28, 3), p: pictoFor(t, tilesSec.k, theme.cols[i % theme.cols.length][0]) }));
    const rowsN = Math.ceil(tiles.length / per);
    const th = Math.max(...tiles.map((t) => 150 + t.lines.length * 27 + 22));
    tiles.forEach((t, i) => {
      const r = Math.floor(i / per), c = i % per;
      const x = M + c * (tw + gap), yy = y + r * (th + gap);
      const [col, tint] = theme.cols[i % theme.cols.length];
      body += rr(x, yy, tw, th, 24, '#ffffff', col, 3);
      body += rr(x + 8, yy + 8, tw - 16, 120, 18, tint);
      const rad = 46;
      body += `<circle cx="${x + tw / 2}" cy="${yy + 68}" r="${rad + 10}" fill="${col}" opacity=".16"/><circle cx="${x + tw / 2}" cy="${yy + 68}" r="${rad}" fill="${col}"/>${iconG(t.p.icon, x + tw / 2 - 26, yy + 68 - 26, 52, '#fff', 1.9)}`;
      body += `<circle cx="${x + 30}" cy="${yy + 30}" r="19" fill="${col}"/>${textBlock({ x: x + 30, y: yy + 37, lines: [String(i + 1)], size: 21, weight: 900, fill: '#fff', anchor: 'middle' })}`;
      body += textBlock({ x: x + tw / 2, y: yy + 128 + 28, lines: t.lines, size: 21, weight: 600, fill: theme.ink, anchor: 'middle', lh: 1.28 });
    });
    y += rowsN * (th + gap) + 4;
  }
  const f = footer(d, theme, y, keyMessage(d));
  body += f.svg;
  return { body, H: f.y };
}

/** illustrations: risultato di illus.illustrations(e) (puo' essere vuoto). */
export function buildInfographic(e, { style = 0, seed = 1, illustrations = [] } = {}) {
  const d = digest(e);
  const R = rng(seed * 7867 + 11);
  const theme = THEMES[R.int(THEMES.length)];
  const st = INFO_STYLES[style % INFO_STYLES.length];
  const fig = cardFigure(e);
  const fn = st.id === 'colonne' ? columns : st.id === 'griglia' ? grid : center;
  const r = fn(d, R, theme, illustrations, fig);
  const H = Math.ceil(r.H);
  const svg = svgDoc(W, H, decor(theme) + r.body, { title: `Infografica: ${d.title}`, bg: theme.bg[0] });
  return { svg, w: W, h: H, kind: 'infografica', id: d.id, title: d.title, styleName: st.name, d, hasIll: illustrations.length };
}
