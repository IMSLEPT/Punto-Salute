// Assistenza infermieristica: hub e costruttore di piano (accertamento → diagnosi → obiettivi → interventi → rivalutazione).
import { esc, icon, uid } from '../core/dom.js';
import { store } from '../core/store.js';
import { BY_TYPE, get } from '../core/data.js';
import { plain } from '../core/text.js';
import { navigate } from '../core/router.js';
import { openSheet, toast, shareText, confirmDialog } from '../core/ui.js';
import { search } from '../core/search.js';
import { renderTypeList } from './lists.js';
import { itemRow } from './common.js';

const GORDON = ['Percezione e gestione della salute', 'Nutrizione e metabolismo', 'Eliminazione', 'Attività ed esercizio', 'Sonno e riposo', 'Cognizione e percezione', 'Percezione di sé e concetto di sé', 'Ruoli e relazioni', 'Sessualità e riproduzione', 'Coping e tolleranza allo stress', 'Valori e convinzioni'];
const STATES = [['', '—'], ['raggiunto', 'Raggiunto'], ['parziale', 'Parziale'], ['no', 'Non raggiunto']];

const plans = { all: () => store.get('plans', []), save: (l) => store.set('plans', l) };
const lines = (v) => (Array.isArray(v) ? v : v ? [v] : []).flatMap((x) => (typeof x === 'string' ? [x] : x.ul || x.ol || [])).map((s) => plain(s));

// ------------------------------------------------------------------ hub
export function renderAssistenza(root) {
  const n = plans.all().length;
  const top = `<div class="card pad stack" style="margin-bottom:16px">
      <div class="row"><div class="tile-ic soft" style="--c:var(--c-assistenza)">${icon('clipboard-list')}</div><div class="grow"><b>Costruttore di piano assistenziale</b><div class="small muted">Dati → problema → diagnosi → obiettivi → interventi → rivalutazione</div></div></div>
      <div class="row wrap"><button class="btn sm" data-go="/assistenza/piano/nuovo">${icon('plus')}Nuovo piano</button>${n ? `<button class="btn sm ghost" data-go="/assistenza/piano">I miei piani (${n})</button>` : ''}</div>
    </div>
    <div class="list" style="margin-bottom:16px">${['processo-infermieristico', 'accertamento-infermieristico', 'gordon-modelli', 'henderson-bisogni', 'diagnosi-infermieristiche-guida', 'documentazione-infermieristica'].map(get).filter(Boolean).map((e) => itemRow(e)).join('')}</div>`;
  return renderTypeList(root, { types: ['ndx'], module: 'assistenza', filterLabel: 'Diagnosi', extraTop: top });
}

// ------------------------------------------------------------------ elenco piani
export function renderPlans(root) {
  const list = plans.all();
  root.innerHTML = `<div class="page stack-lg">
    <div class="phead"><div class="tile-ic" style="--c:var(--c-assistenza)">${icon('clipboard-list')}</div><div><h1>Piani assistenziali</h1><p>Salvati solo su questo dispositivo</p></div></div>
    <button class="btn block" data-go="/assistenza/piano/nuovo">${icon('plus')}Nuovo piano</button>
    ${list.length ? `<div class="list">${list.map((p) => `<button class="item" data-go="/assistenza/piano/${p.id}"><div class="tile-ic sm" style="--c:var(--c-assistenza)">${icon('clipboard-list')}</div><div class="grow"><div class="t">${esc(p.name || 'Piano senza nome')}</div><div class="d">${(p.items || []).length} problema/i · ${new Date(p.updated || Date.now()).toLocaleDateString('it-IT')}</div></div>${icon('chevron-right', 'go')}</button>`).join('')}</div>` : `<div class="empty">${icon('clipboard-list')}<h3>Nessun piano</h3><p>Crea il primo piano assistenziale.</p></div>`}
    <div class="callout warn">${icon('triangle-alert')}<div><b>Privacy.</b> Usa solo casi didattici o dati anonimi: non inserire nome, data di nascita o altri dati identificativi di pazienti reali.</div></div></div>`;
  return { title: 'Piani assistenziali', tab: 'note' };
}

