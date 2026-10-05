// Casi clinici: generazione su tutte le schede idonee (qualità e assenza di opzioni ambigue), poi flusso completo nell'interfaccia.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1, gl: false });
let bad = 0;
const ok = (c, m) => { if (!c) { bad++; console.log('KO  ', m); } else console.log('ok  ', m); };
await page.goto(url + '/#/studio/casi'); await page.waitForSelector('#gen-auto'); await page.waitForTimeout(500);
const sw = await page.evaluate(() => {
  const G = window.__psCaseGen; const out = { n: 0, none: [], bad: [], types: {}, per: {} };
  const elig = G.eligibleCards(); out.eligible = elig.length;
  for (const e of elig) {
    let made = 0;
    for (let seed = 1; seed <= 6; seed++) {
      const c = G.generateCase({ entity: e.id, seed: seed * 7919 });
      if (!c) continue; made++; out.n++;
      out.types[e.type] = (out.types[e.type] || 0) + 1;
      const issues = [];
      if (c.steps.length < 3 || c.steps.length > 4) issues.push('passi ' + c.steps.length);
      for (const s of c.steps) {
        if (s.opts.length !== 4) issues.push('opzioni ' + s.opts.length);
        if (s.opts.filter((o) => o[1]).length !== 1) issues.push('corrette != 1');
        const t = s.opts.map((o) => o[0].toLowerCase()); if (new Set(t).size !== 4) issues.push('duplicate');
        for (const o of s.opts) { if (!o[0] || o[0].length > 260) issues.push('lunghezza ' + o[0].length); if (!o[2]) issues.push('feedback mancante'); if (/\[\[|\*\*|undefined|\bnull\b/.test(o[0] + o[2] + s.q)) issues.push('marcatore ' + o[0].slice(0, 30)); }
      }
      if (/\[\[|\*\*|undefined/.test(c.intro + c.outro + c.title)) issues.push('marcatore nel testo');
      if (e.type === 'patho') { const names = [e.title, ...(e.aliases || [])].map((x) => x.toLowerCase()).filter((x) => x.length >= 5); if (names.some((n) => c.intro.toLowerCase().includes(n))) issues.push('nome della patologia nell’introduzione'); }
      if (/\b\d+\s?(mg|mcg|µg|UI)\b/i.test(JSON.stringify(c.steps) + c.intro) && e.type === 'drug') issues.push('dosaggio');
      if (issues.length) out.bad.push(e.id + ' seed' + seed + ': ' + [...new Set(issues)].join(', '));
    }
    if (!made) out.none.push(e.id);
  }
  return out;
});
console.log('idonee:', sw.eligible, 'casi generati nel test:', sw.n, JSON.stringify(sw.types), 'senza caso:', sw.none.length);
ok(sw.eligible >= 40, 'abbastanza schede idonee (' + sw.eligible + ')');
ok(sw.bad.length === 0, 'tutti i casi generati sono ben formati ' + sw.bad.slice(0, 6).join(' | '));
ok(sw.none.length < sw.eligible * 0.1, 'quasi ogni scheda idonea produce un caso (' + sw.none.length + ' senza)');
// esempio leggibile
const ex = await page.evaluate(() => { const c = window.__psCaseGen.generateCase({ entity: 'sepsi', seed: 42 }); return c && { title: c.title, intro: c.intro, q: c.steps.map((s) => s.q + ' -> ' + s.opts.find((o) => o[1])[0]) }; });
console.log(JSON.stringify(ex, null, 1));
// ---- interfaccia
await page.click('#gen-auto'); await page.waitForSelector('.opt'); await page.waitForTimeout(300);
const hash1 = await page.evaluate(() => location.hash);
ok(/#\/studio\/caso\/gen-/.test(hash1), 'Caso a sorpresa apre un caso generato ' + hash1);
const playAll = async (pickWrongFirst) => {
  const n = await page.evaluate(() => document.querySelector('.page .xs.muted').textContent.match(/passo \d+\/(\d+)/)[1]);
  for (let i = 0; i < +n; i++) {
    await page.waitForSelector('.opt');
    if (pickWrongFirst && i === 0) {
      // prova a scegliere un'opzione errata: le corrette hanno classe good solo dopo il clic, quindi si prova la prima e si legge l'esito
      await page.click('.opt[data-k="0"]');
    } else {
      await page.evaluate(() => { const o = document.querySelector('.opt[data-k="1"]'); o.click(); });
    }
    await page.waitForSelector('#next'); await page.click('#next'); await page.waitForTimeout(80);
  }
};
await playAll(true);
await page.waitForSelector('#review'); const res1 = await page.evaluate(() => document.querySelector('.statn').textContent);
ok(/\d\/\d/.test(res1), 'risultato mostrato ' + res1);
ok(await page.$('#redo') && await page.$('#again-sim') && await page.$('#again-any'), 'bottoni: rivedi, rifai, nuovo simile, nuovo diverso');
await page.click('#review'); await page.waitForSelector('.opt.static'); await page.waitForTimeout(300);
ok((await page.$$('.opt.static')).length >= 12 && (await page.$$('.opt.static.good')).length >= 3 && /la tua risposta/.test(await page.evaluate(() => document.getElementById('view').innerText)), 'revisione: tutte le opzioni, corrette evidenziate e risposta data');
const id1 = hash1.match(/caso\/([^?]+)/)[1];
await page.click('#redo'); await page.waitForSelector('.opt'); await playAll(false);
await page.waitForSelector('#review');
const h = await page.evaluate((id) => JSON.parse(localStorage.getItem('ps:caseHist'))[id].attempts.length, id1);
ok(h === 2, 'dopo "Rifai" l’archivio ha 2 tentativi (' + h + ')');
// ritorno allo storico
await page.evaluate((id) => { location.hash = '#/studio/caso/' + id + '?m=overview'; }, id1); await page.waitForSelector('[data-review]'); await page.waitForTimeout(300);
ok((await page.$$('[data-review]')).length === 2 && await page.$('#redo') && await page.$('#review'), 'panoramica: storico con 2 tentativi, Rifai e Rivedi');
const errBtn = await page.$('#redo-err');
if (errBtn) { await errBtn.click(); await page.waitForSelector('.opt'); const lab = await page.evaluate(() => document.querySelector('.page .xs.muted').textContent); ok(/solo errori/.test(lab), 'Rifai solo gli errori: ' + lab); await playAll(false); await page.waitForSelector('#review'); } else console.log('(nessun errore da rifare nell’ultimo tentativo)');
await page.click('#again-sim'); await page.waitForSelector('.opt'); const id2 = (await page.evaluate(() => location.hash)).match(/caso\/([^?]+)/)[1];
ok(id2 !== id1 && id2.split('-').slice(1, -1).join('-') === id1.split('-').slice(1, -1).join('-'), 'Nuovo caso simile: stessa scheda, caso diverso ' + id2);
// elenco con stato e filtri
await page.evaluate(() => { location.hash = '#/studio/casi'; }); await page.waitForSelector('.item'); await page.waitForTimeout(300);
const lst = await page.evaluate(() => document.getElementById('view').innerText);
ok(/Da fare/.test(lst) && /Fatto/.test(lst) && /Generati per te/.test(lst) && /Raccolta/.test(lst), 'elenco: sezioni e stato Da fare / Fatto');
await page.click('[data-f="fatti"]'); await page.waitForTimeout(200);
ok(await page.evaluate(() => [...document.querySelectorAll('#view .item')].every((i) => /Fatto/.test(i.innerText))), 'filtro Fatti');
await page.click('[data-f="da-fare"]'); await page.waitForTimeout(200);
ok(await page.evaluate(() => [...document.querySelectorAll('#view .item')].every((i) => /Da fare/.test(i.innerText))), 'filtro Da fare');
// caso della raccolta: gioca, poi rivedi
await page.evaluate(() => { location.hash = '#/studio/caso/caso-iperkaliemia'; }); await page.waitForSelector('.opt'); await playAll(false); await page.waitForSelector('#review');
await page.evaluate(() => { location.hash = '#/studio/caso/caso-iperkaliemia?m=overview'; }); await page.waitForSelector('[data-review]');
await page.click('[data-review="0"]'); await page.waitForSelector('.opt.static'); ok(true, 'revisione di un caso della raccolta');
// genera su argomento
await page.evaluate(() => { location.hash = '#/studio/casi'; }); await page.waitForSelector('#gen-topic'); await page.click('#gen-topic'); await page.waitForSelector('#gtopic');
await page.click('#gtype [data-v="proc"]'); await page.fill('#gtopic', 'prelievo venoso'); await page.click('#gdo'); await page.waitForSelector('.opt');
const t3 = await page.evaluate(() => document.getElementById('view').innerText);
ok(/prelievo/i.test(t3), 'caso su argomento scelto (procedura): ' + t3.slice(0, 60).replace(/\n/g, ' '));
await page.evaluate(() => { location.hash = '#/studio/casi'; }); await page.waitForSelector('#gen-topic'); await page.click('#gen-topic'); await page.fill('#gtopic', 'zzzzqqq'); await page.click('#gdo'); await page.waitForTimeout(400);
ok(await page.evaluate(() => /Non trovo schede/.test(document.body.innerText)), 'argomento senza schede: messaggio chiaro');
// eliminazione
const delId = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('ps:caseHist'))).find((k) => k.startsWith('gen-')));
await page.evaluate((id) => { location.hash = '#/studio/caso/' + id; }, delId); await page.waitForTimeout(500);
if (await page.$('#del')) { await page.click('#del'); await page.waitForSelector('.modal [data-yes]'); await page.click('.modal [data-yes]'); await page.waitForTimeout(500); ok(await page.evaluate((id) => !JSON.parse(localStorage.getItem('ps:caseHist'))[id], delId), 'elimina un caso generato'); }
// studio hub e assistente
await page.evaluate(() => { location.hash = '#/studio'; }); await page.waitForTimeout(400);
ok(/svolti/.test(await page.evaluate(() => document.getElementById('view').innerText)), 'hub Studio mostra i casi svolti/generati');
ok(errors.filter((x) => !/Failed to load resource|TUNNEL/.test(x)).length === 0, 'nessun errore in console ' + errors.slice(0, 3).join('|'));
await browser.close(); srv.close();
console.log(bad ? 'FALLITO' : 'Tutti i test superati'); process.exit(bad ? 1 : 0);
