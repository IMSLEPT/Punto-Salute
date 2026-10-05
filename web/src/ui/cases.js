// Casi clinici: raccolta fissa + casi generati dalle schede; storico dei tentativi con revisione, "rifai" e "rifai solo gli errori".
import { esc, icon, norm } from '../core/dom.js';
import { store } from '../core/store.js';
import { get, BY_ID } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { toast, openSheet, confirmDialog } from '../core/ui.js';
import { navigate } from '../core/router.js';
import { search } from '../core/search.js';
import { pageHead } from './common.js';
import { chipFor } from './entity.js';
import { generateCase, eligibleCards } from '../core/casegen.js';
import CASES from '../data/cases.js';

const C = '--c-studio';
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const fmtDate = (t) => new Date(t).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' });
const fmtDT = (t) => `${fmtDate(t)} ${new Date(t).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}`;

// ---------------------------------------------------------------- archivio
const HK = 'caseHist';
export const hist = {
  all() { return store.get(HK, {}); },
  get(id) { return this.all()[id] || null; },
  save(id, patch) { const h = this.all(); h[id] = { attempts: [], ...(h[id] || {}), ...patch }; store.set(HK, h); },
  addGenerated(c) {
    const h = this.all();
    h[c.id] = { attempts: [], gen: c };
    // massimo 40 casi generati: via prima quelli mai svolti, poi i piu' vecchi
    const gens = Object.entries(h).filter(([, v]) => v.gen).sort((a, b) => (a[1].gen.created || 0) - (b[1].gen.created || 0));
    while (gens.length > 40) { const idx = Math.max(0, gens.findIndex(([, v]) => !v.attempts.length)); const [id] = gens.splice(idx, 1)[0]; delete h[id]; }
    store.set(HK, h);
  },
  addAttempt(id, a) {
    const h = this.all(); const cur = h[id] || { attempts: [] };
    cur.attempts = [...cur.attempts, a].slice(-5);
    h[id] = cur; store.set(HK, h);
    const d = store.get('cases', {}); d[id] = a.total ? pct(a.good, a.total) : 0; store.set('cases', d);   // compatibile con la scheda Studio
  },
  remove(id) { const h = this.all(); delete h[id]; store.set(HK, h); const d = store.get('cases', {}); delete d[id]; store.set('cases', d); },
};
const findCase = (id) => CASES.find((c) => c.id === id) || (hist.get(id) && hist.get(id).gen) || null;
export const generatedCases = () => Object.values(hist.all()).filter((v) => v.gen).map((v) => v.gen).sort((a, b) => (b.created || 0) - (a.created || 0));
export const caseStats = () => { const h = hist.all(); const all = [...CASES, ...generatedCases()]; return { total: all.length, done: all.filter((c) => h[c.id] && h[c.id].attempts.length).length, gen: generatedCases().length }; };

// ---------------------------------------------------------------- generazione
export function newCase({ type = 'auto', entity = null, topic = '' } = {}) {
  let ent = entity;
  if (!ent && topic.trim()) {
    const elig = new Set(eligibleCards().map((e) => e.id));
    const hit = search(topic.trim(), { limit: 12 }).map((r) => r.e).find((e) => elig.has(e.id) && (type === 'auto' || e.type === type));
    if (hit) ent = hit.id; else return { error: `Non trovo schede adatte a “${topic.trim()}” per costruire un caso (servono patologie, procedure o farmaci con sezioni complete).` };
  }
  const c = generateCase({ type, entity: ent });
  if (!c) return { error: 'Non sono riuscito a costruire un caso con questi criteri: riprova.' };
  hist.addGenerated(c);
  return { c };
}

// ---------------------------------------------------------------- elenco
const statusOf = (c) => {
  const h = hist.get(c.id); const n = h ? h.attempts.length : 0;
  if (!n) return { n: 0, label: 'Da fare', badge: '' };
  const l = h.attempts[n - 1];
  return { n, label: `Fatto${n > 1 ? ` ${n} volte` : ''} · ultimo ${l.good}/${l.total} (${pct(l.good, l.total)}%) · ${fmtDate(l.t)}`, badge: 'ok', pct: pct(l.good, l.total) };
};

