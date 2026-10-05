// Caricamento dei moduli dati in Node (usato da validate.mjs e build-feed.mjs).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
export async function loadAll(root = '.') {
  const D = path.resolve(root, 'src/data');
  const files = [...fs.readFileSync(path.resolve(root, 'src/core/data.js'), 'utf8').matchAll(/from '\.\.\/data\/([a-z0-9]+)\.js'/g)].map((m) => m[1] + '.js').filter((f) => f !== 'sources.js' && f !== 'figmap.js');
  const ALL = [];
  for (const f of files) { const m = await import(pathToFileURL(path.join(D, f)).href); if (Array.isArray(m.default)) ALL.push(...m.default); }
  return ALL;
}
