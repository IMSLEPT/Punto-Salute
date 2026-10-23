// Home: replica del layout della tavola di riferimento (header, saluto, ricerca, card, "Continua a studiare").
import { esc, icon } from '../core/dom.js';
import { MODULES, TYPES } from '../core/types.js';
import { countType, get, BY_TYPE } from '../core/data.js';
import { recents, store } from '../core/store.js';
import { routeFor, plain } from '../core/text.js';
import { DISCLAIMER } from './common.js';
import { REVISION, CONTENT_VERSION, chipFor } from './entity.js';
import { notices } from '../core/updates.js';
import { openSheet } from '../core/ui.js';
import logoUrl from '../assets/logo.png';
import stethUrl from '../assets/steth.jpg';
import { colorIcon, TILE_BG } from '../core/icons-color.js';

const BOARD = {
  anatomia: { name: 'Anatomia', sub: 'Strutture, immagini e riferimenti clinici' },
  patologie: { name: 'Patologie', sub: 'Quadri clinici, diagnosi e terapie' },
  procedure: { name: 'Procedure', sub: 'Step operativi e linee guida' },
  scale: { name: 'Scale', sub: 'Valutazioni e strumenti clinici' },
};

export const UNIVERSITA = { id: 'universita', route: '/universita', name: 'Università', sub: 'Percorso di laurea, materie e tirocinio', icon: 'graduation-cap', c: '--c-studio' };
export const STUDIO = { id: 'studio', route: '/studio', name: 'Modalità studio', sub: 'Quiz, flashcard e casi clinici', icon: 'graduation-cap', c: '--c-studio' };

export function logoImg(cls = 'lg') { return `<img class="${cls}" src="${logoUrl}" alt="Punto Salute" width="84" height="67">`; }

export function wordmark() { return `<div class="wordmark">Punto <b>Salute</b></div>`; }

const COLOR_KEY = { anatomia: 'anatomia', patologie: 'patologie', procedure: 'procedure', scale: 'scale' };

export function moduleTile(m) {
  const b = BOARD[m.id] || {};
  const ck = COLOR_KEY[m.id];
  const ico = ck
    ? `<div class="ico big" style="background:${TILE_BG[ck]}">${colorIcon(ck)}</div>`
    : `<div class="ico" style="color:rgb(var(${m.c}));background:rgb(var(${m.c}) / .12)">${icon(m.icon)}</div>`;
  return `<button class="hcard" data-go="${m.route}" style="--c:var(${m.c})">
    <div class="top">${ico}${icon('chevron-right', 'chev')}</div>
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
      ${notices().map((n) => `<div class="callout note">${icon('info')}<div><b>${esc(n.title)}</b> <span class="xs muted">${esc(n.date)}</span><br>${esc(n.text)}${n.rel.length ? `<div class="chips wrap" style="margin-top:8px">${n.rel.map((id) => get(id)).filter(Boolean).map((e) => chipFor(e)).join('')}</div>` : ''}</div></div>`).join('')}
      <p class="muted small">Puoi annotare il protocollo locale in ogni scheda e configurare le provette secondo il manuale prelievi della tua azienda.</p></div>`,
  });
}

export function renderHome(root) {
  const mods = Object.fromEntries(MODULES.map((m) => [m.id, m]));
  const top = ['anatomia', 'patologie', 'procedure', 'scale'].map((id) => mods[id]);
  const rest = ['assistente', 'assistenza', 'provette', 'dispositivi', 'specialistiche', 'emergenze', 'terminologia'].map((id) => mods[id]).concat([UNIVERSITA, STUDIO]);

  const rec = recents.list().map(get).filter(Boolean);
  const cont = rec.find((e) => !['term', 'sign'].includes(e.type) && sectionProgress(e.id) < 100) || rec[0] || get('braden') || BY_TYPE.scale?.[0];
  const pr = cont ? sectionProgress(cont.id) : 0;
  const t = cont ? TYPES[cont.type] : null;
  const newDot = store.get('newsSeen') !== CONTENT_VERSION + REVISION;

  root.innerHTML = `<div class="page flush homebg">
    <header class="hhead">${logoImg()}<div>${wordmark()}<small>Dalla conoscenza alla cura</small></div>
      <div class="hact"><button class="bell aibtn" data-go="/assistente" aria-label="Assistente AI">${icon('robot')}</button><button class="bell" data-news aria-label="Novità">${icon('bell')}${newDot ? '<i></i>' : ''}</button></div></header>
    <section class="greet"><h2>${greeting()}</h2><p>La conoscenza di oggi è una cura migliore domani.</p>
      <img class="steth" src="${stethUrl}" alt="" width="163" height="137"></section>
    <button class="hsearch" data-open-search aria-label="Cerca">${icon('search')}<span>Cerca tra patologie, procedure, farmaci…</span></button>
    <div class="hgrid">
      ${top.map(moduleTile).join('')}
      <button class="hcard wide" data-go="/farmaci" style="--c:var(--c-farmaci)">
        <div class="ico big" style="background:${TILE_BG.farmaci}">${colorIcon('farmaci')}</div>
        <div class="tx"><div class="nm">Farmaci<br>e calcoli</div><div class="sb">Principi attivi,<br>dosaggi e calcolatori</div></div>
        <span class="calc" data-go="/calcolatore" data-stop role="button" aria-label="Calcolatore">${colorIcon('calc')}</span></button>
    </div>
    ${cont ? `<section class="cont" style="--c:var(${t.c})"><div class="ch">${icon('clock')}Continua a studiare</div>
      <button class="cr" data-go="${routeFor(cont)}"><div class="tile">${colorIcon('doc')}</div>
      <div class="grow"><div class="nm">${esc(cont.title)}</div><div class="sb">${esc(plain(cont.summary || ''))}</div>
      <div class="bar"><div class="progress"><i style="width:${pr}%"></i></div><em>${pr}%</em></div></div>${icon('chevron-right', 'go')}</button></section>` : ''}
    <div class="hsec">Tutte le sezioni</div>
    <div class="hgrid" style="padding-top:12px">${rest.map(moduleTile).join('')}</div>
    <div class="hfoot">${DISCLAIMER}<br><span class="hver">Versione ${esc((window.PuntoSalute && PuntoSalute.version && PuntoSalute.version()) || 'web')}</span></div>
  </div>`;
  root.querySelector('[data-news]').addEventListener('click', (e) => { e.stopPropagation(); openNews(); });
  return { title: 'Punto Salute', bar: 'none', tab: 'home', bars: ['#FFFFFF', false] };
}
