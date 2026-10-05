// Estrazione dei contenuti di una scheda in forma "piatta" (sezioni, punti elenco, avvisi) per riassunti, mappe e schemi.
import { BY_ID, ALL, neighbors, sourceList } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { LAYOUTS, DEFAULT_SOURCES } from '../core/schemas.js';

/** Testo pulito: collegamenti [[id|etichetta]] risolti, **grassetto** conservato. */
export function clean(s) {
  return String(s ?? '')
    .replace(/\[\[([a-z0-9_-]+)\|([^\]]*)\]\]/g, '$2')
    .replace(/\[\[([a-z0-9_-]+)\]\]/g, (_, id) => BY_ID.get(id)?.title || id)
    .replace(/\s+/g, ' ')
    .replace(/(\b[^()*]{4,50}?)\s*\(\1\)/gi, '$1')
    .trim();
}
export const bare = (s) => clean(s).replace(/\*\*/g, '');

const CALLS = ['note', 'warn', 'danger', 'ok'];

function figureText(x, out) {
  const t = x.svg;
  const L = (s) => clean(s);
  if (t === 'mnemo') (x.items || []).forEach(([k, a, b]) => out.push({ k: 'i', t: `**${L(k)}** = ${L(a)}${b ? ': ' + L(b) : ''}` }));
  else if (t === 'cycle') (x.items || []).forEach(([a, b], i) => out.push({ k: 's', n: i + 1, t: `${L(a)}${b ? ': ' + L(b) : ''}` }));
  else if (t === 'mapcards') (x.branches || []).forEach((b) => out.push({ k: 'i', t: `**${L(b.t)}**: ${[].concat(b.items || []).map(L).join('; ')}` }));
  else if (t === 'flow') {
    let n = 0;
    const walk = (steps) => {
      for (const s of [].concat(steps || [])) {
        if (typeof s === 'string') out.push({ k: 's', n: ++n, t: L(s) });
        else if (s.q) {
          out.push({ k: 's', n: ++n, t: `Domanda: ${L(s.q)}` });
          const yes = [].concat(s.yes || []).map((y) => L(typeof y === 'string' ? y : y.alert || y.ok || y.end || y.q || '')).filter(Boolean).join(' → ');
          const no = [].concat(s.no || []).map((y) => L(typeof y === 'string' ? y : y.alert || y.ok || y.end || y.q || '')).filter(Boolean).join(' → ');
          if (yes) out.push({ k: 'i', t: `${s.yesLabel || 'Sì'}: ${yes}` });
          if (no) out.push({ k: 'i', t: `${s.noLabel || 'No'}: ${no}` });
        } else if (s.alert) out.push({ k: 'danger', t: L(s.alert) });
        else if (s.ok) out.push({ k: 'ok', t: L(s.ok) });
        else if (s.end) out.push({ k: 'i', t: L(s.end) });
      }
    };
    walk(x.steps);
  }
}

export function flatten(x, out = []) {
  if (x == null || x === '') return out;
  if (typeof x === 'string') { out.push({ k: 'i', t: clean(x) }); return out; }
  if (Array.isArray(x)) { x.forEach((c) => flatten(c, out)); return out; }
  if (typeof x !== 'object') return out;
  if (x.h) out.push({ k: 'h', t: clean(x.h) });
  if (x.p) out.push({ k: 'i', t: clean(x.p) });
  if (x.ul) x.ul.forEach((u) => out.push({ k: 'i', t: clean(u) }));
  if (x.ol) x.ol.forEach((u, i) => out.push({ k: 's', n: i + 1, t: clean(u) }));
  for (const c of CALLS) if (x[c]) out.push({ k: c, t: clean(x[c]) });
  if (x.table) {
    const { head = [], rows = [] } = x.table;
    for (const r of rows) {
      const cells = r.map(clean);
      out.push({ k: 'r', t: head.length > 1 ? cells.map((c, i) => (i === 0 ? `**${c}**` : `${bare(head[i])}: ${c}`)).join(' · ') : cells.join(' · ') });
    }
  }
  if (x.kv) x.kv.forEach(([k, v]) => out.push({ k: 'i', t: `${k}: ${clean(v)}` }));
  if (x.svg) figureText(x, out);
  return out;
}

