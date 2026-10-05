// Monkey test: percorsi casuali su tutta l'app (clic su elementi visibili, tasto indietro, schede, anatomia) alla ricerca di
// "Pagina non trovata", errori JS e ritorni inattesi alla home.
import { serve, launch } from './lib.mjs';
const STEPS = +(process.argv.find((a) => a.startsWith('--steps=')) || '--steps=600').split('=')[1];
const SEED = +(process.argv.find((a) => a.startsWith('--seed=')) || '--seed=1').split('=')[1];
let s = SEED; const rnd = () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 390, h: 844, scale: 1 });
let bad = 0, log = [];
page.on('pageerror', (e) => { bad++; console.log('PAGEERROR', e.message, '| ultimi passi:', log.slice(-3).join(' > ')); });
await page.goto(url + '/index.html#/'); await page.waitForTimeout(800);
for (let i = 0; i < STEPS; i++) {
  try {
  const act = rnd();
  if (act < 0.08) { await page.evaluate(() => window.__psBack && window.__psBack()); log.push('BACK'); }
  else {
    const picked = await page.evaluate((r) => {
      const sel = '#view [data-go], #view button, #view .chip, #view .item, #view a.term, #tabbar button, #topbar button, .sheet [data-go], .sheet button';
      const els = [...document.querySelectorAll(sel)].filter((e) => { const b = e.getBoundingClientRect(); return b.width > 0 && b.height > 0 && !e.disabled && !/Elimina|Cancella|Importa|Esporta|share|Condividi|updreset/i.test(e.id + e.textContent + (e.getAttribute('aria-label') || '')); });
      if (!els.length) return null;
      const el = els[Math.floor(r * els.length)];
      const d = (el.dataset.go || el.dataset.pick || el.dataset.lay || el.dataset.tab || el.textContent || '').trim().slice(0, 40);
      el.click(); return d;
    }, rnd());
    log.push(picked);
  }
  await page.waitForTimeout(120);
  const st = await page.evaluate(() => ({ h: location.hash, t: document.getElementById('view').innerText.slice(0, 80) }));
  if (/Pagina non trovata|^Errore/m.test(st.t)) { bad++; console.log('PROBLEMA', st.h, '| ultimi passi:', log.slice(-4).join(' > ')); await page.evaluate(() => window.__ps.navigate('/')); }
  if (i % 50 === 0) await page.evaluate(() => { let n = 0; while (document.querySelector('.sheet') && n++ < 5) { window.__psBack(); } });
  } catch (e) { log.push('ERR:' + e.message.slice(0, 60)); await page.waitForTimeout(500); }
}
const errs = errors.filter((e) => !/GPU|swiftshader|favicon/i.test(e));
console.log(`passi: ${STEPS}, problemi: ${bad}, errori console: ${errs.length}`); if (errs.length) console.log(errs.slice(0, 5));
await browser.close(); srv.close(); process.exit(bad ? 1 : 0);
