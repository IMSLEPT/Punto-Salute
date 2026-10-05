// Pagina "Genera": riassunto, mappa concettuale e schema di un argomento, con nuove versioni, download PNG/PDF e condivisione.
import { esc, icon, $, $$, debounce } from '../core/dom.js';
import { BY_ID, get } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { openSheet, toast } from '../core/ui.js';
import { navigate } from '../core/router.js';
import { search } from '../core/search.js';
import { buildSummary, summaryToText, SUMMARY_STYLES } from '../kit/summary.js';
import { buildMap, MAP_STYLES } from '../kit/map.js';
import { buildScheme, SCHEME_STYLES } from '../kit/scheme.js';
import { buildInfographic, INFO_STYLES } from '../kit/infographic.js';
import { illustrations as loadIllus, anatomyOf } from '../kit/illus.js';
import { svgToDataUrl, toPng, toJpegBytes, saveFile, safeName } from '../kit/export.js';
import { summaryToPdf, imageToPdf } from '../kit/pdf.js';
import { shareText } from '../core/ui.js';
export { genButtons } from './genbtn.js';

const KINDS = [
  { id: 'riassunto', label: 'Riassunto', icon: 'file-text', styles: SUMMARY_STYLES },
  { id: 'mappa', label: 'Mappa', icon: 'network', styles: MAP_STYLES },
  { id: 'schema', label: 'Schema', icon: 'layout-grid', styles: SCHEME_STYLES },
  { id: 'infografica', label: 'Infografica', icon: 'image', styles: INFO_STYLES },
];

