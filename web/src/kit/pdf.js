// Generatore PDF minimale (nessuna libreria): testo con font standard Helvetica, riquadri, immagini JPEG.
// Le larghezze dei caratteri sono quelle ufficiali Helvetica (AFM) per andare a capo senza sbordare.
import { bare } from './digest.js';

const WH = {}; const WB = {};
const base = (obj, arr) => { for (let i = 0; i < arr.length; i++) obj[32 + i] = arr[i]; };
//      sp  !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /   0-9                                     :   ;   <   =   >   ?   @
base(WH, [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015,
  667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333,
  556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584]);
base(WB, [278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611, 975,
  722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333,
  556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584]);
// lettere accentate Latin-1 (stessa larghezza della lettera base)
const ACC = { 'ÀÁÂÃÄÅ': 'A', 'Ç': 'C', 'ÈÉÊË': 'E', 'ÌÍÎÏ': 'I', 'Ñ': 'N', 'ÒÓÔÕÖ': 'O', 'ÙÚÛÜ': 'U', 'Ý': 'Y', 'àáâãäå': 'a', 'ç': 'c', 'èéêë': 'e', 'ìíîï': 'i', 'ñ': 'n', 'òóôõö': 'o', 'ùúûü': 'u', 'ýÿ': 'y' };
for (const [chars, b] of Object.entries(ACC)) for (const ch of chars) { WH[ch.charCodeAt(0)] = WH[b.charCodeAt(0)]; WB[ch.charCodeAt(0)] = WB[b.charCodeAt(0)]; }
// cp1252 speciali: codice Unicode -> [byte, larghezza regolare, larghezza grassetto]
const SPECIAL = {
  0x2019: [0x92, 222, 278], 0x2018: [0x91, 222, 278], 0x201c: [0x93, 333, 500], 0x201d: [0x94, 333, 500], 0x2013: [0x96, 556, 556], 0x2014: [0x97, 1000, 1000],
  0x2022: [0x95, 350, 350], 0x2026: [0x85, 1000, 1000], 0x20ac: [0x80, 556, 556], 0xb0: [0xb0, 400, 400], 0xd7: [0xd7, 584, 584], 0xb1: [0xb1, 584, 584],
  0xb7: [0xb7, 278, 278], 0xb5: [0xb5, 556, 611], 0xb2: [0xb2, 333, 333], 0xb3: [0xb3, 333, 333], 0xb9: [0xb9, 333, 333], 0xab: [0xab, 556, 556], 0xbb: [0xbb, 556, 556],
  0xbd: [0xbd, 834, 834], 0xbc: [0xbc, 834, 834], 0xa0: [0x20, 278, 278], 0xa9: [0xa9, 737, 737], 0xae: [0xae, 737, 737], 0x2122: [0x99, 1000, 1000],
};
// caratteri disegnati con il font Symbol: Unicode -> [byte, larghezza]
const SYM = { 0x2265: [0xb3, 549], 0x2264: [0xa3, 549], 0x2192: [0xae, 987], 0x2191: [0xad, 603], 0x2193: [0xaf, 603], 0x2248: [0xbb, 549], 0x3b2: [0x62, 549], 0x3b1: [0x61, 631], 0x3b4: [0x64, 494], 0x394: [0x44, 612], 0x2260: [0xb9, 549], 0x2190: [0xac, 987], 0x221e: [0xa5, 713] };
// sostituzioni per caratteri non disponibili
const SUBST = { 0x2082: '2', 0x2081: '1', 0x2083: '3', 0x207a: '+', 0x207b: '-', 0x2075: '5', 0x2074: '4', 0x2070: '0', 0x3bc: 'µ', 0x2080: '0', 0x2084: '4', 0x2713: '', 0x26a0: '', 0x2714: '', 0x25cf: '•', 0x2212: '-' };

