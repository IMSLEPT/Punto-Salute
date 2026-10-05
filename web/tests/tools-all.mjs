// Scale e calcolatori: ogni scala con opzioni casuali (punteggio coerente e nessun NaN), ogni calcolatore con i valori predefiniti.
import { serve, launch } from './lib.mjs';
import { loadAll } from '../tools/lib-data.mjs';
const ALL = await loadAll('.');
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ gl: false, scale: 1 });
let bad = 0; const P = (m) => { bad++; console.log('PROBLEMA', m); };
for (const e of ALL.filter((x) => x.type === 'scale')) {
  await page.goto(url + '/index.html#/scala/' + e.id); await page.waitForTimeout(250);
  if (e.scale.special === 'news2') {
    for (const [k, v] of [['fr', '8'], ['sp', '90'], ['pa', '85'], ['fc', '135'], ['t', '39.5']]) { await page.fill(`[data-k=${k}]`, v); }
    await page.selectOption('[data-k=o2]', '1'); await page.selectOption('[data-k=cvpu]', '1');
    await page.waitForTimeout(200);
    const t = await page.evaluate(() => document.getElementById('out').innerText);
    if (!/\d/.test(t) || /NaN|undefined/.test(t)) P('NEWS2 ' + t.slice(0, 80)); else console.log('ok NEWS2', t.replace(/\n/g, ' ').slice(0, 60));
    continue;
  }
  let expect = 0;
  for (const g of e.scale.groups) {
    const i = Math.floor(Math.random() * g.opts.length);
    await page.evaluate(([id, i]) => document.querySelectorAll(`input[name=${id}]`)[i].click(), [g.id, i]);
    expect += g.opts[i][1];
  }
  await page.waitForTimeout(200);
  const t = await page.evaluate(() => document.getElementById('out').innerText);
  if (!new RegExp('(^|\\D)' + String(expect).replace('-', '[−-]') + '(\\D|$)').test(t) || /NaN|undefined/.test(t)) P(`scala ${e.id}: atteso ${expect}, mostrato «${t.replace(/\n/g, ' ').slice(0, 80)}»`); else console.log('ok', e.id, expect);
}
for (const e of ALL.filter((x) => x.type === 'calc')) {
  await page.goto(url + '/index.html#/calcolatore/' + e.id); await page.waitForTimeout(300);
  for (const inp of e.calc.inputs) { await page.fill(`[data-i=${inp.id}]`, /^Conversione/.test(inp.label) ? '1' : String(inp.def ?? 10)); }
  await page.waitForTimeout(150);
  const t = await page.evaluate(() => document.getElementById('out').innerText);
  if (!t.trim() || /NaN|Infinity|undefined/.test(t)) P(`calcolatore ${e.id} con valori di prova: «${t.slice(0, 80)}»`); else console.log('ok', e.id, t.replace(/\n/g, ' ').slice(0, 60));
  // valori limite: zero, negativi, enormi, testo, virgola decimale: la pagina non deve rompersi
  for (const v of ['0', '-5', '1e9', 'abc', '2,5', '']) {
    for (const i of await page.$$('[data-i]')) await i.fill(v);
    await page.waitForTimeout(100);
    const tt = await page.evaluate(() => document.getElementById('out').innerText);
    if (/NaN|undefined/.test(tt)) P(`calcolatore ${e.id} con «${v}»: ${tt.slice(0, 60)}`);
  }
}
const er = errors.filter((x) => !/favicon/i.test(x));
console.log(bad || er.length ? `problemi: ${bad}, errori: ${er.length}` : 'Scale e calcolatori: tutto ok'); if (er.length) console.log(er.slice(0, 4));
await browser.close(); srv.close(); process.exit(bad || er.length ? 1 : 0);