function bold(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
export function summaryHtml(doc) {
  const out = [`<article class="sumdoc"><header><small>${esc(doc.subtitle)}</small><h2>${esc(doc.title)}</h2></header>`];
  for (const b of doc.blocks) {
    if (b.t === 'lead') out.push(`<p class="lead">${bold(b.text)}</p>`);
    else if (b.t === 'h2') out.push(`<h3>${icon(b.icon || 'circle')}${esc(b.text)}</h3>`);
    else if (b.t === 'h3') out.push(`<h4>${esc(b.text)}</h4>`);
    else if (b.t === 'ul') out.push(`<ul>${b.items.map((i) => `<li>${bold(i)}</li>`).join('')}</ul>`);
    else if (b.t === 'ol') out.push(`<ol>${b.items.map((i) => `<li>${bold(i)}</li>`).join('')}</ol>`);
    else if (b.t === 'box') out.push(`<div class="sbox ${b.kind}"><b>${esc(b.title)}</b><ul>${b.items.map((i) => `<li>${bold(i)}</li>`).join('')}</ul></div>`);
    else if (b.t === 'terms') out.push(`<div class="sterms"><h3>${esc(b.title)}</h3><dl>${b.items.map((t) => `<dt>${esc(t.title)}</dt><dd>${bold(t.def)}</dd>`).join('')}</dl></div>`);
    else if (b.t === 'qa') out.push(`<div class="sqa"><h3>${esc(b.title)}</h3>${b.items.map((q) => `<details><summary>${esc(q.q)}</summary><p>${bold(q.a)}</p></details>`).join('')}</div>`);
    else if (b.t === 'links') out.push(`<div class="slinks"><h3>${esc(b.title)}</h3><p>${b.items.map((x) => `<span class="chip">${esc(x)}</span>`).join(' ')}</p></div>`);
  }
  out.push(`<footer><b>Fonti:</b> ${esc(doc.sources.join('; '))}<br>${esc(doc.notice)}</footer></article>`);
  return out.join('');
}

export function renderGenerate(root, id, query = {}) {
  const e0 = get(id);
  if (!e0) {
    root.innerHTML = `<div class="page"><div class="empty">${icon('search-x')}<h3>Argomento non trovato</h3><p>Scegli un argomento da cui generare il materiale di studio.</p><button class="btn" data-open-search>Cerca un argomento</button></div></div>`;
    return { title: 'Genera' };
  }
  let kind = Math.max(0, KINDS.findIndex((k) => k.id === query.k));
  const st = { style: [0, 0, 0, 0], seed: [1, 1, 1, 1] };
  const illCache = {};
  if (query.v) st.style[kind] = (parseInt(query.v, 10) || 0);
  if (query.s) st.seed[kind] = (parseInt(query.s, 10) || 1);
  let cur = null;   // ultimo risultato generato per tipo
  const made = {};
  let busy = false;

  const t = TYPES[e0.type];
  root.innerHTML = `<div class="page genpage" style="--c:var(${t.c})">
    <div class="genhead"><div class="tile-ic sm" style="--c:var(${t.c})">${icon(t.icon)}</div>
      <div class="grow"><small>${esc(t.label)}</small><h1>${esc(e0.title)}</h1></div>
      <button class="btn sm ghost" data-topic>${icon('search')}Cambia</button></div>
    <div class="seg gseg" id="gkinds" role="tablist">${KINDS.map((k, i) => `<button role="tab" data-kind="${i}" class="${i === kind ? 'on' : ''}">${icon(k.icon)}<span>${k.label}</span></button>`).join('')}</div>
    <div class="gstyles" id="gstyles"></div>
    <div class="grow2"><button class="btn sm" data-new>${icon('dices')}Nuova versione</button><button class="btn sm ghost" data-redo>${icon('rotate-ccw')}Ricrea questa</button><span class="gnote" id="gnote"></span></div>
    <div id="gout" class="gout" aria-live="polite"></div>
    <div class="gdl" id="gdl"></div>
    <p class="xs muted gdisc">Materiale didattico generato dalle schede dell’app, con le loro fonti e revisioni. Serve a studiare: verifica sempre il protocollo della tua struttura e le fonti aggiornate.</p>
  </div>`;

  const kindSpec = () => KINDS[kind];
  const styleChips = () => {
    $('#gstyles', root).innerHTML = kindSpec().styles.map((s, i) => `<button class="chip ${i === st.style[kind] % kindSpec().styles.length ? 'active' : ''}" data-style="${i}">${esc(s.name)}</button>`).join('');
  };

  const generate = async () => {
    if (busy) return;
    busy = true;
    const out = $('#gout', root);
    out.innerHTML = `<div class="gwait"><div class="spin"></div><span>Preparo ${kindSpec().label.toLowerCase()}…</span></div>`;
    await new Promise((r) => setTimeout(r, 30));
    if (!$('#gout', root)) { busy = false; return; }   // si e' gia' cambiata pagina
    try {
      const e = get(id);
      const opts = { style: st.style[kind], seed: st.seed[kind] };
      const k = kindSpec().id;
      if (k === 'riassunto') {
        const doc = buildSummary(e, opts);
        made[k] = doc; out.innerHTML = summaryHtml(doc);
      } else {
        let r;
        if (k === 'infografica') {
          let ill = illCache[id];
          if (!ill) {
            if (anatomyOf(e).length) out.innerHTML = `<div class="gwait"><div class="spin"></div><span>Preparo le illustrazioni anatomiche 3D…</span></div>`;
            ill = illCache[id] = await loadIllus(e).catch(() => []);
            if (!$('#gout', root)) { busy = false; return; }
          }
          r = buildInfographic(e, { ...opts, illustrations: ill });
        } else r = k === 'mappa' ? buildMap(e, opts) : buildScheme(e, opts);
        made[k] = r;
        out.innerHTML = `<div class="gimgwrap"><img class="gimg" alt="${esc({ mappa: 'Mappa concettuale', schema: 'Schema', infografica: 'Infografica' }[k])}: ${esc(e.title)}" src="${svgToDataUrl(r.svg)}" data-zoom><button class="btn sm ghost gzoom" data-zoom>${icon('expand')}Ingrandisci</button></div>`;
      }
      cur = made[k];
      const note = $('#gnote', root); if (note) note.textContent = cur.styleName ? `Stile: ${cur.styleName} · versione ${st.seed[kind]}` : '';
    } catch (err) {
      console.error(err);
      out.innerHTML = `<div class="empty">${icon('triangle-alert')}<h3>Non riesco a generarlo</h3><p>${esc(err.message || 'Errore')}</p></div>`;
      cur = null;
    }
    if ($('#gdl', root)) drawDownloads();
    busy = false;
  };

  const drawDownloads = () => {
    const k = kindSpec().id;
    const dl = $('#gdl', root);
    if (!cur) { dl.innerHTML = ''; return; }
    dl.innerHTML = k === 'riassunto'
      ? `<button class="btn" data-dl="pdf">${icon('download')}Scarica PDF</button><button class="btn ghost" data-dl="share">${icon('share-2')}Condividi testo</button><button class="btn ghost" data-dl="all">${icon('layers')}PDF completo (con mappa e schema)</button>`
      : `<button class="btn" data-dl="png">${icon('image')}Scarica immagine PNG</button><button class="btn ghost" data-dl="pdf">${icon('download')}Scarica PDF</button><button class="btn ghost" data-dl="share">${icon('share-2')}Condividi immagine</button>`;
  };

  const run = async (what) => {
    const k = kindSpec().id;
    if (!cur) return;
    const e = get(id);
    const base = safeName(e.title);
    try {
      if (k === 'riassunto') {
        if (what === 'share') { shareText(e.title + ' — riassunto', summaryToText(cur)); return; }
        let images = [];
        if (what === 'all') {
          toast('Preparo il PDF completo…');
          const m = buildMap(e, { style: st.style[1], seed: st.seed[1] });
          const s = buildScheme(e, { style: st.style[2], seed: st.seed[2] });
          images = [await toJpegBytes(m.svg, m.w, m.h, 1.4), await toJpegBytes(s.svg, s.w, s.h, 1.4)];
        }
        const bytes = summaryToPdf(cur, images);
        const r = await saveFile(`${base}-riassunto.pdf`, new Blob([bytes], { type: 'application/pdf' }));
        toast(r.ok ? (r.msg || 'PDF salvato') : `Salvataggio non riuscito: ${r.msg}`);
      } else {
        const suffix = { mappa: 'mappa-concettuale', schema: 'schema', infografica: 'infografica' }[k];
        if (what === 'png' || what === 'share') {
          const blob = await toPng(cur.svg, cur.w, cur.h, 2);
          const r = await saveFile(`${base}-${suffix}.png`, blob, { share: what === 'share' });
          toast(r.ok ? (r.msg || 'Immagine salvata') : `Salvataggio non riuscito: ${r.msg}`);
        } else if (what === 'pdf') {
          const im = await toJpegBytes(cur.svg, cur.w, cur.h, 1.8);
          const bytes = imageToPdf(`${e.title} - ${suffix}`, im);
          const r = await saveFile(`${base}-${suffix}.pdf`, new Blob([bytes], { type: 'application/pdf' }));
          toast(r.ok ? (r.msg || 'PDF salvato') : `Salvataggio non riuscito: ${r.msg}`);
        }
      }
    } catch (err) { console.error(err); toast('Non sono riuscito a salvare il file'); }
  };

  const zoom = () => {
    if (!cur || !cur.svg) return;
    const sh = openSheet({ title: `${kindSpec().label}: ${get(id).title}`, html: `<div class="zoomwrap"><img class="zoomimg" alt="" src="${svgToDataUrl(cur.svg)}"></div><p class="xs muted">Scorri per spostarti. Usa “Scarica” per salvare l’immagine.</p>` });
    sh.el.classList.add('tall');
  };

  const topic = () => {
    const sh = openSheet({
      title: 'Scegli l’argomento',
      html: `<input class="input" id="tq" type="search" placeholder="Cerca patologia, procedura, organo, farmaco…" autocomplete="off"><div id="tres" class="list" style="margin-top:12px"></div>`,
      onMount: (api) => {
        const inp = api.el.querySelector('#tq'); const res = api.el.querySelector('#tres');
        const draw = () => {
          const q = inp.value.trim();
          const items = q.length < 2 ? [] : search(q, { limit: 24 }).map((r) => r.e).filter((e) => e.type !== 'calc' && e.type !== 'scale');
          res.innerHTML = items.length ? items.map((e) => `<button class="item" data-pick="${esc(e.id)}"><div class="tile-ic sm" style="--c:var(${TYPES[e.type].c})">${icon(TYPES[e.type].icon)}</div><div class="grow"><div class="t">${esc(e.title)}</div><div class="d">${esc(TYPES[e.type].label)}</div></div></button>`).join('') : `<p class="muted small">${q.length < 2 ? 'Scrivi almeno due lettere.' : 'Nessun risultato.'}</p>`;
        };
        inp.addEventListener('input', debounce(draw, 120));
        res.addEventListener('click', (ev) => {
          const b = ev.target.closest('[data-pick]'); if (!b) return;
          api.close();
          navigate(`/genera/${b.dataset.pick}?k=${kindSpec().id}`, { replace: true });
        });
        setTimeout(() => inp.focus(), 250);
      },
    });
    return sh;
  };

  root.addEventListener('click', (ev) => {
    const kb = ev.target.closest('[data-kind]');
    if (kb) { kind = +kb.dataset.kind; $$('#gkinds button', root).forEach((b) => b.classList.toggle('on', b === kb)); styleChips(); generate(); return; }
    const sb = ev.target.closest('[data-style]');
    if (sb) { st.style[kind] = +sb.dataset.style; st.seed[kind] += 1; styleChips(); generate(); return; }
    if (ev.target.closest('[data-new]')) { st.style[kind] = (st.style[kind] + 1) % kindSpec().styles.length; st.seed[kind] += 1; styleChips(); generate(); return; }
    if (ev.target.closest('[data-redo]')) { st.seed[kind] += 1; generate(); return; }
    const dl = ev.target.closest('[data-dl]');
    if (dl) { run(dl.dataset.dl); return; }
    if (ev.target.closest('[data-zoom]')) { zoom(); return; }
    if (ev.target.closest('[data-topic]')) { topic(); }
  });

  styleChips();
  generate();
  return { title: 'Genera', kicker: 'Studio', tab: 'home' };
}

// accesso di prova per i test automatici (nessun effetto per l'utente)
window.__psKit = { buildSummary, buildMap, buildScheme, buildInfographic, INFO_STYLES, loadIllus, toPng, toJpegBytes, summaryToPdf, imageToPdf, SUMMARY_STYLES, MAP_STYLES, SCHEME_STYLES, get };