function itemHtml(c) {
  const st = statusOf(c);
  return `<button class="item" data-go="/studio/caso/${esc(c.id)}"><div class="tile-ic sm" style="--c:var(${C})">${icon(c.gen ? 'sparkles' : 'clipboard-check')}</div>
    <div class="grow"><div class="t">${esc(c.title)}</div><div class="d">${esc(c.spec)} · ${esc(c.level)} · ${esc(c.time)}</div><div class="d ${st.n ? 'cdone' : 'ctodo'}">${st.n ? icon('circle-check') : icon('clock')}${esc(st.label)}</div></div>${icon('chevron-right', 'go')}</button>`;
}

export function renderCases(root, query = {}) {
  let filter = ['tutti', 'da-fare', 'fatti'].includes(query.f) ? query.f : 'tutti';
  const draw = () => {
    const gens = generatedCases();
    const h = hist.all();
    const isDone = (c) => !!(h[c.id] && h[c.id].attempts.length);
    const keep = (c) => filter === 'tutti' || (filter === 'fatti' ? isDone(c) : !isDone(c));
    const g = gens.filter(keep), f = CASES.filter(keep);
    const stats = caseStats();
    root.innerHTML = `<div class="page stack-lg">
      ${pageHead({ title: 'Casi clinici', sub: 'Costruisci la diagnosi passo dopo passo', icon: 'clipboard-check', c: C })}
      <div class="card pad stack casegen">
        <div class="row" style="gap:12px"><div class="tile-ic sm" style="--c:var(${C})">${icon('sparkles')}</div><div class="grow"><b>Genera un nuovo caso</b><div class="xs muted">Costruito al momento dalle schede dell’app: ogni volta cambia. Funziona offline.</div></div></div>
        <div class="row wrap"><button class="btn" id="gen-auto">${icon('dices')}Caso a sorpresa</button><button class="btn ghost" id="gen-topic">${icon('search')}Scegli l’argomento</button></div>
      </div>
      <div class="seg" id="cfilter"><button data-f="tutti" class="${filter === 'tutti' ? 'on' : ''}">Tutti · ${stats.total}</button><button data-f="da-fare" class="${filter === 'da-fare' ? 'on' : ''}">Da fare · ${stats.total - stats.done}</button><button data-f="fatti" class="${filter === 'fatti' ? 'on' : ''}">Fatti · ${stats.done}</button></div>
      ${g.length ? `<div class="sec-title"><h2>Generati per te</h2><span class="xs muted">${g.length}</span></div><div class="list">${g.map(itemHtml).join('')}</div>` : ''}
      ${f.length ? `<div class="sec-title"><h2>Raccolta</h2><span class="xs muted">${f.length}</span></div><div class="list">${f.map(itemHtml).join('')}</div>` : ''}
      ${!g.length && !f.length ? `<div class="empty">${icon('clipboard-check')}<h3>${filter === 'fatti' ? 'Nessun caso svolto' : 'Hai fatto tutti i casi'}</h3><p>${filter === 'fatti' ? 'Quando completi un caso comparirà qui, con le risposte da rivedere.' : 'Genera un nuovo caso per continuare ad allenarti.'}</p></div>` : ''}
      <div class="callout warn">${icon('triangle-alert')}<div>Casi fittizi a scopo didattico, generati o scritti per questo manuale. Le decisioni cliniche reali seguono linee guida, protocolli e prescrizioni.</div></div></div>`;
  };
  const go = (r) => { if (r.error) { toast(r.error); return; } navigate(`/studio/caso/${r.c.id}?m=play`); };
  const topicSheet = () => {
    let type = 'auto';
    openSheet({
      title: 'Genera un caso',
      html: `<div class="stack"><label class="field"><span>Tipo di caso</span><div class="seg" id="gtype">${[['auto', 'Qualsiasi'], ['patho', 'Patologia'], ['proc', 'Procedura'], ['drug', 'Farmaco']].map(([v, l]) => `<button data-v="${v}" class="${v === 'auto' ? 'on' : ''}">${l}</button>`).join('')}</div></label>
        <label class="field"><span>Argomento (facoltativo)</span><input class="input" id="gtopic" type="search" placeholder="es. sepsi, prelievo venoso, insulina…" autocomplete="off"></label>
        <button class="btn block" id="gdo">${icon('sparkles')}Genera il caso</button></div>`,
      onMount: (api) => {
        api.el.querySelector('#gtype').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (!b) return; type = b.dataset.v; api.el.querySelectorAll('#gtype button').forEach((x) => x.classList.toggle('on', x === b)); });
        const doIt = () => { const topic = api.el.querySelector('#gtopic').value; const r = newCase({ type, topic }); if (r.error) { toast(r.error); return; } api.close(); go(r); };
        api.el.querySelector('#gdo').onclick = doIt;
        api.el.querySelector('#gtopic').addEventListener('keydown', (e) => { if (e.key === 'Enter') doIt(); });
      },
    });
  };
  root.addEventListener('click', (ev) => {
    const f = ev.target.closest('[data-f]'); if (f) { filter = f.dataset.f; draw(); return; }
    if (ev.target.closest('#gen-auto')) { go(newCase({})); return; }
    if (ev.target.closest('#gen-topic')) { topicSheet(); }
  });
  draw();
  if (query.new !== undefined) { const r = newCase({ topic: query.new === '1' ? '' : query.new }); setTimeout(() => { if (r.error) toast(r.error); else navigate(`/studio/caso/${r.c.id}?m=play`, { replace: true }); }, 50); }
  return { title: 'Casi clinici', tab: 'home' };
}

