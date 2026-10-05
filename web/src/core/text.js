// Testo ricco: **grassetto**, [[id|etichetta]] per i collegamenti, termini del glossario cliccabili.
import { esc, icon } from './dom.js';
import { ALL, BY_ID } from './data.js';
import { TYPES } from './types.js';
import { figure } from '../viz/index.js';

let termRe = null;
let termMap = null;

function buildTerms() {
  termMap = new Map();
  const words = [];
  for (const e of ALL) {
    if (e.type !== 'term' && e.type !== 'sign') continue;
    for (const w of [e.title, ...(e.aliases || [])]) {
      const k = w.toLowerCase();
      if (k.length < 4 || termMap.has(k)) continue;
      termMap.set(k, e.id);
      words.push(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
  }
  words.sort((a, b) => b.length - a.length);
  termRe = new RegExp('(?<![\\p{L}\\p{N}])(' + words.join('|') + ')(?![\\p{L}\\p{N}])', 'giu');
}

function termify(raw, ctx) {
  if (!termRe) buildTerms();
  const seen = ctx.seen || (ctx.seen = new Set());
  let out = '';
  let last = 0;
  termRe.lastIndex = 0;
  let m;
  while ((m = termRe.exec(raw))) {
    const id = termMap.get(m[1].toLowerCase());
    if (!id || id === ctx.self || seen.has(id)) continue;
    seen.add(id);
    out += esc(raw.slice(last, m.index)) + `<a class="term" data-term="${id}">${esc(m[1])}</a>`;
    last = m.index + m[1].length;
  }
  return out + esc(raw.slice(last));
}

/** Inline: restituisce HTML sicuro. */
export function rt(str, ctx = {}) {
  if (str == null) return '';
  const s = String(str);
  let out = '';
  const re = /\*\*(.+?)\*\*|\[\[([a-z0-9_-]+)(?:\|([^\]]*))?\]\]/g;
  let last = 0;
  let m;
  while ((m = re.exec(s))) {
    out += termify(s.slice(last, m.index), ctx);
    if (m[1] !== undefined) out += `<b>${rt(m[1], ctx)}</b>`;
    else {
      const e = BY_ID.get(m[2]);
      const label = m[3] || (e ? e.title : m[2]);
      const c = e ? TYPES[e.type].c : '--c-terminologia';
      out += e
        ? `<a class="lk" style="--c:var(${c})" data-go="${routeFor(e)}">${esc(label)}</a>`
        : esc(label);
    }
    last = re.lastIndex;
  }
  return out + termify(s.slice(last), ctx);
}

export function routeFor(e) {
  switch (e.type) {
    case 'scale': return '/scala/' + e.id;
    case 'calc': return '/calcolatore/' + e.id;
    case 'spec': return '/spec/' + e.id;
    default: return '/e/' + e.id;
  }
}

const CALL = { note: ['info', 'note'], warn: ['triangle-alert', 'warn'], danger: ['octagon-alert', 'danger'], ok: ['circle-check', 'ok'] };

/** Blocchi di contenuto (stringhe, liste, passi, tabelle, callout, figure). */
export function block(content, ctx = {}) {
  if (content == null) return '';
  if (typeof content === 'string') return `<p>${rt(content, ctx)}</p>`;
  if (Array.isArray(content)) {
    let html = '';
    let buf = [];
    const flush = () => { if (buf.length) { html += `<ul class="bul">${buf.map((x) => `<li>${rt(x, ctx)}</li>`).join('')}</ul>`; buf = []; } };
    for (const c of content) {
      if (typeof c === 'string') buf.push(c);
      else { flush(); html += block(c, ctx); }
    }
    flush();
    return html;
  }
  const o = content;
  let html = '';
  if (o.h) html += `<h4>${esc(o.h)}</h4>`;
  if (o.p) html += `<p>${rt(o.p, ctx)}</p>`;
  if (o.ul) html += `<ul class="bul">${o.ul.map((x) => `<li>${rt(x, ctx)}</li>`).join('')}</ul>`;
  if (o.ol) html += `<ol class="steps">${o.ol.map((x) => `<li>${rt(x, ctx)}</li>`).join('')}</ol>`;
  for (const k of Object.keys(CALL)) {
    if (o[k]) html += `<div class="callout ${CALL[k][1]}">${icon(CALL[k][0])}<div>${rt(o[k], ctx)}</div></div>`;
  }
  if (o.table) {
    const { head = [], rows = [] } = o.table;
    html += `<div class="tablewrap"><table class="tbl">${head.length ? `<thead><tr>${head.map((h) => `<th>${rt(h, ctx)}</th>`).join('')}</tr></thead>` : ''}<tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${rt(c, ctx)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  if (o.kv) html += `<dl class="kv">${o.kv.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${rt(v, ctx)}</dd>`).join('')}</dl>`;
  if (o.svg) html += figure(o.svg, o);
  if (o.html) html += o.html;
  return html;
}

export function plain(s) {
  return String(s ?? '').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[\[[a-z0-9_-]+\|([^\]]*)\]\]/g, '$1').replace(/\[\[([a-z0-9_-]+)\]\]/g, (_, id) => BY_ID.get(id)?.title || id);
}
