// Funzioni trasversali: ricerca, filtri, preferiti, note, protocollo provette, tema e dimensione del testo, backup.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ gl: false, scale: 1 });
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('ok  ', m); };
const txt = () => page.evaluate(() => document.getElementById('view').innerText);
await page.goto(url + '/index.html#/'); await page.waitForTimeout(600);

// ricerca: risultati, filtri per tipo, apertura, indietro
await page.click('[data-open-search] >> visible=true'); await page.waitForTimeout(250);
await page.keyboard.type('ipertensione'); await page.waitForTimeout(500);
const types = await page.$$('#searchov [data-type]');
ok(types.length > 1, 'ricerca: filtri per tipo presenti (' + types.length + ')');
for (const t of types.slice(0, 5)) { await t.click().catch(() => {}); await page.waitForTimeout(120); }
await page.click('#searchov .item >> nth=0'); await page.waitForTimeout(500);
ok(/#\/e\//.test(await page.evaluate(() => location.hash)), 'ricerca: apre la scheda');
await page.evaluate(() => window.__psBack()); await page.waitForTimeout(400);
ok(await page.evaluate(() => location.hash) === '#/', 'indietro dalla scheda torna alla Home');

// preferiti e note
await page.goto(url + '/index.html#/e/sepsi'); await page.waitForTimeout(500);
await page.click('[data-fav="sepsi"]'); await page.waitForTimeout(200);
await page.fill('[data-note="sepsi"]', 'protocollo di prova locale'); await page.waitForTimeout(500);
await page.goto(url + '/index.html#/preferiti'); await page.waitForTimeout(400);
ok(/Sepsi/.test(await txt()), 'preferiti: scheda salvata presente');
await page.goto(url + '/index.html#/note'); await page.waitForTimeout(400);
ok(/protocollo di prova locale/.test(await txt()), 'note: appunto presente');

// protocollo provette: modifica, salva, persiste
await page.goto(url + '/index.html#/provette'); await page.waitForTimeout(500);
await page.click('#cfg'); await page.waitForTimeout(400);
await page.fill('.sheet [data-t] [data-f=title] >> nth=0', 'Provetta di prova struttura');
await page.click('.sheet #sv'); await page.waitForTimeout(500);
ok(/Provetta di prova struttura/.test(await txt()), 'provette: nome personalizzato salvato');
await page.goto(url + '/index.html#/provette'); await page.waitForTimeout(400);
ok(/Provetta di prova struttura/.test(await txt()), 'provette: personalizzazione persistente');
await page.click('#cfg'); await page.waitForTimeout(300); await page.click('.sheet #rs').catch(() => {}); await page.waitForTimeout(300);

// tema e dimensione testo
await page.goto(url + '/index.html#/profilo'); await page.waitForTimeout(400);
await page.click('#theme [data-v=dark]'); await page.waitForTimeout(200);
ok(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'tema scuro applicato');
await page.click('#theme [data-v=light]'); await page.click('#fs button >> nth=3'); await page.waitForTimeout(200);
ok(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--fs').trim()) === '1.25', 'dimensione testo molto grande applicata');
await page.click('#fs button >> nth=1');

// esporta backup non deve rompere
await page.goto(url + '/index.html#/note'); await page.waitForTimeout(300);
const er = errors.filter((x) => !/favicon/i.test(x));
ok(er.length === 0, 'nessun errore in console' + (er.length ? ': ' + er[0] : ''));
console.log(bad ? bad + ' FALLITI' : 'Funzioni trasversali: tutto ok');
await browser.close(); srv.close(); process.exit(bad ? 1 : 0);
