// Test del canale di aggiornamento: ponte nativo simulato, validazione, avvisi sulle schede, novità e profilo.
import { serve, launch } from './lib.mjs';
import fs from 'node:fs';
const feed = JSON.parse(fs.readFileSync('feed/feed.json', 'utf8'));
feed.sources.ssc.y = 'TEST-EDIZIONE-2099';
feed.alerts = { sepsi: [{ d: '2099-01-01', t: 'Avviso di prova per la scheda sepsi', s: 'fonte di prova' }] };
feed.notices.push({ id: 'x', date: '2099-01-01', title: 'Novità di prova', text: 'Testo <b>non html</b>', rel: ['sepsi'] });
feed.evil = '<script>alert(1)</script>';
feed.patches = {
  sepsi: { id: 'sepsi', d: '2099-01-02', why: 'Prova di aggiornamento', src: 'Fonte di prova', url: 'https://example.org/linea-guida', sections: { cause: ['TESTO-PATCH-SEPSI nuova causa'] } },
  bad1: { id: 'sepsi', d: '2099-01-02', why: 'x', src: 'y', url: 'https://example.org/a', sections: { cause: ['<img src=x onerror=alert(1)>'] } },
  bad2: { id: 'insulina', d: '2099-01-02', why: 'x', src: 'y', url: 'https://example.org/a', sections: { inf: ['Somministrare 10 mg al paziente'] } },
  bad3: { id: 'sepsi', d: '2099-01-02', why: 'x', src: 'y', url: 'https://example.org/a', sections: { nonesiste: ['x'] } },
  bad4: { id: 'scheda-che-non-esiste', d: '2099-01-02', why: 'x', src: 'y', url: 'https://example.org/a', sections: { cause: ['x'] } },
};
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ gl: false });
await page.addInitScript((f) => {
  window.PuntoSalute = { fetchFeed(u) { sessionStorage.setItem('lastFeedUrl', u); setTimeout(() => window.__psFeed(true, JSON.stringify(f)), 50); }, isNight: () => false, setBars() {}, version: () => '1.1.0' };
}, feed);
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('ok  ', m); };
await page.goto(url + '/index.html#/profilo'); await page.waitForTimeout(500);
await page.click('#updnow'); await page.waitForTimeout(2500);
await page.goto(url + '/index.html#/profilo'); await page.waitForTimeout(600);
ok(/1 schede aggiornate|1 scheda/.test(await page.textContent('#updst')) || /Aggiornato/.test(await page.textContent('#updst')), 'profilo: controllo riuscito');
ok(/4 patch scartate/.test(await page.textContent('#updst')), 'patch non valide scartate (HTML, posologia, sezione e scheda inesistenti)');
ok((await page.evaluate(() => sessionStorage.getItem('lastFeedUrl'))).startsWith('https://'), 'URL https usato');
await page.goto(url + '/index.html#/e/sepsi'); await page.waitForTimeout(500);
const t = await page.evaluate(() => document.getElementById('view').innerText);
ok(/Avviso di prova per la scheda sepsi/.test(t), 'avviso mostrato nella scheda');
ok(/TESTO-PATCH-SEPSI/.test(await page.evaluate(() => { document.querySelectorAll('details').forEach((d) => (d.open = true)); return document.getElementById('view').innerText; })), 'testo della scheda aggiornato dalla patch');
ok(/Scheda aggiornata il 2099-01-02/.test(t), 'banner “scheda aggiornata” con data');
await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
ok(/TEST-EDIZIONE-2099/.test(await page.evaluate(() => document.getElementById('view').innerText)), 'edizione fonte aggiornata dal feed');
await page.goto(url + '/index.html#/'); await page.waitForTimeout(600);
await page.click('[data-news]'); await page.waitForTimeout(400);
const news = await page.evaluate(() => document.querySelector('.sheet').innerText);
ok(/Novità di prova/.test(news) && /<b>non html<\/b>/.test(news), 'novità mostrate come testo semplice');
ok(!(await page.evaluate(() => /alert\(1\)/.test(localStorage.getItem('ps:feed') || ''))), 'campi non previsti scartati');
ok(errors.filter((e) => !/favicon/.test(e)).length === 0, 'nessun errore in console');
console.log(bad ? bad + ' FALLITI' : 'Aggiornamento fonti: tutto ok');
// ripristino
await page.goto(url + '/index.html#/profilo'); await page.waitForTimeout(500);
await page.click('#updreset'); await page.waitForTimeout(300);
await page.click('.modal .btn:not(.ghost), .modal [data-ok], .modal button:last-child').catch(() => {});
await page.waitForTimeout(1500);
await page.goto(url + '/index.html#/e/sepsi'); await page.waitForTimeout(600);
ok(!/TESTO-PATCH-SEPSI/.test(await page.evaluate(() => { document.querySelectorAll('details').forEach((d) => (d.open = true)); return document.getElementById('view').innerText; })), 'ripristino: tornano i testi originali');
await browser.close(); srv.close(); process.exit(bad ? 1 : 0);
