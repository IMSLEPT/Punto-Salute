// Patch di contenuto (aggiornamento automatico del testo delle schede).
// Una patch può SOLO sostituire/aggiungere contenuto a sezioni previste per quel tipo di scheda, con testo semplice
// (nessun HTML) e collegamenti a schede esistenti. Controlli aggiuntivi: niente posologie nei farmaci, lunghezze massime.
import { LAYOUTS } from './schemas.js';
import { store } from './store.js';

const MAXS = 1500, MAXSEC = 8000;
const DOSE = /\b\d+([.,]\d+)?\s?(mg|mcg|µg|ug|mEq|UI|IU)\b|\bmg\s?\/\s?kg\b|\bmcg\s?\/\s?kg\b/i;
const BLOCK_KEYS = new Set(['p', 'ul', 'ol', 'note', 'warn', 'danger', 'ok', 'h', 'table', 'kv']);

function okStr(s, errs, ctx) {
  if (typeof s !== 'string' || !s.trim()) { errs.push('testo vuoto o non valido'); return false; }
  if (s.length > MAXS) { errs.push('testo troppo lungo'); return false; }
  if (/[<>]/.test(s)) { errs.push('HTML non ammesso'); return false; }
  if (/\[\[([^\]|]+)/.test(s)) for (const m of s.matchAll(/\[\[([a-z0-9_-]+)(?:\|[^\]]*)?\]\]/g)) if (ctx.ids && !ctx.ids.has(m[1])) { errs.push('collegamento a scheda inesistente: ' + m[1]); return false; }
  if (ctx.noDose && DOSE.test(s)) { errs.push('posologia non ammessa'); return false; }
  return true;
}
function okBlock(b, errs, ctx, depth = 0) {
  if (depth > 3) { errs.push('annidamento eccessivo'); return false; }
  if (typeof b === 'string') return okStr(b, errs, ctx);
  if (Array.isArray(b)) return b.length <= 60 && b.every((x) => okBlock(x, errs, ctx, depth + 1));
  if (b && typeof b === 'object') {
    for (const k of Object.keys(b)) if (!BLOCK_KEYS.has(k)) { errs.push('blocco non ammesso: ' + k); return false; }
    for (const [k, v] of Object.entries(b)) {
      if (k === 'ul' || k === 'ol') { if (!Array.isArray(v) || v.length > 40 || !v.every((x) => okStr(x, errs, ctx))) return false; }
      else if (k === 'table') { if (!v || !Array.isArray(v.rows) || v.rows.length > 40 || ![...(v.head || []), ...v.rows.flat()].every((x) => okStr(x, errs, ctx))) return false; }
      else if (k === 'kv') { if (!Array.isArray(v) || !v.every((p) => Array.isArray(p) && p.length === 2 && p.every((x) => okStr(x, errs, ctx)))) return false; }
      else if (!okStr(v, errs, ctx)) return false;
    }
    return true;
  }
  errs.push('formato non valido'); return false;
}

/** Valida le patch: ritorna { ok: {id: patch pulita}, rejected: [{id, errors}] }. `get(id)` restituisce la scheda o undefined. */
export function validatePatches(raw, get, ids) {
  const ok = {}, rejected = [];
  const arr = Array.isArray(raw) ? raw : Object.values(raw || {});
  for (const p of arr.slice(0, 300)) {
    const errs = [];
    const e = p && get(p.id);
    if (!e) { rejected.push({ id: p && p.id, errors: ['scheda inesistente'] }); continue; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.d || '')) errs.push('data non valida');
    for (const k of ['why', 'src']) if (typeof p[k] !== 'string' || !p[k] || p[k].length > 400 || /[<>]/.test(p[k])) errs.push(k + ' mancante o non valido');
    if (p.url && !/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}\/\S{0,300}$/i.test(p.url)) errs.push('url non valido');
    if (!p.url) errs.push('url della fonte obbligatorio');
    const ctx = { ids, noDose: e.type === 'drug' };
    const out = { id: e.id, d: p.d, why: p.why, src: p.src, url: p.url, mode: p.mode === 'append' ? 'append' : 'replace' };
    if (p.summary != null) { if (okStr(p.summary, errs, ctx)) out.summary = p.summary; }
    if (p.sections) {
      const allowed = new Set((LAYOUTS[e.type] || []).map((x) => x[0]));
      out.sections = {};
      for (const [k, v] of Object.entries(p.sections)) {
        if (!allowed.has(k)) { errs.push('sezione non prevista: ' + k); continue; }
        if (JSON.stringify(v).length > MAXSEC || !okBlock(v, errs, ctx)) { errs.push('sezione non valida: ' + k); continue; }
        out.sections[k] = v;
      }
    }
    if (!out.summary && !(out.sections && Object.keys(out.sections).length)) errs.push('patch vuota');
    if (errs.length) rejected.push({ id: p.id, errors: [...new Set(errs)] }); else ok[e.id] = out;
  }
  return { ok, rejected };
}

/** Applica le patch alle schede in memoria. */
export function applyPatches(patches, get, revoked = []) {
  let n = 0;
  for (const p of Object.values(patches || {})) {
    if (revoked.includes(p.id + '@' + p.d)) continue;
    const e = get(p.id); if (!e) continue;
    if (p.summary) e.summary = p.summary;
    for (const [k, v] of Object.entries(p.sections || {})) {
      const cur = e.sections[k];
      e.sections[k] = p.mode === 'append' && cur != null ? [].concat(cur, v) : v;
    }
    e.rev = p.d.slice(0, 7);
    e.patch = { d: p.d, why: p.why, src: p.src, url: p.url };
    n++;
  }
  return n;
}

/** Applica all'avvio le patch salvate dall'ultimo aggiornamento (l'utente può disattivarle dal Profilo). */
export function applyStoredPatches(get) {
  try {
    const cfg = store.get('updates', {});
    if (cfg.text === false) return 0;
    const f = store.get('feed', null);
    if (!f || !f.patches) return 0;
    return applyPatches(f.patches, get, f.revoked || []);
  } catch { return 0; }
}
