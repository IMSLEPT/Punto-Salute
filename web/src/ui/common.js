import { esc, icon } from '../core/dom.js';
import { TYPES } from '../core/types.js';
import { routeFor, plain } from '../core/text.js';
import { highlight } from '../core/search.js';

export function itemRow(e, q = '', opts = {}) {
  const t = TYPES[e.type];
  const title = q ? highlight(e.title, q) : esc(e.title);
  const sub = opts.sub ?? plain(e.summary || '');
  return `<button class="item" data-go="${routeFor(e)}">
    <div class="tile-ic sm" style="--c:var(${t.c})">${icon(opts.icon || t.icon)}</div>
    <div class="grow"><div class="t">${title}</div>${sub ? `<div class="d">${esc(sub)}</div>` : ''}</div>
    ${opts.badge ? `<span class="badge" style="--c:var(${t.c})">${esc(opts.badge)}</span>` : ''}
    ${icon('chevron-right', 'go')}</button>`;
}

export function listOf(entities, q = '', opts = {}) {
  return `<div class="list">${entities.map((e) => itemRow(e, q, opts)).join('')}</div>`;
}

export function pageHead({ title, sub, icon: ic, c }) {
  return `<div class="phead" style="--c:var(${c})"><div class="tile-ic">${icon(ic)}</div><div><h1>${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ''}</div></div>`;
}

export function emptyState(ic, title, text) {
  return `<div class="empty">${icon(ic)}<h3>${esc(title)}</h3><p>${esc(text)}</p></div>`;
}

export const DISCLAIMER = `<div class="disclaimer">${icon('shield-check')}<div>Punto Salute è uno strumento didattico e di consultazione. Non sostituisce linee guida, protocolli aziendali, prescrizioni mediche né il giudizio clinico. Verifica sempre fonti ufficiali aggiornate.</div></div>`;

export const LOGO = `<svg viewBox="0 0 108 108" width="28" height="28" aria-hidden="true"><path fill="#fff" d="M33,46h42a8,8 0 0 1 0,16h-42a8,8 0 0 1 0,-16z"/><path fill="#fff" d="M46,33v42a8,8 0 0 0 16,0v-42a8,8 0 0 0 -16,0z"/><circle cx="54" cy="54" r="6.5" fill="#ff6b57"/></svg>`;
