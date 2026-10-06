// Backup e ripristino: cifratura con password, chiavi API incluse solo se richiesto, ripristino da file e da testo, errori.
import { serve, launch } from './lib.mjs';
import fs from 'node:fs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1, gl: false });
let bad = 0;
const ok = (c, m) => { if (!c) { bad++; console.log('KO  ', m); } else console.log('ok  ', m); };
await page.addInitScript(() => {
  window.__saved = [];
  window.PuntoSalute = { version: () => '1.3.1', isNight: () => false, setBars() {}, appReady() {}, toast() {}, share() {}, openExternal() {}, keepScreenOn() {},
    saveFile(name, mime, b64, share) { window.__saved.push({ name, mime, text: decodeURIComponent(escape(atob(b64))), share }); setTimeout(() => window.__psSaved(true, 'Salvato in Download/Punto Salute'), 20); } };
  if (!localStorage.getItem('__seeded')) {
    localStorage.setItem('ps:favs', JSON.stringify(['sepsi', 'bpco']));
    localStorage.setItem('ps:notes', JSON.stringify({ sepsi: 'nota di prova' }));
    localStorage.setItem('ps:ai', JSON.stringify({ on: true, provider: 'openrouter', key: 'sk-segretissima-123', model: 'openrouter/free', web: true }));
    localStorage.setItem('ps:caseHist', JSON.stringify({ x: { attempts: [{ t: 1, good: 2, total: 4 }] } }));
    localStorage.setItem('__seeded', '1');
  }
});
await page.goto(url + '/#/profilo'); await page.waitForSelector('#bkcard'); await page.waitForTimeout(400);
// 1) chiavi senza password: rifiutato
await page.check('#bkkeys'); await page.click('#bkmake'); await page.waitForTimeout(300);
ok((await page.evaluate(() => window.__saved.length)) === 0, 'chiavi API senza password: nessun file creato');
// 2) backup cifrato con chiavi
await page.fill('#bkpw', 'password-di-prova'); await page.click('#bkmake'); await page.waitForFunction(() => window.__saved.length === 1);
let f = await page.evaluate(() => window.__saved[0]);
const env = JSON.parse(f.text);
ok(/^punto-salute-backup-\d{4}-\d\d-\d\d\.json$/.test(f.name) && f.mime === 'application/json', 'file nei Download con nome e tipo corretti: ' + f.name);
ok(env.enc === 'aes-256-gcm' && env.iter >= 200000 && !/sk-segretissima|nota di prova|sepsi/.test(f.text), 'contenuto cifrato: nessun dato leggibile nel file');
fs.writeFileSync('/tmp/backup_enc.json', f.text);
// 3) backup in chiaro senza chiavi
await page.fill('#bkpw', ''); await page.uncheck('#bkkeys'); await page.click('#bkmake'); await page.waitForFunction(() => window.__saved.length === 2);
f = await page.evaluate(() => window.__saved[1]);
const plain = JSON.parse(f.text);
ok(plain.enc === 'none' && plain.payload.data.favs.length === 2 && plain.payload.data.ai.key === '' && !/sk-segretissima/.test(f.text), 'backup senza password: dati presenti, chiave API NON inclusa');
fs.writeFileSync('/tmp/backup_plain.json', f.text);
// 4) condividi
await page.click('#bkshare'); await page.waitForFunction(() => window.__saved.length === 3);
ok((await page.evaluate(() => window.__saved[2].share)) === true, 'Crea e condividi chiede la condivisione');
// 5) cancella tutto e ripristina il backup cifrato da FILE
await page.evaluate(() => { localStorage.clear(); localStorage.setItem('__seeded', '1'); });
await page.reload(); await page.waitForSelector('#bkcard');
ok(await page.evaluate(() => !localStorage.getItem('ps:ai')), 'dati azzerati prima del ripristino');
await page.setInputFiles('#bkpick', '/tmp/backup_enc.json');
await page.waitForSelector('#bkpw2'); await page.fill('#bkpw2', 'sbagliata'); await page.click('.modal [data-yes]'); await page.waitForTimeout(500);
ok(/Password errata/.test(await page.textContent('#bkst')), 'password errata: messaggio chiaro, nessun dato scritto');
ok(await page.evaluate(() => !localStorage.getItem('ps:ai')), 'nessun dato ripristinato con password errata');
await page.setInputFiles('#bkpick', '/tmp/backup_enc.json');
await page.waitForSelector('#bkpw2'); await page.fill('#bkpw2', 'password-di-prova'); await page.click('.modal [data-yes]');
await page.waitForFunction(() => [...document.querySelectorAll('.modal')].some((m) => /Ripristinare il backup/.test(m.innerText))); ok(/chiavi API/.test(await page.evaluate(() => [...document.querySelectorAll('.modal')].map((m) => m.innerText).join(' '))), 'conferma elenca le chiavi API');
await page.evaluate(() => [...document.querySelectorAll('.modal')].find((m) => /Ripristinare il backup/.test(m.innerText)).querySelector('[data-yes]').click()); await page.waitForTimeout(1200);
const restored = await page.evaluate(() => ({ ai: JSON.parse(localStorage.getItem('ps:ai') || 'null'), favs: JSON.parse(localStorage.getItem('ps:favs') || '[]'), notes: JSON.parse(localStorage.getItem('ps:notes') || '{}'), ch: localStorage.getItem('ps:caseHist') }));
ok(restored.ai && restored.ai.key === 'sk-segretissima-123' && restored.ai.model === 'openrouter/free', 'chiave API e modello ripristinati senza reinserirli');
ok(restored.favs.length === 2 && restored.notes.sepsi === 'nota di prova' && /attempts/.test(restored.ch), 'preferiti, note e casi ripristinati');
// 6) ripristino da testo incollato (backup in chiaro)
await page.evaluate(() => { localStorage.clear(); localStorage.setItem('__seeded', '1'); });
await page.reload(); await page.waitForSelector('#bkpaste');
await page.click('#bkpaste'); await page.waitForSelector('#bktxt'); await page.fill('#bktxt', fs.readFileSync('/tmp/backup_plain.json', 'utf8')); await page.click('#bkgo');
await page.waitForSelector('.modal [data-yes]'); await page.click('.modal [data-yes]'); await page.waitForTimeout(1200);
const r2 = await page.evaluate(() => ({ favs: JSON.parse(localStorage.getItem('ps:favs') || '[]'), ai: JSON.parse(localStorage.getItem('ps:ai') || '{}') }));
ok(r2.favs.length === 2 && !r2.ai.key, 'ripristino da testo incollato: dati tornano, chiave vuota come nel backup');
// 7) file non valido / manomesso / chiavi pericolose
await page.waitForSelector('#bkcard');
fs.writeFileSync('/tmp/junk.json', '{"ciao": 1}');
await page.setInputFiles('#bkpick', '/tmp/junk.json'); await page.waitForTimeout(500);
ok(/non è un backup/.test(await page.textContent('#bkst')), 'file estraneo rifiutato');
const tampered = JSON.parse(fs.readFileSync('/tmp/backup_enc.json', 'utf8')); tampered.ct = tampered.ct.slice(0, -8) + 'AAAAAAAA';
fs.writeFileSync('/tmp/tampered.json', JSON.stringify(tampered));
await page.setInputFiles('#bkpick', '/tmp/tampered.json'); await page.waitForSelector('#bkpw2'); await page.fill('#bkpw2', 'password-di-prova'); await page.click('.modal [data-yes]'); await page.waitForFunction(() => /Password errata o file danneggiato/.test(document.querySelector('#bkst')?.textContent || ''), null, { timeout: 8000 }).catch(() => {});
ok(/Password errata o file danneggiato/.test(await page.textContent('#bkst')), 'file manomesso rilevato (GCM)');
const evil = { format: 'punto-salute-backup', v: 1, enc: 'none', payload: { app: 'punto-salute-backup', v: 1, data: { '__proto__': { x: 1 }, 'a b': 1, favs: ['evil'], '../x': 2 } } };
fs.writeFileSync('/tmp/evil.json', JSON.stringify(evil));
await page.evaluate(() => localStorage.removeItem('ps:favs'));
await page.setInputFiles('#bkpick', '/tmp/evil.json'); await page.waitForSelector('.modal [data-yes]'); await page.click('.modal [data-yes]'); await page.waitForTimeout(1000);
ok(await page.evaluate(() => Object.keys(localStorage).every((k) => !/__proto__|a b|\.\.\//.test(k))), 'nomi di chiave non validi ignorati');
ok(errors.filter((x) => !/Failed to load resource|TUNNEL/.test(x)).length === 0, 'nessun errore in console ' + errors.slice(0, 3).join('|'));
await browser.close(); srv.close();
console.log(bad ? 'FALLITO' : 'Tutti i test superati'); process.exit(bad ? 1 : 0);
