// Crawler di debug: per ogni pagina clicca OGNI elemento cliccabile (partendo da pagina nuova) e segnala
// errori JS, ritorni inattesi alla home e contenuti che escono dai propri contenitori (overflow).
// uso: node tests/crawl.mjs [--w=412] [--fs=1] [--only=prefisso] [--noclick] [--nooverflow]
import { serve, launch } from './lib.mjs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith('--' + k + '=')) || '').split('=')[1] ?? d;
const W = +arg('w', 412), FS = +arg('fs', 1), ONLY = arg('only', ''), NOCLICK = process.argv.includes('--noclick'), NOOVF = process.argv.includes('--nooverflow');

const D = path.resolve('src/data');
const files = [...fs.readFileSync('src/core/data.js', 'utf8').matchAll(/from '\.\.\/data\/([a-z0-9]+)\.js'/g)].map((m) => m[1] + '.js').filter((f) => f !== 'sources.js' && f !== 'figmap.js');
const ALL = [];
for (const f of files) { const m = await import(pathToFileURL(path.join(D, f)).href); if (Array.isArray(m.default)) ALL.push(...m.default); }
const routeFor = (e) => (e.type === 'scale' ? '/scala/' : e.type === 'calc' ? '/calcolatore/' : e.type === 'spec' ? '/spec/' : '/e/') + e.id;

const STATIC = ['/genera/cuore?k=infografica', '/studio/casi', '/assistente', '/genera/sepsi?k=riassunto', '/genera/sepsi?k=mappa', '/genera/sepsi?k=schema', '/genera/cuore?k=schema', '/genera/prelievo-venoso?k=riassunto', '/profilo?sec=ai', '/', '/pratica', '/clinica', '/preferiti', '/note', '/profilo', '/anatomia', '/anatomia?s=aorta', '/anatomia?s=muscoli-adduttori', '/provette', '/scale', '/calcolatore', '/patologie', '/procedure', '/dispositivi', '/emergenze', '/farmaci', '/specialistiche', '/glossario', '/fonti', '/assistenza', '/assistenza/piano', '/assistenza/piano/nuovo', '/studio', '/studio/quiz', '/studio/esame', '/studio/flash', '/studio/casi', '/studio/caso/caso-sepsi'];
const perType = {};
const sample = [];
const ALLP = process.argv.includes('--all');
for (const e of ALL) { (perType[e.type] ||= []); if (ALLP || perType[e.type].length < 3) { perType[e.type].push(e); sample.push(routeFor(e)); } }
const ROUTES = [...STATIC, ...sample].filter((r) => r.startsWith(ONLY));

const { srv, url } = await serve();
const { browser, ctx, page, errors } = await launch({ w: W, h: Math.round(W * 2.16), scale: 1 });
await page.addInitScript((fs) => { try { localStorage.setItem('ps:settings', JSON.stringify({ theme: 'light', fs, motion: false })); } catch {} }, FS);

const problems = [];
const P = (kind, where, msg) => { problems.push({ kind, where, msg }); console.log(`[${kind}] ${where} :: ${msg}`); };

async function load(r, wait = 350) { await page.goto(url + '/index.html#' + r); await page.waitForTimeout(r.startsWith('/anatomia') ? 2500 : wait); }

const OVF = () => {
  const out = [];
  const view = document.getElementById('app');
  const vw = document.documentElement.clientWidth;
  const sel = 'button, .chip, .badge, .tab, .btn, .opt, .hcard, .seg > *, .item, .pill, .iconbtn, a.lk, a.term, .tile-ic, label.field > span, .layer, .dock *';
  const seen = new Set();
  for (const el of document.querySelectorAll(sel)) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height || cs.visibility === 'hidden' || el.closest('[hidden]')) continue;
    if (el.closest('.chips') === null && !el.closest('.tablewrap') && r.right > vw + 1 && !el.closest('.sectionnav, .dock, #layers')) { out.push(['fuori-schermo', el]); }
    // testo/figli che escono dal contenitore
    if (el.scrollWidth > el.clientWidth + 1 && cs.overflowX !== 'auto' && cs.overflowX !== 'scroll' && el.clientWidth > 0) out.push(['scrollWidth', el]);
    for (const ch of el.querySelectorAll('*')) {
      const c = ch.getBoundingClientRect();
      if (!c.width || ch.closest('svg') && ch.tagName !== 'svg') continue;
      if (c.right > r.right + 1.5 || c.left < r.left - 1.5) { out.push(['figlio-fuori', el, ch]); break; }
    }
  }
  const res = [];
  for (const [k, el, ch] of out) {
    const key = k + (el.className || el.tagName) + (el.textContent || '').trim().slice(0, 24);
    if (seen.has(key)) continue; seen.add(key);
    res.push(`${k}: <${el.tagName.toLowerCase()} class="${String(el.className).slice(0, 40)}"> "${(el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)}" w=${Math.round(el.getBoundingClientRect().width)} sw=${el.scrollWidth}${ch ? ' figlio=' + ch.tagName : ''}`);
  }
  return res;
};

