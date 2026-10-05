import { esc, icon } from '../core/dom.js';
import { MODULES, TYPES } from '../core/types.js';
import { countType, get } from '../core/data.js';
import { favs, recents } from '../core/store.js';
import { routeFor } from '../core/text.js';
import { SUGGEST } from './search.js';
import { DISCLAIMER, LOGO } from './common.js';

function mini(e) {
  const t = TYPES[e.type];
  return `<button class="mini" data-go="${routeFor(e)}" style="--c:var(${t.c})">
    <div class="tile-ic sm">${icon(t.icon)}</div><div class="t">${esc(e.title)}</div><div class="s">${esc(t.label)}</div></button>`;
}

export function moduleTile(m) {
  const n = countType(m.count);
  return `<button class="mod" data-go="${m.route}" style="--c:var(${m.c})">
    <div class="tile-ic">${icon(m.icon)}</div>
    <div><div class="name">${esc(m.name)}</div><div class="sub">${esc(m.sub)}</div></div>
    ${n ? `<span class="cnt">${n}</span>` : ''}</button>`;
}

export function renderHome(root) {
  const rec = recents.list().map(get).filter(Boolean).slice(0, 10);
  const fav = favs.list().map(get).filter(Boolean).slice(0, 10);
  root.innerHTML = `<div class="page flush">
    <section class="hero">
      <div class="brand"><div class="logo">${LOGO}</div><div><h1>Punto Salute</h1><p>Manuale infermieristico interattivo</p></div></div>
      <p class="lead">Dal sintomo all’assistenza, <em>tutto collegato</em>.</p>
    </section>
    <div class="home-search">
      <button class="searchbox" data-open-search aria-label="Cerca">${icon('search')}<span>Cerca iperkaliemia, PICC, BPCO…</span><kbd>Ricerca</kbd></button>
      <div class="sugg">${SUGGEST.slice(0, 8).map((s) => `<button class="chip" data-search="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    </div>
    <div style="padding:6px 16px 28px">
      ${rec.length ? `<div class="sec-title"><h2>Continua</h2></div><div class="carousel">${rec.map(mini).join('')}</div>` : ''}
      ${fav.length ? `<div class="sec-title"><h2>Salvate</h2><button class="more" data-go="/preferiti">Tutte</button></div><div class="carousel">${fav.map(mini).join('')}</div>` : ''}
      <div class="sec-title"><h2>Modalità studio</h2></div>
      <button class="promo" data-go="/studio">${icon('graduation-cap')}<div><div class="big">Quiz, flashcard e casi clinici</div><div class="sm">Costruisci la diagnosi infermieristica passo dopo passo</div></div></button>
      <div class="sec-title"><h2>Esplora</h2></div>
      <div class="grid2">${MODULES.map(moduleTile).join('')}</div>
      ${DISCLAIMER}
    </div>
  </div>`;
  return { title: 'Punto Salute', bar: 'none', tab: 'home', bars: ['#0B1F33', true] };
}