// ------------------------------------------------------------------ editor del piano
export function renderPlan(root, id) {
  let all = plans.all();
  let plan = all.find((p) => p.id === id);
  if (id === 'nuovo' || !plan) {
    plan = { id: uid(), name: '', updated: Date.now(), anam: { sogg: '', ogg: '', gordon: [] }, items: [] };
    all.unshift(plan);
    plans.save(all);
    history.replaceState(history.state, '', '#/assistenza/piano/' + plan.id);
  }
  const persist = () => { plan.updated = Date.now(); plans.save(plans.all().map((p) => (p.id === plan.id ? plan : p))); };
  let saveT; const saveSoon = () => { clearTimeout(saveT); saveT = setTimeout(persist, 400); };

  const chipsFor = (arr, key, k) => lines(arr).slice(0, 8).map((t, i) => `<button class="chip tint" style="--c:var(--c-assistenza)" data-sug="${key}" data-k="${k}" data-i="${i}">${icon('plus')}${esc(t.length > 60 ? t.slice(0, 58) + '…' : t)}</button>`).join('');

  function itemCard(it, k) {
    const nd = it.ndx ? get(it.ndx) : null;
    const s = nd?.sections || {};
    const label = nd?.ndx?.label || it.custom || 'Problema';
    return `<div class="card pad stack" data-item="${k}">
      <div class="row"><div class="tile-ic sm" style="--c:var(--c-assistenza)">${icon('clipboard-check')}</div><div class="grow"><b>${esc(nd?.title || it.custom || 'Problema')}</b>${nd ? `<div class="xs muted">Etichetta indicativa: ${esc(label)}</div>` : ''}</div>
        <button class="iconbtn" data-del="${k}" aria-label="Rimuovi">${icon('trash-2')}</button></div>
      <label class="field"><span>Eziologia — “correlato a …”</span><textarea class="textarea" rows="2" data-f="e" data-k="${k}" placeholder="Fattori correlati">${esc(it.e || '')}</textarea></label>
      ${nd ? `<div class="chips wrap">${chipsFor(s.fatt, 'e', k)}</div>` : ''}
      <label class="field"><span>Segni e sintomi — “caratterizzato da …”</span><textarea class="textarea" rows="2" data-f="s" data-k="${k}" placeholder="Dati soggettivi e oggettivi">${esc(it.s || '')}</textarea></label>
      ${nd ? `<div class="chips wrap">${chipsFor(s.segni, 's', k)}</div>` : ''}
      <div class="stack"><b class="small">Obiettivi / risultati attesi</b>${nd?.ndx?.noc ? `<div class="xs muted">Area NOC (titolo): ${esc(nd.ndx.noc)}</div>` : ''}
        ${(it.goals || []).map((g, gi) => `<div class="row" style="align-items:flex-start"><textarea class="textarea grow" rows="2" data-g="${gi}" data-k="${k}">${esc(g.t)}</textarea><button class="iconbtn" data-delg="${k}:${gi}" aria-label="Rimuovi obiettivo">${icon('x')}</button></div>`).join('')}
        ${nd ? `<div class="chips wrap">${chipsFor(s.obj, 'g', k)}</div>` : ''}
        <button class="btn sm ghost" data-addg="${k}">${icon('plus')}Obiettivo personalizzato</button></div>
      <div class="stack"><b class="small">Interventi</b>${nd?.ndx?.nic ? `<div class="xs muted">Area NIC (titolo): ${esc(nd.ndx.nic)}</div>` : ''}
        ${(it.ints || []).map((x, xi) => `<div class="row" style="align-items:flex-start"><input type="checkbox" class="chk" data-ix="${xi}" data-k="${k}" ${x.done ? 'checked' : ''} aria-label="Eseguito"><textarea class="textarea grow" rows="2" data-i2="${xi}" data-k="${k}">${esc(x.t)}</textarea><button class="iconbtn" data-deli="${k}:${xi}" aria-label="Rimuovi intervento">${icon('x')}</button></div>`).join('')}
        ${nd ? `<div class="chips wrap">${chipsFor(s.int, 'i', k)}</div>` : ''}
        <button class="btn sm ghost" data-addi="${k}">${icon('plus')}Intervento personalizzato</button></div>
      <div class="stack"><b class="small">Rivalutazione</b>
        ${(it.goals || []).length ? it.goals.map((g, gi) => `<div class="stack"><div class="xs muted">${esc(g.t.slice(0, 80))}${g.t.length > 80 ? '…' : ''}</div><div class="seg" data-rv="${k}:${gi}">${STATES.map(([v, l]) => `<button data-v="${v}" class="${(g.state || '') === v ? 'on' : ''}">${l}</button>`).join('')}</div></div>`).join('') : '<div class="small muted">Aggiungi almeno un obiettivo per rivalutarlo.</div>'}
        <textarea class="textarea" rows="2" data-f="rv" data-k="${k}" placeholder="Note di rivalutazione (data, esito, modifiche al piano)">${esc(it.rv || '')}</textarea></div>
    </div>`;
  }

  function draw() {
    const y = root.scrollTop || document.getElementById('view')?.scrollTop || 0;
    root.innerHTML = `<div class="page stack-lg">
      <div class="phead"><div class="tile-ic" style="--c:var(--c-assistenza)">${icon('clipboard-list')}</div><div class="grow"><h1>Piano assistenziale</h1><p>Caso didattico · salvataggio automatico</p></div></div>
      <label class="field"><span>Titolo del piano</span><input class="input" id="pname" value="${esc(plan.name)}" placeholder="Es. Scompenso cardiaco – caso didattico"></label>
      <div class="callout warn">${icon('triangle-alert')}<div><b>Privacy.</b> Niente dati identificativi di pazienti reali: usa età/sesso e un riferimento anonimo.</div></div>

      <div class="card pad stack"><div class="row"><span class="badge" style="--c:var(--c-assistenza)">1</span><b>Accertamento</b></div>
        <label class="field"><span>Dati soggettivi (ciò che il paziente riferisce)</span><textarea class="textarea" rows="3" id="sogg">${esc(plan.anam.sogg)}</textarea></label>
        <label class="field"><span>Dati oggettivi (parametri, esame obiettivo, esami)</span><textarea class="textarea" rows="3" id="ogg">${esc(plan.anam.ogg)}</textarea></label>
        <div><div class="small muted" style="margin-bottom:6px">Modelli funzionali di Gordon coinvolti</div><div class="chips wrap" id="gordon">${GORDON.map((g, i) => `<button class="chip ${plan.anam.gordon.includes(i) ? 'active' : ''}" data-gi="${i}">${esc(g)}</button>`).join('')}</div></div>
      </div>

      <div class="row"><span class="badge" style="--c:var(--c-assistenza)">2–5</span><b>Problemi, obiettivi, interventi, rivalutazione</b></div>
      ${plan.items.map(itemCard).join('') || `<div class="card pad small muted">Aggiungi una diagnosi infermieristica dall’elenco o scrivi un problema personalizzato.</div>`}
      <div class="row wrap"><button class="btn" id="adddx">${icon('plus')}Diagnosi dall’elenco</button><button class="btn ghost" id="addcustom">${icon('pencil')}Problema libero</button></div>
      <div class="row wrap"><button class="btn ghost" id="share">${icon('share-2')}Condividi come testo</button><button class="btn danger" id="delplan">${icon('trash-2')}Elimina piano</button></div>
      <div class="small muted">Le etichette diagnostiche e le aree NOC/NIC sono titoli indicativi: verifica sempre la classificazione ufficiale in uso (materiale protetto da copyright).</div>
    </div>`;
    const v = document.getElementById('view'); if (v) v.scrollTop = y;
  }

  // ---- delega eventi (una volta sola)
  root.oninput = (ev) => {
    const t = ev.target;
    if (t.id === 'pname') plan.name = t.value;
    else if (t.id === 'sogg') plan.anam.sogg = t.value;
    else if (t.id === 'ogg') plan.anam.ogg = t.value;
    else if (t.dataset.f) plan.items[+t.dataset.k][t.dataset.f] = t.value;
    else if (t.dataset.g !== undefined) plan.items[+t.dataset.k].goals[+t.dataset.g].t = t.value;
    else if (t.dataset.i2 !== undefined) plan.items[+t.dataset.k].ints[+t.dataset.i2].t = t.value;
    else return;
    saveSoon();
  };
  root.onchange = (ev) => {
    const t = ev.target;
    if (t.dataset.ix !== undefined) { plan.items[+t.dataset.k].ints[+t.dataset.ix].done = t.checked; persist(); }
  };
  root.onclick = async (ev) => {
    const t = ev.target;
    const q = (s) => t.closest(s);
    let b;
    if ((b = q('[data-gi]'))) { const i = +b.dataset.gi; const a = plan.anam.gordon; const p = a.indexOf(i); if (p >= 0) a.splice(p, 1); else a.push(i); b.classList.toggle('active'); persist(); return; }
    if ((b = q('[data-sug]'))) {
      const it = plan.items[+b.dataset.k]; const nd = get(it.ndx); const key = b.dataset.sug;
      const src = key === 'e' ? nd.sections.fatt : key === 's' ? nd.sections.segni : key === 'g' ? nd.sections.obj : nd.sections.int;
      const txt = lines(src)[+b.dataset.i];
      if (key === 'e' || key === 's') it[key] = (it[key] ? it[key].replace(/\s*$/, '') + '; ' : '') + txt.replace(/[.\s]+$/, '');
      else if (key === 'g') (it.goals ||= []).push({ t: txt, state: '' });
      else (it.ints ||= []).push({ t: txt, done: false });
      persist(); ev.stopPropagation(); draw(); return;
    }
    if ((b = q('[data-addg]'))) { (plan.items[+b.dataset.addg].goals ||= []).push({ t: '', state: '' }); persist(); draw(); return; }
    if ((b = q('[data-addi]'))) { (plan.items[+b.dataset.addi].ints ||= []).push({ t: '', done: false }); persist(); draw(); return; }
    if ((b = q('[data-delg]'))) { const [k, i] = b.dataset.delg.split(':').map(Number); plan.items[k].goals.splice(i, 1); persist(); draw(); return; }
    if ((b = q('[data-deli]'))) { const [k, i] = b.dataset.deli.split(':').map(Number); plan.items[k].ints.splice(i, 1); persist(); draw(); return; }
    if ((b = q('[data-del]'))) { if (await confirmDialog({ title: 'Rimuovere il problema?', text: 'Obiettivi e interventi collegati verranno eliminati.', ok: 'Rimuovi', danger: true })) { plan.items.splice(+b.dataset.del, 1); persist(); draw(); } return; }
    if ((b = q('[data-rv] [data-v]'))) { const [k, i] = b.parentElement.dataset.rv.split(':').map(Number); plan.items[k].goals[i].state = b.dataset.v; persist(); draw(); return; }
    if (q('#adddx')) { pickDx(); return; }
    if (q('#addcustom')) {
      const name = window.prompt('Descrivi il problema (es. “Dolore al sito di incisione”)');
      if (name && name.trim()) { plan.items.push({ ndx: null, custom: name.trim(), e: '', s: '', goals: [], ints: [], rv: '' }); persist(); draw(); }
      return;
    }
    if (q('#share')) { shareText(plan.name || 'Piano assistenziale', planText(plan)); return; }
    if (q('#delplan')) {
      if (await confirmDialog({ title: 'Eliminare il piano?', text: 'L’operazione non si può annullare.', ok: 'Elimina', danger: true })) { plans.save(plans.all().filter((p) => p.id !== plan.id)); toast('Piano eliminato'); navigate('/assistenza/piano', { replace: true }); }
    }
  };

  function pickDx() {
    const all = BY_TYPE.ndx || [];
    const render = (arr) => `<div class="list">${arr.map((e) => `<button class="item" data-pick="${e.id}"><div class="grow"><div class="t">${esc(e.title)}</div><div class="d">${esc(plain(e.summary))}</div></div></button>`).join('')}</div>`;
    openSheet({
      title: 'Scegli la diagnosi',
      html: `<input class="input" id="dxq" placeholder="Cerca (es. dolore, cadute, infezione)" autocomplete="off"><div id="dxl" style="margin-top:12px">${render(all.slice().sort((a, b) => a.title.localeCompare(b.title, 'it')))}</div>`,
      onMount(api) {
        const el = api.body;
        const inp = el.querySelector('#dxq'); const lst = el.querySelector('#dxl');
        inp.oninput = () => { const q = inp.value.trim(); lst.innerHTML = render(q ? search(q, { types: ['ndx'], limit: 30 }).map((r) => r.e || r) : all); };
        el.addEventListener('click', (e) => {
          const b = e.target.closest('[data-pick]'); if (!b) return;
          const nd = get(b.dataset.pick);
          plan.items.push({ ndx: nd.id, e: '', s: '', goals: [], ints: [], rv: '' });
          persist(); api.close(); draw(); toast('Diagnosi aggiunta');
        });
      },
    });
  }

  draw();
  return { title: 'Piano', tab: 'note' };
}

