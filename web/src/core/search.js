// Ricerca universale: indice testuale con punteggi, tolleranza ai refusi e mappa dei collegamenti.
import { ALL, BY_ID, flatText } from './data.js';
import { norm } from './dom.js';
import { plain } from './text.js';

let IDX = null;
let VOCAB = null;

// sinonimi/abbreviazioni usate comunemente in reparto (chiave normalizzata -> parole aggiuntive)
const SYN = {
  k: 'potassio', 'k+': 'potassio', na: 'sodio', 'na+': 'sodio', ca: 'calcio', mg: 'magnesio',
  hb: 'emoglobina', gb: 'leucociti', wbc: 'leucociti', plt: 'piastrine', pcr: 'proteina c reattiva',
  ega: 'emogasanalisi', abg: 'emogasanalisi', ecg: 'elettrocardiogramma', eeg: 'elettroencefalogramma',
  cvc: 'catetere venoso centrale', picc: 'picc', pvc: 'catetere venoso periferico', cvp: 'catetere venoso periferico',
  sng: 'sondino nasogastrico', peg: 'gastrostomia endoscopica percutanea', cv: 'catetere vescicale',
  bpco: 'broncopneumopatia cronica ostruttiva', ima: 'infarto miocardico', sca: 'sindrome coronarica acuta',
  tvp: 'trombosi venosa profonda', ep: 'embolia polmonare', ira: 'insufficienza renale acuta', irc: 'insufficienza renale cronica',
  uti: 'infezione vie urinarie', ivu: 'infezione vie urinarie', dm: 'diabete', dka: 'chetoacidosi', gcs: 'glasgow',
  news: 'news2', spo2: 'saturazione', fc: 'frequenza cardiaca', fr: 'frequenza respiratoria', pa: 'pressione arteriosa',
  tc: 'tomografia', rm: 'risonanza', rx: 'radiografia', bls: 'rianimazione', blsd: 'rianimazione', rcp: 'rianimazione',
  pa2: 'pressione', ev: 'endovenosa', im: 'intramuscolare', sc: 'sottocutanea', ica: 'infezioni correlate assistenza',
  nanda: 'diagnosi infermieristica', noc: 'obiettivi', nic: 'interventi', vas: 'dolore', nrs: 'dolore',
};

function lev(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[n];
}

function build() {
  if (IDX) return;
  VOCAB = new Set();
  IDX = ALL.map((e) => {
    const t = norm(e.title);
    const al = (e.aliases || []).map(norm);
    const sum = norm(plain(e.summary || ''));
    const body = norm(plain(flatText(e))).slice(0, 6000);
    for (const w of [t, ...al]) for (const x of w.split(' ')) if (x.length > 2) VOCAB.add(x);
    return { e, t, tw: t.split(' '), al, sum, body };
  });
}

function expand(tokens) {
  const out = [];
  for (const tk of tokens) {
    const alts = [tk];
    if (SYN[tk]) alts.push(...norm(SYN[tk]).split(' ').filter((x) => x.length > 2));
    out.push(alts);
  }
  return out;
}

function fieldScore(rec, tk) {
  let s = 0;
  if (rec.t === tk) s = Math.max(s, 100);
  else if (rec.tw.includes(tk)) s = Math.max(s, 62);
  else if (rec.tw.some((w) => w.startsWith(tk))) s = Math.max(s, 48);
  else if (rec.t.includes(tk)) s = Math.max(s, 30);
  for (const a of rec.al) {
    if (a === tk) s = Math.max(s, 90);
    else if (a.split(' ').includes(tk)) s = Math.max(s, 52);
    else if (a.split(' ').some((w) => w.startsWith(tk))) s = Math.max(s, 40);
    else if (a.includes(tk)) s = Math.max(s, 24);
  }
  if (s < 20 && tk.length > 2) {
    if (rec.sum.includes(tk)) s = Math.max(s, 14);
    else if (rec.body.includes(tk)) s = Math.max(s, 6);
  }
  return s;
}

export function search(q, { types = null, limit = 80 } = {}) {
  build();
  const nq = norm(q);
  if (!nq) return [];
  let tokens = nq.split(' ').filter(Boolean);
  // refusi: sostituisce i token sconosciuti con la parola del vocabolario piu' vicina
  const fixed = tokens.map((tk) => {
    if (tk.length < 4 || VOCAB.has(tk) || [...VOCAB].some((w) => w.startsWith(tk))) return tk;
    const max = tk.length > 7 ? 2 : 1;
    let best = null, bd = max + 1;
    for (const w of VOCAB) { const d = lev(tk, w, max); if (d < bd) { bd = d; best = w; } }
    return best && bd <= max ? best : tk;
  });
  const groups = expand(fixed);
  const res = [];
  for (const rec of IDX) {
    if (types && !types.includes(rec.e.type)) continue;
    let total = 0, ok = true;
    for (const alts of groups) {
      let best = 0;
      for (const a of alts) best = Math.max(best, fieldScore(rec, a));
      if (!best) { ok = false; break; }
      total += best;
    }
    if (!ok) continue;
    const full = fixed.join(' ');
    if (rec.t === full) total += 80;
    else if (rec.t.startsWith(full)) total += 40;
    if (rec.al.includes(full)) total += 60;
    const pri = { patho: 1.08, proc: 1.06, dev: 1.05, exam: 1.04, anat: 1.04, drug: 1.03, ndx: 1.02, tube: 1.04 }[rec.e.type] || 1;
    res.push({ e: rec.e, score: total * pri });
  }
  res.sort((a, b) => b.score - a.score || a.e.title.localeCompare(b.e.title, 'it'));
  return res.slice(0, limit);
}

export function highlight(text, q) {
  const tokens = norm(q).split(' ').filter((t) => t.length > 1);
  if (!tokens.length) return text;
  const raw = String(text);
  const n = raw.normalize('NFD');
  // evidenziazione semplice sulla stringa originale (ignorando accenti)
  const folded = raw.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (folded.length !== raw.length) return raw;
  const marks = new Array(raw.length).fill(false);
  for (const tk of tokens) {
    let i = 0;
    while ((i = folded.indexOf(tk, i)) >= 0) { for (let j = i; j < i + tk.length; j++) marks[j] = true; i += tk.length; }
  }
  let out = '', open = false;
  for (let i = 0; i < raw.length; i++) {
    if (marks[i] && !open) { out += '<mark class="hl">'; open = true; }
    if (!marks[i] && open) { out += '</mark>'; open = false; }
    out += raw[i].replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  if (open) out += '</mark>';
  return out;
}

export function entityById(id) { return BY_ID.get(id); }
