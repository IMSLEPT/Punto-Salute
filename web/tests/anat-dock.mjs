// Anatomia: seleziona strutture e prova ogni scheda del pannello (Posizione, Rapporti, Vasi e nervi…): non devono cambiare pagina.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
let bad = 0;
for (const ent of ['muscoli-adduttori', 'aorta', 'cuore', 'fegato', 'femore', 'cervello', 'rene', 'polmone-destro']) {
  await page.goto(url + '/index.html#/anatomia?s=' + ent); await page.waitForTimeout(3000);
  const n = await page.evaluate(() => document.querySelectorAll('#atabs [data-sec]').length);
  if (!n) { console.log('nessuna scheda per', ent); continue; }
  for (let i = 0; i < n; i++) {
    const before = await page.evaluate(() => location.hash);
    await page.evaluate((i) => document.querySelectorAll('#atabs [data-sec]')[i].click(), i);
    await page.waitForTimeout(250);
    const st = await page.evaluate(() => ({ h: location.hash, anat: !!document.getElementById('dock'), act: document.querySelector('#atabs .active')?.textContent, body: document.getElementById('atab')?.innerText.length }));
    if (!st.anat || !st.h.startsWith('#/anatomia') || !st.body) { bad++; console.log('PROBLEMA', ent, i, JSON.stringify(st)); }
  }
  console.log('ok', ent, n, 'schede');
}
const e = errors.filter((x) => !/GPU|swiftshader|favicon/i.test(x));
console.log(bad || e.length ? `problemi: ${bad}, errori: ${e.length}` : 'Pannello anatomia: tutto ok');
await browser.close(); srv.close(); process.exit(bad || e.length ? 1 : 0);
