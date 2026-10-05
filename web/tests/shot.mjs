// uso: node tests/shot.mjs <outdir> [--dark] <rotta|js:...> ...   (screenshot a schermo intero della vista)
import { serve, launch } from './lib.mjs';
import fs from 'node:fs';
const args = process.argv.slice(2);
const out = args.shift();
const dark = args.includes('--dark');
const routes = args.filter((a) => a !== '--dark');
fs.mkdirSync(out, { recursive: true });
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ dark });
for (const r of routes) {
  const [route, wait] = r.split('@');
  await page.goto(url + '/index.html#' + route);
  await page.waitForTimeout(Number(wait) || 700);
  if (r.startsWith('click:')) {}
  const name = route.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
  await page.screenshot({ path: `${out}/${name}${dark ? '_dark' : ''}.png` });
  console.log('shot', name);
}
if (errors.length) console.log('ERRORI:\n' + errors.join('\n'));
await browser.close(); srv.close();
