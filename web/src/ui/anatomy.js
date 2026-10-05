// Vista Anatomia 3D (caricata in lazy: contiene three.js)
import { $, $$, esc, icon, el } from '../core/dom.js';
import { BY_ID, get } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { block, rt, plain } from '../core/text.js';
import { mapBlock, chipFor } from './entity.js';
import { createAnatomy, LAYERS } from '../anatomy/scene.js';
import { navigate } from '../core/router.js';

let api = null;

export async function renderAnatomy(root, { query }) {
  root.innerHTML = `<div class="page flush anat">
    <div class="anat-stage" id="stage"><div class="anat-load" id="aload"><div class="spin"></div><p>Preparo il modello 3D…</p></div></div>
    <div class="anat-top">
      <div class="anat-sex seg" id="sexseg" hidden><button data-sex="f" class="on">♀</button><button data-sex="m">♂</button></div>
      <div class="anat-views">
        ${['front:Fronte', 'back:Dietro', 'left:Sx', 'right:Dx'].map((v) => `<button class="chip" data-view="${v.split(':')[0]}">${v.split(':')[1]}</button>`).join('')}
        <button class="chip" data-reset>${icon('rotate-ccw')}Reset</button>
      </div>
    </div>
    <div class="anat-label" id="alabel" hidden></div>
    <div class="anat-dock" id="dock">
      <div class="dock-grab" data-grab></div>
      <div class="layers" id="layers">${LAYERS.map((l) => `<button class="lay" data-lay="${l.id}">${icon(l.icon)}<span>${l.label}</span></button>`).join('')}</div>
      <div class="dock-body" id="dockbody"></div>
    </div>
  </div>`;
  const stage = $('#stage', root);
  const label = $('#alabel', root);
  const dock = $('#dock', root);
  const dockBody = $('#dockbody', root);

  const requested = query.s || null;
  const watchCanvas = () => {
    const cv = stage.querySelector('canvas');
    if (!cv || cv.__psWatched) return;
    cv.__psWatched = true;
    cv.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      const ld = $('#aload', root);
      if (ld) { ld.hidden = false; ld.style.display = ''; ld.innerHTML = '<p>La grafica 3D si è interrotta.</p><button class="btn" id="areload">Ricarica il modello</button>'; ld.querySelector('#areload').onclick = () => renderAnatomy(root, { query }); }
    }, false);
  };
  const watchTimer = setInterval(() => { if (!root.isConnected || !stage.isConnected) { clearInterval(watchTimer); return; } watchCanvas(); }, 800);
  const fitStage = () => { root.style.setProperty('--dock', Math.min(dock.offsetHeight, root.clientHeight * 0.46) + 'px'); };
  let roRaf = 0;
  new ResizeObserver(() => { cancelAnimationFrame(roRaf); roRaf = requestAnimationFrame(fitStage); }).observe(dock);
  const sync = () => {
    const act = api.layers();
    $$('.lay', root).forEach((b) => b.classList.toggle('on', act.has(b.dataset.lay)));
    $('#sexseg', root).hidden = !act.has('riproduttivo');
  };

  const showInfo = (ent) => {
    const e = ent && get(ent);
    if (!ent || !e) {
      label.hidden = true;
      dock.classList.remove('has-sel', 'expanded');
      dockBody.innerHTML = `<p class="muted small" style="margin:8px 2px 0">Tocca un organo per aprire anatomia, rapporti, vascolarizzazione, fisiologia e patologie. Trascina per ruotare, pizzica per ingrandire.</p>
        ${structPicker()}`;
      return;
    }
    dock.classList.add('has-sel');
    const t = TYPES.anat;
    const ctx = { self: e.id, seen: new Set() };
    const tabs = [['pos', 'Posizione'], ['rapp', 'Rapporti'], ['vasc', 'Vasi e nervi'], ['funz', 'Funzione'], ['fisio', 'Fisiologia'], ['pat', 'Patologie'], ['inf', 'Infermieristica']].filter(([k]) => e.sections?.[k]);
    dockBody.innerHTML = `
      <div class="ainfo" style="--c:var(${t.c})">
        <div class="row"><div class="grow"><h2>${esc(e.title)}</h2><div class="small muted">${esc((e.aliases || []).slice(0, 3).join(' · '))}</div></div>
          <button class="btn sm ghost" data-go="/e/${e.id}">Scheda</button></div>
        <p class="sum">${rt(e.summary || '', ctx)}</p>
        <div class="chips" id="atabs">${tabs.map(([k, l], i) => `<button class="chip ${i === 0 ? 'active' : ''}" data-sec="${k}">${l}</button>`).join('')}</div>
        <div class="body" id="atab"></div>
        ${mapBlock(e.id, { limit: 6, title: 'Collegamenti clinici' })}
      </div>`;
    const showTab = (k) => {
      $('#atab', root).innerHTML = block(e.sections[k], { self: e.id, seen: new Set() });
      $$('#atabs .chip', root).forEach((c) => c.classList.toggle('active', c.dataset.sec === k));
    };
    if (tabs[0]) showTab(tabs[0][0]);
    $('#atabs', root).addEventListener('click', (ev) => { const b = ev.target.closest('[data-sec]'); if (b) showTab(b.dataset.sec); });
    dock.classList.add('expanded');
    dock.scrollTop = 0;
  };

  const structPicker = () => {
    const ents = api.ents().map((id) => get(id)).filter(Boolean).sort((a, b) => a.title.localeCompare(b.title, 'it'));
    return `<div class="res-group">${icon('list')} Strutture (${ents.length})</div><div class="chips wrap">${ents.map((e) => `<button class="chip" data-pick="${e.id}">${esc(e.title)}</button>`).join('')}</div>`;
  };

  // creazione scena (asincrona per far comparire prima l'interfaccia)
  await new Promise((r) => setTimeout(r, 30));
  if (api) { try { api.dispose(); } catch { /* noop */ } api = null; }
  api = await createAnatomy(stage, {
    onSelect: (ent) => { showInfo(ent); sync(); },
    onFrame: (cam, dom) => {
      const sel = api && api.selected();
      if (!sel) return;
      const p = api.project(sel);
      const e = get(sel);
      if (p && !p.behind && e) { label.hidden = false; label.textContent = e.title; label.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -140%)`; } else label.hidden = true;
    },
  });
  if (api.error) { $('#aload', root).innerHTML = `<p>${esc(api.error)}</p><p class="small muted">Puoi comunque consultare tutte le schede anatomiche.</p><button class="btn" data-go="/e/cuore">Apri le schede</button>`; return { title: 'Anatomia 3D', tab: 'anatomia' }; }
  window.__anat = api;
  $('#aload', root)?.remove();
  api.reset();
  sync();
  showInfo(null);
  if (requested && api.hasEnt(requested)) api.select(requested);

  root.addEventListener('click', (ev) => {
    const lay = ev.target.closest('[data-lay]');
    if (lay) { const id = lay.dataset.lay; api.setLayer(id, !api.layers().has(id)); sync(); return; }
    const v = ev.target.closest('[data-view]'); if (v) { api.view(v.dataset.view); return; }
    if (ev.target.closest('[data-reset]')) { api.reset(); return; }
    const s = ev.target.closest('[data-sex]');
    if (s) { api.setSex(s.dataset.sex); $$('#sexseg button', root).forEach((b) => b.classList.toggle('on', b === s)); return; }
    const pk = ev.target.closest('[data-pick]');
    if (pk) { api.select(pk.dataset.pick); sync(); return; }
    if (ev.target.closest('[data-grab]')) { dock.classList.toggle('expanded'); }
  });
  window.__psCustomBack = () => {
    if (api && api.selected()) { api.reset(); sync(); return true; }
    return false;
  };
  return { title: 'Anatomia 3D', kicker: 'Interattiva', tab: 'anatomia', onLeave: () => { window.__psCustomBack = null; } };
}

export function disposeAnatomy() { if (api) { try { api.dispose(); } catch { /* noop */ } api = null; } window.__psCustomBack = null; }
