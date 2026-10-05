// Verifica statica: ogni data-go presente in ogni pagina deve corrispondere a una rotta registrata (e, per /e/:id, a una scheda esistente).
import { serve, launch } from './lib.mjs';
import fs from 'node:fs';
import { loadAll } from '../tools/lib-data.mjs';
const ALL = await loadAll('.');
const ids = new Set(ALL.map((e) => e.id));
const main = fs.readFileSync('src/main.js', 'utf8');
const pats = [...main.matchAll(/^R\('([^']+)'/gm)].map((m) => new RegExp('^' + m[1].replace(/\/:([a-zA-Z]+)/g, '/([^/]+)') + '/?$'));
const routeFor = (e) => (e.type === 'scale' ? '/scala/' : e.type === 'calc' ? '/calcolatore/' : e.type === 'spec' ? '/spec/' : '/e/') + e.id;
const pages = ['/', '/pratica', '/clinica', '/preferiti', '/note', '/profilo', '/anatomia', '/provette', '/scale', '/calcolatore', '/patologie', '/procedure', '/dispositivi', '/emergenze', '/farmaci', '/specialistiche', '/schemi', '/glossario', '/fonti', '/assistenza', '/assistenza/piano', '/studio', '/studio/quiz', '/studio/esame', '/studio/flash', '/studio/casi', ...ALL.map(routeFor)];
const { srv, url } = await serve();
const { browser, page } = await launch({ gl: false, scale: 1 });
const seen = new Map();
for (const p of pages) {
  await page.goto(url + '/index.html#' + p); await page.waitForTimeout(60);
  await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
  const gos = await page.evaluate(() => [...new Set([...document.querySelectorAll('[data-go]')].map((e) => e.dataset.go))]);
  for (const g of gos) { const path = g.split('?')[0]; if (seen.has(g)) continue; const m = path.match(/^\/(e|scala|calcolatore|spec)\/(.+)$/); const okRoute = pats.some((r) => r.test(path)); const okId = !m || ids.has(m[2]) || (m[1] === 'assistenza'); seen.set(g, { okRoute, okId, from: p }); }
}
let bad = 0;
for (const [g, v] of seen) if (!v.okRoute || !v.okId) { bad++; console.log('LINK ROTTO', g, 'da', v.from, v); }
console.log(`link unici verificati: ${seen.size}, rotti: ${bad}`);
await browser.close(); srv.close(); process.exit(bad ? 1 : 0);