let nPages = 0, nClicks = 0;
for (const r of ROUTES) {
  nPages++;
  await load(r);
  if (!NOOVF) {
    const ov = await page.evaluate(OVF);
    for (const m of ov) P('overflow', `${r} (w=${W}, fs=${FS})`, m);
    // anche con ogni sezione aperta
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
    const ov2 = await page.evaluate(OVF);
    for (const m of ov2.filter((x) => !ov.includes(x))) P('overflow', `${r} [sezioni aperte]`, m);
  }
  if (NOCLICK) continue;
  const n = await page.evaluate(() => document.querySelectorAll('#topbar button:not([data-open-search]), #view button, #view [data-go], #view a[href], #view .term, #tabbar button').length);
  for (let i = 0; i < n; i++) {
    await load(r, 200);
    const info = await page.evaluate((i) => {
      const els = document.querySelectorAll('#topbar button:not([data-open-search]), #view button, #view [data-go], #view a[href], #view .term, #tabbar button');
      const el = els[i]; if (!el) return null;
      const r = el.getBoundingClientRect();
      const vis = r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden' && !el.closest('[hidden]');
      return { vis, go: el.dataset.go || '', txt: (el.textContent || el.getAttribute('aria-label') || el.id || '').trim().replace(/\s+/g, ' ').slice(0, 40), cls: String(el.className).slice(0, 30), dis: el.disabled || el.getAttribute('disabled') !== null };
    }, i);
    if (!info || !info.vis || info.dis) continue;
    if (/share|condividi|esporta|Elimina|Cancella|Importa/i.test(info.txt)) continue;
    errors.length = 0;
    nClicks++;
    try {
      await page.evaluate((i) => { document.querySelectorAll('#topbar button:not([data-open-search]), #view button, #view [data-go], #view a[href], #view .term, #tabbar button')[i].scrollIntoView({ block: 'center' }); }, i);
      await page.evaluate((i) => document.querySelectorAll('#topbar button:not([data-open-search]), #view button, #view [data-go], #view a[href], #view .term, #tabbar button')[i].click(), i);
    } catch (e) { P('click', `${r} #${i} "${info.txt}"`, e.message.slice(0, 100)); continue; }
    await page.waitForTimeout(r.startsWith('/anatomia') ? 500 : 250);
    const hash = await page.evaluate(() => location.hash);
    const body = await page.evaluate(() => document.getElementById('view').innerText.slice(0, 80));
    const errs = errors.filter((e) => !/GPU stall|swiftshader|WebGL|favicon/i.test(e));
    const where = `${r} → "${info.txt}" ${info.go ? '(' + info.go + ')' : ''}`;
    if (errs.length) P('errore-js', where, errs[0].slice(0, 220));
    if (info.go && hash !== '#' + info.go && hash === '#/' && info.go !== '/') P('torna-home', where, 'hash=' + hash);
    else if (info.go && hash !== '#' + info.go && !hash.startsWith('#' + info.go)) P('rotta-diversa', where, 'hash=' + hash);
    if (/^Errore/.test(body.trim())) P('pagina-errore', where, body.slice(0, 60));
    if (!info.go && hash === '#/' && r !== '/' && !/Home/.test(info.txt)) P('torna-home', where, 'hash=' + hash + ' dopo click senza data-go');
  }
}
console.log(`\nPagine: ${nPages}, click: ${nClicks}, problemi: ${problems.length}`);
fs.writeFileSync('/tmp/crawl-report.json', JSON.stringify(problems, null, 1));
await browser.close(); srv.close();
