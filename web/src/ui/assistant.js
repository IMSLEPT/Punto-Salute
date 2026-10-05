// Pagina "Assistente": chat con risposte a fonti, suggerimenti di approfondimento, azioni e (se attivata) AI open source.
import { esc, icon, $ } from '../core/dom.js';
import { get } from '../core/data.js';
import { navigate } from '../core/router.js';
import { openSearch } from './search.js';
import { toast } from '../core/ui.js';
import { respond, respondAsk, chatStore, STARTERS } from '../ai/assistant.js';
import { aiCfg } from '../ai/llm.js';
import { searchWeb } from '../ai/websearch.js';

const textOf = (html) => { try { return new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html').body.textContent.replace(/\s+/g, ' ').trim(); } catch { return ''; } };

function chipHtml(c) {
  const ic = c.ic ? icon(c.ic) : '';
  if (c.ask) return `<button class="chip ach" data-ask="${esc(JSON.stringify(c.ask))}" data-label="${esc(c.t)}">${ic}${esc(c.t)}</button>`;
  if (c.q) return `<button class="chip ach" data-q="${esc(c.q)}">${ic}${esc(c.t)}</button>`;
  if (c.gen) return `<button class="chip ach gen" data-gen="${esc(c.gen)}">${ic}${esc(c.t)}</button>`;
  if (c.go) return `<button class="chip ach" data-go="${esc(c.go)}">${ic}${esc(c.t)}</button>`;
  if (c.web) return `<button class="chip ach" data-webq="${esc(c.web)}">${ic}${esc(c.t)}</button>`;
  return '';
}

function botHtml(m) {
  const badge = m.mode === 'ai' ? `<span class="abadge ai">${icon('sparkles')}AI · ${esc(String(m.model || '').split('/').pop().slice(0, 28))}</span>` : m.mode === 'web' ? `<span class="abadge">${icon('globe')}Web</span>` : (m.src && m.src.length) ? `<span class="abadge">${icon('library')}Dalle schede</span>` : `<span class="abadge">${icon('sparkles')}Assistente</span>`;
  const src = (m.srcNames && m.srcNames.length) ? `<div class="asrc xs muted">${icon('library')}<span>Fonti: ${esc(m.srcNames.join(' · '))}. Contenuto didattico: verifica il protocollo locale.</span></div>` : '';
  const detail = m.detail ? `<details class="adet"><summary>Vedi le schede usate</summary>${m.detail}</details>` : '';
  return `<div class="amsg bot"><div class="abub">${badge}${m.html}${detail}${src}</div>${m.chips && m.chips.length ? `<div class="achips">${m.chips.map(chipHtml).join('')}</div>` : ''}</div>`;
}
const userHtml = (t) => `<div class="amsg user"><div class="abub">${esc(t)}</div></div>`;

export function renderAssistant(root, query = {}) {
  const state = chatStore.load();
  const cfg = aiCfg.get();
  root.innerHTML = `<div class="chat">
    <div class="chatlog" id="log" role="log" aria-live="polite"></div>
    <div class="chatfoot">
      <div class="chatmode xs muted">${aiCfg.ready() ? `${icon('sparkles')}AI open source attiva · ${esc(aiCfg.model(cfg).split('/').pop().slice(0, 30))}` : `${icon('library')}Risposte dalle schede dell’app (offline)`}
        <button class="lk" data-go="/profilo?sec=ai">${aiCfg.ready() ? 'Impostazioni' : 'Attiva l’AI'}</button><button class="lk" id="newchat">Nuova chat</button></div>
      <form class="chatform" id="form" autocomplete="off"><textarea id="q" rows="1" maxlength="600" placeholder="Scrivi una domanda…" aria-label="Domanda"></textarea><button class="send" type="submit" aria-label="Invia">${icon('send')}</button></form>
    </div></div>`;
  const log = $('#log', root), q = $('#q', root), form = $('#form', root);
  let busy = false;

  const scroll = () => { requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; }); };
  const welcome = () => `<div class="amsg bot"><div class="abub"><div class="ahead"><b>Ciao, sono l’assistente di Punto Salute</b></div><p>Rispondo usando <b>solo le schede dell’app</b> (con fonti e revisione), posso fare confronti, riassunti, mappe e schemi, aprire strumenti e cercare sul web. Non riporto posologie né faccio diagnosi.</p></div><div class="achips">${STARTERS.map((t) => chipHtml({ t, q: t })).join('')}</div></div>`;

  const draw = () => {
    log.innerHTML = (state.msgs.length ? '' : welcome()) + state.msgs.map((m) => (m.role === 'user' ? userHtml(m.text) : botHtml(m))).join('');
    // i suggerimenti restano attivi solo sull'ultimo messaggio
    log.querySelectorAll('.amsg.bot').forEach((el, i, all) => { if (i < all.length - 1 && state.msgs.length) el.querySelector('.achips')?.classList.add('old'); });
    scroll();
  };
  const save = () => chatStore.save(state);
  const hist = () => state.msgs.map((m) => ({ role: m.role === 'user' ? 'user' : 'bot', text: m.text || '' }));

  const typing = (on) => {
    const t = log.querySelector('.atyping');
    if (on && !t) { log.insertAdjacentHTML('beforeend', `<div class="amsg bot atyping"><div class="abub"><span class="dots"><i></i><i></i><i></i></span></div></div>`); scroll(); }
    if (!on && t) t.remove();
  };

  const push = (m) => {
    m.text = m.role === 'bot' ? textOf(m.html || '').slice(0, 900) : m.text;
    state.msgs.push(m);
    if (m.role === 'bot') { state.ctx = { entity: m.ent || state.ctx.entity, keys: m.keys || [] }; }
    save();
  };

  const finishBot = (m) => {
    typing(false);
    push(m);
    log.insertAdjacentHTML('beforeend', botHtml(m));
    log.querySelectorAll('.amsg.bot').forEach((el, i, all) => { if (i < all.length - 1) el.querySelector('.achips')?.classList.add('old'); });
    scroll();
    if (m.nav) setTimeout(() => navigate(m.nav), 350);
    if (m.search) setTimeout(() => openSearch(m.search), 200);
  };

  const run = async (userText, fn) => {
    if (busy) { toast('Un momento: sto ancora rispondendo'); return; }
    busy = true;
    if (userText) { push({ role: 'user', text: userText }); log.querySelector('.amsg.bot .achips')?.classList.add('old'); log.insertAdjacentHTML('beforeend', userHtml(userText)); }
    log.querySelector('.achips:not(.old)')?.classList.add('old');
    typing(true);
    try { finishBot(await fn()); }
    catch (err) { console.error(err); typing(false); finishBot({ role: 'bot', html: `<p>Qualcosa non ha funzionato nella risposta. Riprova o riformula la domanda.</p>`, chips: [] }); }
    busy = false;
  };

  const send = (text) => {
    const t = String(text || '').trim();
    if (!t) return;
    q.value = ''; q.style.height = '';
    run(t, () => respond(t, state.ctx, hist()));
  };

  form.addEventListener('submit', (e) => { e.preventDefault(); send(q.value); });
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(q.value); } });
  q.addEventListener('input', () => { q.style.height = 'auto'; q.style.height = Math.min(120, q.scrollHeight) + 'px'; });
  root.addEventListener('click', (ev) => {
    if (ev.target.closest('.achips.old')) return;
    const a = ev.target.closest('[data-ask]');
    if (a) { let p = null; try { p = JSON.parse(a.dataset.ask); } catch { /* noop */ } if (p) { const label = a.dataset.label || ''; const e = get(p.ent); run(label && e ? `${label}${p.keys && p.keys.length ? ' — ' + e.title : ''}` : (e ? `Parlami di ${e.title}` : label), () => respondAsk(p, p.keys && p.keys.length ? label : '', state.ctx, hist())); } return; }
    const qq = ev.target.closest('[data-q]');
    if (qq) { send(qq.dataset.q); return; }
    const w = ev.target.closest('[data-webq]');
    if (w) {
      const topic = w.dataset.webq;
      run(`Cerca sul web: ${topic}`, async () => { const r = await searchWeb(topic); const { webHtmlPublic } = await import('../ai/assistant.js'); return { role: 'bot', mode: 'web', html: webHtmlPublic(r.items, r.errors, topic), chips: [] }; });
      return;
    }
    if (ev.target.closest('#newchat')) { state.msgs = []; state.ctx = {}; chatStore.clear(); draw(); toast('Nuova chat'); }
  });
  draw();
  if (query.q) setTimeout(() => send(query.q), 250);
  return { title: 'Assistente', kicker: 'Punto Salute', tab: 'home', tabs: false };
}
