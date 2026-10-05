// Vista generica di una scheda clinica con mappa dei collegamenti, sezioni, note locali, fonti e revisione.
import { esc, icon, $, $$, debounce } from '../core/dom.js';
import { BY_ID, relatedGroups, sourceList, get } from '../core/data.js';
import { TYPES, MAP_ORDER } from '../core/types.js';
import { LAYOUTS, OPEN, VERIFY, DEFAULT_SOURCES } from '../core/schemas.js';
import { rt, block, routeFor, plain } from '../core/text.js';
import { favs, notes, recents, store } from '../core/store.js';
import { shareText, toast } from '../core/ui.js';
import { figure } from '../viz/index.js';
import { navigate } from '../core/router.js';
import { genButtons } from './genbtn.js';

import { alertsFor } from '../core/updates.js';
export const REVISION = '2026-10';
export const CONTENT_VERSION = '1.0';

export function chipFor(e, extra = '') {
  const t = TYPES[e.type];
  return `<a class="chip tint ${extra}" style="--c:var(${t.c})" data-go="${routeFor(e)}">${icon(t.icon)}${esc(e.title)}</a>`;
}

/** Blocco "Collegamenti clinici" raggruppato per tipo. */
export function mapBlock(id, { limit = 7, title = 'Collegamenti clinici' } = {}) {
  const groups = relatedGroups(id);
  if (!groups.length) return '';
  const html = groups.map((g) => {
    const t = TYPES[g.type];
    const shown = g.items.slice(0, limit);
    const rest = g.items.slice(limit);
    return `<div class="grp" style="--c:var(${t.c})">
      <div class="gh">${icon(t.icon)}${esc(t.plural)} <span class="faint">· ${g.items.length}</span></div>
      <div class="chips wrap">${shown.map((e) => chipFor(e)).join('')}${rest.length ? `<button class="chip" data-more="${g.type}:${id}">+${rest.length}</button>` : ''}</div>
    </div>`;
  }).join('');
  return `<div class="sec-title"><h2>${esc(title)}</h2></div><div class="map">${html}</div>`;
}

function sectionsOf(e) {
  const layout = e.layout || LAYOUTS[e.type] || [];
  return layout.filter(([k]) => e.sections && e.sections[k] != null && e.sections[k] !== '');
}

export function metaBlock(e) {
  const verify = VERIFY[e.type];
  const srcKeys = [...new Set([...(e.sources || []), ...(DEFAULT_SOURCES[e.type] || [])])];
  const srcs = sourceList({ sources: srcKeys });
  const al = alertsFor(e.id);
  const pt = e.patch ? `<div class="callout note" style="margin-top:16px">${icon('info')}<div><b>Scheda aggiornata il ${esc(e.patch.d)}.</b> ${esc(e.patch.why)}<br><span class="xs muted">Fonte: ${esc(e.patch.src)}${e.patch.url ? ` · <a class="lk" data-ext="${esc(e.patch.url)}">apri</a>` : ''} — aggiornamento automatico, non rivisto da un clinico.</span></div></div>` : '';
  return `
    ${pt}
    ${al.map((a) => `<div class="callout danger" style="margin-top:16px">${icon('octagon-alert')}<div><b>Aggiornamento di fonte${a.d ? ' (' + esc(a.d) + ')' : ''}.</b> ${esc(a.t)}${a.s ? ` <span class="xs muted">${esc(a.s)}</span>` : ''}</div></div>`).join('')}
    ${e.verify !== false && verify ? `<div class="callout warn" style="margin-top:16px">${icon('triangle-alert')}<div><b>Verifica locale.</b> ${esc(e.verifyText || verify)}</div></div>` : ''}
    <div class="srcbox"><details><summary>${icon('library')} Fonti, versione e revisione</summary>
      <ul>${srcs.map((s) => `<li><b>${esc(s.t)}</b>${s.y ? ' — ' + esc(s.y) : ''}</li>`).join('')}</ul>
      <div class="meta"><span>Scheda v${esc(e.v || CONTENT_VERSION)}</span><span>Revisione: ${esc(e.rev || REVISION)}</span><span>ID: ${esc(e.id)}</span></div>
      <p class="xs" style="margin:10px 0 0">Procedure, linee guida e classificazioni cambiano nel tempo: controlla sempre la fonte ufficiale aggiornata.</p>
    </details></div>`;
}

export function noteBlock(e) {
  const t = TYPES[e.type];
  const val = notes.get(e.id);
  return `<div class="localnote" style="--c:var(${t.c})">
    <h4>${icon('building-2')} Protocollo locale e appunti</h4>
    <textarea class="textarea" data-note="${esc(e.id)}" placeholder="Annota qui il protocollo della tua struttura, differenze operative, riferimenti… (resta solo su questo dispositivo)">${esc(val)}</textarea>
  </div>`;
}

