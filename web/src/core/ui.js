// Overlay: sheet, modale, toast. Il tasto "indietro" chiude prima l'overlay in cima.
import { el, icon, esc } from './dom.js';

const stack = [];

export function topOverlay() { return stack[stack.length - 1]; }

export function closeTopOverlay() {
  const o = stack[stack.length - 1];
  if (!o) return false;
  o.close();
  return true;
}

export function registerOverlay(o) { stack.push(o); }
export function unregisterOverlay(o) { const i = stack.indexOf(o); if (i >= 0) stack.splice(i, 1); }

/** Bottom sheet. Restituisce {el, close}. */
export function openSheet({ title = '', html = '', onClose, onMount } = {}) {
  const scrim = el('<div class="scrim"></div>');
  const sheet = el(`<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    <div class="grab"></div>
    <div class="sh"><h3>${esc(title)}</h3><button class="iconbtn" data-close aria-label="Chiudi">${icon('x')}</button></div>
    <div class="sb">${html}</div></div>`);
  document.body.append(scrim, sheet);
  requestAnimationFrame(() => { scrim.classList.add('show'); sheet.classList.add('show'); });
  const api = {
    el: sheet,
    body: sheet.querySelector('.sb'),
    close() {
      unregisterOverlay(api);
      scrim.classList.remove('show'); sheet.classList.remove('show');
      setTimeout(() => { scrim.remove(); sheet.remove(); }, 260);
      if (onClose) onClose();
    },
  };
  scrim.addEventListener('click', () => api.close());
  sheet.querySelector('[data-close]').addEventListener('click', () => api.close());
  registerOverlay(api);
  if (onMount) onMount(api);
  return api;
}

export function openModal({ html = '', onMount } = {}) {
  const scrim = el('<div class="scrim"></div>');
  const modal = el(`<div class="modal" role="dialog" aria-modal="true">${html}</div>`);
  document.body.append(scrim, modal);
  requestAnimationFrame(() => { scrim.classList.add('show'); modal.classList.add('show'); });
  const api = {
    el: modal,
    close() {
      unregisterOverlay(api);
      scrim.classList.remove('show'); modal.classList.remove('show');
      setTimeout(() => { scrim.remove(); modal.remove(); }, 240);
    },
  };
  scrim.addEventListener('click', () => api.close());
  registerOverlay(api);
  if (onMount) onMount(api);
  return api;
}

export function confirmDialog({ title, text, ok = 'Conferma', cancel = 'Annulla', danger = false }) {
  return new Promise((resolve) => {
    const m = openModal({
      html: `<h3 style="font-size:1.2rem;margin-bottom:8px">${esc(title)}</h3><p class="muted">${esc(text)}</p>
      <div class="row" style="margin-top:18px;justify-content:flex-end"><button class="btn ghost" data-no>${esc(cancel)}</button><button class="btn ${danger ? 'danger' : ''}" data-yes>${esc(ok)}</button></div>`,
    });
    m.el.querySelector('[data-no]').onclick = () => { m.close(); resolve(false); };
    m.el.querySelector('[data-yes]').onclick = () => { m.close(); resolve(true); };
  });
}

let toastTimer;
export function toast(msg) {
  document.querySelectorAll('.toast').forEach((t) => t.remove());
  const t = el(`<div class="toast" role="status">${esc(msg)}</div>`);
  document.body.append(t);
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 260); }, 2200);
}

export function shareText(title, text) {
  if (window.PuntoSalute && window.PuntoSalute.share) { window.PuntoSalute.share(title, text); return; }
  if (navigator.share) { navigator.share({ title, text }).catch(() => {}); return; }
  navigator.clipboard?.writeText(text).then(() => toast('Copiato negli appunti'), () => toast('Condivisione non disponibile'));
}
