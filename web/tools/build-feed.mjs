// Genera web/feed/feed.json: fonti, novità, avvisi e PATCH di testo delle schede, validati con le stesse regole dell'app.
// Le patch si scrivono in web/feed/patches/*.json (una o più per file). Una patch non valida fa fallire la build.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadAll } from './lib-data.mjs';
const { SOURCES } = await import(pathToFileURL(path.resolve('src/data/sources.js')).href);
const { validatePatches } = await import(pathToFileURL(path.resolve('src/core/patches.js')).href);
const ALL = await loadAll();
const BY = new Map(ALL.map((e) => [e.id, e]));
const notices = JSON.parse(fs.readFileSync('feed/notices.json', 'utf8'));
const dir = 'feed/patches';
let raw = [];
if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  raw.push(...(Array.isArray(j) ? j : [j]));
}
// una sola patch per scheda: vale la più recente
const latest = new Map();
for (const p of raw) { const c = latest.get(p.id); if (!c || String(p.d) >= String(c.d)) latest.set(p.id, p); }
const { ok, rejected } = validatePatches([...latest.values()], (id) => BY.get(id), new Set(BY.keys()));
if (rejected.length) { console.error('PATCH NON VALIDE:\n' + rejected.map((r) => ` - ${r.id}: ${r.errors.join('; ')}`).join('\n')); process.exit(1); }
const revoked = JSON.parse(fs.existsSync('feed/revoked.json') ? fs.readFileSync('feed/revoked.json', 'utf8') : '[]');
const out = {
  schema: 2,
  generated: new Date().toISOString().slice(0, 10),
  appVersion: fs.readFileSync('../VERSION', 'utf8').trim(),
  disabled: false,
  sources: SOURCES,
  notices: notices.notices || [],
  alerts: notices.alerts || {},
  patches: ok,
  revoked,
};
const s = JSON.stringify(out);
if (s.length > 1800000) throw new Error('feed troppo grande');
fs.writeFileSync('feed/feed.json', JSON.stringify(out, null, 1));
fs.writeFileSync('feed/sources.json', JSON.stringify({ ...out, schema: 1, patches: undefined, revoked: undefined }, null, 1)); // compatibilità con le versioni 1.1.x
console.log('feed/feed.json', s.length, 'byte,', Object.keys(SOURCES).length, 'fonti,', Object.keys(ok).length, 'patch,', out.notices.length, 'novità');
