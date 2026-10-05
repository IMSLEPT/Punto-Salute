// Build della web app: esbuild + sprite icone + asset statici -> android/app/src/main/assets/www
import { build, context } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(here, 'src');
const OUT = path.resolve(here, '../android/app/src/main/assets/www');
const watch = process.argv.includes('--watch');

// ---------------------------------------------------------------- icone Lucide
// Qualsiasi stringa del sorgente che coincide con il nome di un'icona Lucide viene inclusa nello sprite.
function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { if (f.name !== 'gen') walk(p, acc); }
    else if (/\.(js|mjs|html)$/.test(f.name)) acc.push(p);
  }
  return acc;
}
function genIcons() {
  const dir = path.join(here, 'node_modules/lucide-static/icons');
  const names = new Set(fs.readdirSync(dir).filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4)));
  const used = new Set();
  for (const f of walk(SRC)) {
    const txt = fs.readFileSync(f, 'utf8');
    for (const m of txt.matchAll(/['"`]([a-z][a-z0-9-]{1,40})['"`]/g)) if (names.has(m[1])) used.add(m[1]);
  }
  const map = {};
  for (const n of [...used].sort()) {
    const svg = fs.readFileSync(path.join(dir, n + '.svg'), 'utf8');
    const inner = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/^[\s\S]*?>\s*(?=<(?!svg))/, '').replace(/<\/svg>\s*$/, '')
      .replace(/\s+/g, ' ').trim();
    map[n] = inner;
  }
  fs.mkdirSync(path.join(SRC, 'gen'), { recursive: true });
  fs.writeFileSync(path.join(SRC, 'gen/icons.js'),
    '// GENERATO da build.mjs (icone Lucide, licenza ISC)\nexport const LUCIDE = ' + JSON.stringify(map) + ';\n');
  return used.size;
}

// ---------------------------------------------------------------- asset statici
function copyStatic() {
  fs.mkdirSync(OUT, { recursive: true });
  let html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(OUT, 'index.html'), html);
}

function clean() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
}

const options = {
  entryPoints: [path.join(SRC, 'main.js')],
  bundle: true,
  splitting: true,
  format: 'esm',
  outdir: OUT,
  entryNames: 'app',
  chunkNames: 'chunks/[name]-[hash]',
  assetNames: 'assets/[name]-[hash]',
  loader: { '.woff2': 'file', '.svg': 'text', '.png': 'file' },
  minify: !watch,
  sourcemap: false,
  target: ['chrome87'],
  legalComments: 'none',
  logLevel: 'info',
  metafile: true,
};

clean();
const nIcons = genIcons();
console.log(`icone Lucide incluse: ${nIcons}`);
copyStatic();

if (watch) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('watching...');
} else {
  const res = await build(options);
  let total = 0;
  for (const [f, m] of Object.entries(res.metafile.outputs)) total += m.bytes;
  console.log(`build OK -> ${OUT} (${(total / 1024).toFixed(0)} KB totali)`);
}
