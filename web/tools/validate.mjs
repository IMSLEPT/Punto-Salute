// Validatore dei contenuti: id duplicati, link dangling, sezioni sconosciute, fonti mancanti, mesh 3D senza scheda.
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
const D = path.resolve('src/data');
const files = [...fs.readFileSync('src/core/data.js', 'utf8').matchAll(/from '\.\.\/data\/([a-z0-9]+)\.js'/g)].map((m) => m[1] + '.js').filter((f) => f !== 'sources.js');
const ALL = [];
for (const f of files) {
  const m = await import(pathToFileURL(path.join(D, f)).href);
  if (Array.isArray(m.default)) for (const e of m.default) ALL.push({ ...e, _f: f });
}
const { SOURCES } = await import(pathToFileURL(path.join(D, 'sources.js')).href);
const { LAYOUTS } = await import(pathToFileURL(path.resolve('src/core/schemas.js')).href);
const ids = new Map();
let errs = 0, warns = 0;
const E = (m) => { errs++; console.log('ERR ', m); };
const W = (m) => { warns++; console.log('warn', m); };
for (const e of ALL) { if (ids.has(e.id)) E(`duplicato ${e.id} (${e._f}, ${ids.get(e.id)._f})`); ids.set(e.id, e); }
const text = (c, out = []) => {
  if (c == null) return out;
  if (typeof c === 'string') out.push(c);
  else if (Array.isArray(c)) c.forEach((x) => text(x, out));
  else if (typeof c === 'object') for (const [k, v] of Object.entries(c)) { if (k === 'svg' || k === 'html') continue; if (k === 'table') { v.head?.forEach((x) => text(x, out)); v.rows?.forEach((r) => r.forEach((x) => text(x, out))); } else text(v, out); }
  return out;
};
const dang = new Map();
const addD = (id, from) => { if (!dang.has(id)) dang.set(id, new Set()); dang.get(id).add(from); };
for (const e of ALL) {
  for (const r of e.rel || []) if (!ids.has(r)) addD(r, e.id);
  const t = [e.summary || '', ...Object.values(e.sections || {}).flatMap((s) => text(s))].join(' ');
  for (const m of t.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) if (!ids.has(m[1])) addD(m[1], e.id);
  for (const s of e.sources || []) if (!SOURCES[s]) E(`${e.id}: fonte sconosciuta ${s}`);
  const lay = LAYOUTS[e.type] || [];
  const keys = new Set(lay.map((x) => x[0]));
  if (!e.layout) for (const k of Object.keys(e.sections || {})) if (!keys.has(k)) W(`${e.id}: sezione "${k}" non nel layout ${e.type}`);
  if (!e.title || !e.summary) W(`${e.id}: titolo/sommario mancante`);
}
for (const [id, from] of [...dang].sort()) console.log(`DANGLING ${id}  <- ${[...from].slice(0, 4).join(', ')}${from.size > 4 ? '…' : ''}`);
// quiz e casi
const qb = (await import(pathToFileURL(path.join(D, 'quizbank.js')).href)).default;
const cs = (await import(pathToFileURL(path.join(D, 'cases.js')).href)).default;
for (const q of qb) { if (q.o.length !== 4) E('quiz: opzioni != 4: ' + q.q); for (const r of q.rel) if (!ids.has(r)) E(`quiz: id inesistente ${r}`); }
for (const c of cs) for (const r of c.rel) if (!ids.has(r)) E(`caso ${c.id}: id inesistente ${r}`);
console.log(`quiz scritti a mano: ${qb.length}, casi: ${cs.length}`);
// mesh 3D -> schede
const sc = fs.readFileSync('src/anatomy/scene.js', 'utf8') + fs.readdirSync('src/anatomy').map((f) => fs.readFileSync('src/anatomy/' + f, 'utf8')).join('\n');
const ents = new Set([...sc.matchAll(/ent:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]));
for (const x of ents) if (!ids.has(x)) W(`3D: entità senza scheda ${x}`);
const byType = {}; for (const e of ALL) byType[e.type] = (byType[e.type] || 0) + 1;
console.log('\nSchede:', ALL.length, JSON.stringify(byType));
console.log(`dangling: ${dang.size}  errori: ${errs}  avvisi: ${warns}`);
process.exit(errs ? 1 : 0);
