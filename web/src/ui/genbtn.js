import { esc, icon } from '../core/dom.js';
import { get } from '../core/data.js';

/** Bottoni "Riassumi / Mappa concettuale / Schema" per una scheda (usati su schede e Anatomia 3D). */
export function genButtons(id, { compact = false } = {}) {
  return `<div class="genbar ${compact ? 'compact' : ''}" role="group" aria-label="Genera materiale di studio">
    <button class="gbtn" data-gen="${esc(id)}:riassunto">${icon('file-text')}<span>Riassumi</span></button>
    <button class="gbtn" data-gen="${esc(id)}:mappa">${icon('network')}<span>Mappa concettuale</span></button>
    <button class="gbtn" data-gen="${esc(id)}:schema">${icon('layout-grid')}<span>Schema</span></button>
    <button class="gbtn" data-gen="${esc(id)}:infografica">${icon('image')}<span>Infografica</span></button>
    <button class="gbtn ask" data-go="/assistente?q=${encodeURIComponent('Parlami di ' + ((get(id) && get(id).title) || id))}">${icon('robot')}<span>Chiedi all’assistente</span></button>
  </div>`;
}
