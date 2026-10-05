// Utilità di test: server statico per gli asset dell'app + Chromium headless (Playwright) in formato telefono.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const here = path.dirname(fileURLToPath(import.meta.url));
export const WWW = path.resolve(here, '../../android/app/src/main/assets/www');
const MIME = { html: 'text/html', js: 'text/javascript', css: 'text/css', json: 'application/json', svg: 'image/svg+xml', woff2: 'font/woff2', png: 'image/png' };

export function serve(port = 0) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = '/index.html';
      const f = path.join(WWW, p);
      if (!f.startsWith(WWW) || !fs.existsSync(f)) { res.writeHead(404); res.end('nf'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(f).slice(1)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(res);
    });
    srv.listen(port, '127.0.0.1', () => resolve({ srv, url: `http://127.0.0.1:${srv.address().port}` }));
  });
}

export async function launch({ dark = false, w = 412, h = 892, scale = 2, gl = true } = {}) {
  const exe = fs.readdirSync('/opt/pw-browsers').find((d) => d.startsWith('chromium-'));
  const browser = await chromium.launch({
    executablePath: `/opt/pw-browsers/${exe}/chrome-linux/chrome`,
    args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
  });
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: scale, isMobile: true, hasTouch: true, colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errors.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
  return { browser, ctx, page, errors };
}
