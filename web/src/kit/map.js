// Mappe concettuali (SVG autonomo): mappa mentale a due lati, albero e mappa con frasi di collegamento.
import { digest, sortByPriority, gist, bare, ideas } from './digest.js';
import { rng, PALETTES, INK, INK2, wrap, textBlock, xml, iconG, svgDoc, footerSvg, measure, FONT } from './util.js';

export const MAP_STYLES = [
  { id: 'mentale', name: 'Mappa mentale' },
  { id: 'albero', name: 'Albero' },
  { id: 'concettuale', name: 'Con frasi di collegamento' },
];

const LINK = {
  anat: 'si trova in', pos: 'si trova', rapp: 'è in rapporto con', vasc: 'è irrorato da', funz: 'serve a', fisio: 'avviene perché', mecc: 'funziona così',
  cause: 'è favorita da', sintomi: 'si manifesta con', segni: 'si riconosce da', esami: 'si valuta con', dx: 'si conferma con', tratt: 'si cura con',
  farmaci: 'usa', assist: 'richiede', monit: 'va monitorata con', compl: 'può causare', edu: 'va spiegata con', pat: 'può ammalarsi di', inf: 'in reparto',
  ind: 'si fa quando', ctr: 'attenzione a', mat: 'richiede', prep: 'si prepara con', tec: 'si esegue con', mon: 'si controlla con', doc: 'si documenta con', err: 'evita',
  cos: 'è', dove: 'si mette in', perche: 'serve per', gest: 'si gestisce con', ctrl: 'si controlla con', all: 'allarme se', cl: 'appartiene a', esempi: 'ad esempio',
  av: 'può dare', prec: 'attenzione a', rif: 'valori', aum: 'se alto', dim: 'se basso', prelievo: 'si preleva con', quando: 'si usa quando', valut: 'si valuta con',
  azioni: 'si fa', alg: 'segue', def: 'significa', ctx: 'si usa in', dd: 'può dipendere da', sch: 'schema', pun: 'ricorda', conc: 'è', reg: 'è regolato da', val: 'valori', alt: 'si altera se',
};

function pickBranches(d, R, max) {
  const base = sortByPriority(d.sections).filter((s) => s.items.some((i) => ['i', 's', 'r', 'warn', 'danger', 'ok', 'note'].includes(i.k)));
  let chosen = base.slice(0, max);
  // rigenerazione: tra le sezioni oltre le prime 4 se ne scelgono alcune a caso, cosi' ogni versione puo' enfatizzare cose diverse
  if (base.length > max) {
    const must = base.slice(0, Math.max(3, max - 3));
    const rest = R.shuffle(base.slice(must.length)).slice(0, max - must.length);
    chosen = base.filter((s) => must.includes(s) || rest.includes(s));
  }
  return chosen.map((s) => {
    const pts = ideas(s.items);
    const n = Math.min(pts.length, 3 + R.int(2));
    let idx = pts.map((_, i) => i);
    if (pts.length > n) idx = [0, ...R.shuffle(idx.slice(1)).slice(0, n - 1)].sort((a, b) => a - b);
    const leaves = idx.map((i) => gist(pts[i], 58));
    const warn = s.items.find((i) => i.k === 'warn' || i.k === 'danger');
    if (warn && leaves.length < 5) leaves.push('Attenzione: ' + gist(warn.t, 46));
    return { k: s.k, label: s.friendly, icon: s.icon, leaves };
  });
}

function colorsFor(R) { return PALETTES[R.int(PALETTES.length)]; }

function node({ x, y, w, h, fill, stroke, r = 16, sw = 0 }) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw || 2}"` : ''}/>`;
}
const curve = (x1, y1, x2, y2, col, w = 4) => {
  const mx = (x1 + x2) / 2;
  return `<path d="M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" opacity=".85"/>`;
};

/** Gruppi di rami (blocchi) con altezze: usato da mappa mentale e albero. */
function measureGroups(branches, BW, LW) {
  return branches.map((b) => {
    const bl = wrap(b.label, 24, 700, BW - 70, 2);
    const bh = Math.max(64, 30 + bl.length * 30);
    const leaves = b.leaves.map((t) => { const ln = wrap(t, 21, 400, LW - 30, 3); return { ln, h: 22 + ln.length * 27 }; });
    const lh = leaves.reduce((a, l) => a + l.h + 12, -12);
    return { b, bl, bh, leaves, h: Math.max(bh, lh) + 30 };
  });
}