/** Converte una stringa in "glifi": {f: 1|2|3, b: byte, w: larghezza/1000}. f: 1 regolare, 2 grassetto, 3 Symbol. */
function glyphs(str, bold) {
  const out = [];
  for (const ch0 of String(str)) {
    let cp = ch0.codePointAt(0);
    if (SUBST[cp] !== undefined) { const s = SUBST[cp]; for (const c2 of s) { const k = c2.codePointAt(0); out.push(g(k, bold)); } continue; }
    out.push(g(cp, bold));
  }
  return out;
}
function g(cp, bold) {
  if (SYM[cp]) return { f: 3, b: SYM[cp][0], w: SYM[cp][1] };
  if (SPECIAL[cp]) return { f: bold ? 2 : 1, b: SPECIAL[cp][0], w: bold ? SPECIAL[cp][2] : SPECIAL[cp][1] };
  if (cp >= 32 && cp <= 126) return { f: bold ? 2 : 1, b: cp, w: (bold ? WB : WH)[cp] };
  if (cp >= 0xc0 && cp <= 0xff) { const w = (bold ? WB : WH)[cp]; if (w) return { f: bold ? 2 : 1, b: cp, w }; }
  if (cp === 9 || cp === 10 || cp === 13) return { f: 1, b: 32, w: 278 };
  return { f: bold ? 2 : 1, b: 0x3f, w: 556 };
}

/** Testo ricco -> parole, ciascuna una lista di glifi (rispetta **grassetto**). */
function words(text, boldAll = false) {
  const segs = String(text).split(/(\*\*)/);
  let bold = boldAll;
  const out = [];
  let cur = [];
  const push = () => { if (cur.length) { out.push(cur); cur = []; } };
  for (const s of segs) {
    if (s === '**') { bold = boldAll ? true : !bold; continue; }
    for (const part of s.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) { push(); out.push(null); continue; }
      cur.push(...glyphs(part, bold));
    }
  }
  push();
  return out;
}
const wordW = (w, size) => w.reduce((a, x) => a + x.w, 0) * size / 1000;

/** Va a capo: restituisce righe come liste di glifi. */
function layout(text, size, maxW, boldAll = false) {
  const ws = words(text, boldAll);
  const space = (size * 278) / 1000;
  const lines = [];
  let cur = [], w = 0, pendingSpace = false;
  for (const wd of ws) {
    if (wd === null) { pendingSpace = true; continue; }
    const ww = wordW(wd, size);
    if (cur.length && w + space + ww > maxW) { lines.push(cur); cur = []; w = 0; pendingSpace = false; }
    if (cur.length && pendingSpace) { cur.push({ f: 1, b: 32, w: 278 }); w += space; }
    cur.push(...wd); w += ww; pendingSpace = false;
  }
  if (cur.length) lines.push(cur);
  return lines;
}

const esc = (b) => (b === 0x28 || b === 0x29 || b === 0x5c ? '\\' + String.fromCharCode(b) : b < 32 || b > 126 ? '\\' + b.toString(8).padStart(3, '0') : String.fromCharCode(b));
const rgb = (hex) => { const h = hex.replace('#', ''); return [0, 2, 4].map((i) => (parseInt(h.slice(i, i + 2), 16) / 255).toFixed(3)).join(' '); };
const n2 = (v) => (Math.round(v * 100) / 100).toString();