// etichette in linguaggio semplice (domande che ci si pone studiando)
const FRIENDLY = {
  patho: { anat: 'Dove succede', fisio: 'Cosa succede nel corpo', cause: 'Perché succede', sintomi: 'Cosa riferisce la persona', segni: 'Cosa si osserva', esami: 'Quali esami si fanno', dx: 'Come si riconosce', tratt: 'Come si cura', farmaci: 'Quali farmaci', assist: 'Cosa fa l’infermiere', monit: 'Cosa controllare', compl: 'Cosa può andare storto', edu: 'Cosa spiegare alla persona', ndx: 'Diagnosi infermieristiche' },
  proc: { ind: 'Quando si fa', ctr: 'Quando fare attenzione', mat: 'Cosa serve', prep: 'Come ci si prepara', tec: 'Come si fa, passo dopo passo', mon: 'Cosa controllare', compl: 'Cosa può andare storto', doc: 'Cosa scrivere in cartella', err: 'Errori da evitare' },
  dev: { cos: 'Cos’è', dove: 'Dove si mette', perche: 'A cosa serve', funz: 'Come funziona', gest: 'Come si gestisce', ctrl: 'Cosa controllare', compl: 'Cosa può andare storto', all: 'Segnali di allarme' },
  drug: { cl: 'Classe e come agisce', ind: 'A cosa serve', esempi: 'Esempi di principi attivi', av: 'Effetti indesiderati', prec: 'Precauzioni', inf: 'Cosa fa l’infermiere', mon: 'Cosa controllare', edu: 'Cosa spiegare alla persona' },
  exam: { cos: 'Cos’è', rif: 'Valori di riferimento', aum: 'Se è alto', dim: 'Se è basso', prelievo: 'Come si preleva', inf: 'Cosa fa l’infermiere' },
  anat: { pos: 'Dove si trova', rapp: 'Cosa c’è intorno', vasc: 'Vasi e nervi', funz: 'A cosa serve', fisio: 'Come funziona', pat: 'Malattie principali', inf: 'Cosa serve sapere in reparto' },
  physio: { conc: 'Il concetto', mecc: 'Come funziona', reg: 'Chi lo regola', val: 'Valori normali', alt: 'Quando si altera', inf: 'Perché conta in reparto' },
  emerg: { quando: 'Quando', valut: 'Cosa valutare', azioni: 'Cosa fare', alg: 'Sequenza', inf: 'Ruolo dell’infermiere', err: 'Errori comuni' },
  tube: { cod: 'Colore e additivo', ese: 'Per quali esami', vol: 'Quanto riempire', mix: 'Come mescolare', cons: 'Conservazione e trasporto', cent: 'Centrifugazione', err: 'Errori da evitare' },
  ndx: { def: 'Cosa significa', pes: 'Come si scrive', fatt: 'Fattori collegati', segni: 'Segni e sintomi', obj: 'Obiettivi', int: 'Interventi', val: 'Come si rivaluta' },
  term: { def: 'Cosa significa', ctx: 'Quando si usa', dd: 'Cause possibili', inf: 'Cosa osservare e riferire' },
  sign: { def: 'Cosa significa', ctx: 'Quando si usa', dd: 'Cause possibili', inf: 'Cosa osservare e riferire' },
  schema: { sch: 'Lo schema', pun: 'Da ricordare', err: 'Errori frequenti' },
};
export const friendlyLabel = (type, key, fallback) => (FRIENDLY[type] && FRIENDLY[type][key]) || fallback;