function drawGroup(g, { bx, by, lx, dir, color, tint, rootX, rootY, BW, LW }) {
  // by = y superiore del gruppo; dir = +1 foglie a destra del ramo, -1 a sinistra
  const cy = by + g.h / 2;
  let out = '';
  const nodeX = bx;
  const nodeY = cy - g.bh / 2;
  out += curve(rootX, rootY, dir > 0 ? nodeX : nodeX + BW, cy, color, 6);
  out += node({ x: nodeX, y: nodeY, w: BW, h: g.bh, fill: color, r: 22 });
  out += iconG(g.b.icon, nodeX + 16, cy - 13, 26, '#fff');
  out += textBlock({ x: nodeX + 52, y: cy - ((g.bl.length - 1) * 30) / 2 + 8, lines: g.bl, size: 24, weight: 700, fill: '#fff', lh: 1.25 });
  // foglie
  const totalLeaves = g.leaves.reduce((a, l) => a + l.h + 12, -12);
  let y = cy - totalLeaves / 2;
  for (const l of g.leaves) {
    const lxx = lx;
    out += curve(dir > 0 ? nodeX + BW : nodeX, cy, dir > 0 ? lxx : lxx + LW, y + l.h / 2, color, 3);
    out += node({ x: lxx, y, w: LW, h: l.h, fill: tint, stroke: color, sw: 2, r: 14 });
    out += textBlock({ x: lxx + 15, y: y + 33, lines: l.ln, size: 21, fill: INK, lh: 1.28 });
    y += l.h + 12;
  }
  return out;
}

function mentale(d, R, pal, oneSide) {
  const branches = pickBranches(d, R, oneSide ? 8 : 8);
  const BW = 270, LW = 330, GAP = 56, M = 40;
  const groups = measureGroups(branches, BW, LW);
  const colH = (arr) => arr.reduce((a, g) => a + g.h, 0);
  const left = [], right = [];
  if (oneSide) right.push(...groups);
  else for (const g of groups) (colH(left) < colH(right) ? left : right).push(g);
  const rootLines = wrap(d.title, 32, 800, 300, 4);
  const rootH = Math.max(120, 50 + rootLines.length * 40);
  const rootW = 340;
  const sideH = Math.max(colH(left), colH(right), rootH + 40);
  const top = 70;
  const H = top + sideH + 120;
  let W, rootX0;
  if (oneSide) { W = M + rootW + GAP + BW + GAP + LW + M; rootX0 = M; }
  else { W = M + LW + GAP + BW + GAP + rootW + GAP + BW + GAP + LW + M; rootX0 = M + LW + GAP + BW + GAP; }
  const cy = top + sideH / 2;
  let body = '';
  body += textBlock({ x: M, y: 44, lines: [`Mappa concettuale · ${d.typeLabel}`], size: 22, weight: 700, fill: INK2 });
  let ci = 0;
  const drawSide = (arr, dir) => {
    let y = top + (sideH - colH(arr)) / 2;
    for (const g of arr) {
      const [c, t] = pal[ci++ % pal.length];
      const bx = dir > 0 ? rootX0 + rootW + GAP : rootX0 - GAP - BW;
      const lx = dir > 0 ? bx + BW + GAP : bx - GAP - LW;
      body += drawGroup(g, { bx, by: y, lx, dir, color: c, tint: t, rootX: dir > 0 ? rootX0 + rootW : rootX0, rootY: cy, BW, LW });
      y += g.h;
    }
  };
  if (!oneSide) drawSide(left, -1);
  drawSide(right, 1);
  // radice sopra i collegamenti
  const rc = pal[0][0];
  body += node({ x: rootX0, y: cy - rootH / 2, w: rootW, h: rootH, fill: INK, r: 30 });
  body += `<rect x="${rootX0 + 8}" y="${cy - rootH / 2 + 8}" width="${rootW - 16}" height="${rootH - 16}" rx="24" fill="none" stroke="${rc}" stroke-width="4"/>`;
  body += textBlock({ x: rootX0 + rootW / 2, y: cy - ((rootLines.length - 1) * 40) / 2 + 11, lines: rootLines, size: 32, weight: 800, fill: '#fff', lh: 1.25, anchor: 'middle' });
  body += footerSvg(W, H - 78, d);
  return { svg: svgDoc(W, H, body, { title: `Mappa concettuale: ${d.title}` }), w: W, h: H };
}

