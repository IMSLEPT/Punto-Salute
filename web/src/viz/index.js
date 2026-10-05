// Registro delle figure SVG (illustrazioni procedurali).
const FIGS = {};
export function registerFigure(id, fn) { FIGS[id] = fn; }

export function figure(id, opts = {}) {
  const f = FIGS[id];
  if (!f) return '';
  const { svg, caption } = f(opts);
  return `<figure class="fig">${svg}${caption || opts.caption ? `<figcaption>${caption || opts.caption}</figcaption>` : ''}</figure>`;
}
export const hasFigure = (id) => !!FIGS[id];
