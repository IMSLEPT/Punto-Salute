// Illustrazioni anatomiche reali per le infografiche: ritratti dei modelli 3D (BodyParts3D, CC BY 4.0) resi fuori schermo.
import { neighbors, get } from '../core/data.js';

const CACHE = new Map();

/** Frazione di pixel non trasparenti (campione 64x64): scarta strutture sottili (vasi, nervi) che nell'immagine sembrano linee. */
function coverage(url) {
  return new Promise((res) => {
    const im = new Image();
    im.onload = () => {
      try {
        const c = document.createElement('canvas'); c.width = c.height = 64;
        const x = c.getContext('2d'); x.drawImage(im, 0, 0, 64, 64);
        const d = x.getImageData(0, 0, 64, 64).data; let n = 0;
        for (let k = 3; k < d.length; k += 4) if (d[k] > 24) n++;
        res(n / 4096);
      } catch { res(1); }
    };
    im.onerror = () => res(1);
    im.src = url;
  });
}   // "ent|iso|ctx" -> dataURL
let busy = null;

/** Strutture 3D collegate a una scheda: {id, title, mesh}. */
export function anatomyOf(e, max = 3) {
  const out = [];
  const push = (x) => { if (x && x.type === 'anat' && x.mesh && !out.some((o) => o.mesh === x.mesh)) out.push({ id: x.id, title: x.title, mesh: x.mesh }); };
  if (e.type === 'anat') push(e);
  for (const id of e.rel || []) push(get(id));
  for (const n of neighbors(e.id)) push(n);
  return out.slice(0, max);
}

/** Genera (e mette in cache) i ritratti: [{id, title, iso, ctx}]. Non lancia: in caso di errore restituisce []. */
export async function illustrations(e, { max = 3, context = true } = {}) {
  const list = anatomyOf(e, max);
  if (!list.length) return [];
  const need = list.some((a, i) => !CACHE.has(a.mesh + '|iso') || (context && i === 0 && !CACHE.has(a.mesh + '|ctx')));
  if (need) {
    while (busy) await busy.catch(() => {});
    busy = (async () => {
      const box = document.createElement('div');
      box.style.cssText = 'position:fixed;left:-10000px;top:0;width:560px;height:760px;pointer-events:none;opacity:0';
      document.body.appendChild(box);
      let api = null;
      try {
        const { createAnatomy } = await import('../anatomy/scene.js');
        api = await createAnatomy(box, {});
        if (!api || api.error) return;
        for (let i = 0; i < list.length; i++) {
          const a = list[i];
          if (!api.hasEnt(a.mesh)) continue;
          if (!CACHE.has(a.mesh + '|iso')) { const u = api.portrait(a.mesh, { w: 520, h: 520, isolate: true, fitK: 1.75 }); if (u) { const cv = await coverage(u); if (cv >= 0.085) CACHE.set(a.mesh + '|iso', u); else CACHE.set(a.mesh + '|iso', 'thin'); } }
          if (context && i === 0 && !CACHE.has(a.mesh + '|ctx')) { const u = api.portrait(a.mesh, { w: 560, h: 760, isolate: false, dir: [0, 0.02, 1], distance: 1.45 }); if (u) CACHE.set(a.mesh + '|ctx', u); }
        }
      } catch (err) { console.warn('illustrazioni 3D non disponibili', err); }
      finally { try { api && api.dispose && api.dispose(); } catch { /* noop */ } box.remove(); }
    })();
    try { await busy; } finally { busy = null; }
  }
  return list.map((a) => { const iso = CACHE.get(a.mesh + '|iso'); return { ...a, iso: iso && iso !== 'thin' ? iso : null, ctx: CACHE.get(a.mesh + '|ctx') || null }; }).filter((a) => a.iso || a.ctx);
}