class Page {
  constructor(w, h) { this.w = w; this.h = h; this.ops = []; this.imgs = []; }
  rect(x, y, w, h, fill, stroke, lw = 1) { // y dall'alto
    const Y = this.h - y - h;
    this.ops.push(`q ${fill ? rgb(fill) + ' rg ' : ''}${stroke ? rgb(stroke) + ' RG ' + lw + ' w ' : ''}${n2(x)} ${n2(Y)} ${n2(w)} ${n2(h)} re ${fill && stroke ? 'B' : fill ? 'f' : 'S'} Q`);
  }
  rrect(x, y, w, h, r, fill, stroke, lw = 1) {
    const Y = this.h - y - h, k = r * 0.5523;
    const p = `${n2(x + r)} ${n2(Y)} m ${n2(x + w - r)} ${n2(Y)} l ${n2(x + w - r + k)} ${n2(Y)} ${n2(x + w)} ${n2(Y + r - k)} ${n2(x + w)} ${n2(Y + r)} c ${n2(x + w)} ${n2(Y + h - r)} l ${n2(x + w)} ${n2(Y + h - r + k)} ${n2(x + w - r + k)} ${n2(Y + h)} ${n2(x + w - r)} ${n2(Y + h)} c ${n2(x + r)} ${n2(Y + h)} l ${n2(x + r - k)} ${n2(Y + h)} ${n2(x)} ${n2(Y + h - r + k)} ${n2(x)} ${n2(Y + h - r)} c ${n2(x)} ${n2(Y + r)} l ${n2(x)} ${n2(Y + r - k)} ${n2(x + r - k)} ${n2(Y)} ${n2(x + r)} ${n2(Y)} c h`;
    this.ops.push(`q ${fill ? rgb(fill) + ' rg ' : ''}${stroke ? rgb(stroke) + ' RG ' + lw + ' w ' : ''}${p} ${fill && stroke ? 'B' : fill ? 'f' : 'S'} Q`);
  }
  /** Riga di glifi con base alla coordinata y (dall'alto). */
  line(x, y, gl, size, color = '#0f172a') {
    const Y = this.h - y;
    let cur = null, s = '';
    const parts = [];
    for (const q of gl) {
      if (cur !== q.f) { if (s) parts.push([cur, s]); cur = q.f; s = ''; }
      s += esc(q.b);
    }
    if (s) parts.push([cur, s]);
    this.ops.push(`BT ${rgb(color)} rg ${n2(x)} ${n2(Y)} Td ${parts.map(([f, t]) => `/F${f} ${size} Tf (${t}) Tj`).join(' ')} ET`);
  }
  image(idx, x, y, w, h) { this.ops.push(`q ${n2(w)} 0 0 ${n2(h)} ${n2(x)} ${n2(this.h - y - h)} cm /Im${idx} Do Q`); this.imgs.push(idx); }
}

export class PdfDoc {
  constructor({ title = '', author = 'Punto Salute' } = {}) { this.title = title; this.author = author; this.pages = []; this.images = []; }
  page(w = 595.28, h = 841.89) { const p = new Page(w, h); this.pages.push(p); return p; }
  addJpeg(bytes, w, h) { this.images.push({ bytes, w, h }); return this.images.length - 1; }

