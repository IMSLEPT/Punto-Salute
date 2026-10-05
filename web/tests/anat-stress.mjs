// Stress test della pagina Anatomia: sequenze di livelli, sesso, viste, tocchi sulla scena e sulle strutture.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
let bad = 0;
const chk = async (msg) => {
  const e = errors.filter((x) => !/GPU stall|swiftshader|favicon/i.test(x));
  const hash = await page.evaluate(() => location.hash);
  if (e.length || !hash.startsWith('#/anatomia')) { bad++; console.log('PROBLEMA dopo', msg, hash, e.slice(0, 3)); }
  errors.length = 0;
};
await page.goto(url + '/index.html#/anatomia'); await page.waitForTimeout(3500); await chk('apertura');
const nLay = await page.evaluate(() => document.querySelectorAll('.lay').length);
for (let round = 0; round < 2; round++) {
  for (let i = 0; i < nLay; i++) { await page.evaluate((i) => document.querySelectorAll('.lay')[i].click(), i); await page.waitForTimeout(250); await chk('livello ' + i); }
}
for (const sel of ['[data-sex]', '#sex button']) { /* generico */ }
const sexBtns = await page.$$('.seg button');
for (let r = 0; r < 4; r++) for (const b of sexBtns) { await b.click().catch(() => {}); await page.waitForTimeout(500); await chk('sesso'); }
for (const t of ['Fronte', 'Dietro', 'Sx', 'Dx', 'Reset']) { await page.getByText(t, { exact: true }).first().click().catch(() => {}); await page.waitForTimeout(400); await chk('vista ' + t); }
// tocchi sulla scena
const box = await page.evaluate(() => { const c = document.querySelector('canvas'); const r = c.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; });
for (let gy = 0.15; gy < 0.95; gy += 0.1) for (let gx = 0.3; gx < 0.75; gx += 0.1) {
  await page.mouse.click(box.x + box.w * gx, box.y + box.h * gy); await page.waitForTimeout(120);
  await chk(`tocco ${gx.toFixed(1)},${gy.toFixed(1)}`);
  await page.evaluate(() => window.__psBack && window.__psBack());
  await page.waitForTimeout(80);
}
// trascina e pizzica
await page.mouse.move(box.x + box.w / 2, box.y + box.h / 2); await page.mouse.down(); await page.mouse.move(box.x + box.w / 2 + 80, box.y + box.h / 2 + 30, { steps: 8 }); await page.mouse.up(); await chk('drag');
await page.mouse.wheel(0, -400); await page.waitForTimeout(200); await page.mouse.wheel(0, 900); await page.waitForTimeout(200); await chk('zoom');
// ogni chip struttura (apre il pannello)
const nChip = await page.evaluate(() => document.querySelectorAll('[data-ent], .chip[data-go], #alist button').length);
console.log('chip struttura:', nChip);
const ctxLost = await page.evaluate(() => { const c = document.querySelector('canvas'); const gl = c.getContext('webgl2') || c.getContext('webgl'); return gl ? gl.isContextLost() : 'n/d'; });
console.log('contesto WebGL perso:', ctxLost);
console.log(bad ? `${bad} problemi` : 'Anatomia: nessun problema');
await browser.close(); srv.close(); process.exit(bad ? 1 : 0);
