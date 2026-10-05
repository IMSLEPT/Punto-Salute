// Modalità studio: quiz, flashcard (ripetizione dilazionata), casi clinici, simulazione d'esame.
import { esc, icon, norm } from '../core/dom.js';
import { store } from '../core/store.js';
import { ALL, BY_TYPE, get } from '../core/data.js';
import { TYPES } from '../core/types.js';
import { plain, routeFor } from '../core/text.js';
import { toast } from '../core/ui.js';
import { search } from '../core/search.js';
import { pageHead, DISCLAIMER } from './common.js';
import { chipFor } from './entity.js';
import BANK from '../data/quizbank.js';
import { caseStats } from './cases.js';

const C = '--c-studio';
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const pick = (a, n) => shuffle(a).slice(0, n);
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

// ------------------------------------------------------------------ domande
const STOP = new Set(['della', 'delle', 'degli', 'dello', 'nella', 'nelle', 'dell', 'sulla', 'come', 'sono', 'dalla', 'dalle', 'infermieristica', 'infermieristico']);
function leaks(e) {
  const s = plain(e.summary || '').toLowerCase();
  const words = e.title.toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[^a-zàèéìòù0-9]+/).filter((w) => w.length >= 5 && !STOP.has(w));
  return words.some((w) => s.includes(w.slice(0, Math.max(5, w.length - 2))));
}
const GEN_TYPES = ['anat', 'physio', 'patho', 'proc', 'dev', 'exam', 'drug', 'scale', 'sign', 'term', 'emerg', 'ndx', 'tube', 'calc'];
const NOUN = { anat: 'struttura anatomica', physio: 'concetto di fisiologia', patho: 'patologia', proc: 'procedura', dev: 'dispositivo', exam: 'esame', drug: 'classe di farmaci o farmaco', scale: 'scala', sign: 'segno o sintomo', term: 'termine', emerg: 'emergenza', ndx: 'diagnosi infermieristica', tube: 'provetta', calc: 'calcolo' };
const stem = (e) => norm(e.title).replace(/ /g, '').slice(0, 6);
let genCache = null;
function generated() {
  if (genCache) return genCache;
  const out = [];
  for (const t of GEN_TYPES) {
    const pool = BY_TYPE[t] || [];
    for (const e of pool) {
      const s = plain(e.summary || '');
      if (s.length < 45 || leaks(e)) continue;
      const same = pool.filter((x) => x.id !== e.id && (x.cat === e.cat || pool.length < 8));
      const base = same.length >= 3 ? same : pool.filter((x) => x.id !== e.id);
      const others = base.filter((x) => stem(x) !== stem(e));
      if (others.length < 3) continue;
      out.push({ gen: true, t: TYPES[t].plural, q: `Quale ${NOUN[t]} corrisponde a questa descrizione?\n«${s}»`, key: e.id, o: [e.title, ...pick(others, 3).map((x) => x.title)], x: `Risposta: **${e.title}**.`, rel: [e.id] });
    }
  }
  return (genCache = out);
}
function allQuestions() { return BANK.concat(generated()); }
const topics = () => [...new Set(BANK.map((q) => q.t))].sort((a, b) => a.localeCompare(b, 'it'));

function prepare(q) {
  const opts = shuffle(q.o.map((t, i) => ({ t, ok: i === 0 })));
  return { ...q, opts };
}

// ------------------------------------------------------------------ statistiche
const stat = {
  get: () => store.get('quizStats', { done: 0, correct: 0 }),
  add(ok) { const s = this.get(); s.done++; if (ok) s.correct++; store.set('quizStats', s); },
};

const fmtMd = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');