  build() {
    const enc = new TextEncoder();
    const chunks = []; const offs = []; let pos = 0;
    const raw = (s) => { const b = typeof s === 'string' ? Uint8Array.from(s, (c) => c.charCodeAt(0) & 255) : s; chunks.push(b); pos += b.length; };
    const obj = (n, body) => { offs[n] = pos; raw(`${n} 0 obj\n`); raw(body); raw('\nendobj\n'); };
    const nPages = this.pages.length;
    // 1 catalogo, 2 pagine, 3-5 font, 6 info, poi immagini, poi (pagina, contenuto) a coppie
    const imgBase = 7;
    const pageBase = imgBase + this.images.length;
    raw('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n');
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, `<< /Type /Pages /Count ${nPages} /Kids [${this.pages.map((_, i) => `${pageBase + i * 2} 0 R`).join(' ')}] >>`);
    obj(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    obj(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    obj(5, '<< /Type /Font /Subtype /Type1 /BaseFont /Symbol >>');
    const pdfStr = (s) => '(' + [...s].map((ch) => { const c = ch.codePointAt(0); return c < 128 ? esc(c) : '?'; }).join('') + ')';
    const d = new Date(); const ds = `D:${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}00`;
    obj(6, `<< /Title ${pdfStr(this.title.normalize('NFD').replace(/[̀-ͯ]/g, ''))} /Author ${pdfStr(this.author)} /Creator (Punto Salute) /CreationDate (${ds}) >>`);
    this.images.forEach((im, i) => {
      offs[imgBase + i] = pos;
      raw(`${imgBase + i} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${im.w} /Height ${im.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.bytes.length} >>\nstream\n`);
      raw(im.bytes); raw('\nendstream\nendobj\n');
    });
    this.pages.forEach((p, i) => {
      const pn = pageBase + i * 2, cn = pn + 1;
      const content = p.ops.join('\n');
      const xo = [...new Set(p.imgs)].map((k) => `/Im${k} ${imgBase + k} 0 R`).join(' ');
      obj(pn, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${n2(p.w)} ${n2(p.h)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >>${xo ? ` /XObject << ${xo} >>` : ''} >> /Contents ${cn} 0 R >>`);
      const cb = Uint8Array.from(content, (c) => c.charCodeAt(0) & 255);
      offs[cn] = pos; raw(`${cn} 0 obj\n<< /Length ${cb.length} >>\nstream\n`); raw(cb); raw('\nendstream\nendobj\n');
    });
    const total = pageBase + nPages * 2;
    const xref = pos;
    raw(`xref\n0 ${total}\n0000000000 65535 f \n`);
    for (let n = 1; n < total; n++) raw(String(offs[n]).padStart(10, '0') + ' 00000 n \n');
    raw(`trailer\n<< /Size ${total} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    const len = chunks.reduce((a, c) => a + c.length, 0);
    const out = new Uint8Array(len); let o = 0;
    for (const c of chunks) { out.set(c, o); o += c.length; }
    return out;
  }
}

// ---------------------------------------------------------------- riassunto -> PDF
const A4W = 595.28, A4H = 841.89, MX = 48, MT = 52, MB = 56;
const TINT = { key: ['#fef9c3', '#ca8a04'], warn: ['#fee2e2', '#dc2626'], tip: ['#e0f2fe', '#0284c7'] };

/** Costruisce il PDF del riassunto; images = [{jpeg, w, h, label}] aggiunte in coda come pagine a formato dell'immagine. */
export function summaryToPdf(doc, images = []) {
  const pdf = new PdfDoc({ title: `${doc.title} - riassunto` });
  const pw = A4W - 2 * MX;
  let page = null, y = 0;
  const accent = '#0b7285';
  const newPage = () => { page = pdf.page(A4W, A4H); y = MT; };
  const need = (h) => { if (!page || y + h > A4H - MB) newPage(); };
  newPage();
  // intestazione
  const tl = layout(doc.title, 21, pw - 36, true);
  const hh = 26 + tl.length * 26 + 22;
  page.rrect(MX, y, pw, hh, 12, accent);
  page.line(MX + 18, y + 20, glyphs(doc.subtitle.toUpperCase().slice(0, 90), false), 8.5, '#d1f1f5');
  tl.forEach((ln, i) => page.line(MX + 18, y + 46 + i * 26, ln, 21, '#ffffff'));
  y += hh + 16;

  const para = (text, { size = 11, bold = false, color = '#0f172a', indent = 0, lead = 1.38, gap = 4 } = {}) => {
    const lines = layout(text, size, pw - indent, bold);
    for (const ln of lines) { need(size * lead); page.line(MX + indent, y + size, ln, size, color); y += size * lead; }
    y += gap;
  };
  const bullets = (items, ordered) => {
    items.forEach((it, i) => {
      const lines = layout(it, 10.8, pw - 18);
      lines.forEach((ln, li) => {
        need(15);
        if (li === 0) page.line(MX + 2, y + 10.8, glyphs(ordered ? `${i + 1}.` : '•', true), 10.8, accent);
        page.line(MX + 18, y + 10.8, ln, 10.8, '#0f172a'); y += 14.8;
      });
      y += 2.5;
    });
    y += 2;
  };

  for (const b of doc.blocks) {
    if (b.t === 'lead') {
      const lines = layout(b.text, 12, pw - 28);
      const h = lines.length * 16.6 + 22;
      need(h); page.rrect(MX, y, pw, h, 10, '#e3f6f9', '#8fd3dd', 1);
      lines.forEach((ln, i) => page.line(MX + 14, y + 17 + i * 16.6, ln, 12, '#0f172a'));
      y += h + 12;
    } else if (b.t === 'h2' || b.t === 'h3') {
      need(34); y += b.t === 'h2' ? 8 : 4;
      if (b.t === 'h2') page.rect(MX, y + 1, 4, 15, accent);
      page.line(MX + (b.t === 'h2' ? 12 : 0), y + 13, glyphs(b.text, true), b.t === 'h2' ? 14 : 12, b.t === 'h2' ? accent : '#0f172a');
      y += 22;
    } else if (b.t === 'ul' || b.t === 'ol') bullets(b.items, b.t === 'ol');
    else if (b.t === 'box') {
      const [bg, bc] = TINT[b.kind] || TINT.tip;
      const parts = b.items.map((it) => layout(it, 10.8, pw - 40));
      const h = 30 + parts.reduce((a, l) => a + l.length * 14.6 + 4, 0);
      need(h); page.rrect(MX, y, pw, h, 10, bg, bc, 1.2);
      page.line(MX + 14, y + 19, glyphs(b.title.toUpperCase(), true), 9.5, bc);
      let yy = y + 36;
      parts.forEach((lines) => { lines.forEach((ln, li) => { if (li === 0) page.line(MX + 14, yy, glyphs('•', true), 10.8, bc); page.line(MX + 28, yy, ln, 10.8); yy += 14.6; }); yy += 4; });
      y += h + 12;
    } else if (b.t === 'terms') {
      need(40); page.line(MX, y + 12, glyphs(b.title, true), 12, accent); y += 22;
      for (const t of b.items) {
        const lines = layout(`**${t.title}**: ${t.def}`, 10.5, pw - 14);
        lines.forEach((ln, i) => { need(14.5); if (i === 0) page.rect(MX, y + 3, 3, 8, '#8fd3dd'); page.line(MX + 10, y + 10.5, ln, 10.5); y += 14.2; });
        y += 3;
      }
      y += 6;
    } else if (b.t === 'qa') {
      need(40); page.line(MX, y + 12, glyphs(b.title, true), 12, accent); y += 24;
      for (const it of b.items) {
        const ql = layout('D. ' + it.q, 11, pw - 6, true), al = layout(it.a, 10.6, pw - 24);
        need(ql.length * 14.6 + 16);
        ql.forEach((ln) => { page.line(MX, y + 11, ln, 11, '#0f172a'); y += 14.6; });
        al.forEach((ln, i) => { need(14.2); if (i === 0) page.line(MX + 4, y + 10.6, glyphs('R.', true), 10.6, accent); page.line(MX + 20, y + 10.6, ln, 10.6, '#334155'); y += 14.2; });
        y += 7;
      }
    } else if (b.t === 'links') {
      need(40); page.line(MX, y + 12, glyphs(b.title, true), 12, accent); y += 22;
      para(b.items.join('  •  '), { size: 10.5, color: '#334155' });
    }
  }
  // fonti e avviso
  y += 6; need(70);
  page.rect(MX, y, pw, 0.8, '#cbd5e1'); y += 10;
  para('**Fonti:** ' + doc.sources.join('; '), { size: 8.6, color: '#475569', lead: 1.3 });
  para(`Scheda: revisione ${doc.rev}. ` + doc.notice, { size: 8.6, color: '#475569', lead: 1.3 });
  // immagini a formato proprio
  for (const im of images) {
    const idx = pdf.addJpeg(im.jpeg, im.w, im.h);
    const w = A4W, h = (A4W * im.h) / im.w;
    const p = pdf.page(w, Math.max(h, 200));
    p.image(idx, 0, 0, w, h);
  }
  // numeri di pagina
  const n = pdf.pages.length;
  pdf.pages.forEach((p, i) => {
    const t = layout(`Punto Salute · ${doc.title} · pagina ${i + 1} di ${n}`, 8, 400);
    if (i < n - images.length) p.line(MX, A4H - 30, t[0] || [], 8, '#94a3b8');
  });
  return pdf.build();
}

/** PDF che contiene solo un'immagine (mappa o schema) a pagina unica con le proporzioni dell'immagine. */
export function imageToPdf(title, im) {
  const pdf = new PdfDoc({ title });
  const idx = pdf.addJpeg(im.jpeg, im.w, im.h);
  const w = 595.28, h = (w * im.h) / im.w;
  pdf.page(w, h).image(idx, 0, 0, w, h);
  return pdf.build();
}
