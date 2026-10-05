// Home: replica del layout della tavola di riferimento (header, saluto, ricerca, card, "Continua a studiare").
import { esc, icon } from '../core/dom.js';
import { MODULES, TYPES } from '../core/types.js';
import { countType, get, BY_TYPE } from '../core/data.js';
import { recents, store } from '../core/store.js';
import { routeFor, plain } from '../core/text.js';
import { DISCLAIMER } from './common.js';
import { REVISION, CONTENT_VERSION } from './entity.js';
import { openSheet } from '../core/ui.js';
import logoUrl from '../assets/logo.png';

const BOARD = {
  anatomia: { name: 'Anatomia', sub: 'Strutture, immagini e riferimenti clinici' },
  patologie: { name: 'Patologie', sub: 'Quadri clinici, diagnosi e terapie' },
  procedure: { name: 'Procedure', sub: 'Step operativi e linee guida' },
  scale: { name: 'Scale', sub: 'Valutazioni e strumenti clinici' },
};

export const STUDIO = { id: 'studio', route: '/studio', name: 'Modalità studio', sub: 'Quiz, flashcard e casi clinici', icon: 'graduation-cap', c: '--c-studio' };

export function logoImg(cls = 'lg') { return `<img class="${cls}" src="${logoUrl}" alt="Punto Salute" width="46" height="54">`; }

export function wordmark() { return `<div class="wordmark">Punto <b>Salute</b></div>`; }

export function moduleTile(m) {
  const b = BOARD[m.id] || {};
  return `<button class="hcard" data-go="${m.route}" style="--c:var(${m.c})">
    <div class="top"><div class="ico">${icon(m.icon)}</div>${icon('chevron-right', 'chev')}</div>
    <div><div class="nm">${esc(b.name || m.name)}</div><div class="sb">${esc(b.sub || m.sub)}</div></div></button>`;
}

export function sectionProgress(id) {
  const e = get(id);
  if (!e) return 0;
  const total = Object.keys(e.sections || {}).length || 1;
  const seen = (store.get('seen', {})[id] || []).length;
  return Math.min(100, Math.round((seen / total) * 100));
}

function greeting() {
  const h = new Date().getHours();
  return h < 13 ? 'Buongiorno' : h < 18 ? 'Buon pomeriggio' : 'Buonasera';
}

export function openNews() {
  store.set('newsSeen', CONTENT_VERSION + REVISION);
  openSheet({
    title: 'Novità e contenuti',
    html: `<div class="stack">
      <div class="callout ok">${icon('circle-check')}<div><b>Versione contenuti ${CONTENT_VERSION}</b> · revisione ${REVISION}. Tutto il contenuto è incluso nell’app e funziona offline.</div></div>
      <p class="muted">Ogni scheda riporta fonti, versione e data di revisione. Procedure, linee guida e classificazioni cambiano nel tempo: confronta sempre con la fonte ufficiale e con il protocollo della tua struttura.</p>
      <p class="muted small">Puoi annotare il protocollo locale in ogni scheda e configurare le provette secondo il manuale prelievi della tua azienda.</p></div>`,
  });
}

export function renderHome(root) {
  const mods = Object.fromEntries(MODULES.map((m) => [m.id, m]));
  const top = ['anatomia', 'patologie', 'procedure', 'scale'].map((id) => mods[id]);
  const rest = ['assistenza', 'provette', 'dispositivi', 'specialistiche', 'emergenze', 'terminologia'].map((id) => mods[id]).concat([STUDIO]);

  const rec = recents.list().map(get).filter(Boolean);
  const cont = rec.find((e) => !['term', 'sign'].includes(e.type) && sectionProgress(e.id) < 100) || rec[0] || get('braden') || BY_TYPE.scale?.[0];
  const pr = cont ? sectionProgress(cont.id) : 0;
  const t = cont ? TYPES[cont.type] : null;
  const newDot = store.get('newsSeen') !== CONTENT_VERSION + REVISION;

  root.innerHTML = `<div class="page flush homebg">
    <header class="hhead">${logoImg()}<div>${wordmark()}<small>Dalla conoscenza alla cura</small></div>
      <button class="bell" data-news aria-label="Novità">${icon('bell')}${newDot ? '<i></i>' : ''}</button></header>
    <section class="greet"><h2>${greeting()}</h2><p>La conoscenza di oggi è una cura migliore domani.</p>
      <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg></section>
    <button class="hsearch" data-open-search aria-label="Cerca">${icon('search')}<span>Cerca tra patologie, procedure, farmaci…</span></button>
    <div class="hgrid">
      ${top.map(moduleTile).join('')}
      <button class="hcard wide" data-go="/farmaci" style="--c:var(--c-farmaci)">
        <div class="ico" style="width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:rgb(var(--c) / .14);color:rgb(var(--c))">${icon('pill')}</div>
        <div class="tx"><div class="nm">Farmaci e calcoli</div><div class="sb">Principi attivi, dosaggi e calcolatori</div></div>
        <span class="calc" data-go="/calcolatore" data-stop role="button" aria-label="Calcolatore">${icon('calculator')}</span></button>
    </div>
    ${cont ? `<section class="cont" style="--c:var(${t.c})"><div class="ch">${icon('clock')}Continua a studiare</div>
      <button class="cr" data-go="${routeFor(cont)}"><div class="tile">${icon(t.icon)}</div>
      <div class="grow"><div class="nm">${esc(cont.title)}</div><div class="sb">${esc(plain(cont.summary || '').slice(0, 80))}</div>
      <div class="bar"><div class="progress"><i style="width:${pr}%"></i></div><em>${pr}%</em></div></div>${icon('chevron-right', 'go')}</button></section>` : ''}
    <div class="hsec">Tutte le sezioni</div>
    <div class="hgrid" style="padding-top:12px">${rest.map(moduleTile).join('')}</div>
    <div class="hfoot">${DISCLAIMER}</div>
  </div>`;
  root.querySelector('[data-news]').addEventListener('click', (e) => { e.stopPropagation(); openNews(); });
  root.querySelector('[data-stop]').addEventListener('click', (e) => e.stopPropagation(), true);
  return { title: 'Punto Salute', bar: 'none', tab: 'home', bars: ['#FFFFFF', false] };
}
