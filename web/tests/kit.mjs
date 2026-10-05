// Kit di studio: genera riassunto, mappa e schema in tutti gli stili per OGNI scheda; controlla SVG valido, dimensioni e assenza di errori.
import { serve, launch } from './lib.mjs';
const { srv, url } = await serve();
const { browser, page, errors } = await launch({ w: 412, h: 892, scale: 1 });
let bad = 0;
const ok = (c, m) => { if (!c) { bad++; console.log('KO  ', m); } else console.log('ok  ', m); };
await page.goto(url + '/#/genera/sepsi?k=riassunto'); await page.waitForSelector('.sumdoc'); await page.waitForTimeout(500);
const ids = await page.evaluate(() => [...window.__ps.BY_ID.keys()]);
console.log('schede:', ids.length);
const res = await page.evaluate(async (ids) => {
  const K = window.__psKit; const out = { fails: [], tall: [], n: 0, minSections: 0, empty: [] };
  const parse = (svg) => new DOMParser().parseFromString(svg, 'image/svg+xml').querySelector('parsererror');
  for (const id of ids) {
    const e = K.get(id);
    if (e.type === 'calc' || e.type === 'scale') { /* anche queste */ }
    try {
      for (let st = 0; st < K.SUMMARY_STYLES.length; st++) {
        const d = K.buildSummary(e, { style: st, seed: 1 + st });
        out.n++;
        if (!d.blocks.length) out.empty.push(id + ':riassunto' + st);
        const bytes = K.summaryToPdf(d, []);
        if (!(bytes.length > 800) || String.fromCharCode(...bytes.slice(0, 5)) !== '%PDF-') out.fails.push(id + ': pdf');
      }
      for (let st = 0; st < K.MAP_STYLES.length; st++) {
        const r = K.buildMap(e, { style: st, seed: 3 + st }); out.n++;
        if (parse(r.svg)) out.fails.push(id + ': svg mappa ' + st);
        if (r.h > 9000 || r.w > 3000) out.tall.push(id + ':mappa' + st + ' ' + r.w + 'x' + r.h);
        if (r.svg.length < 800) out.empty.push(id + ':mappa' + st);
      }
      for (let st = 0; st < K.INFO_STYLES.length; st++) {
        const r = K.buildInfographic(e, { style: st, seed: 9 + st, illustrations: [] }); out.n++;
        if (parse(r.svg)) out.fails.push(id + ': svg infografica ' + st);
        if (r.h > 9000) out.tall.push(id + ':infografica' + st + ' ' + r.w + 'x' + r.h);
        if (r.svg.length < 800) out.empty.push(id + ':infografica' + st);
      }
      for (let st = 0; st < K.SCHEME_STYLES.length; st++) {
        const r = K.buildScheme(e, { style: st, seed: 5 + st }); out.n++;
        if (parse(r.svg)) out.fails.push(id + ': svg schema ' + st);
        if (r.h > 9000) out.tall.push(id + ':schema' + st + ' ' + r.w + 'x' + r.h);
        if (r.svg.length < 800) out.empty.push(id + ':schema' + st);
      }
    } catch (err) { out.fails.push(id + ': ' + (err && err.message)); }
  }
  return out;
}, ids);
console.log('generati:', res.n);
ok(res.fails.length === 0, 'nessun errore di generazione/SVG/PDF su tutte le schede ' + res.fails.slice(0, 8).join(' | '));
ok(res.tall.length === 0, 'dimensioni delle immagini nei limiti ' + res.tall.slice(0, 6).join(' | '));
ok(res.empty.length < ids.length * 0.02, 'pochi documenti vuoti (' + res.empty.length + ') ' + res.empty.slice(0, 10).join(' '));
// rasterizzazione e JPEG/PDF reali su un campione
const rr = await page.evaluate(async () => {
  const K = window.__psKit; const e = K.get('sepsi'); const out = [];
  for (const [fn, st] of [[K.buildMap, 0], [K.buildMap, 2], [K.buildScheme, 0], [K.buildScheme, 1], [K.buildScheme, 2], [K.buildInfographic, 0], [K.buildInfographic, 1], [K.buildInfographic, 2]]) {
    const r = fn(e, { style: st, seed: 2 });
    const png = await K.toPng(r.svg, r.w, r.h, 2); const j = await K.toJpegBytes(r.svg, r.w, r.h, 1.5);
    const pdf = K.imageToPdf('x', j);
    out.push([png.size, png.type, j.jpeg.length, pdf.length]);
  }
  return out;
});
ok(rr.every(([ps, pt, jl, pl]) => ps > 20000 && pt === 'image/png' && jl > 15000 && pl > jl), 'PNG, JPEG e PDF reali prodotti per mappe e schemi ' + JSON.stringify(rr));
// varianti: ogni "Nuova versione"/"Ricrea" cambia davvero il risultato
const diff = await page.evaluate(() => {
  const K = window.__psKit; const e = K.get('sepsi');
  const a = K.buildMap(e, { style: 0, seed: 1 }).svg, b = K.buildMap(e, { style: 0, seed: 2 }).svg, c = K.buildMap(e, { style: 1, seed: 1 }).svg, a2 = K.buildMap(e, { style: 0, seed: 1 }).svg;
  const s1 = K.buildScheme(e, { style: 0, seed: 1 }).svg, s2 = K.buildScheme(e, { style: 0, seed: 2 }).svg;
  const r1 = JSON.stringify(K.buildSummary(e, { style: 0, seed: 1 }).blocks), r2 = JSON.stringify(K.buildSummary(e, { style: 0, seed: 2 }).blocks), r3 = JSON.stringify(K.buildSummary(e, { style: 2, seed: 1 }).blocks);
  return { seedMap: a !== b, styleMap: a !== c, same: a === a2, seedScheme: s1 !== s2, seedSummary: r1 !== r2, styleSummary: r1 !== r3 };
});
ok(diff.seedMap && diff.styleMap && diff.seedScheme && diff.styleSummary && diff.same, 'varianti diverse con seme/stile diversi, stessa versione identica ' + JSON.stringify(diff));
ok(errors.filter((x) => !/Failed to load resource/.test(x)).length === 0, 'nessun errore in console ' + errors.slice(0, 3).join('|'));
await browser.close(); srv.close();
console.log(bad ? 'FALLITO' : 'Tutti i test superati'); process.exit(bad ? 1 : 0);
