// Figure SVG schematiche: dispositivi, accessi venosi, drenaggi, posizionamento elettrodi ECG, misura del SNG.
import { registerFigure } from './index.js';

const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size || 11}" font-weight="${o.w || 500}" text-anchor="${o.a || 'start'}" fill="${o.c || 'var(--ink-2)'}" font-family="Inter,system-ui,sans-serif">${s}</text>`;
const L = (x1, y1, x2, y2, c = 'var(--ink-3)') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1" stroke-linecap="round"/>`;
const dot = (x, y, r = 2.4, c = 'var(--ink-3)') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const SKIN = '#f2d6c4', SKIN_S = '#c9a590', VEIN = '#4f7fc4', ART = '#d4553f', TUBE = '#dbe7ef', TUBE_S = '#7c93a6';

// ---------------------------------------------------------------- catetere vescicale
registerFigure('foley', () => ({
  svg: `<svg viewBox="0 0 340 168" role="img" aria-label="Schema del catetere vescicale a 3 vie">
    <path d="M24 82 H210" stroke="${TUBE_S}" stroke-width="17" stroke-linecap="round"/><path d="M24 82 H210" stroke="${TUBE}" stroke-width="13" stroke-linecap="round"/>
    <ellipse cx="82" cy="82" rx="27" ry="25" fill="#6fb3e8" fill-opacity=".38" stroke="#2f7fc0" stroke-width="1.6"/>
    <ellipse cx="38" cy="82" rx="3.2" ry="2" fill="${TUBE_S}"/><ellipse cx="48" cy="82" rx="3.2" ry="2" fill="${TUBE_S}"/>
    <path d="M208 82 L254 54 H322" fill="none" stroke="${TUBE_S}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/><path d="M208 82 L254 54 H322" fill="none" stroke="${TUBE}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M208 82 L254 112 H300" fill="none" stroke="${TUBE_S}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M208 82 L254 112 H300" fill="none" stroke="#9fe0a8" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M208 82 L246 82 L262 82" fill="none" stroke="${TUBE_S}" stroke-width="10" stroke-linecap="round"/><path d="M208 82 H262" fill="none" stroke="#f1c27d" stroke-width="6.5" stroke-linecap="round"/>
    <rect x="296" y="106" width="22" height="12" rx="3" fill="#2f9e5b"/>
    <path d="M318 49 h14 l-4 10 h-6 z" fill="${TUBE_S}"/>
    ${T(24, 20, 'Punta con fori di drenaggio', { c: 'var(--ink)', w: 650 })}${L(40, 25, 42, 76)}
    ${T(82, 140, 'Palloncino gonfiato', { a: 'middle', c: 'var(--ink)', w: 650 })}${T(82, 154, '(acqua sterile)', { a: 'middle' })}${L(82, 124, 82, 108)}
    ${T(330, 38, 'Via di drenaggio (sacca)', { a: 'end', c: 'var(--ink)', w: 650 })}
    ${T(330, 138, 'Valvola del palloncino', { a: 'end', c: 'var(--ink)', w: 650 })}${L(308, 120, 308, 126)}
    ${T(270, 86, 'Lavaggio (3ª via)', { c: 'var(--ink)', w: 650, size: 10 })}
  </svg>`,
  caption: 'Catetere vescicale a 3 vie (nel modello a 2 vie manca la via di lavaggio). Il palloncino si gonfia con acqua sterile con il volume indicato sul raccordo: non usare soluzione fisiologica. Fonte didattica: schema semplificato.',
}));