function planText(p) {
  const L = [`PIANO ASSISTENZIALE — ${p.name || 'senza titolo'}`, '(caso didattico)', ''];
  L.push('1. ACCERTAMENTO', `Soggettivi: ${p.anam.sogg || '—'}`, `Oggettivi: ${p.anam.ogg || '—'}`);
  if (p.anam.gordon.length) L.push('Gordon: ' + p.anam.gordon.map((i) => GORDON[i]).join(', '));
  p.items.forEach((it, k) => {
    const nd = it.ndx ? get(it.ndx) : null;
    L.push('', `PROBLEMA ${k + 1}: ${nd?.title || it.custom}`, `PES: ${nd?.ndx?.label || it.custom} correlato a ${it.e || '…'} caratterizzato da ${it.s || '…'}`);
    L.push('Obiettivi:', ...(it.goals || []).map((g) => `  - ${g.t}${g.state ? ` [${(STATES.find((s) => s[0] === g.state) || [])[1]}]` : ''}`));
    L.push('Interventi:', ...(it.ints || []).map((x) => `  ${x.done ? '[x]' : '[ ]'} ${x.t}`));
    if (it.rv) L.push('Rivalutazione: ' + it.rv);
  });
  L.push('', 'Generato con Punto Salute — verifica sempre protocolli e classificazioni ufficiali.');
  return L.join('\n');
}
