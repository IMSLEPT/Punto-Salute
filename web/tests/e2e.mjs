// Test end-to-end: visita tutte le rotte, verifica assenza di errori JS e prova le interazioni principali.
import { serve, launch } from './lib.mjs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const D = path.resolve('src/data');
const files = [...fs.readFileSync('src/core/data.js', 'utf8').matchAll(/from '\.\.\/data\/([a-z0-9]+)\.js'/g)].map((m) => m[1] + '.js').filter((f) => f !== 'sources.js');
const ALL = [];
for (const f of files) { const m = await import(pathToFileURL(path.join(D, f)).href); if (Array.isArray(m.default)) ALL.push(...m.default); }

const { srv, url } = await serve();
const { browser, page, errors } = await launch({ gl: false });
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.log('FAIL', m); } else console.log('ok  ', m); };
const go = async (r, ms = 250) => { await page.goto(url + '/index.html#' + r); await page.waitForTimeout(ms); };
const text = () => page.evaluate(() => document.getElementById('view').innerText);

await go('/', 800);
ok((await text()).length > 50, 'home renderizzata');

// 1) ogni scheda si apre senza errori e mostra il titolo
const routeFor = (e) => (e.type === 'scale' ? '/scala/' : e.type === 'calc' ? '/calcolatore/' : e.type === 'spec' ? '/spec/' : '/e/') + e.id;
let bad = 0, n = 0;
for (const e of ALL) {
  await page.goto(url + '/index.html#' + routeFor(e));
  await page.waitForTimeout(40);
  const t = await text();
  n++;
  if (!t.includes(e.title.slice(0, 12)) && !t.toLowerCase().includes(e.title.slice(0, 8).toLowerCase())) { bad++; if (bad < 8) console.log('  titolo assente:', e.id); }
}
ok(bad === 0, `tutte le ${n} schede si aprono con il titolo (${bad} anomale)`);

// 2) rotte di modulo
for (const r of ['/pratica', '/clinica', '/preferiti', '/note', '/profilo', '/provette', '/scale', '/calcolatore', '/patologie', '/procedure', '/dispositivi', '/emergenze', '/farmaci', '/specialistiche', '/glossario', '/fonti', '/assistenza', '/assistenza/piano', '/studio', '/studio/quiz', '/studio/esame', '/studio/flash', '/studio/casi']) {
  await go(r, 200);
  const t = await text();
  ok(t.length > 40 && !/Errore/.test(t.slice(0, 60)), 'rotta ' + r);
}

// 3) ricerca universale
await go('/', 500);
await page.click('[data-open-search] >> visible=true');
await page.waitForTimeout(250);
await page.keyboard.type('iperkaliemi');
await page.waitForTimeout(500);
const sr = await page.evaluate(() => document.body.innerText);
ok(/Iperkaliemia/i.test(sr), 'ricerca: iperkaliemia');
await page.keyboard.press('Control+A'); await page.keyboard.type('provetta viola');
await page.waitForTimeout(500);
ok(/viola|EDTA/i.test(await page.evaluate(() => document.body.innerText)), 'ricerca: provetta viola');
await page.keyboard.press('Control+A'); await page.keyboard.type('dispnea notturna');
await page.waitForTimeout(500);
ok(/ortopnea|dispnea/i.test(await page.evaluate(() => document.body.innerText)), 'ricerca: sinonimo dispnea');

// 4) piano assistenziale
await go('/assistenza/piano/nuovo', 400);
await page.fill('#pname', 'Caso test scompenso');
await page.click('#adddx');
await page.waitForTimeout(300);
await page.click('[data-pick="dolore-acuto"]');
await page.waitForTimeout(300);
await page.click('[data-sug="g"]');
await page.click('[data-sug="i"]');
await page.waitForTimeout(200);
await page.click('[data-rv] [data-v="raggiunto"]');
await page.waitForTimeout(500);
const plans = await page.evaluate(() => JSON.parse(localStorage.getItem('ps:plans') || '[]'));
ok(plans.length === 1 && plans[0].items.length === 1 && plans[0].items[0].goals.length === 1 && plans[0].items[0].ints.length === 1 && plans[0].items[0].goals[0].state === 'raggiunto', 'piano: salvato con diagnosi, obiettivo, intervento e rivalutazione');
await go('/note', 300);
ok(/Caso test scompenso/.test(await text()), 'piano compare in Note');

// 5) quiz
await go('/studio/quiz', 300);
await page.click('#go'); await page.waitForTimeout(250);
for (let i = 0; i < 10; i++) {
  await page.click('.opt >> nth=0'); await page.waitForTimeout(60);
  await page.click('#next'); await page.waitForTimeout(60);
}
ok(/corrette/.test(await text()), 'quiz: completato con risultato');
// esame
await go('/studio/esame', 300);
await page.click('#go'); await page.waitForTimeout(250);
ok(/\d+:\d\d/.test(await text()), 'esame: timer attivo');
for (let i = 0; i < 20; i++) { await page.click('.opt >> nth=1'); await page.click('#next'); await page.waitForTimeout(40); }
ok(/Da ripassare|Nessun errore/.test(await text()), 'esame: risultato');
// flashcard
await go('/studio/flash', 300);
await page.click('#go'); await page.waitForTimeout(200);
await page.click('#flip'); await page.waitForTimeout(100);
await page.click('[data-r="2"]'); await page.waitForTimeout(100);
const srs = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('ps:srs') || '{}')).length);
ok(srs === 1, 'flashcard: valutazione salvata');
// caso clinico
await go('/studio/caso/caso-ipoglicemia', 300);
for (let i = 0; i < 4; i++) { await page.click('.opt >> nth=0'); await page.click('#next'); await page.waitForTimeout(60); }
ok(/decisioni corrette/.test(await text()), 'caso clinico: completato');

// 6) glossario: tocco su termine in scheda apre la definizione
await go('/e/scompenso-cardiaco', 500);
const hasTerm = await page.evaluate(() => !!document.querySelector('a.term'));
ok(hasTerm, 'scheda: termini del glossario collegati');
if (hasTerm) { await page.click('a.term >> nth=0'); await page.waitForTimeout(300); ok(await page.evaluate(() => !!document.querySelector('.sheet')), 'termine: si apre il foglio con la definizione'); }

// 7) calcolatore
await go('/calcolatore/calc-gocce', 400);
const inputs = await page.$$('#view input');
ok(inputs.length >= 2, 'calcolatore gocce: campi presenti');

const real = errors.filter((e) => !/favicon|GPU stall|WebGL/i.test(e));
ok(real.length === 0, 'nessun errore in console' + (real.length ? '\n' + real.slice(0, 6).join('\n') : ''));
console.log(fail ? `\n${fail} test FALLITI` : '\nTutti i test superati');
await browser.close(); srv.close();
process.exit(fail ? 1 : 0);