// ------------------------------------------------------------------ hub
export function renderStudio(root) {
  const s = stat.get();
  const srs = store.get('srs', {});
  const due = Object.values(srs).filter((c) => c.due <= Date.now()).length;
  const done = store.get('cases', {});
  const T = (route, ic, name, sub, extra = '') => `<button class="hcard" data-go="${route}" style="--c:var(${C})"><div class="top"><div class="ico" style="color:rgb(var(${C}));background:rgb(var(${C}) / .12)">${icon(ic)}</div>${icon('chevron-right', 'chev')}</div><div><div class="nm">${name}</div><div class="sb">${sub}</div>${extra}</div></button>`;
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: 'Modalità studio', sub: 'Allenati con quiz, flashcard e casi clinici', icon: 'graduation-cap', c: C })}
    <div class="card pad"><div class="grid3">
      <div class="center"><div class="statn">${s.done}</div><div class="xs muted">risposte date</div></div>
      <div class="center"><div class="statn">${s.done ? pct(s.correct, s.done) + '%' : '—'}</div><div class="xs muted">corrette</div></div>
      <div class="center"><div class="statn">${due}</div><div class="xs muted">flashcard da ripassare</div></div>
    </div></div>
    <div class="grid2">
      ${T('/studio/quiz', 'circle-help', 'Quiz', `${allQuestions().length} domande per argomento`)}
      ${T('/studio/flash', 'layers', 'Flashcard', 'Ripasso a intervalli crescenti')}
      ${T('/studio/casi', 'clipboard-check', 'Casi clinici', 'Raccolta e casi generati: costruisci la diagnosi', (() => { const cs = caseStats(); return `<div class="xs muted">${cs.done}/${cs.total} svolti · ${cs.gen} generati</div>`; })())}
      ${T('/studio/esame', 'timer', 'Simulazione d’esame', '20 domande a tempo')}
    </div>
    <div class="callout note">${icon('info')}<div>Domande e casi sono didattici e scritti per questo manuale: verifica sempre le risposte con testi e protocolli ufficiali. Il progresso resta solo sul tuo dispositivo.</div></div>
  </div>`;
  return { title: 'Studio', tab: 'home' };
}

// ------------------------------------------------------------------ motore quiz
function runQuiz(root, { list, title, exam = false, minutes = 0, back = '/studio' }) {
  const qs = list.map(prepare);
  const ans = new Array(qs.length).fill(null);
  let i = 0, deadline = minutes ? Date.now() + minutes * 60000 : 0, timer = null, finished = false;

  const tick = () => {
    const el = root.querySelector('#clock'); if (!el) return clearInterval(timer);
    const left = Math.max(0, deadline - Date.now());
    el.textContent = `${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, '0')}`;
    if (!left && !finished) { clearInterval(timer); finish(); }
  };

  function draw() {
    const q = qs[i], a = ans[i];
    const shown = !exam && a != null;
    root.innerHTML = `<div class="page stack-lg">
      <div class="row"><div class="grow"><div class="xs muted">${esc(q.t)}</div><b>${esc(title)} · ${i + 1}/${qs.length}</b></div>${deadline ? `<span class="badge" style="--c:${C}">${icon('timer')}<span id="clock">…</span></span>` : ''}</div>
      <div class="qbar"><i style="width:${(i / qs.length) * 100}%"></i></div>
      <div class="card pad"><div style="font-weight:650;line-height:1.4">${fmtMd(q.q)}</div></div>
      <div class="stack">${q.opts.map((o, k) => {
        let cls = 'opt';
        if (a === k) cls += ' on';
        if (shown) { if (o.ok) cls += ' good'; else if (a === k) cls += ' bad'; }
        return `<button class="${cls}" data-k="${k}"><span class="l">${'ABCD'[k]}</span><span class="grow">${esc(o.t)}</span></button>`;
      }).join('')}</div>
      ${shown ? `<div class="callout ${q.opts[a].ok ? 'ok' : 'warn'}">${icon(q.opts[a].ok ? 'circle-check' : 'triangle-alert')}<div><b>${q.opts[a].ok ? 'Corretto.' : 'Non esatto.'}</b> ${fmtMd(q.x || '')}</div></div>
      ${(q.rel || []).length ? `<div class="chips wrap" style="margin-top:22px">${q.rel.map(get).filter(Boolean).map((e) => chipFor(e)).join('')}</div>` : ''}` : ''}
      <div class="row">${exam && i > 0 ? `<button class="btn ghost" id="prev">Indietro</button>` : ''}<div class="grow"></div>
        ${(shown || exam) ? `<button class="btn" id="next" ${exam && a == null ? '' : ''}>${i === qs.length - 1 ? 'Termina' : 'Avanti'}</button>` : ''}</div>
    </div>`;
    if (deadline) { clearInterval(timer); timer = setInterval(tick, 500); tick(); }
  }
  root.onclick = (ev) => {
    const o = ev.target.closest('.opt');
    if (o && !finished) {
      const k = +o.dataset.k;
      if (!exam && ans[i] != null) return;
      ans[i] = k;
      if (!exam) stat.add(qs[i].opts[k].ok);
      draw(); return;
    }
    if (ev.target.closest('#next')) { if (i === qs.length - 1) finish(); else { i++; draw(); window.scrollTo(0, 0); } return; }
    if (ev.target.closest('#prev')) { i--; draw(); }
  };

  function finish() {
    finished = true; clearInterval(timer);
    if (exam) ans.forEach((a, n) => { if (a != null) stat.add(qs[n].opts[a].ok); });
    const ok = ans.filter((a, n) => a != null && qs[n].opts[a].ok).length;
    const wrong = qs.map((q, n) => ({ q, n, a: ans[n] })).filter((x) => x.a == null || !x.q.opts[x.a].ok);
    root.onclick = null;
    root.innerHTML = `<div class="page stack-lg">
      <div class="card pad center stack"><div class="statn" style="font-size:2.4rem">${pct(ok, qs.length)}%</div><div><b>${ok} su ${qs.length}</b> risposte corrette</div>
        <div class="small muted">${pct(ok, qs.length) >= 80 ? 'Ottimo lavoro.' : pct(ok, qs.length) >= 60 ? 'Buono: ripassa le schede collegate agli errori.' : 'Ripassa gli argomenti e riprova.'}</div></div>
      ${wrong.length ? `<div class="sec-title"><h2>Da ripassare</h2></div>${wrong.map(({ q, a }) => `<div class="card pad stack"><div class="small">${fmtMd(q.q)}</div>
        ${a != null ? `<div class="small"><span class="badge" style="--c:var(--c-emergenze)">La tua risposta</span> ${esc(q.opts[a].t)}</div>` : '<div class="small muted">Nessuna risposta</div>'}
        <div class="small"><span class="badge" style="--c:var(--c-farmaci)">Corretta</span> ${esc(q.opts.find((o) => o.ok).t)}</div>
        ${q.x ? `<div class="small muted">${fmtMd(q.x)}</div>` : ''}
        ${(q.rel || []).length ? `<div class="chips wrap">${q.rel.map(get).filter(Boolean).map((e) => chipFor(e)).join('')}</div>` : ''}</div>`).join('')}` : `<div class="callout ok">${icon('circle-check')}<div>Nessun errore: ottimo.</div></div>`}
      <div class="row wrap"><button class="btn" data-go="${back}">Torna allo studio</button></div></div>`;
  }
  draw();
}

export function renderQuiz(root, query = {}) {
  const tp = topics();
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: 'Quiz', sub: 'Scegli argomento e numero di domande', icon: 'circle-help', c: C })}
    <div class="card pad stack">
      <label class="field"><span>Argomento</span><select class="select" id="topic"><option value="*">Tutti (mix)</option><option value="~">Solo domande di ragionamento</option><option value="#">Riconosci dalla descrizione (automatiche)</option>${tp.map((t) => `<option>${esc(t)}</option>`).join('')}</select></label>
      <label class="field"><span>Numero di domande</span><div class="seg" id="num">${[10, 20, 30].map((n, k) => `<button data-v="${n}" class="${k === 0 ? 'on' : ''}">${n}</button>`).join('')}</div></label>
      <button class="btn block" id="go">${icon('play')}Inizia</button>
    </div>${DISCLAIMER}</div>`;
  let n = 10;
  root.querySelector('#num').onclick = (e) => { const b = e.target.closest('[data-v]'); if (!b) return; n = +b.dataset.v; root.querySelectorAll('#num button').forEach((x) => x.classList.toggle('on', x === b)); };
  if (query.q) {
    // quiz mirato: domande collegate alle schede che corrispondono al testo, altrimenti mix
    const ids = new Set(search(query.q, { limit: 8 }).map((r) => r.e.id));
    const nq = norm(query.q);
    const pool = allQuestions().filter((q) => (q.rel || []).some((id) => ids.has(id)) || norm(q.q).includes(nq));
    if (pool.length >= 3) { setTimeout(() => runQuiz(root, { list: pick(pool, Math.min(10, pool.length)), title: `Quiz: ${query.q}` }), 0); return { title: 'Quiz', tab: 'home' }; }
    setTimeout(() => toast(`Poche domande su “${query.q}”: ti propongo il mix`), 400);
  }
  root.querySelector('#go').onclick = () => {
    const t = root.querySelector('#topic').value;
    const pool = t === '*' ? allQuestions() : t === '~' ? BANK : t === '#' ? generated() : BANK.filter((q) => q.t === t);
    runQuiz(root, { list: pick(pool, n), title: 'Quiz' });
  };
  return { title: 'Quiz', tab: 'home' };
}

