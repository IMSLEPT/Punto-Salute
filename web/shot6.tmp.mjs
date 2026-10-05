import { serve, launch } from './tests/lib.mjs';
import fs from 'node:fs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
await page.goto(url + '/#/genera/sepsi?k=riassunto'); await page.waitForSelector('.sumdoc'); await page.waitForTimeout(500);
const jobs = [['prelievo-venoso', 1], ['paracetamolo', 2], ['ictus', 0], ['diabete-mellito', 1]];
for (const [id, st] of jobs) {
  const t0 = Date.now();
  const r = await page.evaluate(async ([id, st]) => { const K = window.__psKit; const e = K.get(id); const ill = await K.loadIllus(e); const r = K.buildInfographic(e, { style: st, seed: 3, illustrations: ill }); const png = await K.toPng(r.svg, r.w, r.h, 0.8); const b = new Uint8Array(await png.arrayBuffer()); let s = ''; for (let i = 0; i < b.length; i += 8192) s += String.fromCharCode(...b.subarray(i, i + 8192)); return { b64: btoa(s), ill: ill.length, h: r.h, len: r.svg.length }; }, [id, st]);
  fs.writeFileSync(`/tmp/i_${id}_${st}.png`, Buffer.from(r.b64, 'base64'));
  console.log(id, st, 'illustrazioni', r.ill, 'h', r.h, 'svg', Math.round(r.len / 1000) + 'KB', (Date.now() - t0) + 'ms');
}
console.log(errors.filter((x) => !/TUNNEL|Failed/.test(x)));
await browser.close(); srv.close();
