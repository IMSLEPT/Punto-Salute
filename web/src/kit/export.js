// Esportazione: SVG -> PNG/JPEG, salvataggio file tramite il ponte nativo (Download) con ripiego del browser.
export const svgToDataUrl = (svg) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

function loadImg(src) {
  return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => rej(new Error('Immagine non disponibile')); im.src = src; });
}

/** Rasterizza l'SVG su canvas bianco; scala limitata per non superare ~16 megapixel. */
export async function rasterize(svg, w, h, scale = 2) {
  const img = await loadImg(svgToDataUrl(svg));
  const k = Math.min(scale, Math.sqrt(16e6 / (w * h)), 4096 / Math.max(w, h));
  const cv = document.createElement('canvas');
  cv.width = Math.max(1, Math.round(w * k)); cv.height = Math.max(1, Math.round(h * k));
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.drawImage(img, 0, 0, cv.width, cv.height);
  return cv;
}
export const canvasToBlob = (cv, type = 'image/png', q = 0.92) => new Promise((res, rej) => cv.toBlob((b) => (b ? res(b) : rej(new Error('Esportazione non riuscita'))), type, q));
export async function toPng(svg, w, h, scale = 2) { return canvasToBlob(await rasterize(svg, w, h, scale), 'image/png'); }
export async function toJpegBytes(svg, w, h, scale = 1.6) {
  const cv = await rasterize(svg, w, h, scale);
  const blob = await canvasToBlob(cv, 'image/jpeg', 0.9);
  return { jpeg: new Uint8Array(await blob.arrayBuffer()), w: cv.width, h: cv.height };
}

const toBase64 = (blob) => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(',')[1] || '');
  r.onerror = () => rej(new Error('Lettura file non riuscita'));
  r.readAsDataURL(blob);
});

export const safeName = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 48) || 'punto-salute';

let pending = null;
window.__psSaved = (ok, msg) => { if (pending) { const p = pending; pending = null; p(ok ? { ok: true, msg } : { ok: false, msg }); } };

/** Salva nei Download (app Android) o scarica dal browser. share=true apre anche il selettore di condivisione. */
export async function saveFile(name, blob, { share = false } = {}) {
  const bridge = window.PuntoSalute && window.PuntoSalute.saveFile;
  if (bridge) {
    const b64 = await toBase64(blob);
    return new Promise((resolve) => {
      pending = resolve;
      const t = setTimeout(() => { if (pending === resolve) { pending = null; resolve({ ok: false, msg: 'Tempo scaduto nel salvataggio' }); } }, 20000);
      const done = resolve;
      pending = (r) => { clearTimeout(t); done(r); };
      try { window.PuntoSalute.saveFile(name, blob.type || 'application/octet-stream', b64, !!share); }
      catch (e) { clearTimeout(t); pending = null; resolve({ ok: false, msg: String(e && e.message || e) }); }
    });
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  return { ok: true, msg: 'File scaricato' };
}