// icona di sezione (nomi Lucide presenti nello sprite)
const SEC_ICON = {
  anat: 'map', pos: 'map', rapp: 'network', vasc: 'activity', funz: 'sparkles', fisio: 'activity', mecc: 'activity', conc: 'info', reg: 'gauge',
  cause: 'search', sintomi: 'thermometer', segni: 'stethoscope', esami: 'microscope', dx: 'clipboard-check', tratt: 'syringe', farmaci: 'pill',
  assist: 'clipboard-list', monit: 'timer', compl: 'triangle-alert', edu: 'graduation-cap', ndx: 'clipboard-list', pat: 'heart-pulse', inf: 'clipboard-list',
  ind: 'circle-check', ctr: 'triangle-alert', mat: 'layers', prep: 'list', tec: 'play', mon: 'timer', doc: 'file-text', err: 'octagon-alert',
  cos: 'info', dove: 'map', perche: 'circle-help', gest: 'clipboard-list', ctrl: 'timer', all: 'siren', cl: 'layers', esempi: 'pill', av: 'triangle-alert', prec: 'shield-check',
  rif: 'gauge', aum: 'activity', dim: 'activity', prelievo: 'test-tube', quando: 'clock', valut: 'search', azioni: 'play', alg: 'waypoints', val: 'gauge',
  alt: 'triangle-alert', cod: 'test-tubes', ese: 'microscope', vol: 'droplets', mix: 'replace', cons: 'clock', cent: 'rotate-ccw', def: 'info', ctx: 'map',
  dd: 'search', pes: 'pencil', fatt: 'search', segni2: 'stethoscope', obj: 'circle-check', int: 'play', sch: 'network', pun: 'sparkles',
};
export const secIcon = (k) => SEC_ICON[k] || 'circle';

// parole che segnano le priorita' delle sezioni (le piu' utili per studiare compaiono per prime in mappe e schemi)
const PRIORITY = ['sch', 'pun', 'cos', 'def', 'conc', 'pos', 'fisio', 'cause', 'sintomi', 'segni', 'esami', 'dx', 'tratt', 'farmaci', 'cl', 'ind', 'tec', 'azioni', 'alg', 'assist', 'inf', 'monit', 'mon', 'compl', 'av', 'all', 'edu', 'err', 'funz', 'rapp', 'vasc', 'pat', 'rif', 'aum', 'dim'];

export function digest(e) {
  const t = TYPES[e.type] || TYPES.term;
  const layout = e.layout || LAYOUTS[e.type] || [];
  const secs = [];
  for (const [k, label] of layout) {
    const v = e.sections && e.sections[k];
    if (v == null || v === '') continue;
    const items = flatten(v);
    if (!items.length) continue;
    secs.push({ k, label, friendly: friendlyLabel(e.type, k, label), icon: secIcon(k), items });
  }
  const intro = e.intro ? flatten(e.intro) : [];
  if (intro.length) secs.unshift({ k: 'intro', label: 'Introduzione', friendly: 'Introduzione', icon: 'info', items: intro });
  const srcKeys = [...new Set([...(e.sources || []), ...(DEFAULT_SOURCES[e.type] || [])])];
  return {
    id: e.id, type: e.type, typeLabel: t.label, color: t.c, title: e.title, aliases: e.aliases || [], cat: e.cat || '',
    summary: bare(e.summary || ''), summaryRich: clean(e.summary || ''), sections: secs,
    rel: neighbors(e.id).filter((x) => x.type !== 'term' || secs.length < 3).slice(0, 14),
    sources: sourceList({ sources: srcKeys }).map((s) => s.t),
    rev: e.rev || '2026-10', v: e.v || '1.0', e,
  };
}