function concettuale(d, R, pal) {
  const branches = pickBranches(d, R, 8);
  const M = 40, SPX = 92, STUB = 190, BX = SPX + STUB, W = 1340, BW = W - BX - M;
  const rootLines = wrap(d.title, 36, 800, 600, 3);
  const rootH = Math.max(110, 44 + rootLines.length * 44);
  const rootW = 700, rootY = 80;
  const boxes = branches.map((b, i) => {
    const leaves = b.leaves.map((t) => wrap(t, 22, 400, BW - 70, 3));
    const h = 66 + leaves.reduce((a, ln) => a + ln.length * 28 + 10, 0) + 10;
    return { b, leaves, h, i };
  });
  let y = rootY + rootH + 56;
  const placed = boxes.map((bx) => { const p = { ...bx, y }; y += bx.h + 34; return p; });
  const bottom = y - 34;
  // collegati (misurati prima per conoscere l'altezza)
  const chips = [];
  let cx = M, cy = 0, rows = 0;
  for (const r of d.rel.slice(0, 12)) {
    const w = measure(r.title, 20, 600) + 36;
    if (cx + w > W - M) { cx = M; cy += 52; }
    chips.push({ t: r.title, x: cx, y: cy, w });
    cx += w + 12; rows = cy + 52;
  }
  const relTop = bottom + 50;
  const H = relTop + (chips.length ? 40 + rows : 0) + 120;
  let body = textBlock({ x: M, y: 44, lines: [`Mappa concettuale · ${d.typeLabel}`], size: 22, weight: 700, fill: INK2 });
  const rootX = M;
  const spineTop = rootY + rootH;
  const lastStub = placed.length ? placed[placed.length - 1].y + 33 : spineTop;
  body += `<line x1="${SPX}" y1="${spineTop - 4}" x2="${SPX}" y2="${lastStub}" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>`;
  placed.forEach((p, i) => {
    const [c, t] = pal[i % pal.length];
    const yy = p.y + 33;
    body += `<line x1="${SPX}" y1="${yy}" x2="${BX}" y2="${yy}" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>`;
    body += `<path d="M${BX - 16} ${yy - 11} L${BX} ${yy} L${BX - 16} ${yy + 11}" fill="none" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
    body += `<circle cx="${SPX}" cy="${yy}" r="9" fill="#64748b"/>`;
    const pl = wrap(LINK[p.b.k] || 'comprende', 18, 700, STUB - 56, 2);
    const pw = Math.max(...pl.map((l) => measure(l, 18, 700))) + 24, ph = pl.length * 22 + 14;
    const px = SPX + (STUB - 18) / 2 - pw / 2 + 4;
    body += node({ x: px, y: yy - ph / 2, w: pw, h: ph, fill: '#ffffff', stroke: '#94a3b8', sw: 2.5, r: 14 });
    body += textBlock({ x: px + pw / 2, y: yy - ph / 2 + 24, lines: pl, size: 18, weight: 700, fill: '#334155', lh: 1.2, anchor: 'middle' });
    body += node({ x: BX, y: p.y, w: BW, h: p.h, fill: t, stroke: c, sw: 3, r: 24 });
    body += `<path d="M${BX} ${p.y + 24} a24 24 0 0 1 24 -24 h${BW - 48} a24 24 0 0 1 24 24 v42 h-${BW} z" fill="${c}"/>`;
    body += iconG(p.b.icon, BX + 20, p.y + 17, 32, '#fff');
    body += textBlock({ x: BX + 66, y: p.y + 45, lines: wrap(p.b.label, 27, 700, BW - 90, 1), size: 27, weight: 700, fill: '#fff' });
    let ly = p.y + 66 + 30;
    p.leaves.forEach((ln) => {
      body += `<circle cx="${BX + 28}" cy="${ly - 8}" r="5.5" fill="${c}"/>`;
      body += textBlock({ x: BX + 48, y: ly, lines: ln, size: 22, fill: INK });
      ly += ln.length * 28 + 10;
    });
  });
  // radice (sopra la spina)
  body += node({ x: rootX, y: rootY, w: rootW, h: rootH, fill: INK, r: 32 });
  body += textBlock({ x: rootX + rootW / 2, y: rootY + rootH / 2 - ((rootLines.length - 1) * 44) / 2 + 12, lines: rootLines, size: 36, weight: 800, fill: '#fff', lh: 1.22, anchor: 'middle' });
  if (chips.length) {
    body += textBlock({ x: M, y: relTop + 8, lines: ['Collegato a'], size: 24, weight: 700, fill: INK2 });
    for (const c of chips) {
      body += node({ x: c.x, y: relTop + 30 + c.y, w: c.w, h: 40, fill: '#f1f5f9', stroke: '#cbd5e1', sw: 2, r: 20 });
      body += textBlock({ x: c.x + 18, y: relTop + 30 + c.y + 27, lines: [c.t], size: 20, weight: 600, fill: INK });
    }
  }
  body += footerSvg(W, H - 78, d);
  return { svg: svgDoc(W, H, body, { title: `Mappa concettuale: ${d.title}` }), w: W, h: H };
}

export function buildMap(e, { style = 0, seed = 1 } = {}) {
  const d = digest(e);
  const R = rng(seed * 104729 + 3);
  const pal = colorsFor(R);
  const st = MAP_STYLES[style % MAP_STYLES.length];
  let r;
  if (st.id === 'mentale') r = mentale(d, R, pal, false);
  else if (st.id === 'albero') r = mentale(d, R, pal, true);
  else r = concettuale(d, R, pal);
  return { ...r, kind: 'mappa', id: d.id, title: d.title, styleName: st.name, d };
}