// ---------------------------------------------------------------- drenaggio toracico a tre camere
registerFigure('chest-drain', () => {
  const ch = (x, lvl, fill, inner = '') => `<rect x="${x}" y="56" width="78" height="140" rx="9" fill="#f6fafc" stroke="${TUBE_S}" stroke-width="1.6"/>
    <rect x="${x + 1.6}" y="${196 - lvl}" width="74.8" height="${lvl - 1.6}" rx="7" fill="${fill}" fill-opacity=".6"/>${inner}`;
  const pipe = (d, w = 5) => `<path d="${d}" fill="none" stroke="${TUBE_S}" stroke-width="${w + 3}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${TUBE}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  return {
    svg: `<svg viewBox="0 0 340 250" role="img" aria-label="Schema del drenaggio toracico a tre camere">
      ${ch(18, 100, '#c24f4f')}${ch(131, 70, '#6fb3e8', `<path d="M170 56 V176" stroke="${TUBE_S}" stroke-width="3"/><circle cx="176" cy="150" r="2.6" fill="#fff"/><circle cx="182" cy="132" r="2" fill="#fff"/><circle cx="174" cy="114" r="1.6" fill="#fff"/>`)}${ch(244, 84, '#6fb3e8', `<path d="M283 56 V160" stroke="${TUBE_S}" stroke-width="3"/>`)}
      ${pipe('M26 56 V34 H8')}${T(8, 22, 'Dal paziente', { c: 'var(--ink)', w: 700 })}
      ${pipe('M96 56 V40 H131 V56', 4)}${pipe('M209 56 V40 H244 V56', 4)}
      ${pipe('M322 56 V34 H336', 4)}${T(336, 22, 'All’aspiratore', { a: 'end', c: 'var(--ink)', w: 700 })}
      ${T(57, 216, '1 · Raccolta', { a: 'middle', c: 'var(--ink)', w: 700, size: 11.5 })}${T(57, 231, 'misura e aspetto', { a: 'middle', size: 10.5 })}
      ${T(170, 216, '2 · Water seal', { a: 'middle', c: 'var(--ink)', w: 700, size: 11.5 })}${T(170, 231, 'bolle = aria che passa', { a: 'middle', size: 10.5 })}
      ${T(283, 216, '3 · Aspirazione', { a: 'middle', c: 'var(--ink)', w: 700, size: 11.5 })}${T(283, 231, 'regolata dall’acqua', { a: 'middle', size: 10.5 })}
    </svg>`,
    caption: 'Sistema a tre camere: 1) raccolta del drenato, 2) valvola ad acqua (impedisce il rientro d’aria; le bolle indicano una perdita d’aria), 3) controllo dell’aspirazione (regolato dal livello d’acqua). Tieni il sistema <b>verticale e sotto il livello del torace</b>; non clampare senza indicazione. Schema semplificato.',
  };
});

// ---------------------------------------------------------------- accessi venosi centrali
const torso = (x, y, extra = '') => `<g transform="translate(${x},${y})">
  <path d="M30 14 C42 8 78 8 90 14 C108 22 112 46 112 74 L108 168 C94 176 26 176 12 168 L8 74 C8 46 12 22 30 14Z" fill="${SKIN}" stroke="${SKIN_S}" stroke-width="1.4"/>
  <circle cx="60" cy="-6" r="14" fill="${SKIN}" stroke="${SKIN_S}" stroke-width="1.4"/>
  <path d="M60 36 V104" stroke="${VEIN}" stroke-width="5" stroke-linecap="round"/><path d="M60 104 C60 118 74 124 80 112 C86 98 74 86 62 92" fill="#e0889a" fill-opacity=".75" stroke="#b34a60" stroke-width="1.2"/>
  ${extra}</g>`;
registerFigure('central-lines', () => ({
  svg: `<svg viewBox="0 0 360 262" role="img" aria-label="Confronto tra PICC, CVC e port">
    ${torso(22, 44, `<path d="M-6 52 C-18 80 -22 120 -20 150" stroke="${SKIN_S}" stroke-width="1.2" fill="none"/>
      <path d="M-14 142 C-6 112 4 84 34 66 C48 58 56 70 60 96" fill="none" stroke="#e8a537" stroke-width="2.6" stroke-linecap="round"/>${dot(60, 96, 3.2, '#e8a537')}`)}
    ${torso(130, 44, `<path d="M70 -2 C70 20 62 40 60 92" fill="none" stroke="#e8a537" stroke-width="2.6" stroke-linecap="round"/>${dot(60, 96, 3.2, '#e8a537')}<circle cx="70" cy="-1" r="3.6" fill="#8a6bd8"/>`)}
    ${torso(238, 44, `<rect x="74" y="42" width="22" height="16" rx="6" fill="#8a6bd8" stroke="#5b3fb0" stroke-width="1.3"/><circle cx="85" cy="50" r="3" fill="#d9ccf7"/>
      <path d="M85 58 C80 70 66 80 60 94" fill="none" stroke="#e8a537" stroke-width="2.6" stroke-linecap="round"/>${dot(60, 96, 3.2, '#e8a537')}`)}
    ${T(82, 16, 'PICC', { a: 'middle', c: 'var(--ink)', w: 700, size: 12.5 })}${T(190, 16, 'CVC', { a: 'middle', c: 'var(--ink)', w: 700, size: 12.5 })}${T(298, 16, 'Port', { a: 'middle', c: 'var(--ink)', w: 700, size: 12.5 })}
    ${T(82, 252, 'vena del braccio', { a: 'middle', size: 10 })}${T(190, 252, 'giugulare / succlavia', { a: 'middle', size: 10 })}${T(298, 252, 'camera sottocutanea', { a: 'middle', size: 10 })}
    <circle cx="14" cy="226" r="0" fill="none"/>
  </svg>`,
  caption: 'Tutti e tre portano la punta in <b>vena cava superiore / giunzione cavo-atriale</b> (linea arancione, punto = punta). PICC: da una vena del braccio; CVC: da giugulare, succlavia o femorale, con uscita cutanea; port: camera impiantata sotto la cute, si accede con ago di Huber. Schema semplificato.',
}));

// ---------------------------------------------------------------- posizionamento elettrodi ECG
registerFigure('ecg-leads', () => {
  const V = [['V1', 106, 94, '#d93a3a'], ['V2', 142, 94, '#e8c52e'], ['V3', 156, 105, '#3fa95a'], ['V4', 170, 116, '#8a5a35'], ['V5', 188, 116, '#2b2b2b'], ['V6', 204, 116, '#8a4fd0']];
  return {
    svg: `<svg viewBox="0 0 340 250" role="img" aria-label="Posizionamento degli elettrodi ECG">
      <path d="M78 24 C108 14 142 14 172 24 C200 32 206 58 208 88 L204 220 C176 232 74 232 46 220 L42 88 C44 58 50 32 78 24Z" fill="${SKIN}" stroke="${SKIN_S}" stroke-width="1.4" transform="translate(0,0)"/>
      <rect x="116" y="30" width="16" height="104" rx="8" fill="#fff" fill-opacity=".55" stroke="${SKIN_S}"/>
      ${[58, 74, 90, 106, 122].map((y, i) => `<path d="M60 ${y} C90 ${y + 8} 120 ${y + 8} 124 ${y}" fill="none" stroke="${SKIN_S}" stroke-width=".9" stroke-opacity=".75"/><path d="M188 ${y} C160 ${y + 8} 140 ${y + 8} 124 ${y}" fill="none" stroke="${SKIN_S}" stroke-width=".9" stroke-opacity=".75"/>`).join('')}
      ${V.map(([n, x, y, c]) => `<circle cx="${x}" cy="${y}" r="8.5" fill="${c}"/>${T(x, y + 3.4, n, { a: 'middle', c: n === 'V2' ? '#222' : '#fff', w: 700, size: 9.5 })}`).join('')}
      <circle cx="62" cy="48" r="9" fill="#d93a3a"/>${T(62, 51.6, 'RA', { a: 'middle', c: '#fff', w: 700, size: 9.5 })}
      <circle cx="186" cy="48" r="9" fill="#e8c52e"/>${T(186, 51.6, 'LA', { a: 'middle', c: '#222', w: 700, size: 9.5 })}
      <circle cx="170" cy="206" r="9" fill="#3fa95a"/>${T(170, 209.6, 'LL', { a: 'middle', c: '#fff', w: 700, size: 9.5 })}
      <circle cx="82" cy="206" r="9" fill="#2b2b2b"/>${T(82, 209.6, 'RL', { a: 'middle', c: '#fff', w: 700, size: 9.5 })}
      ${T(226, 40, 'Arti (colori IEC)', { c: 'var(--ink)', w: 700, size: 10.5 })}${T(226, 55, 'RA braccio dx · rosso', { size: 9.5 })}${T(226, 68, 'LA braccio sx · giallo', { size: 9.5 })}${T(226, 81, 'LL gamba sx · verde', { size: 9.5 })}${T(226, 94, 'RL gamba dx · nero', { size: 9.5 })}
      ${T(226, 124, 'Precordiali', { c: 'var(--ink)', w: 700, size: 10.5 })}${T(226, 139, 'V1 IV sp., dx sterno', { size: 9.5 })}${T(226, 152, 'V2 IV sp., sx sterno', { size: 9.5 })}${T(226, 165, 'V3 tra V2 e V4', { size: 9.5 })}${T(226, 178, 'V4 V sp., emiclaveare', { size: 9.5 })}${T(226, 191, 'V5 ascellare ant.', { size: 9.5 })}${T(226, 204, 'V6 ascellare media', { size: 9.5 })}${T(226, 222, 'V4–V6 stessa altezza', { size: 9.5, c: 'var(--ink)', w: 650 })}
    </svg>`,
    caption: 'Le precordiali V4–V6 stanno alla stessa altezza (V spazio intercostale). Disegno schematico e non in scala: conta il repere anatomico, non la figura. I colori variano con lo standard (IEC o AHA): verifica l’etichetta dell’apparecchio.',
  };
});

// ---------------------------------------------------------------- misura del sondino nasogastrico
registerFigure('sng-measure', () => ({
  svg: `<svg viewBox="0 0 340 230" role="img" aria-label="Misura del sondino nasogastrico: naso, lobo dell’orecchio, xifoide">
    <path d="M108 40 C132 6 190 8 206 46 C216 70 206 92 196 108 L190 124 L186 180 C150 196 120 196 96 184 L100 124 C86 110 84 96 98 90 C100 70 98 52 108 40Z" fill="${SKIN}" stroke="${SKIN_S}" stroke-width="1.4"/>
    <path d="M100 82 C86 84 80 92 92 98" fill="none" stroke="${SKIN_S}" stroke-width="1.4"/>
    <ellipse cx="170" cy="62" rx="7" ry="11" fill="#e8b9a2" stroke="${SKIN_S}"/>
    <path d="M96 188 C140 200 206 200 214 186 L226 232 H78 L96 188Z" fill="#cfe2ee" fill-opacity=".6"/>
    <path d="M52 78 H108" stroke="${TUBE_S}" stroke-width="5" stroke-linecap="round"/><path d="M52 78 H108 C120 78 126 86 124 100 C122 120 138 150 150 176" fill="none" stroke="#6fb3e8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 0"/>
    <circle cx="97" cy="94" r="4.5" fill="#d9534f"/><circle cx="170" cy="62" r="4.5" fill="#d9534f"/><circle cx="148" cy="184" r="4.5" fill="#d9534f"/>
    <path d="M97 94 L170 62 L148 184" fill="none" stroke="#d9534f" stroke-width="1.4" stroke-dasharray="4 3"/>
    ${T(18, 54, '1 · Punta del naso', { c: 'var(--ink)', w: 650 })}${L(60, 58, 94, 90)}
    ${T(334, 40, '2 · Lobo dell’orecchio', { a: 'end', c: 'var(--ink)', w: 650 })}${L(300, 46, 178, 62)}
    ${T(334, 190, '3 · Processo xifoideo', { a: 'end', c: 'var(--ink)', w: 650 })}${L(236, 186, 154, 184)}
    ${T(170, 222, 'Lunghezza = 1 → 2 → 3 (segna sul sondino)', { a: 'middle', c: 'var(--ink-2)', w: 600 })}
  </svg>`,
  caption: 'Misura approssimativa della lunghezza da inserire: naso → lobo dell’orecchio → processo xifoideo. Dopo il posizionamento, verifica sempre con pH dell’aspirato e/o radiografia secondo protocollo. Schema semplificato.',
}));
