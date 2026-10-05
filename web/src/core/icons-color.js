// Icone a colori della Home (ridisegnate in vettoriale dalla tavola di riferimento).
const gear = (() => {
  const cx = 12, cy = 12, ro = 10, ri = 7.6, n = 8;
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const w = 0.2, w2 = 0.34;
    const p = (r, t) => `${(cx + r * Math.cos(a + t)).toFixed(2)},${(cy + r * Math.sin(a + t)).toFixed(2)}`;
    d += `${i ? 'L' : 'M'}${p(ri, -w2)}L${p(ro, -w)}L${p(ro, w)}L${p(ri, w2)}`;
  }
  return d + 'Z';
})();

export const COLOR_ICONS = {
  anatomia: `<g fill="none" stroke="#1e9bf0" stroke-width="1.7" stroke-linecap="round"><path d="M12 2.8v18.4" stroke-width="2.2" stroke-dasharray="2.2 0.9"/><path d="M12 6c-3.2 0-5.6 1.2-7 3.6M12 9.4c-3.4 0-5.8 1.4-6.8 4.4M12 12.8c-3 0-5 1.5-5.8 4.2M12 16c-2.2 0-3.6 1.1-4.2 3"/><path d="M12 6c3.2 0 5.6 1.2 7 3.6M12 9.4c3.4 0 5.8 1.4 6.8 4.4M12 12.8c3 0 5 1.5 5.8 4.2M12 16c2.2 0 3.6 1.1 4.2 3"/><path d="M8.8 4.2h6.4" stroke-width="2.2"/></g>`,
  patologie: `<defs><linearGradient id="gh" x1="0" y1="0" x2="0.7" y2="1"><stop offset="0" stop-color="#ff8f8f"/><stop offset="1" stop-color="#ec5b61"/></linearGradient></defs><path fill="url(#gh)" d="M12.2 21.4c-4.4-3-8.2-6.8-8.2-11 0-3 2.2-5 4.6-5 1.4 0 2.6.6 3.6 1.8 1-1.2 2.2-1.8 3.7-1.8 2.5 0 4.1 2 4.1 4.8 0 4.2-3.5 8.2-7.8 11.2z"/><path fill="#ec5b61" d="M8.8 2.6c.9 0 1.6.6 1.6 1.4v2.2H7.2V4c0-.8.7-1.4 1.6-1.4zM13.2 2.6h2.4c.9 0 1.4.5 1.4 1.1S16.5 5 15.6 5h-2.4z"/><path fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.1" stroke-linecap="round" d="M7 11.5c1.2 2.6 3.2 4.6 5.2 6.2"/>`,
  procedure: `<path fill="#2196f3" fill-rule="evenodd" d="${gear} M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z" stroke="#2196f3" stroke-width="1.2" stroke-linejoin="round"/>`,
  scale: `<defs><linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#19b3b0"/><stop offset="1" stop-color="#0b8f98"/></linearGradient></defs><rect x="3.4" y="12.6" width="4.4" height="7.8" rx="1.2" fill="url(#gb)"/><rect x="9.8" y="8.4" width="4.4" height="12" rx="1.2" fill="url(#gb)"/><rect x="16.2" y="3.4" width="4.4" height="17" rx="1.2" fill="url(#gb)"/>`,
  farmaci: `<g transform="rotate(-45 12 12)"><rect x="2.4" y="7.8" width="19.2" height="8.4" rx="4.2" fill="#1e9bf0"/><rect x="11.5" y="7.8" width="1.1" height="8.4" fill="#e9f5fe"/></g>`,
  calc: `<rect x="4" y="2.4" width="16" height="19.2" rx="2.6" fill="#0b7285"/><rect x="6.6" y="5" width="10.8" height="3.6" rx="1" fill="#e3f4f7"/><g fill="#e3f4f7"><circle cx="8.2" cy="12.2" r="1.15"/><circle cx="12" cy="12.2" r="1.15"/><circle cx="15.8" cy="12.2" r="1.15"/><circle cx="8.2" cy="15.6" r="1.15"/><circle cx="12" cy="15.6" r="1.15"/><circle cx="15.8" cy="15.6" r="1.15"/><circle cx="8.2" cy="19" r="1.15"/><circle cx="12" cy="19" r="1.15"/><circle cx="15.8" cy="19" r="1.15"/></g>`,
  doc: `<g fill="none" stroke="#139aa3" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M6 3.5h8.2L18.5 8v12.5H6z"/><path d="M14.2 3.5V8h4.3" stroke-width="1.5"/><path d="M9 11.5h6M9 15h6"/></g>`,
};
export const TILE_BG = { anatomia: '#dcefff', patologie: '#fde3e4', procedure: '#d9edff', scale: '#d3f0ef', farmaci: '#dcefff', doc: '#d6f1f3' };
export function colorIcon(name, cls = '') { return `<svg class="cic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${COLOR_ICONS[name]}</svg>`; }