// ---------------------------------------------------------------- singolo caso
export function renderCase(root, id, query = {}) {
  const c = findCase(id);
  if (!c) { root.innerHTML = `<div class="page"><div class="empty">${icon('search-x')}<h3>Caso non trovato</h3><p>Potrebbe essere stato eliminato.</p><button class="btn" data-go="/studio/casi">Torna ai casi</button></div></div>`; return { title: 'Caso' }; }
  const h = hist.get(id);
  const attempts = h ? h.attempts : [];
  const mode = query.m || (attempts.length ? 'overview' : 'play');
  const to = (m, extra = '') => navigate(`/studio/caso/${id}?m=${m}${extra}`, { replace: true });
  const scenario = `<div class="card pad"><div class="xs muted" style="margin-bottom:4px">Scenario${c.gen ? ' · caso generato' : ''}</div>${esc(c.intro)}</div>`;
  const linked = () => `<div class="sec-title"><h2>Schede collegate</h2></div><div class="chips wrap">${(c.rel || []).map(get).filter(Boolean).map((e) => chipFor(e)).join('')}</div>`;
  const genButtons = () => c.gen ? `<button class="btn ghost" id="again-sim">${icon('dices')}Nuovo caso simile</button><button class="btn ghost" id="again-any">${icon('sparkles')}Nuovo caso diverso</button>` : `<button class="btn ghost" id="again-any">${icon('sparkles')}Genera un nuovo caso</button>`;

  const bindCommon = () => {
    root.onclick = (ev) => {
      const t = ev.target.closest('button'); if (!t) return;
      if (t.id === 'redo') { to('play'); return; }
      if (t.id === 'redo-err') { to('errors'); return; }
      if (t.id === 'review') { to('review', `&a=${attempts.length - 1}`); return; }
      if (t.dataset.review != null) { to('review', `&a=${t.dataset.review}`); return; }
      if (t.id === 'again-sim') { const r = newCase({ entity: c.ent }); if (r.error) toast(r.error); else navigate(`/studio/caso/${r.c.id}?m=play`, { replace: true }); return; }
      if (t.id === 'again-any') { const r = newCase({}); if (r.error) toast(r.error); else navigate(`/studio/caso/${r.c.id}?m=play`, { replace: true }); return; }
      if (t.id === 'del') { confirmDialog({ title: 'Eliminare questo caso?', text: 'Il caso generato e i suoi tentativi verranno rimossi da questo dispositivo.', ok: 'Elimina', danger: true }).then((y) => { if (y) { hist.remove(id); toast('Caso eliminato'); navigate('/studio/casi', { replace: true }); } }); }
    };
  };

  // ---- panoramica con storico
  if (mode === 'overview') {
    const last = attempts[attempts.length - 1];
    const wrong = (last.rec || []).filter((s) => s.picked == null || !s.opts[s.picked][1]).length;
    root.innerHTML = `<div class="page stack-lg">
      <div class="xs muted">${esc(c.spec)} · ${esc(c.level)} · ${esc(c.time)}</div><h2 style="font-size:1.3rem">${esc(c.title)}</h2>
      ${scenario}
      <div class="card pad stack"><b>Il tuo storico</b>
        ${attempts.slice().reverse().map((a, k) => { const idx = attempts.length - 1 - k; return `<div class="row" style="gap:10px"><div class="grow"><div><b>${a.good}/${a.total}</b> <span class="muted">· ${pct(a.good, a.total)}%${a.errorsOnly ? ' · solo errori' : ''}</span></div><div class="xs muted">${esc(fmtDT(a.t))}</div></div><button class="btn sm ghost" data-review="${idx}">Rivedi</button></div>`; }).join('<hr class="hr">')}
      </div>
      <div class="stack"><button class="btn block" id="redo">${icon('rotate-ccw')}Rifai il caso</button>
        ${wrong ? `<button class="btn block ghost" id="redo-err">${icon('circle-help')}Rifai solo gli errori (${wrong})</button>` : ''}
        <button class="btn block ghost" id="review">${icon('eye')}Rivedi l’ultimo tentativo</button></div>
      <div class="row wrap">${genButtons()}${c.gen ? `<button class="btn ghost danger" id="del">${icon('trash-2')}Elimina</button>` : ''}</div>
      ${linked()}</div>`;
    bindCommon();
    return { title: 'Caso clinico', tab: 'home' };
  }

  // ---- revisione di un tentativo
  if (mode === 'review') {
    const a = attempts[Math.min(attempts.length - 1, Math.max(0, parseInt(query.a, 10) || 0))];
    if (!a || !a.rec) { to('overview'); return { title: 'Caso clinico', tab: 'home' }; }
    root.innerHTML = `<div class="page stack-lg">
      <div class="xs muted">Revisione · ${esc(fmtDT(a.t))}</div><h2 style="font-size:1.25rem">${esc(c.title)}</h2>
      <div class="card pad center"><div class="statn" style="font-size:2rem">${a.good}/${a.total}</div><div class="small muted">decisioni corrette${a.errorsOnly ? ' (solo errori ripetuti)' : ''}</div></div>
      ${scenario}
      ${a.rec.map((s, i) => `<div class="card pad stack"><div class="xs muted">Passo ${i + 1}</div><b>${esc(s.q)}</b>
        ${s.opts.map((o, k) => `<div class="opt ${o[1] ? 'good' : s.picked === k ? 'bad' : ''} static"><span class="l">${'ABCD'[k]}</span><span class="grow">${esc(o[0])}${s.picked === k ? ' <span class="xs muted">· la tua risposta</span>' : ''}</span></div>`).join('')}
        ${s.picked == null ? '<div class="small muted">Nessuna risposta data.</div>' : ''}
        <div class="callout ${s.picked != null && s.opts[s.picked][1] ? 'ok' : 'warn'}">${icon(s.picked != null && s.opts[s.picked][1] ? 'circle-check' : 'triangle-alert')}<div>${esc(s.picked != null ? s.opts[s.picked][2] : (s.opts.find((o) => o[1]) || [0, 0, ''])[2])}${s.picked != null && !s.opts[s.picked][1] ? `<br><b>Risposta migliore:</b> ${esc((s.opts.find((o) => o[1]) || [''])[0])}<br><span class="xs muted">${esc((s.opts.find((o) => o[1]) || [0, 0, ''])[2])}</span>` : ''}</div></div></div>`).join('')}
      <div class="callout note">${icon('info')}<div>${esc(c.outro)}</div></div>
      ${linked()}
      <div class="stack"><button class="btn block" id="redo">${icon('rotate-ccw')}Rifai il caso</button><button class="btn block ghost" data-go="/studio/caso/${esc(id)}?m=overview">Torna allo storico</button></div></div>`;
    bindCommon();
    return { title: 'Revisione', tab: 'home' };
  }

  // ---- svolgimento (play / solo errori)
  let base = c.steps;
  let errorsOnly = false;
  if (mode === 'errors' && attempts.length) {
    const wrongQ = new Set((attempts[attempts.length - 1].rec || []).filter((s) => s.picked == null || !s.opts[s.picked][1]).map((s) => s.q));
    const f = c.steps.filter((s) => wrongQ.has(s.q));
    if (f.length) { base = f; errorsOnly = true; }
  }
  const steps = base.map((s) => ({ q: s.q, opts: shuffle(s.opts) }));
  let step = 0, good = 0, picked = null;
  const rec = steps.map((s) => ({ q: s.q, opts: s.opts, picked: null }));
  function draw() {
    if (step >= steps.length) {
      const att = { t: Date.now(), good, total: steps.length, rec, errorsOnly };
      if (!draw.saved) { hist.addAttempt(id, att); draw.saved = true; }
      const n = (hist.get(id) || { attempts: [] }).attempts.length;
      root.innerHTML = `<div class="page stack-lg"><div class="card pad center stack"><div class="statn" style="font-size:2.2rem">${good}/${steps.length}</div><div class="small muted">decisioni corrette al primo tentativo${errorsOnly ? ' (solo gli errori)' : ''}</div><div class="small">${pct(good, steps.length) >= 80 ? 'Ottimo lavoro.' : pct(good, steps.length) >= 60 ? 'Buono: rivedi le risposte sbagliate.' : 'Ripassa le schede collegate e rifai il caso.'}</div></div>
        <div class="callout note">${icon('info')}<div>${esc(c.outro)}</div></div>
        ${linked()}
        <div class="stack"><button class="btn block" id="review">${icon('eye')}Rivedi le tue risposte</button><button class="btn block ghost" id="redo">${icon('rotate-ccw')}Rifai il caso${n > 1 ? ` (tentativo ${n + 1})` : ''}</button></div>
        <div class="row wrap">${genButtons()}<button class="btn ghost" data-go="/studio/casi">Tutti i casi</button></div></div>`;
      bindCommon();
      return;
    }
    const s = steps[step];
    root.innerHTML = `<div class="page stack-lg">
      <div class="xs muted">${esc(c.spec)} · passo ${step + 1}/${steps.length}${errorsOnly ? ' · solo errori' : ''}</div><h2 style="font-size:1.2rem">${esc(c.title)}</h2>
      ${scenario}
      <div class="card pad"><b>${esc(s.q)}</b></div>
      <div class="stack">${s.opts.map((o, k) => `<button class="opt ${picked === k ? (o[1] ? 'good' : 'bad') : picked != null && o[1] ? 'good' : ''}" data-k="${k}"><span class="l">${'ABCD'[k]}</span><span class="grow">${esc(o[0])}</span></button>`).join('')}</div>
      ${picked != null ? `<div class="callout ${s.opts[picked][1] ? 'ok' : 'warn'}">${icon(s.opts[picked][1] ? 'circle-check' : 'triangle-alert')}<div>${esc(s.opts[picked][2])}${s.opts[picked][1] ? '' : `<br><b>Risposta migliore:</b> ${esc(s.opts.find((o) => o[1])[0])}`}</div></div><div class="row"><div class="grow"></div><button class="btn" id="next">${step === steps.length - 1 ? 'Vedi il risultato' : 'Avanti'}</button></div>` : ''}</div>`;
  }
  root.onclick = (ev) => {
    const o = ev.target.closest('.opt');
    if (o && picked == null && o.dataset.k != null) { picked = +o.dataset.k; rec[step].picked = picked; if (steps[step].opts[picked][1]) good++; draw(); return; }
    if (ev.target.closest('#next')) { step++; picked = null; draw(); root.scrollTop = 0; window.scrollTo(0, 0); }
  };
  draw();
  return { title: 'Caso clinico', tab: 'home' };
}
