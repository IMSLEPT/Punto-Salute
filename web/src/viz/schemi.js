// Rappresentazioni per gli schemi di studio: flusso, mnemonico, ciclo, mappa a schede.
import { registerFigure } from './index.js';
import { rt } from '../core/text.js';
import { esc } from '../core/dom.js';

const L = (s) => rt(s, { seen: new Set(), self: '' });
const list = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

/** Diagramma di flusso verticale. Elementi: stringa | {q, yes, no} | {end} | {alert} | {ok}. */
function flowHtml(steps) {
  const arrow = '<div class="fa" aria-hidden="true">↓</div>';
  const node = (x) => {
    if (typeof x === 'string') return `<div class="fn">${L(x)}</div>`;
    if (x.alert) return `<div class="fn alert">${L(x.alert)}</div>`;
    if (x.ok) return `<div class="fn ok">${L(x.ok)}</div>`;
    if (x.end) return `<div class="fn end">${L(x.end)}</div>`;
    if (x.q) {
      const col = (h, cls, v) => `<div class="fcol ${cls}"><div class="fh">${h}</div>${list(v).map((y, i) => (i ? arrow : '') + node(y)).join('')}</div>`;
      return `<div class="fn q">${L(x.q)}</div><div class="fcols">${col(x.yesLabel || 'Sì', 'yes', x.yes)}${col(x.noLabel || 'No', 'no', x.no)}</div>`;
    }
    return '';
  };
  return `<div class="flow">${steps.map((s, i) => (i && !(steps[i - 1] && steps[i - 1].q) ? arrow : '') + node(s)).join('')}</div>`;
}
registerFigure('flow', (o) => ({ svg: flowHtml(o.steps || []), caption: o.caption }));

/** Mnemonico: lettere grandi con significato. items: [lettera, titolo, descrizione]. */
registerFigure('mnemo', (o) => ({
  svg: `<div class="mnemo">${(o.items || []).map(([k, t, d]) => `<div class="mn"><div class="mk">${esc(k)}</div><div class="mt"><b>${L(t)}</b>${d ? `<span>${L(d)}</span>` : ''}</div></div>`).join('')}</div>`,
  caption: o.caption,
}));

/** Ciclo: passi numerati con freccia di ritorno. */
registerFigure('cycle', (o) => ({
  svg: `<div class="cyc">${(o.items || []).map(([t, d], i) => `<div class="cs"><div class="cn">${i + 1}</div><div><b>${L(t)}</b>${d ? `<span>${L(d)}</span>` : ''}</div></div>`).join('<div class="ca" aria-hidden="true">↓</div>')}<div class="cb">↻ si ricomincia dal punto 1</div></div>`,
  caption: o.caption,
}));

/** Mappa concettuale a schede: un concetto centrale e rami con voci. */
registerFigure('mapcards', (o) => ({
  svg: `<div class="mapc"><div class="mcenter">${L(o.center || '')}</div><div class="mgrid">${(o.branches || []).map((b, i) => `<div class="mb" style="--bc:${['14 165 233', '13 148 136', '124 58 237', '234 88 12', '192 38 211', '22 163 74', '220 38 38', '101 163 13'][i % 8]}"><div class="mh">${L(b.t)}</div><ul>${list(b.items).map((x) => `<li>${L(x)}</li>`).join('')}</ul></div>`).join('')}</div></div>`,
  caption: o.caption,
}));
