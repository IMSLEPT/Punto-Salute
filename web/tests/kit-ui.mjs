// Interfaccia del kit di studio: bottoni su schede e Anatomia 3D, cambio versione, download (PNG/PDF) tramite il ponte nativo simulato.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
let bad = 0;
const ok = (c, m) => { if (!c) { bad++; console.log('KO  ', m); } else console.log('ok  ', m); };
// ponte nativo simulato: raccoglie i file salvati
await page.addInitScript(() => {
  window.__saved = [];
  window.PuntoSalute = { version: () => '1.3.0', isNight: () => false, setBars() {}, appReady() {}, toast() {}, share() {}, openExternal() {}, keepScreenOn() {},
    saveFile(name, mime, b64, share) { window.__saved.push({ name, mime, len: b64.length, head: atob(b64.slice(0, 16)).split('').map((c) => c.charCodeAt(0)), share }); setTimeout(() => window.__psSaved(true, 'Salvato in Download/Punto Salute'), 20); } };
});
const go = async (h, ms = 400) => { await page.evaluate((h) => { location.hash = h; }, h); await page.waitForTimeout(ms); };
await page.goto(url + '/#/e/sepsi'); await page.waitForSelector('.genbar'); await page.waitForTimeout(500);
ok((await page.$$('.genbar .gbtn')).length === 5, 'scheda: Riassumi, Mappa, Schema, Infografica, Chiedi all’assistente');
const lab = await page.$$eval('.genbar .gbtn', (b) => b.map((x) => x.innerText.trim()));
ok(lab[0] === 'Riassumi' && /Mappa/.test(lab[1]) && lab[2] === 'Schema', 'etichette dei bottoni ' + lab.join(' | '));
// nessuno sbordo dei bottoni a 360 px
await page.setViewportSize({ width: 360, height: 780 });
ok(await page.evaluate(() => [...document.querySelectorAll('.genbar .gbtn')].every((b) => { const r = b.getBoundingClientRect(); return r.right <= innerWidth + 0.5 && r.left >= -0.5 && b.scrollWidth <= b.clientWidth + 1; })), 'bottoni dentro lo schermo a 360px');
await page.setViewportSize({ width: 412, height: 892 });
await page.click('.genbar [data-gen$=":mappa"]'); await page.waitForSelector('.gimg'); await page.waitForTimeout(500);
ok(/#\/genera\/sepsi\?k=mappa/.test(await page.evaluate(() => location.hash)), 'Mappa concettuale apre la pagina di generazione');
const w1 = await page.evaluate(async () => { const i = document.querySelector('.gimg'); await i.decode(); return i.naturalWidth + 'x' + i.naturalHeight + '|' + document.querySelector('#gnote').textContent; });
// Nuova versione e Ricrea
const src1 = await page.evaluate(() => document.querySelector('.gimg').src.length);
await page.click('[data-new]'); await page.waitForTimeout(700);
const n2 = await page.evaluate(() => document.querySelector('#gnote').textContent + '|' + document.querySelector('#gstyles .chip.active').textContent);
ok(n2 !== w1.split('|')[1], 'Nuova versione cambia stile/versione: ' + n2);
const imgA = await page.evaluate(() => document.querySelector('.gimg').src);
await page.click('[data-redo]'); await page.waitForTimeout(700);
const imgB = await page.evaluate(() => document.querySelector('.gimg').src);
ok(imgA !== imgB, 'Ricrea produce una variante diversa nello stesso stile');
// scegli stile
await page.click('#gstyles .chip:nth-child(1)'); await page.waitForTimeout(500);
ok(await page.evaluate(() => document.querySelector('#gstyles .chip.active').textContent) === 'Mappa mentale', 'selezione dello stile');
// schede Riassunto/Schema
await page.click('#gkinds [data-kind="0"]'); await page.waitForSelector('.sumdoc'); await page.waitForTimeout(300);
ok((await page.$$('.sumdoc h3')).length >= 4 && await page.$('[data-dl=pdf]') && await page.$('[data-dl=all]'), 'riassunto con sezioni e bottoni PDF');
await page.click('[data-dl=pdf]'); await page.waitForFunction(() => window.__saved.length >= 1);
let sv = await page.evaluate(() => window.__saved.at(-1));
ok(sv.name === 'sepsi-e-shock-settico-riassunto.pdf' && sv.mime === 'application/pdf' && String.fromCharCode(...sv.head.slice(0, 5)) === '%PDF-' && sv.len > 5000, 'PDF del riassunto salvato tramite il ponte: ' + sv.name + ' ' + sv.len);
await page.click('[data-dl=all]'); await page.waitForFunction(() => window.__saved.length >= 2, null, { timeout: 20000 });
sv = await page.evaluate(() => window.__saved.at(-1));
ok(sv.len > 500000, 'PDF completo (riassunto + mappa + schema) ' + sv.len);
await page.click('[data-dl=share]');
await page.click('#gkinds [data-kind="2"]'); await page.waitForSelector('.gimg'); await page.waitForTimeout(500);
await page.click('[data-dl=png]'); await page.waitForFunction(() => window.__saved.length >= 3);
sv = await page.evaluate(() => window.__saved.at(-1));
ok(sv.mime === 'image/png' && sv.head[1] === 0x50 && sv.head[2] === 0x4e && /schema\.png$/.test(sv.name), 'PNG dello schema salvato: ' + sv.name);
await page.click('[data-dl=share]'); await page.waitForFunction(() => window.__saved.length >= 4);
ok((await page.evaluate(() => window.__saved.at(-1))).share === true, 'Condividi immagine chiede la condivisione');
await page.click('[data-dl=pdf]'); await page.waitForFunction(() => window.__saved.length >= 5);
ok(/schema\.pdf$/.test((await page.evaluate(() => window.__saved.at(-1))).name), 'PDF dello schema');
// infografica con organi 3D reali
await page.click('#gkinds [data-kind="3"]'); await page.waitForSelector('.gimg', { timeout: 40000 }); await page.waitForTimeout(800);
ok(/Infografica/.test(await page.evaluate(() => document.querySelector('.gimg').alt)), 'scheda Infografica disponibile');
await go('/genera/cuore?k=infografica', 500); await page.waitForSelector('.gimg', { timeout: 60000 }); await page.waitForTimeout(500);
const svgTxt = await page.evaluate(() => decodeURIComponent(document.querySelector('.gimg').src.split(',')[1]));
ok((svgTxt.match(/<image /g) || []).length >= 2 && /data:image\/png;base64/.test(svgTxt), 'infografica del cuore con illustrazioni 3D reali (' + (svgTxt.match(/<image /g) || []).length + ' immagini)');
await page.click('[data-dl=png]'); await page.waitForFunction(() => window.__saved.some((f) => /infografica\.png$/.test(f.name)), null, { timeout: 30000 });
ok(true, 'PNG dell’infografica salvato');
await page.click('[data-new]'); await page.waitForTimeout(900);
ok(/Griglia|centro|Figura|colonne/i.test(await page.evaluate(() => document.querySelector('#gstyles .chip.active').textContent)), 'Nuova versione cambia impaginazione dell’infografica');
await go('/genera/sepsi?k=schema', 500); await page.waitForSelector('.gimg');
// ingrandisci
await page.click('.gzoom'); await page.waitForSelector('.sheet .zoomimg'); ok(true, 'ingrandimento a schermo intero');
await page.evaluate(() => window.__psBack()); await page.waitForTimeout(400);
ok(!(await page.$('.sheet.show')), 'tasto indietro chiude l’ingrandimento senza uscire');
// cambia argomento
await page.click('[data-topic]'); await page.waitForSelector('#tq'); await page.fill('#tq', 'diabete'); await page.waitForTimeout(500);
await page.click('#tres [data-pick]'); await page.waitForSelector('.gimg'); await page.waitForTimeout(400);
ok(/#\/genera\/diabete/.test(await page.evaluate(() => location.hash)), 'cambia argomento dalla ricerca');
// argomento inesistente
await go('/genera/inesistente?k=mappa'); ok(/non trovato/i.test(await page.evaluate(() => document.getElementById('view').innerText)), 'argomento inesistente: messaggio chiaro, nessun crash');
// Anatomia 3D: bottoni con istantanea nello schema
await go('/anatomia?s=cuore', 4000);
await page.waitForSelector('.ainfo .genbar', { timeout: 15000 });
ok((await page.$$('.ainfo .gbtn')).length === 5, 'Anatomia 3D: bottoni Riassumi / Mappa / Schema nel pannello dell’organo');
await page.click('.ainfo [data-gen$=":schema"]'); await page.waitForSelector('.gimg'); await page.waitForTimeout(800);
const snap = await page.evaluate(async () => { const s = decodeURIComponent(document.querySelector('.gimg').src.split(',')[1]); return /Vista 3D dell’app/.test(s) && /<image /.test(s); });
ok(snap, 'lo schema dell’organo contiene l’istantanea della vista 3D');
ok(errors.filter((x) => !/Failed to load resource|TUNNEL/.test(x)).length === 0, 'nessun errore in console ' + errors.slice(0, 3).join('|'));
await browser.close(); srv.close();
console.log(bad ? 'FALLITO' : 'Tutti i test superati'); process.exit(bad ? 1 : 0);