function actions(e) {
  const t = TYPES[e.type];
  const fav = favs.has(e.id);
  const parts = [];
  parts.push(`<button class="abtn ${fav ? 'on' : ''}" data-fav="${e.id}">${icon('bookmark')}<span>${fav ? 'Salvata' : 'Salva'}</span></button>`);
  parts.push(`<button class="abtn" data-share="${e.id}">${icon('share-2')}<span>Condividi</span></button>`);
  if (e.type === 'anat' && e.mesh) parts.push(`<button class="abtn" data-go="/anatomia?s=${e.mesh}">${icon('rotate-3d')}<span>Vedi in 3D</span></button>`);
  if (e.type === 'ndx') parts.push(`<button class="abtn" data-go="/assistenza/piano/nuovo?dx=${e.id}">${icon('plus')}<span>Usa nel piano</span></button>`);
  return parts.join('');
}

export function entityToText(e) {
  const out = [e.title, '', plain(e.summary || '')];
  for (const [k, label] of e.layout || LAYOUTS[e.type] || []) {
    const v = e.sections?.[k];
    if (v == null) continue;
    out.push('', label.toUpperCase());
    const flat = (x) => {
      if (typeof x === 'string') return ['• ' + plain(x)];
      if (Array.isArray(x)) return x.flatMap(flat);
      const r = [];
      if (x.p) r.push(plain(x.p));
      if (x.ul) x.ul.forEach((u) => r.push('• ' + plain(u)));
      if (x.ol) x.ol.forEach((u, i) => r.push(`${i + 1}. ` + plain(u)));
      for (const k2 of ['note', 'warn', 'danger', 'ok']) if (x[k2]) r.push('! ' + plain(x[k2]));
      return r;
    };
    out.push(...flat(v));
  }
  out.push('', 'Punto Salute — contenuto didattico: verificare protocollo locale e fonti aggiornate.');
  return out.join('\n');
}

export function renderEntity(root, id) {
  const e = BY_ID.get(id);
  if (!e) {
    root.innerHTML = `<div class="page"><div class="empty">${icon('search-x')}<h3>Scheda non trovata</h3><p>L’elemento richiesto non esiste.</p><button class="btn" data-go="/">Torna alla home</button></div></div>`;
    return { title: 'Non trovato' };
  }
  recents.push(e.id);
  const t = TYPES[e.type];
  const secs = sectionsOf(e);
  const openSet = new Set(e.open || OPEN[e.type] || []);
  const ctx = { self: e.id, seen: new Set() };
  const aliases = (e.aliases || []).slice(0, 5).join(' · ');

  const secHtml = secs.map(([k, label], i) => {
    const ctx2 = { self: e.id, seen: new Set() };
    return `<details class="sec" id="sec-${k}" ${openSet.has(k) ? 'open' : ''}>
      <summary><span class="num">${i + 1}</span><span>${esc(label)}</span>${icon('chevron-down', 'chev')}</summary>
      <div class="body" style="--c:var(${t.c})">${block(e.sections[k], ctx2)}</div></details>`;
  }).join('');

  const nav = secs.length >= 4
    ? `<div class="sectionnav" style="--c:var(${t.c})"><div class="chips">${secs.map(([k, l]) => `<button class="chip" data-sec="${k}">${esc(l)}</button>`).join('')}</div></div>`
    : '';

  const figs = (e.figs || []).map((f) => `<div class="card pad figwrap" style="margin-bottom:14px">${figure(f.id || f, f)}</div>`).join('');

  root.innerHTML = `
  <div class="page flush" style="--c:var(${t.c})">
    <div class="ehead">
      <span class="kind">${icon(t.icon)}${esc(t.label)}</span>
      <h1>${esc(e.title)}</h1>
      ${aliases ? `<div class="alias">${esc(aliases)}</div>` : ''}
      ${e.summary ? `<p class="sum">${rt(e.summary, ctx)}</p>` : ''}
      <div class="actions">${actions(e)}</div>
      ${e.type === 'calc' || e.type === 'scale' ? '' : genButtons(e.id)}
    </div>
    ${nav}
    <div style="padding:14px 16px 28px">
      ${figs}
      ${e.intro ? `<div class="stack" style="margin-bottom:14px">${block(e.intro, { self: e.id, seen: new Set() })}</div>` : ''}
      ${secHtml}
      ${mapBlock(e.id)}
      ${noteBlock(e)}
      ${metaBlock(e)}
    </div>
  </div>`;

  // sezioni: apri e scorri
  $$('[data-sec]', root).forEach((b) => {
    b.addEventListener('click', () => {
      const d = $('#sec-' + b.dataset.sec, root);
      if (d) { d.open = true; d.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      $$('[data-sec]', root).forEach((x) => x.classList.toggle('active', x === b));
    });
  });
  const markSeen = (k) => { const m = store.get('seen', {}); const l = m[e.id] || (m[e.id] = []); if (!l.includes(k)) { l.push(k); store.set('seen', m); } };
  $$('details.sec', root).forEach((d) => { if (d.open) markSeen(d.id.slice(4)); d.addEventListener('toggle', () => { if (d.open) markSeen(d.id.slice(4)); }); });
  const nt = $('[data-note]', root);
  if (nt) nt.addEventListener('input', debounce(() => notes.set(e.id, nt.value), 300));
  return { title: t.label, id: e.id };
}
