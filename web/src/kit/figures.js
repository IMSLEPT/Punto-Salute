// Figure per gli schemi: figura SVG della scheda (se esiste) oppure istantanea 3D salvata dalla vista Anatomia.
import { figure, hasFigure } from '../viz/index.js';

const SNAPS = new Map();
export const saveSnapshot = (id, dataUrl) => { if (id && dataUrl) SNAPS.set(id, dataUrl); };
export const getSnapshot = (id) => SNAPS.get(id) || null;

function resolveVars(markup) {
  const root = document.documentElement;
  const prev = root.dataset.theme;
  root.dataset.theme = 'light';
  const cs = getComputedStyle(root);
  const out = markup.replace(/var\((--[a-z0-9-]+)(?:\s*,\s*([^)]+))?\)/gi, (_, name, fb) => {
    const v = cs.getPropertyValue(name).trim();
    if (!v) return fb || '#64748b';
    return /^\d+\s+\d+\s+\d+$/.test(v) ? `rgb(${v})` : v;
  });
  if (prev) root.dataset.theme = prev; else delete root.dataset.theme;
  return out;
}

/** Prima figura SVG autonoma della scheda: {markup, w, h, caption} oppure null. */
export function cardFigure(e) {
  for (const f of e.figs || []) {
    const id = typeof f === 'string' ? f : f.id;
    if (!id || !hasFigure(id)) continue;
    const html = figure(id, typeof f === 'object' ? f : {});
    const m = /<svg[\s\S]*<\/svg>/i.exec(html);
    if (!m) continue;
    const doc = new DOMParser().parseFromString(`<div>${resolveVars(m[0])}</div>`, 'text/html');
    const svg = doc.querySelector('svg');
    if (!svg) continue;
    let vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
    if (vb.length !== 4 || vb.some((n) => !isFinite(n))) {
      const w = parseFloat(svg.getAttribute('width')) || 200, h = parseFloat(svg.getAttribute('height')) || 200;
      vb = [0, 0, w, h];
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    }
    const cap = /<figcaption>([\s\S]*?)<\/figcaption>/i.exec(html);
    svg.removeAttribute('class'); svg.removeAttribute('style');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    return { svg, w: vb[2], h: vb[3], caption: cap ? cap[1].replace(/<[^>]+>/g, '') : '' };
  }
  return null;
}

/** SVG annidato posizionato in un riquadro, mantenendo le proporzioni. */
export function placeSvg(fig, x, y, boxW, boxH) {
  const k = Math.min(boxW / fig.w, boxH / fig.h);
  const w = fig.w * k, h = fig.h * k;
  const clone = fig.svg.cloneNode(true);
  clone.setAttribute('x', x + (boxW - w) / 2); clone.setAttribute('y', y + (boxH - h) / 2);
  clone.setAttribute('width', w); clone.setAttribute('height', h);
  clone.removeAttribute('height'); clone.setAttribute('height', h);
  return new XMLSerializer().serializeToString(clone);
}
