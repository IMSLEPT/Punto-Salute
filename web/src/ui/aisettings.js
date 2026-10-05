// Impostazioni dell'assistente AI facoltativo (Profilo).
import { esc, icon } from '../core/dom.js';
import { toast } from '../core/ui.js';
import { aiCfg, PROVIDERS, listFreeModels, chat } from '../ai/llm.js';

export function aiCard() {
  const c = aiCfg.get();
  const custom = c.provider === 'custom';
  return `<div class="card pad stack" id="aicard">
    <h3>${icon('sparkles')} Assistente AI open source (facoltativo)</h3>
    <p class="small muted">L’assistente funziona già <b>offline</b> con le schede dell’app. Se vuoi risposte più discorsive e domande di approfondimento puoi collegare un modello <b>open source gratuito</b> (OpenRouter, modelli “free”: Llama, Qwen, DeepSeek, Gemma, gpt-oss…). Serve una chiave gratuita personale (senza carta di credito).</p>
    <div class="callout warn">${icon('triangle-alert')}<div class="small"><b>Privacy.</b> Se lo attivi, la domanda e i brevi estratti delle schede usati per rispondere vengono inviati al servizio scelto (e, se attivi la ricerca web, Wikipedia e PubMed ricevono la parola cercata). Non scrivere mai dati di pazienti. La chiave resta solo su questo telefono.</div></div>
    <label class="row" style="justify-content:space-between"><span>Usa l’assistente AI</span><span class="seg" style="width:130px" id="aion"><button data-v="1" class="${c.on ? 'on' : ''}">Sì</button><button data-v="0" class="${c.on ? '' : 'on'}">No</button></span></label>
    <div class="stack" id="aibody" ${c.on ? '' : 'hidden'}>
      <label class="field"><span>Servizio</span><select class="select" id="aiprov">${Object.entries(PROVIDERS).map(([k, p]) => `<option value="${k}" ${c.provider === k ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select></label>
      <label class="field" id="aibasef" ${custom ? '' : 'hidden'}><span>Indirizzo del servizio (https, compatibile OpenAI)</span><input class="input" id="aibase" type="url" placeholder="https://…/v1" value="${esc(c.base)}" autocomplete="off"></label>
      <label class="field"><span>Chiave API ${c.provider === 'openrouter' ? '<a class="lk" data-ext="https://openrouter.ai/keys">(ottienila gratis)</a>' : ''}</span><input class="input" id="aikey" type="password" placeholder="sk-…" value="${esc(c.key)}" autocomplete="off" spellcheck="false"></label>
      <label class="field"><span>Modello</span>
        <div class="row"><select class="select grow" id="aimodelsel"><option value="">${esc(aiCfg.model(c) || 'Scegli o scrivi')}</option></select><button class="btn sm ghost" id="aiload" type="button">Carica elenco gratuiti</button></div>
        <input class="input" id="aimodel" type="text" placeholder="${esc(PROVIDERS.openrouter.model)}" value="${esc(c.model)}" autocomplete="off" spellcheck="false" style="margin-top:8px"></label>
      <label class="row" style="justify-content:space-between"><span>Cerca anche sul web (Wikipedia, PubMed) quando serve</span><span class="seg" style="width:130px" id="aiweb"><button data-v="1" class="${c.web !== false ? 'on' : ''}">Sì</button><button data-v="0" class="${c.web !== false ? '' : 'on'}">No</button></span></label>
      <div class="row wrap"><button class="btn sm" id="aitest" type="button">${icon('play')}Prova la connessione</button><button class="btn sm ghost" id="aiclear" type="button">Cancella la chiave</button></div>
      <div class="xs muted" id="aist">Con il modello “openrouter/free” il servizio sceglie da solo un modello gratuito disponibile; i limiti gratuiti sono circa 20 richieste al minuto e un numero giornaliero ridotto.</div>
    </div></div>`;
}

export function bindAi(root) {
  const $ = (s) => root.querySelector(s);
  if (!$('#aicard')) return;
  const seg = (id, fn) => $(id).addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (!b) return; root.querySelectorAll(id + ' button').forEach((x) => x.classList.toggle('on', x === b)); fn(b.dataset.v); });
  seg('#aion', (v) => { aiCfg.set({ on: v === '1' }); $('#aibody').hidden = v !== '1'; });
  seg('#aiweb', (v) => aiCfg.set({ web: v === '1' }));
  $('#aiprov').onchange = (e) => { aiCfg.set({ provider: e.target.value }); $('#aibasef').hidden = e.target.value !== 'custom'; };
  $('#aibase').onchange = (e) => aiCfg.set({ base: e.target.value.trim() });
  $('#aikey').onchange = (e) => aiCfg.set({ key: e.target.value.trim() });
  $('#aimodel').onchange = (e) => aiCfg.set({ model: e.target.value.trim() });
  $('#aimodelsel').onchange = (e) => { if (e.target.value) { $('#aimodel').value = e.target.value; aiCfg.set({ model: e.target.value }); } };
  $('#aiclear').onclick = () => { aiCfg.set({ key: '' }); $('#aikey').value = ''; toast('Chiave cancellata'); };
  $('#aiload').onclick = async () => {
    const st = $('#aist'); st.textContent = 'Carico i modelli gratuiti…';
    const r = await listFreeModels();
    if (!r.ok) { st.textContent = 'Impossibile caricare l’elenco: ' + r.error; return; }
    $('#aimodelsel').innerHTML = `<option value="">Scegli (${r.models.length} gratuiti)</option><option value="openrouter/free">openrouter/free — scelta automatica</option>${r.models.slice(0, 60).map((m) => `<option value="${esc(m.id)}">${esc(m.name)}${m.open ? ' · open' : ''}${m.ctx ? ' · ' + Math.round(m.ctx / 1000) + 'k' : ''}</option>`).join('')}`;
    st.textContent = `${r.models.length} modelli gratuiti trovati: i primi sono i più grandi tra quelli open source. Scegline uno e prova la connessione.`;
  };
  $('#aitest').onclick = async () => {
    aiCfg.set({ key: $('#aikey').value.trim(), model: $('#aimodel').value.trim(), base: $('#aibase').value.trim(), on: true });
    const st = $('#aist'); st.textContent = 'Provo la connessione…';
    const r = await chat([{ role: 'system', content: 'Rispondi in una riga.' }, { role: 'user', content: 'Scrivi soltanto: pronto' }], { maxTokens: 20, timeout: 45000 });
    st.textContent = r.ok ? `Funziona: modello “${String(r.model).slice(0, 40)}”.` : `Non funziona: ${r.error}${r.detail ? ' (' + r.detail + ')' : ''}`;
  };
}
