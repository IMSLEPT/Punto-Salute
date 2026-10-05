import { registerFigure } from './index.js';
import { esc } from '../core/dom.js';

/** Disegna una provetta (corpo trasparente con liquido colorato e tappo). */
export function tubeSvg({ color = '#fee2e2', cap = '#dc2626', fill = 80, w = 54, h = 170, label = '' } = {}) {
  const lv = h * 0.78 * (fill / 100);
  const y0 = 38 + (h * 0.78 - lv);
  return `<svg viewBox="0 0 54 ${h + 8}" width="${w}" height="${h}" role="img" aria-label="${esc(label)}">
    <defs><linearGradient id="g${cap.slice(1)}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".08"/></linearGradient></defs>
    <path d="M10 34 H44 V${h - 24} a17 17 0 0 1 -34 0 Z" fill="#f4f8fb" stroke="#b7c4d1" stroke-width="1.4"/>
    <path d="M11 ${y0} H43 V${h - 24} a16 16 0 0 1 -32 0 Z" fill="${color === '#f5f5f5' ? '#e6c36e' : '#b3262e'}" fill-opacity=".88" stroke="${cap}" stroke-opacity=".35" stroke-width=".8"/>
    <rect x="6" y="6" width="42" height="30" rx="7" fill="${cap}"/><rect x="6" y="6" width="42" height="12" rx="6" fill="#fff" opacity=".18"/>
    <path d="M10 34 H44 V${h - 24} a17 17 0 0 1 -34 0 Z" fill="url(#g${cap.slice(1)})"/>
  </svg>`;
}
registerFigure('tube', (o) => ({ svg: `<div style="display:grid;place-items:center;padding:6px 0">${tubeSvg({ color: o.color, cap: o.cap, fill: o.fill, h: 190 })}</div>`, caption: o.caption }));
