// uso: node tests/anat.mjs out.png "layers,csv" [view] [select]
import { serve, launch } from './lib.mjs';
const [out, layers = 'cute,organi', view = 'front', sel = ''] = process.argv.slice(2);
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892 });
await page.goto(url + '/index.html#/anatomia');
await page.waitForFunction(() => window.__anat, null, { timeout: 20000 }).catch(() => {});
await page.waitForTimeout(2500);
await page.evaluate(([layers, view, sel]) => {
  const a = window.__anat; if (!a) return;
  a.setLayers(layers.split(',')); a.view(view); if (sel) a.select(sel);
}, [layers, view, sel]);
await page.waitForTimeout(1800);
await page.screenshot({ path: out });
console.log(errors.slice(0, 8).join('\n'));
await browser.close(); srv.close();