export const sortByPriority = (secs) => [...secs].sort((a, b) => {
  const ia = PRIORITY.indexOf(a.k), ib = PRIORITY.indexOf(b.k);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

// ---------------------------------------------------------------- frasi brevi
/** Accorcia a una "idea chiave": prima proposizione sensata entro max caratteri. */
const balanced = (s) => (s.match(/\(/g) || []).length === (s.match(/\)/g) || []).length;
function closeParen(s) {
  // se la frase tagliata lascia una parentesi aperta, torna prima di essa
  if (balanced(s)) return s;
  const i = s.lastIndexOf('(');
  return i > 8 ? s.slice(0, i).trim() : s.replace(/\(/g, '');
}
export function gist(text, max = 60) {
  let s = bare(text).replace(/^[•\-–\d.)\s]+/, '').trim();
  if (s.length <= max) return s;
  const cuts = [/\s[—–]\s/, /:\s/, /;\s/, /\.\s/, /,\s/, /\s\(/];
  let best = null;
  for (const re of cuts) {
    const m = re.exec(s);
    if (m && m.index >= 12 && m.index <= max && balanced(s.slice(0, m.index))) { best = s.slice(0, m.index); break; }
  }
  if (!best) {
    best = s.slice(0, max);
    const sp = best.lastIndexOf(' ');
    if (sp > max * 0.5) best = best.slice(0, sp);
    best = trimTail(closeParen(best).replace(/[\s,;:(–—-]+$/, '')) + '…';
  }
  return trimTail(closeParen(best).replace(/[\s,;:]+$/, ''));
}
const TAIL = /\s+(e|o|ed|di|a|da|in|con|per|il|la|lo|le|i|gli|un|una|del|della|dei|delle|che|se|su|al|alla|nel|nella|tra|fra|sono|è|ad)$/i;
function trimTail(s) { let x = s; for (let k = 0; k < 3 && TAIL.test(x) && x.length > 14; k++) x = x.replace(TAIL, ''); return x; }

/** Testo semplificato: frasi lunghe spezzate, parentesi tecniche mantenute ma ridotte. */
export function easy(text, max = 190) {
  let s = clean(text);
  if (bare(s).length <= max) return s;
  const parts = s.split(/(?<=[.;])\s+/);
  let out = '';
  for (const p of parts) { if ((out + ' ' + p).trim().length > max && out) break; out = (out + ' ' + p).trim(); }
  if (bare(out).length > max) {
    const cut = out.slice(0, max);
    const sp = cut.lastIndexOf(' ');
    out = closeParen(cut.slice(0, sp > 40 ? sp : max)).replace(/[\s,;:(–—-]+$/, '') + '…';
  }
  return out.replace(/[\s,;:]+$/, '');
}

// ---------------------------------------------------------------- parole chiave (glossario collegato)
let TERMS = null;
function buildTerms() {
  TERMS = [];
  for (const e of ALL) {
    if (e.type !== 'term' && e.type !== 'sign') continue;
    const words = [e.title, ...(e.aliases || [])].map((w) => w.toLowerCase()).filter((w) => w.length >= 4);
    TERMS.push({ e, words });
  }
}
export function keywords(d, max = 8) {
  if (!TERMS) buildTerms();
  const text = ' ' + [d.summary, ...d.sections.flatMap((s) => s.items.map((i) => bare(i.t)))].join(' ').toLowerCase() + ' ';
  const found = [];
  for (const { e, words } of TERMS) {
    if (e.id === d.id) continue;
    let n = 0;
    for (const w of words) {
      const re = new RegExp('(?<![\\p{L}\\p{N}])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}\\p{N}])', 'gu');
      const m = text.match(re);
      if (m) n += m.length;
    }
    if (n) found.push({ e, n });
  }
  found.sort((a, b) => b.n - a.n || a.e.title.localeCompare(b.e.title, 'it'));
  return found.slice(0, max).map(({ e }) => ({ id: e.id, title: e.title, def: easy(e.summary || '', 150) })).filter((k) => k.def);
}

/** Spezza un elenco di punti in "idee" brevi (frasi, voci separate da ; e elenchi con virgole). */
export function ideas(items, maxLen = 70) {
  const out = [];
  const splitTop = (str, sep) => {
    const parts = []; let depth = 0, cur = '';
    for (const ch of str) {
      if (ch === '(' || ch === '[') depth++;
      if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
      if (ch === sep && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
    }
    parts.push(cur);
    return parts.map((x) => x.trim()).filter(Boolean);
  };
  for (const it of items) {
    if (!['i', 's', 'r'].includes(it.k)) continue;
    const t = bare(it.t).replace(/^[•\-–\d.)\s]+/, '').replace(/[.\s]+$/, '');
    if (!t) continue;
    if (t.length <= maxLen) { out.push(t); continue; }
    const prot = t.replace(/\b(es|ecc|ca|cfr|vs|max|min|tab|fig|n|v)\.\s/gi, '$1.\u0001');
    let parts = prot.split(/(?<=[.;])\s+/).map((x) => x.replace(/\u0001/g, ' ').replace(/[.;\s]+$/, '')).filter(Boolean);
    const next = [];
    for (const p of parts) {
      if (p.length > maxLen) {
        const cs = splitTop(p, ',');
        if (cs.length >= 3 && cs.every((c) => c.length >= 4 && c.length <= 46)) { next.push(...cs); continue; }
      }
      next.push(p);
    }
    out.push(...next);
  }
  return out;
}
