// Registro unico delle schede cliniche e grafo dei collegamenti.
import { MAP_ORDER } from './types.js';
import anatomy from '../data/anatomy.js';
import physiology from '../data/physiology.js';
import pathologies from '../data/pathologies.js';
import pathologies2 from '../data/pathologies2.js';
import pathologies3 from '../data/pathologies3.js';
import pathologies4 from '../data/pathologies4.js';
import pathologies5 from '../data/pathologies5.js';
import pathologies6 from '../data/pathologies6.js';
import pathologies7 from '../data/pathologies7.js';
import pathologies8 from '../data/pathologies8.js';
import pathologies9 from '../data/pathologies9.js';
import pathologies10 from '../data/pathologies10.js';
import extras from '../data/extras.js';
import schemi from '../data/schemi.js';
import schemi2 from '../data/schemi2.js';
import scales2 from '../data/scales2.js';
import procedures from '../data/procedures.js';
import procedures2 from '../data/procedures2.js';
import procedures3 from '../data/procedures3.js';
import procedures4 from '../data/procedures4.js';
import devices from '../data/devices.js';
import tubes from '../data/tubes.js';
import exams from '../data/exams.js';
import exams2 from '../data/exams2.js';
import drugs from '../data/drugs.js';
import drugs2 from '../data/drugs2.js';
import drugs3 from '../data/drugs3.js';
import care from '../data/care.js';
import care2 from '../data/care2.js';
import ndx from '../data/ndx.js';
import scales from '../data/scales.js';
import calcs from '../data/calcs.js';
import emergencies from '../data/emergencies.js';
import emergencies2 from '../data/emergencies2.js';
import specs from '../data/specs.js';
import terms from '../data/terms.js';
import terms2 from '../data/terms2.js';
import glossary from '../data/glossary.js';
import { SOURCES } from '../data/sources.js';
import FIGMAP from '../data/figmap.js';
import { applyStoredPatches } from './patches.js';

export const ALL = [].concat(anatomy, physiology, pathologies, pathologies2, pathologies3, pathologies4, pathologies5, pathologies6, pathologies7, pathologies8, pathologies9, pathologies10, procedures, procedures2, procedures3, procedures4, devices, tubes, exams, exams2, drugs, drugs2, drugs3, care, care2, ndx, scales, scales2, calcs, emergencies, emergencies2, specs, terms, terms2, glossary, extras, schemi, schemi2);
export const BY_ID = new Map();
export const BY_TYPE = {};
export { SOURCES };

for (const e of ALL) {
  if (FIGMAP[e.id] && !e.figs) e.figs = FIGMAP[e.id];
  if (BY_ID.has(e.id)) console.warn('ID duplicato:', e.id);
  BY_ID.set(e.id, e);
  (BY_TYPE[e.type] ||= []).push(e);
}
export const get = (id) => BY_ID.get(id);
// patch di contenuto scaricate dal feed (prima di indice di ricerca e grafo dei collegamenti)
export const PATCHED = applyStoredPatches(get);

// ---------------------------------------------------------------- grafo
const fwd = new Map();   // id -> Set(id)  (collegamenti dichiarati e inline)
const back = new Map();  // id -> Set(id)  (chi punta a me)
const LINK_RE = /\[\[([a-z0-9_-]+)(?:\|[^\]]*)?\]\]/g;

function add(a, b) {
  if (a === b || !BY_ID.has(b)) return;
  if (!fwd.has(a)) fwd.set(a, new Set());
  fwd.get(a).add(b);
  if (!back.has(b)) back.set(b, new Set());
  back.get(b).add(a);
}
function textsOf(content, out) {
  if (content == null) return out;
  if (typeof content === 'string') { out.push(content); return out; }
  if (Array.isArray(content)) { content.forEach((c) => textsOf(c, out)); return out; }
  if (typeof content === 'object') {
    for (const [k, v] of Object.entries(content)) {
      if (k === 'html' || k === 'svg') continue;
      if (k === 'table') { v.head?.forEach((c) => textsOf(c, out)); v.rows?.forEach((r) => r.forEach((c) => textsOf(c, out))); }
      else textsOf(v, out);
    }
  }
  return out;
}
export function flatText(e) {
  const parts = [e.summary || ''];
  for (const v of Object.values(e.sections || {})) textsOf(v, parts);
  return parts.join(' \n ');
}
for (const e of ALL) {
  (e.rel || []).forEach((r) => add(e.id, r));
  for (const m of flatText(e).matchAll(LINK_RE)) add(e.id, m[1]);
}
// i collegamenti dichiarati sono bidirezionali
for (const [a, set] of [...fwd]) for (const b of set) { if (!fwd.has(b)) fwd.set(b, new Set()); }

/** Collegamenti diretti (in uscita) e inversi (in ingresso). */
export function neighbors(id) {
  const out = new Set(fwd.get(id) || []);
  for (const b of back.get(id) || []) out.add(b);
  out.delete(id);
  return [...out].map(get).filter(Boolean);
}

/** Collegamenti raggruppati per tipo, nell'ordine clinico. Opzionale: includi vicini di secondo grado per anatomia. */
export function relatedGroups(id) {
  const groups = {};
  for (const e of neighbors(id)) (groups[e.type] ||= []).push(e);
  for (const g of Object.values(groups)) g.sort((a, b) => a.title.localeCompare(b.title, 'it'));
  const order = MAP_ORDER.filter((t) => groups[t]);
  return order.map((t) => ({ type: t, items: groups[t] }));
}

export function sourceList(e) {
  const keys = new Set([...(e.sources || [])]);
  return [...keys].map((k) => SOURCES[k]).filter(Boolean);
}

export function countType(spec) {
  return spec.split('+').reduce((n, t) => n + (BY_TYPE[t]?.length || 0), 0);
}
