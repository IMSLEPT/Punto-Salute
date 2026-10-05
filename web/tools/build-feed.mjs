// Genera web/feed/sources.json (registro delle fonti + novità + avvisi per scheda) pubblicabile come file statico.
// Il feed NON contiene testo clinico delle schede: solo edizioni delle fonti, novità e avvisi “verifica la scheda”.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { SOURCES } = await import(pathToFileURL(path.resolve('src/data/sources.js')).href);
const notices = JSON.parse(fs.readFileSync('feed/notices.json', 'utf8'));
const ver = fs.readFileSync('../VERSION', 'utf8').trim();
const out = {
  schema: 1,
  generated: new Date().toISOString().slice(0, 10),
  appVersion: ver,
  sources: SOURCES,
  notices: notices.notices || [],
  alerts: notices.alerts || {},
};
// controlli di forma: nessun HTML, dimensioni ragionevoli
const s = JSON.stringify(out);
if (/<\s*script|javascript:/i.test(s)) throw new Error('feed: contenuto non ammesso');
if (s.length > 400000) throw new Error('feed troppo grande');
fs.writeFileSync('feed/sources.json', JSON.stringify(out, null, 1));
console.log('feed/sources.json', s.length, 'byte,', Object.keys(SOURCES).length, 'fonti,', out.notices.length, 'novità');
