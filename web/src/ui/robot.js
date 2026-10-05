// Mascotte dell'assistente: robottino a linee (testa rettangolare, orecchie, antenna, scintille) nei colori di Punto Salute.
let n = 0;
export function robotMascot(size = 72, cls = '') {
  const id = 'rb' + (++n);
  return `<svg class="robot ${cls}" width="${size}" height="${size}" viewBox="0 0 96 96" role="img" aria-label="Assistente Punto Salute">
    <defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="10" y1="14" x2="86" y2="78"><stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#0b7285"/></linearGradient>
      <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2f6f9"/></linearGradient></defs>
    <g fill="none" stroke="url(#${id})" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M42 34V19"/>
      <rect x="10" y="46" width="13" height="19" rx="5.5" fill="url(#${id}f)"/>
      <rect x="73" y="46" width="13" height="19" rx="5.5" fill="url(#${id}f)"/>
      <rect x="22" y="34" width="52" height="42" rx="13.5" fill="url(#${id}f)"/>
    </g>
    <circle cx="42" cy="15.5" r="6" fill="url(#${id})"/>
    <circle cx="38" cy="55" r="4.6" fill="#0f172a"/><circle cx="58" cy="55" r="4.6" fill="#0f172a"/>
    <g stroke="#ff6b57" stroke-width="5" stroke-linecap="round" fill="none"><path d="M71 24.5 78.5 14.5"/><path d="M77.5 30.5 86 28.5"/></g>
    <circle cx="64" cy="21" r="3" fill="#ff6b57"/>
  </svg>`;
}
