// Backup e ripristino nel Profilo: file nei Download (cifrato se contiene le chiavi API) e ripristino da file o da testo incollato.
import { esc, icon } from '../core/dom.js';
import { toast, confirmDialog } from '../core/ui.js';
import { createBackup, readBackup, applyBackup, snapshot } from '../core/backup.js';
import { saveFile } from '../kit/export.js';

export function backupCard() {
  return `<div class="card pad stack" id="bkcard">
    <h3>${icon('download')} Backup e ripristino</h3>
    <p class="small muted">Salva in un file preferiti, note, piani, casi clinici con storico, progressi, impostazioni, chat e configurazione dell’assistente. Dopo una reinstallazione basta ripristinare il file: <b>le chiavi API tornano senza doverle reinserire</b>.</p>
    <label class="field"><span>Password del backup</span><input class="input" id="bkpw" type="password" placeholder="Scegli una password (consigliata)" autocomplete="new-password"></label>
    <label class="row" style="gap:10px;align-items:flex-start"><input type="checkbox" id="bkkeys" style="width:22px;height:22px;margin-top:2px;flex:none"><span class="small"><b>Includi le chiavi API dell’assistente</b> (cifrate con la password: senza password non si possono includere).</span></label>
    <div class="stack">
      <button class="btn block" id="bkmake">${icon('download')}Crea backup (salva in Download)</button>
      <button class="btn block ghost" id="bkshare">${icon('share-2')}Crea e condividi (Drive, email…)</button>
      <button class="btn block ghost" id="bkfile">${icon('upload')}Ripristina da file…</button>
      <button class="btn block ghost" id="bkpaste">Ripristina incollando il testo</button>
    </div>
    <input type="file" id="bkpick" accept=".json,.psbackup,application/json,text/plain,*/*" hidden>
    <div class="xs muted" id="bkst">Conserva il file in un posto sicuro (es. Google Drive): contiene i tuoi dati. Non inserire dati di pazienti reali.</div>
  </div>`;
}

export function bindBackup(root, rerender) {
  const $ = (s) => root.querySelector(s);
  if (!$('#bkcard')) return;
  const status = (t) => { $('#bkst').textContent = t; };
  const stamp = () => new Date().toISOString().slice(0, 10);

  const make = async (share) => {
    const pw = $('#bkpw').value, keys = $('#bkkeys').checked;
    if (keys && !pw) { toast('Per includere le chiavi serve una password'); $('#bkpw').focus(); return; }
    try {
      status('Creo il backup…');
      const text = await createBackup({ password: pw, includeKeys: keys, version: (window.PuntoSalute && PuntoSalute.version && PuntoSalute.version()) || '' });
      const r = await saveFile(`punto-salute-backup-${stamp()}.json`, new Blob([text], { type: 'application/json' }), { share });
      status(r.ok ? `${r.msg || 'Backup salvato'}${pw ? ' · cifrato con la password' : ' · senza password (non cifrato)'}${keys ? ' · chiavi API incluse' : ''}.` : `Salvataggio non riuscito: ${r.msg}`);
      toast(r.ok ? 'Backup creato' : 'Backup non riuscito');
    } catch (e) { console.error(e); status('Non sono riuscito a creare il backup: ' + (e.message || e)); }
  };

  const restoreText = async (text) => {
    try {
      let pw = $('#bkpw').value;
      let res = await readBackup(text, pw);
      if (res.needsPassword) {
        pw = await askPassword();
        if (pw == null) { status('Ripristino annullato.'); return; }
        res = await readBackup(text, pw);
      }
      const n = Object.keys(res.data).length;
      const ok = await confirmDialog({ title: 'Ripristinare il backup?', text: `Verranno ripristinate ${n} voci${res.created ? ' del ' + new Date(res.created).toLocaleDateString('it-IT') : ''}${res.hasKeys ? ', comprese le chiavi API' : ''}. I dati con lo stesso nome saranno sostituiti.`, ok: 'Ripristina' });
      if (!ok) return;
      applyBackup(res.data);
      toast('Backup ripristinato');
      if (window.__psTheme) window.__psTheme();
      setTimeout(() => location.reload(), 500);
    } catch (e) { status(e.message || 'Ripristino non riuscito'); toast(e.message || 'Ripristino non riuscito'); }
  };

  const askPassword = () => new Promise((resolve) => {
    import('../core/ui.js').then(({ openModal }) => {
      const m = openModal({ html: `<h3 style="font-size:1.2rem;margin-bottom:8px">Password del backup</h3><p class="muted small">Il file è cifrato: inserisci la password usata per crearlo.</p><input class="input" id="bkpw2" type="password" autocomplete="off" style="margin-top:10px"><div class="row" style="margin-top:16px;justify-content:flex-end"><button class="btn ghost" data-no>Annulla</button><button class="btn" data-yes>Continua</button></div>` });
      const inp = m.el.querySelector('#bkpw2'); setTimeout(() => inp.focus(), 200);
      let done = false;
      const fin = (v) => { if (done) return; done = true; m.close(); resolve(v); };
      m.el.querySelector('[data-no]').onclick = () => fin(null);
      m.el.querySelector('[data-yes]').onclick = () => fin(inp.value);
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') fin(inp.value); });
    });
  });

  $('#bkmake').onclick = () => make(false);
  $('#bkshare').onclick = () => make(true);
  $('#bkfile').onclick = () => $('#bkpick').click();
  $('#bkpick').onchange = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (f.size > 12e6) { status('File troppo grande per essere un backup.'); return; }
    status('Leggo il file…');
    try { await restoreText(await f.text()); } catch { status('Non riesco a leggere il file.'); }
  };
  $('#bkpaste').onclick = async () => {
    const { openSheet } = await import('../core/ui.js');
    openSheet({
      title: 'Incolla il backup',
      html: `<textarea class="textarea" id="bktxt" rows="8" placeholder="Incolla qui il testo del file di backup…"></textarea><button class="btn block" id="bkgo" style="margin-top:12px">Ripristina</button>`,
      onMount: (api) => { api.el.querySelector('#bkgo').onclick = () => { const t = api.el.querySelector('#bktxt').value; api.close(); restoreText(t); }; },
    });
  };
  void snapshot; void esc;
}
