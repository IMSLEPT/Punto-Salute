// Glossario A–Z, pagina specialità, fonti e licenze.
import { esc, icon, norm } from '../core/dom.js';
import { ALL, BY_TYPE, SOURCES, get } from '../core/data.js';
import { TYPES, MODULES } from '../core/types.js';
import { plain } from '../core/text.js';
import { pageHead, itemRow, listOf, DISCLAIMER } from './common.js';
import { CONTENT_VERSION, REVISION } from './entity.js';
import { updates } from '../core/updates.js';

export function renderGlossary(root) {
  const m = MODULES.find((x) => x.id === 'terminologia');
  const items = [...(BY_TYPE.term || []), ...(BY_TYPE.sign || [])].sort((a, b) => a.title.localeCompare(b.title, 'it'));
  const letter = (e) => { const c = norm(e.title)[0] || '#'; return /[a-z]/.test(c) ? c.toUpperCase() : '#'; };
  const groups = new Map();
  for (const e of items) { const k = letter(e); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
  const keys = [...groups.keys()].sort();
  root.innerHTML = `<div class="page">
    ${pageHead({ title: m.name, sub: `${items.length} termini collegati alle schede`, icon: m.icon, c: m.c })}
    <input class="input" id="gq" type="search" placeholder="Filtra i termini…" autocomplete="off" style="margin-bottom:12px">
    <div class="chips" id="gl">${keys.map((k) => `<button class="chip" data-l="${k}">${k}</button>`).join('')}</div>
    <div id="gbody">${keys.map((k) => `<div class="grp" id="L${k}" data-l="${k}"><div class="res-group">${k}</div>${listOf(groups.get(k), '', { sub: null })}</div>`).join('')}</div>
    <div class="small muted" style="margin-top:12px">Nelle schede i termini sottolineati si aprono con un tocco.</div></div>`;
  // descrizione breve nelle righe
  root.querySelectorAll('.item').forEach((b) => {
    const id = b.dataset.go.split('/').pop(); const e = get(id);
    if (e && !b.querySelector('.d')) b.querySelector('.grow').insertAdjacentHTML('beforeend', `<div class="d">${esc(plain(e.summary).slice(0, 110))}${plain(e.summary).length > 110 ? '…' : ''}</div>`);
  });
  root.querySelector('#gl').onclick = (ev) => { const b = ev.target.closest('[data-l]'); if (!b) return; root.querySelector('#L' + b.dataset.l)?.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
  const q = root.querySelector('#gq');
  q.oninput = () => {
    const t = norm(q.value);
    root.querySelectorAll('#gbody .grp').forEach((g) => {
      let any = false;
      g.querySelectorAll('.item').forEach((b) => {
        const e = get(b.dataset.go.split('/').pop());
        const hit = !t || norm([e.title, ...(e.aliases || [])].join(' ')).includes(t);
        b.hidden = !hit; any = any || hit;
      });
      g.hidden = !any;
    });
  };
  return { title: 'Terminologia', tab: 'home' };
}

export function renderSpec(root, id) {
  const e = get(id);
  if (!e) { root.innerHTML = '<div class="page"><div class="empty"><h3>Specialità non trovata</h3></div></div>'; return { title: 'Specialità' }; }
  const rel = new Set(e.rel || []);
  const related = ALL.filter((x) => x.id !== e.id && (rel.has(x.id) || (x.spec || []).includes(e.id)));
  const by = {};
  for (const x of related) (by[x.type] ||= []).push(x);
  const order = ['patho', 'emerg', 'proc', 'dev', 'exam', 'scale', 'drug', 'anat', 'physio', 'ndx', 'calc', 'care', 'sign', 'term'].filter((t) => by[t]);
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: e.title, sub: 'Specialità', icon: 'hospital', c: '--c-specialistiche' })}
    <div class="card pad">${esc(plain(e.summary))}</div>
    ${order.map((t) => `<div><div class="res-group">${esc(TYPES[t].plural)} · ${by[t].length}</div>${listOf(by[t].sort((a, b) => a.title.localeCompare(b.title, 'it')))}</div>`).join('') || '<div class="card pad small muted">Contenuti in espansione.</div>'}
    ${DISCLAIMER}</div>`;
  return { title: e.title, tab: 'home' };
}

const LICENSES = [
  ['Modelli 3D scheletro, muscoli, dischi e legamenti', 'BodyParts3D 4.0 © The Database Center for Life Science (DBCLS), licenza CC BY 4.0 (creativecommons.org/licenses/by/4.0). I modelli sono stati semplificati e ottimizzati per l’uso mobile; organi, vasi, nervi e cute sono realizzati ex novo e adattati allo scheletro.'],
  ['Three.js', 'Libreria grafica 3D, licenza MIT.'],
  ['Icone', 'Lucide (licenza ISC) e icone originali per i moduli della Home.'],
  ['Carattere Inter', 'Rasmus Andersson, SIL Open Font License 1.1.'],
];

export function renderSources(root) {
  const all = Object.entries(SOURCES);
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: 'Fonti e licenze', sub: `Contenuti v${CONTENT_VERSION} · revisione ${REVISION}`, icon: 'library', c: '--c-terminologia' })}
    <div class="callout warn">${icon('triangle-alert')}<div><b>Uso didattico.</b> Punto Salute non sostituisce linee guida, protocolli aziendali, prescrizioni mediche né il giudizio clinico. Ogni scheda riporta fonti, versione e data di revisione: verifica sempre la versione ufficiale in vigore e il protocollo della tua struttura.</div></div>
    <div class="callout note">${icon('info')}<div><b>Materiale protetto.</b> Le classificazioni NANDA-I, NIC e NOC sono marchi e opere protette: l’app riporta solo titoli indicativi, senza definizioni, codici né attività ufficiali. Le scale di valutazione sono parafrasate: verifica licenza e versione.</div></div>
    <div class="callout ok">${icon('circle-check')}<div><b>Edizioni verificate il 6 ottobre 2026</b> (ERC 2025, Surviving Sepsis Campaign 2026, AHA/ASA ictus 2026, GOLD 2026, GINA 2026, ADA 2026, ESC 2023–2026, OMS IST 2026, NPIAP 4ª ed., Ministero della Salute e AIFA). ${(() => { const g = (updates.feed() || {}).generated; return g ? `Ultimo aggiornamento scaricato dal feed: <b>${esc(g)}</b>.` : 'Gli aggiornamenti arrivano dal feed quando il telefono è online.'; })()} Le linee guida cambiano: dove l’edizione non è indicata come definitiva, controlla sempre la versione in vigore.</div></div>
    <div><div class="sec-title"><h2>Fonti di riferimento</h2></div><div class="list">${all.map(([k, s]) => `<div class="item" style="align-items:flex-start"><div class="grow"><div class="t" style="font-weight:600">${esc(s.t)}</div><div class="d">${esc(s.y || '')}</div></div></div>`).join('')}</div></div>
    <div><div class="sec-title"><h2>Licenze e attribuzioni</h2></div><div class="list">${LICENSES.map(([t, d]) => `<div class="item" style="align-items:flex-start"><div class="grow"><div class="t" style="font-weight:600">${esc(t)}</div><div class="d">${esc(d)}</div></div></div>`).join('')}</div></div>
    <div class="small muted">Punto Salute funziona interamente offline e non raccoglie dati. Note, preferiti, piani e progressi restano sul dispositivo.</div></div>`;
  return { title: 'Fonti e licenze', tab: 'profilo' };
}