export function renderExam(root) {
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: 'Simulazione d’esame', sub: '20 domande a risposta multipla · 20 minuti', icon: 'timer', c: C })}
    <div class="card pad stack"><p class="small">Le risposte e le spiegazioni compaiono solo al termine. Puoi tornare indietro e cambiare risposta; allo scadere del tempo la prova si chiude da sola.</p>
      <button class="btn block" id="go">${icon('play')}Avvia la prova</button></div></div>`;
  root.querySelector('#go').onclick = () => runQuiz(root, { list: pick(BANK, 20), title: 'Esame', exam: true, minutes: 20 });
  return { title: 'Simulazione', tab: 'home' };
}

// ------------------------------------------------------------------ flashcard
const DAY = 86400000;
const BOX_DAYS = [0, 1, 3, 7, 16, 35];
const DECKS = [['*', 'Tutte'], ['patho', 'Patologie'], ['proc', 'Procedure'], ['sign+term', 'Termini'], ['exam', 'Esami'], ['drug', 'Farmaci'], ['anat', 'Anatomia'], ['ndx', 'Diagnosi inf.'], ['scale', 'Scale'], ['dev', 'Dispositivi']];
export function renderFlash(root) {
  let deck = '*';
  const srs = () => store.get('srs', {});
  const pool = () => (deck === '*' ? GEN_TYPES.slice(0, -1) : deck.split('+')).flatMap((t) => BY_TYPE[t] || []).filter((e) => plain(e.summary || '').length > 30);
  const queue = () => {
    const s = srs(), p = pool();
    const due = p.filter((e) => s[e.id] && s[e.id].due <= Date.now());
    const fresh = shuffle(p.filter((e) => !s[e.id]));
    return shuffle(due).concat(fresh).slice(0, 15);
  };
  function start() {
    const q = queue(); let i = 0, flipped = false, ok = 0;
    const card = () => {
      if (i >= q.length) {
        root.innerHTML = `<div class="page stack-lg">${pageHead({ title: 'Sessione completata', sub: `${ok} su ${q.length} le sapevi`, icon: 'layers', c: C })}<div class="row wrap"><button class="btn" id="again">Un’altra sessione</button><button class="btn ghost" data-go="/studio">Torna allo studio</button></div></div>`;
        root.querySelector('#again').onclick = start; root.onclick = null; return;
      }
      const e = q[i], t = TYPES[e.type];
      root.innerHTML = `<div class="page stack-lg">
        <div class="row"><div class="grow"><div class="xs muted">${esc(t.label)}</div><b>Flashcard · ${i + 1}/${q.length}</b></div></div>
        <div class="qbar"><i style="width:${(i / q.length) * 100}%"></i></div>
        <button class="card pad flash" id="flip" style="--c:var(${t.c})">${flipped
          ? `<div class="stack"><div class="xs muted">${esc(e.title)}</div><div style="line-height:1.5">${esc(plain(e.summary))}</div></div>`
          : `<div class="center"><div class="tile-ic soft" style="--c:var(${t.c});margin:0 auto 12px">${icon(t.icon)}</div><div style="font-size:1.25rem;font-weight:750">${esc(e.title)}</div><div class="xs muted" style="margin-top:8px">Tocca per vedere la risposta</div></div>`}</button>
        ${flipped ? `<div class="grid3"><button class="btn danger sm" data-r="0">Non la so</button><button class="btn ghost sm" data-r="1">Quasi</button><button class="btn sm" data-r="2">La so</button></div><div class="center" style="margin-top:22px"><a class="lk" style="display:inline-block;padding:10px 6px" data-go="${routeFor(e)}">Apri la scheda completa</a></div>` : ''}</div>`;
    };
    root.onclick = (ev) => {
      if (ev.target.closest('#flip')) { flipped = true; card(); return; }
      const r = ev.target.closest('[data-r]'); if (!r) return;
      const e = q[i], s = srs(), cur = s[e.id] || { b: 0 };
      const v = +r.dataset.r;
      const b = v === 0 ? 0 : v === 1 ? cur.b : Math.min(BOX_DAYS.length - 1, cur.b + 1);
      s[e.id] = { b, due: Date.now() + (v === 0 ? 10 * 60000 : BOX_DAYS[Math.max(1, b)] * DAY) };
      store.set('srs', s);
      if (v === 2) ok++;
      i++; flipped = false; card();
    };
    card();
  }
  function setup() {
    root.onclick = null;
    const s = srs(); const due = Object.values(s).filter((c) => c.due <= Date.now()).length;
    root.innerHTML = `<div class="page stack-lg">
      ${pageHead({ title: 'Flashcard', sub: `${due} da ripassare · ripetizione a intervalli`, icon: 'layers', c: C })}
      <div class="chips wrap" id="decks">${DECKS.map(([v, l]) => `<button class="chip ${v === deck ? 'active' : ''}" data-d="${v}">${l}</button>`).join('')}</div>
      <div class="card pad stack"><p class="small">Ogni sessione propone fino a 15 carte: prima quelle in scadenza, poi nuove. Valuta onestamente: le carte che non conosci tornano presto, quelle che sai si allontanano nel tempo.</p><button class="btn block" id="go">${icon('play')}Inizia</button></div></div>`;
    root.querySelector('#decks').onclick = (e) => { const b = e.target.closest('[data-d]'); if (!b) return; deck = b.dataset.d; root.querySelectorAll('#decks .chip').forEach((x) => x.classList.toggle('active', x === b)); };
    root.querySelector('#go').onclick = () => { if (!queue().length) { toast('Nessuna carta disponibile'); return; } start(); };
  }
  setup();
  return { title: 'Flashcard', tab: 'home' };
}

