// Profilo: impostazioni, progressi di studio, backup, informazioni e licenze.
import { esc, icon } from '../core/dom.js';
import { settings, store, favs, notes } from '../core/store.js';
import { toast, shareText, confirmDialog } from '../core/ui.js';
import { ALL, BY_TYPE } from '../core/data.js';
import { CONTENT_VERSION, REVISION } from './entity.js';
import { logoImg, wordmark } from './home.js';

export function renderProfile(root) {
  const s = settings.get();
  const quiz = store.get('quizStats', { done: 0, correct: 0 });
  const seen = store.get('seen', {});
  const nSeen = Object.keys(seen).length;
  root.innerHTML = `<div class="page stack-lg">
    <div class="row" style="gap:14px">${logoImg()}<div>${wordmark()}<div class="small muted" style="margin-top:4px">Dalla conoscenza alla cura</div></div></div>

    <div class="card pad stack">
      <h3>Il tuo percorso</h3>
      <div class="grid3">
        <div class="center"><div style="font-size:1.6rem;font-weight:800;color:var(--brand-2)">${nSeen}</div><div class="xs muted">schede studiate</div></div>
        <div class="center"><div style="font-size:1.6rem;font-weight:800;color:var(--brand-2)">${favs.list().length}</div><div class="xs muted">salvate</div></div>
        <div class="center"><div style="font-size:1.6rem;font-weight:800;color:var(--brand-2)">${quiz.done ? Math.round((quiz.correct / quiz.done) * 100) + '%' : '—'}</div><div class="xs muted">quiz corretti</div></div>
      </div>
    </div>

    <div class="card pad stack">
      <h3>Aspetto</h3>
      <label class="field"><span>Tema</span><div class="seg" id="theme">${[['auto', 'Automatico'], ['light', 'Chiaro'], ['dark', 'Scuro']].map(([v, l]) => `<button data-v="${v}" class="${s.theme === v ? 'on' : ''}">${l}</button>`).join('')}</div></label>
      <label class="field"><span>Dimensione del testo</span><div class="seg" id="fs">${[[0.92, 'Piccolo'], [1, 'Normale'], [1.12, 'Grande'], [1.25, 'Molto grande']].map(([v, l]) => `<button data-v="${v}" class="${s.fs === v ? 'on' : ''}">${l}</button>`).join('')}</div></label>
      <label class="row" style="justify-content:space-between"><span>Animazioni</span><span class="seg" style="width:130px" id="motion"><button data-v="1" class="${s.motion !== false ? 'on' : ''}">Sì</button><button data-v="0" class="${s.motion === false ? 'on' : ''}">No</button></span></label>
    </div>

    <div class="card pad stack">
      <h3>Dati e privacy</h3>
      <p class="small muted">Punto Salute non richiede la rete e non invia alcun dato: note, preferiti, piani e progressi restano su questo dispositivo. <b>Non inserire dati identificativi di pazienti reali</b> nelle note o nei piani.</p>
      <div class="row wrap"><button class="btn sm ghost" id="export">${icon('upload')}Esporta backup</button><button class="btn sm ghost" id="import">${icon('download')}Importa backup</button><button class="btn sm danger" id="reset">${icon('trash-2')}Cancella dati</button></div>
    </div>

    <div class="card pad stack">
      <h3>Informazioni</h3>
      <dl class="kv"><dt>Versione app</dt><dd>${(window.PuntoSalute && PuntoSalute.version && PuntoSalute.version()) || '1.0.0'}</dd><dt>Contenuti</dt><dd>v${CONTENT_VERSION} · rev. ${REVISION}</dd><dt>Schede</dt><dd>${ALL.length}</dd></dl>
      <button class="btn sm ghost block" data-go="/fonti">${icon('library')}Fonti, licenze e avvertenze</button>
    </div>
  </div>`;

  const seg = (id, fn) => root.querySelector(id).addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (!b) return; root.querySelectorAll(id + ' button').forEach((x) => x.classList.toggle('on', x === b)); fn(b.dataset.v); });
  seg('#theme', (v) => { settings.set({ theme: v }); window.__psTheme(); });
  seg('#fs', (v) => { settings.set({ fs: parseFloat(v) }); window.__psTheme(); });
  seg('#motion', (v) => { settings.set({ motion: v === '1' }); window.__psTheme(); });
  root.querySelector('#export').onclick = () => shareText('Backup Punto Salute', JSON.stringify(store.exportAll()));
  root.querySelector('#import').onclick = () => {
    const t = prompt('Incolla qui il backup JSON');
    if (!t) return;
    try { store.importAll(JSON.parse(t)); toast('Backup importato'); window.__psTheme(); renderProfile(root); } catch { toast('Backup non valido'); }
  };
  root.querySelector('#reset').onclick = async () => {
    if (await confirmDialog({ title: 'Cancellare tutti i dati?', text: 'Note, preferiti, piani, configurazione provette e progressi verranno eliminati da questo dispositivo.', ok: 'Cancella', danger: true })) {
      store.keys().forEach((k) => store.del(k)); toast('Dati cancellati'); window.__psTheme(); renderProfile(root);
    }
  };
  return { title: 'Profilo', tab: 'profilo' };
}
