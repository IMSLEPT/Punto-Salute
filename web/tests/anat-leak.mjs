// Perdita di memoria: entrando e uscendo dall'Anatomia la scena 3D deve essere rilasciata (nessun canvas residuo, nessun errore).
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, ctx, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
const cdp = await ctx.newCDPSession(page);
await cdp.send('Performance.enable');
const heap = async () => (await cdp.send('Performance.getMetrics')).metrics.find((m) => m.name === 'JSHeapUsedSize').value / 1048576;
let bad = 0;
await page.goto(url + '/index.html#/'); await page.waitForTimeout(600);
const h0 = await heap();
for (let i = 0; i < 6; i++) {
  await page.evaluate(() => window.__ps.navigate('/anatomia?s=cuore')); await page.waitForTimeout(3200);
  const inside = await page.evaluate(() => document.querySelectorAll('canvas').length);
  await page.evaluate(() => window.__ps.navigate('/e/sepsi')); await page.waitForTimeout(500);
  const after = await page.evaluate(() => ({ c: document.querySelectorAll('canvas').length, a: !!window.__anat }));
  console.log(`giro ${i + 1}: canvas dentro=${inside}, dopo l’uscita=${after.c}, scena attiva=${after.a}, heap=${(await heap()).toFixed(0)} MB`);
  if (after.c !== 0 || after.a) bad++;
}
const e = errors.filter((x) => !/GPU|swiftshader|favicon/i.test(x));
console.log(bad || e.length ? `problemi: ${bad}, errori: ${e.length} ${e[0] || ''}` : 'Anatomia: scena rilasciata correttamente');
await browser.close(); srv.close(); process.exit(bad || e.length ? 1 : 0);
