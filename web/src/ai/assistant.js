// Assistente di Punto Salute: motore "a fonti" (funziona offline, risponde solo con il contenuto delle schede) con azioni nell'app,
// domande di approfondimento e, se attivati dall'utente, ricerca sul web e un modello AI open source che riformula le fonti.
import { search } from '../core/search.js';
import { ALL, BY_ID, get, neighbors, sourceList } from '../core/data.js';
import { TYPES, MODULES } from '../core/types.js';
import { LAYOUTS, DEFAULT_SOURCES } from '../core/schemas.js';
import { block, rt, routeFor, plain } from '../core/text.js';
import { norm, esc } from '../core/dom.js';
import { favs, notes, recents, store } from '../core/store.js';
import { friendlyLabel } from '../kit/digest.js';
import { aiCfg, chat, SYSTEM_PROMPT, stripDoses, splitFollowups } from './llm.js';
import { searchWeb } from './websearch.js';

// ---------------------------------------------------------------- lessico
const STOP = new Set(('il lo la i gli le un uno una di a da in con su per tra fra e o ma che chi cosa come quando dove perche quale quali quanto quanti quanta quante ' +
  'è sono ha hanno si mi ti ci vi del dello della dei degli delle al allo alla ai agli alle dal dallo dalla dai dagli dalle nel nello nella nei negli nelle sul sullo sulla sui sugli sulle ' +
  'mio mia tuo tua suo sua non piu anche poi se dimmi parlami spiegami spiega raccontami voglio vorrei sapere dire puoi potresti fammi fai fare faccio devo deve devi fa questo questa quello quella ' +
  'ancora allora quindi dopo prima sempre mai molto poco tutto tutti ogni altro altra essere avere stato ed ad cioe vs differenza differenze confronto confrontare riassunto riassumi riassumere schema mappa concettuale quiz ' +
  'apri vai mostra mostrami portami cerca trova online web internet pubmed wikipedia aggiungi salva nota preferiti calcola infermiere infermieri infermieristica infermieristico ruolo assistenza paziente pazienti persona persone ' +
  'sintomi sintomo segni segno cause causa esami esame diagnosi trattamento terapia cura curare complicanze complicanza farmaci farmaco monitoraggio monitorare controllare controlli controllo materiale occorrente tecnica procedura passaggi passo ' +
  'educazione consigli indicazioni indicazione controindicazioni precauzioni errori valori normali riferimento posizione dove trova funzione funziona significa significato definizione dosi dose dosaggio').split(/\s+/));

const INTENTS = [
  { id: 'def', label: 'Che cos’è', re: /\b(che cos|cos e\b|cosa e\b|definizione|cosa significa|significato|cosa vuol dire|che significa|in cosa consiste|di cosa si tratta)/, keys: ['cos', 'def', 'conc'] },
  { id: 'sintomi', label: 'Sintomi', re: /\b(sintom|manifestazion|come si presenta|cosa prova|cosa riferisce)/, keys: ['sintomi', 'segni'] },
  { id: 'segni', label: 'Segni', re: /\b(segni|cosa si osserva|obiettiv)/, keys: ['segni', 'sintomi'] },
  { id: 'cause', label: 'Cause', re: /\b(caus|perche (succede|viene|insorge|si verifica)|fattori di rischio|eziolog|come si prende)/, keys: ['cause', 'fatt'] },
  { id: 'fisio', label: 'Cosa succede nel corpo', re: /\b(fisiopatolog|come funziona|meccanism|cosa succede nel corpo|come agisce)/, keys: ['fisio', 'mecc', 'funz', 'cl'] },
  { id: 'esami', label: 'Esami', re: /\b(esam|analisi|accertament|diagnostic)/, keys: ['esami', 'dx', 'rif'] },
  { id: 'dx', label: 'Come si riconosce', re: /\b(diagnos|come si riconosce|come si capisce)/, keys: ['dx', 'esami', 'segni'] },
  { id: 'tratt', label: 'Come si cura', re: /\b(cura|curare|terapi|trattament|come si tratta|gestione medica|cosa si fa)/, keys: ['tratt', 'farmaci', 'azioni'] },
  { id: 'farmaci', label: 'Farmaci', re: /\b(farmac|medicin|principi attivi)/, keys: ['farmaci', 'esempi'] },
  { id: 'assist', label: 'Cosa fa l’infermiere', re: /\b(infermier|assistenza|cosa devo fare|cosa faccio|ruolo|piano assistenziale|interventi)/, keys: ['assist', 'inf', 'int'] },
  { id: 'monit', label: 'Cosa controllare', re: /\b(monitor|controllare|controll|cosa valuto|parametri|osservare)/, keys: ['monit', 'mon', 'ctrl', 'valut'] },
  { id: 'compl', label: 'Complicanze', re: /\b(complicanz|rischi|cosa puo andare storto|effetti (collaterali|avversi|indesiderati)|effetti)/, keys: ['compl', 'av', 'all'] },
  { id: 'edu', label: 'Cosa spiegare alla persona', re: /\b(educazion|spiegare al paziente|spiegare alla persona|consigli|cosa dire al paziente)/, keys: ['edu'] },
  { id: 'pos', label: 'Dove si trova', re: /\b(dove si trova|dov e|posizione|localizz|dove si mette|dove si posiziona)/, keys: ['pos', 'rapp', 'dove'] },
  { id: 'tec', label: 'Come si esegue', re: /\b(come si (esegue|fa|effettua|posiziona|inserisce|prepara|mette|gestisce)|procedura|passaggi|tecnica|passo passo|step)/, keys: ['tec', 'prep', 'gest', 'mat'] },
  { id: 'mat', label: 'Cosa serve', re: /\b(materiale|occorrente|cosa serve per|cosa mi serve)/, keys: ['mat'] },
  { id: 'ind', label: 'Quando si usa', re: /\b(indicazion|quando si (usa|fa|esegue|utilizza)|a cosa serve|perche si usa|per cosa si usa)/, keys: ['ind', 'perche', 'quando'] },
  { id: 'ctr', label: 'Precauzioni', re: /\b(controindicazion|precauzion|attenzione a|quando evitare)/, keys: ['ctr', 'prec'] },
  { id: 'err', label: 'Errori da evitare', re: /\b(errori|sbagli|cosa evitare)/, keys: ['err'] },
  { id: 'doc', label: 'Cosa documentare', re: /\b(document|cartella|cosa scrivere)/, keys: ['doc'] },
  { id: 'rif', label: 'Valori di riferimento', re: /\b(valori|valore|range|normal[ei]|riferimento|intervall)/, keys: ['rif', 'val'] },
];
const CORE = { patho: ['fisio', 'sintomi', 'tratt', 'assist'], proc: ['ind', 'tec'], dev: ['cos', 'gest'], drug: ['cl', 'ind', 'inf'], exam: ['cos', 'rif'], anat: ['pos', 'funz'], emerg: ['azioni', 'alg'], tube: ['cod', 'ese'], ndx: ['def', 'int'], physio: ['conc', 'mecc'], term: ['def'], sign: ['def', 'inf'], schema: ['sch', 'pun'], care: ['cos'], scale: ['cos'], calc: ['cos'], spec: ['cos'] };
const SECTION_CHIPS = ['sintomi', 'segni', 'cause', 'esami', 'tratt', 'assist', 'monit', 'compl', 'edu', 'tec', 'mat', 'ind', 'ctr', 'err', 'av', 'inf', 'pos', 'funz', 'rif', 'fisio'];

const short = (t, n = 34) => { let x = String(t).split(' – ')[0].replace(/\s*\(.*?\)\s*/g, ' ').trim(); return x.length > n ? x.slice(0, n - 1).trim() + '…' : x; };
const labelOf = (e, k) => { const l = (e.layout || LAYOUTS[e.type] || []).find(([kk]) => kk === k); return friendlyLabel(e.type, k, l ? l[1] : k); };
const origLabel = (e, k) => { const l = (e.layout || LAYOUTS[e.type] || []).find(([kk]) => kk === k); return l ? l[1] : k; };
const hasSec = (e, k) => e.sections && e.sections[k] != null && e.sections[k] !== '';

// ---------------------------------------------------------------- riconoscimento dell'argomento
const MAIN_TYPES = new Set(['patho', 'proc', 'dev', 'drug', 'exam', 'anat', 'emerg', 'tube', 'ndx', 'physio', 'schema', 'scale', 'calc', 'care', 'spec']);
function contentTokens(qn) { return qn.split(' ').filter((t) => t && !STOP.has(t) && t.length > 1); }

const cpl = (a, b) => { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };
const near = (a, b) => a === b || (Math.min(a.length, b.length) >= 4 && cpl(a, b) >= Math.max(4, Math.min(a.length, b.length) - 2));
const haystack = new Map();
function mentions(e, tokens) {
  let hay = haystack.get(e.id);
  if (!hay) { hay = norm([e.title, ...(e.aliases || []), plain(e.summary || '')].join(' ')).split(' ').filter((w) => w.length > 2); haystack.set(e.id, hay); }
  return tokens.some((t) => t.length > 2 && hay.some((w) => near(t, w)));
}

export function findEntities(q, max = 3) {
  const qn = norm(q);
  const toks = contentTokens(qn);
  if (!toks.length) return [];
  const found = new Map();
  for (let size = Math.min(4, toks.length); size >= 1; size--) {
    for (let i = 0; i + size <= toks.length; i++) {
      const phrase = toks.slice(i, i + size).join(' ');
      const res = search(phrase, { limit: 4 });
      res.forEach((r, rank) => {
        const bonus = size * 25 + (MAIN_TYPES.has(r.e.type) ? 12 : 0) - rank * 3;
        const sc = r.score + bonus;
        const cur = found.get(r.e.id);
        if (!cur || sc > cur.score) found.set(r.e.id, { e: r.e, score: sc, size, pos: i, raw: r.score });
      });
    }
  }
  return [...found.values()].filter((x) => (x.raw >= 40 || x.size >= 2 && x.raw >= 24) && mentions(x.e, toks)).sort((a, b) => b.score - a.score).slice(0, max);
}

// ---------------------------------------------------------------- HTML dei messaggi
const sectionHtml = (e, k) => `<h4>${esc(labelOf(e, k))}</h4>${block(e.sections[k], { self: e.id, seen: new Set() })}`;
const callout = (kind, text) => `<div class="callout ${kind}"><div>${text}</div></div>`;

function pickKeys(e, keys, max = 3) {
  const out = [];
  for (const k of keys) if (hasSec(e, k) && !out.includes(k)) out.push(k);
  return out.slice(0, max);
}

function chipsFor(e, shown) {
  const chips = [];
  const avail = (e.layout || LAYOUTS[e.type] || []).map(([k]) => k).filter((k) => hasSec(e, k) && !shown.includes(k));
  const prio = SECTION_CHIPS.filter((k) => avail.includes(k));
  for (const k of [...prio, ...avail.filter((k) => !prio.includes(k))].slice(0, 3)) chips.push({ t: labelOf(e, k), ask: { ent: e.id, keys: [k] } });
  chips.push({ t: 'Riassumi', gen: `${e.id}:riassunto`, ic: 'file-text' }, { t: 'Mappa concettuale', gen: `${e.id}:mappa`, ic: 'network' }, { t: 'Schema', gen: `${e.id}:schema`, ic: 'layout-grid' }, { t: 'Infografica', gen: `${e.id}:infografica`, ic: 'image' });
  chips.push({ t: 'Quiz su questo', go: `/studio/quiz?q=${encodeURIComponent(e.title)}`, ic: 'circle-help' });
  chips.push({ t: 'Apri la scheda', go: routeFor(e), ic: 'file-text' });
  for (const r of neighbors(e.id).filter((x) => MAIN_TYPES.has(x.type)).slice(0, 2)) chips.push({ t: `Parlami di ${short(r.title)}`, ask: { ent: r.id, keys: [] } });
  return chips;
}

export function sourcesNote(e) {
  const keys = [...new Set([...(e.sources || []), ...(DEFAULT_SOURCES[e.type] || [])])];
  return sourceList({ sources: keys }).map((s) => s.t.split(' – ')[0].split(' (')[0]).slice(0, 4);
}

// ---------------------------------------------------------------- risposta "a fonti"
function answerEntity(e, keys, { q = '', notice = '' } = {}) {
  recents.push(e.id);
  const t = TYPES[e.type];
  const sel = keys && keys.length ? pickKeys(e, keys, 3) : [];
  const ctx = { self: e.id, seen: new Set() };
  let html = `<div class="ahead"><b>${esc(e.title)}</b><span class="xs muted"> · ${esc(t.label)}</span></div>`;
  html += notice;
  let shown = [];
  if (sel.length) {
    shown = sel;
    html += sel.map((k) => sectionHtml(e, k)).join('');
  } else {
    if (e.summary) html += `<p>${rt(e.summary, ctx)}</p>`;
    shown = pickKeys(e, CORE[e.type] || [], 2);
    html += shown.map((k) => sectionHtml(e, k)).join('');
    if (!e.summary && !shown.length) html += '<p class="muted">Questa scheda non ha ancora un testo riassuntivo: aprila per i dettagli.</p>';
  }
  const names = sourcesNote(e);
  return { html, shown, chips: chipsFor(e, shown), src: [e.id], srcNames: names, ent: e.id, keys: shown };
}

function resultsList(q) {
  const toks = contentTokens(norm(q));
  const res = search(q, { limit: 8 }).filter((r) => mentions(r.e, toks));
  return res.length ? res : null;
}

// ---------------------------------------------------------------- azioni nell'app
const MOD_ALIASES = [
  [/anatomia|3d|corpo umano/, '/anatomia'], [/calcolator|calcoli/, '/calcolatore'], [/glossario|terminologia|dizionario/, '/glossario'], [/preferiti|salvat/, '/preferiti'],
  [/\bnote\b|appunti/, '/note'], [/profilo|impostazioni|settings/, '/profilo'], [/schemi\b/, '/schemi'], [/procedure/, '/procedure'], [/patologie/, '/patologie'],
  [/farmacologia|farmaci\b/, '/farmaci'], [/emergenz/, '/emergenze'], [/scale\b|valutazione/, '/scale'], [/provette/, '/provette'], [/dispositivi|drenaggi/, '/dispositivi'],
  [/specialistiche/, '/specialistiche'], [/fonti/, '/fonti'], [/studio|modalita studio/, '/studio'], [/piano assistenziale|piani assistenziali/, '/assistenza/piano'], [/assistenza|nanda/, '/assistenza'], [/esame|simulazione/, '/studio/esame'], [/flashcard|carte/, '/studio/flash'],
];

function numIt(s) { return parseFloat(String(s).replace(',', '.')); }

function calcInfusion(qn) {
  const m = /(\d+(?:[.,]\d+)?)\s*(ml|cc)\b[^0-9]{0,40}?(\d+(?:[.,]\d+)?)\s*(ore|ora|h|minuti|min)\b/.exec(qn);
  if (!m) return null;
  const vol = numIt(m[1]);
  let hrs = numIt(m[3]);
  if (/^min/.test(m[4])) hrs /= 60;
  if (!(vol > 0 && hrs > 0) || vol > 20000 || hrs > 720) return null;
  const mlh = vol / hrs;
  const g = /(\d+)\s*(gtt|gocce)\s*(?:\/|per)?\s*ml/.exec(qn);
  const gpm = g ? Math.min(Math.max(parseInt(g[1], 10), 10), 60) : 20;
  const gtt = (mlh * gpm) / 60;
  const f = (x) => (Math.round(x * 10) / 10).toLocaleString('it-IT');
  return `<div class="ahead"><b>Velocità di infusione</b><span class="xs muted"> · calcolo con i tuoi numeri</span></div>
    <p><b>${f(mlh)} mL/h</b> e circa <b>${f(gtt)} gocce/min</b> (set da ${gpm} gocce/mL).</p>
    <h4>Passaggi</h4><ol class="steps"><li>Tempo in ore: ${f(hrs)} h.</li><li>mL/h = volume ÷ ore = ${f(vol)} ÷ ${f(hrs)} = <b>${f(mlh)} mL/h</b>.</li><li>gocce/min = (mL/h × gocce per mL) ÷ 60 = (${f(mlh)} × ${gpm}) ÷ 60 = <b>${f(gtt)}</b>.</li></ol>
    ${callout('warn', 'Calcolo didattico dai numeri che hai scritto: non include prescrizione, compatibilità o limiti di velocità del farmaco. Verifica sempre con la prescrizione, il protocollo e la pompa.')}`;
}

function calcBmi(qn) {
  const m = /(\d+(?:[.,]\d+)?)\s*kg\b[^0-9]{0,30}(\d+(?:[.,]\d+)?)\s*(cm|m)\b/.exec(qn);
  if (!m || !/\b(bmi|imc|indice di massa)/.test(qn)) return null;
  const kg = numIt(m[1]); let h = numIt(m[2]); if (m[3] === 'cm') h /= 100;
  if (!(kg > 2 && kg < 400 && h > 0.4 && h < 2.6)) return null;
  const bmi = kg / (h * h);
  const cat = bmi < 18.5 ? 'sottopeso' : bmi < 25 ? 'normopeso' : bmi < 30 ? 'sovrappeso' : 'obesità';
  const f = (x) => (Math.round(x * 10) / 10).toLocaleString('it-IT');
  return `<div class="ahead"><b>Indice di massa corporea</b></div><p><b>${f(bmi)} kg/m²</b> (${cat}, categorie dell’adulto secondo OMS).</p><p class="small muted">BMI = peso ÷ altezza² = ${f(kg)} ÷ (${f(h)} × ${f(h)}). Per bambini e anziani servono tabelle specifiche.</p>`;
}

function detectAction(raw, qn, ctx) {
  // riassunto / mappa / schema
  let m = /\b(riassum\w*|riassunto|sintesi)\b\s*(?:di|su|del|della|dello|dei|delle|sul|sulla)?\s*(.*)$/.exec(qn);
  const kinds = [['infografica', /\b(infograf\w*|immagine schematica|immagini schematiche|poster|locandina)\b/], ['riassunto', /\b(riassum\w*|riassunto|sintesi)\b/], ['mappa', /\bmappa( concettuale| mentale)?\b/], ['schema', /\bschema(tizza\w*)?\b/]];
  for (const [kind, re] of kinds) {
    if (re.test(qn) && /\b(fai|crea|genera|prepara|voglio|vorrei|dammi|riassumi|riassunto|mappa|schema|costruisci|disegna)\b/.test(qn)) {
      const rest = qn.replace(re, ' ');
      const ents = findEntities(rest, 1);
      const e = ents[0] ? ents[0].e : (ctx.entity ? get(ctx.entity) : null);
      if (e) return { type: 'gen', kind, e };
      return { type: 'ask-topic', kind };
    }
  }
  if (/\b(caso clinico|casi clinici|nuovo caso|genera (un )?caso|crea (un )?caso)\b/.test(qn)) {
    const rest = qn.replace(/\b(caso|casi|clinico|clinici|nuovo|genera|crea|fammi|fai|un|una|su|di|sul|sulla|per|voglio|vorrei|dammi)\b/g, ' ');
    const e = findEntities(rest, 1)[0];
    return { type: 'case', e: e ? e.e : null };
  }
  if (/\b(quiz|interrogami|domande? (su|di)|verifica(mi)?)\b/.test(qn)) {
    const rest = qn.replace(/\b(quiz|interrogami|domande?|verifica\w*|su|di|fammi|fai|un|una)\b/g, ' ');
    const e = findEntities(rest, 1)[0];
    return { type: 'quiz', e: e ? e.e : ctx.entity && !contentTokens(norm(rest)).length ? get(ctx.entity) : null };
  }
  if (/\b(aggiungi|salva|metti)\b.*\b(preferit|salvat)/.test(qn)) {
    const e = findEntities(qn.replace(/preferit\w*|salvat\w*|aggiungi|salva|metti/g, ' '), 1)[0];
    return { type: 'fav', e: e ? e.e : ctx.entity ? get(ctx.entity) : null };
  }
  m = /\b(?:scrivi|aggiungi|crea|salva|annota)\b.*\bnota\b\s*(?:su|per|a|sulla|sul)?\s*([^:]*):\s*(.+)$/.exec(raw.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''));
  if (m) {
    const text = raw.slice(raw.indexOf(':') + 1).trim();
    const e = findEntities(m[1], 1)[0];
    return { type: 'note', e: e ? e.e : ctx.entity ? get(ctx.entity) : null, text };
  }
  const inf = calcInfusion(qn); if (inf) return { type: 'calc', html: inf };
  const bmi = calcBmi(qn); if (bmi) return { type: 'calc', html: bmi };
  if (/\b(calcola|calcolatore|calcolo|dosaggio|dosi)\b/.test(qn) && !/\bml\b/.test(qn)) {
    const c = search(qn.replace(/\b(calcola|calcolatore|calcolo|fai|un|una|il|la)\b/g, ' '), { types: ['calc'], limit: 1 })[0];
    return { type: 'nav', path: c ? routeFor(c.e) : '/calcolatore', label: c ? c.e.title : 'Calcolatore' };
  }
  if (/\b(in 3d|nel 3d|modello 3d|vedi in 3d|mostra.*3d)\b/.test(qn)) {
    const e = findEntities(qn.replace(/\b3d\b/g, ' '), 3).map((x) => x.e).find((x) => x.type === 'anat' && x.mesh);
    if (e) return { type: 'nav', path: `/anatomia?s=${e.mesh}`, label: `${e.title} in 3D` };
    return { type: 'nav', path: '/anatomia', label: 'Anatomia 3D' };
  }
  if (/^(cerca|trova|ricerca)\b/.test(qn) && !/\b(web|internet|online|pubmed|wikipedia)\b/.test(qn)) return { type: 'search', q: raw.replace(/^\s*(cerca|trova|ricerca)\s+/i, '') };
  if (/\b(sul web|su internet|online|pubmed|wikipedia|in rete)\b/.test(qn) && /\b(cerca|trova|ricerca|cercami|guarda)\b/.test(qn)) {
    const topic = raw.replace(/\b(cerca|trova|ricerca|cercami|guarda)\b|\b(sul web|su internet|online|in rete|su pubmed|su wikipedia|pubmed|wikipedia)\b/gi, ' ').replace(/\s+/g, ' ').trim();
    return { type: 'web', q: topic || (ctx.entity ? get(ctx.entity).title : '') };
  }
  m = /^(?:apri|vai a|vai alla|vai al|mostrami|mostra|portami (?:a|alla|al|in)|aprimi)\s+(?:la |il |lo |l'|le |i |gli )?(.+)$/.exec(qn);
  if (m) {
    for (const [re, path] of MOD_ALIASES) if (re.test(m[1]) && !findEntities(m[1], 1).some((x) => x.raw >= 100)) return { type: 'nav', path, label: m[1] };
    const e = findEntities(m[1], 1)[0];
    if (e) return { type: 'nav', path: routeFor(e.e), label: e.e.title };
  }
  if (/\b(aiuto|cosa sai fare|cosa puoi fare|come funzioni|funzioni|help)\b/.test(qn) && contentTokens(qn).length <= 2) return { type: 'help' };
  if (/^(ciao|salve|buongiorno|buonasera|hey|ehi)\b/.test(qn) && qn.split(' ').length <= 3) return { type: 'hello' };
  if (/^(grazie|ok grazie|perfetto|va bene)\b/.test(qn) && qn.split(' ').length <= 4) return { type: 'thanks' };
  return null;
}

// ---------------------------------------------------------------- motore
const EMERG_RE = /\b(arresto cardiaco|non respira|non risponde|sta soffocando|soffoca|dolore toracico (forte|ora)|emorragia (massiva|grave)|convulsion\w* in corso|ha perso (i sensi|coscienza)|svenut\w+ ora|anafilass\w+ in corso)\b/;
const DOSE_RE = /\b(dose|dosi|dosaggio|dosaggi|posologia|quanti (mg|mcg|ml|compresse|gocce|fiale)|mg\s?\/\s?kg|diluizion\w*|velocita di infusione|quanto (ne )?(do|somministro|metto)|a che dose)\b/;

const HELP = `<div class="ahead"><b>Cosa posso fare</b></div>
<ul class="bul"><li><b>Rispondere</b> usando solo le schede dell’app (fonti e revisione indicate): “Quali sono i sintomi della sepsi?”, “Come si posiziona un SNG?”.</li>
<li><b>Fare confronti</b>: “Differenza tra CVC e PICC”.</li>
<li><b>Generare materiale di studio</b>: “Fai uno schema sul diabete”, “Mappa concettuale dell’ictus”, “Infografica sul diabete”, “Riassumi la BPCO” (poi scarichi PNG o PDF).</li>
<li><b>Casi clinici</b>: “Genera un caso clinico sulla sepsi” (poi puoi rifarlo o rivederlo).</li>
<li><b>Azioni</b>: “Apri il calcolatore”, “Mostra il cuore in 3D”, “Quiz sulla sepsi”, “Aggiungi la sepsi ai preferiti”, “Calcola 500 ml in 4 ore”.</li>
<li><b>Cercare sul web</b> (Wikipedia e PubMed): “Cerca online sepsi neonatale”.</li>
<li>Con l’<b>AI open source</b> attiva (Profilo → Assistente AI) riformula le fonti in modo più discorsivo e propone altre domande.</li></ul>
<p class="xs muted">Non riporto posologie e non faccio diagnosi: è uno strumento didattico.</p>`;

export const STARTERS = ['Quali sono i sintomi della sepsi?', 'Differenza tra CVC e PICC', 'Come si esegue un prelievo venoso?', 'Fai uno schema sul diabete', 'Cosa deve controllare l’infermiere con un drenaggio toracico?'];

function wrapMsg(html, extra = {}) { return { role: 'bot', html, chips: [], src: [], mode: 'app', ...extra }; }

function compareAnswer(a, b, keys) {
  const row = (e) => {
    const sel = keys.length ? pickKeys(e, keys, 2) : pickKeys(e, CORE[e.type] || [], 2);
    return `<div class="cmpcol"><b>${esc(e.title)}</b><p class="small">${rt(e.summary || '', { self: e.id, seen: new Set() })}</p>${sel.map((k) => sectionHtml(e, k)).join('')}</div>`;
  };
  return `<div class="ahead"><b>Confronto</b><span class="xs muted"> · ${esc(short(a.title, 40))} e ${esc(short(b.title, 40))}</span></div><div class="cmp">${row(a)}${row(b)}</div>`;
}

function webHtml(items, errors, q) {
  if (!items.length) return `<div class="ahead"><b>Ricerca sul web</b></div><p>${errors.length ? 'Non sono riuscito a interrogare il web: ' + esc(errors[0]) : 'Nessun risultato su Wikipedia e PubMed per “' + esc(q) + '”.'}</p>`;
  return `<div class="ahead"><b>Dal web</b><span class="xs muted"> · fonti esterne, non verificate dall’app</span></div>
    <div class="webres">${items.map((r) => `<div class="webitem"><a class="lk" data-ext="${esc(r.url)}">${esc(r.title)}</a><div class="xs muted">${esc(r.src)}</div><p class="small">${esc(r.text)}</p></div>`).join('')}</div>
    ${callout('warn', 'Contenuti esterni: controllane data e affidabilità prima di usarli. Per la pratica clinica valgono linee guida e protocolli della tua struttura.')}`;
}

const EN_HINT = { sepsi: 'sepsis', ictus: 'stroke', diabete: 'diabetes mellitus', infarto: 'myocardial infarction', polmonite: 'pneumonia', scompenso: 'heart failure', bpco: 'COPD', asma: 'asthma', ipertensione: 'hypertension', embolia: 'pulmonary embolism', 'ulcere da pressione': 'pressure ulcer', 'lesioni da pressione': 'pressure injury', delirium: 'delirium', dolore: 'pain', cadute: 'falls', 'catetere vescicale': 'urinary catheter', 'catetere venoso centrale': 'central venous catheter', picc: 'PICC', anafilassi: 'anaphylaxis', 'insufficienza renale': 'kidney failure', frattura: 'fracture' };
function englishQuery(q, nursing = true) {
  const n = norm(q);
  const hits = Object.entries(EN_HINT).filter(([k]) => n.includes(norm(k))).map(([, v]) => v);
  return hits.length ? hits.join(' ') + (nursing ? ' nursing' : '') : null;
}

export const webHtmlPublic = (items, errors, q) => webHtml(items, errors, q);

async function webLookup(q) {
  return searchWeb(q, { english: englishQuery(q) });
}

// ---------------------------------------------------------------- orchestrazione con AI facoltativa
function passagesFor(entities, keysList, q) {
  const S = [];
  const add = (e, label, text) => { const t = String(text).replace(/\s+/g, ' ').trim(); if (t) S.push({ n: S.length + 1, id: e.id, title: e.title, label, text: t.slice(0, 1100) }); };
  const flat = (x) => { const o = []; (function w(v) { if (v == null) return; if (typeof v === 'string') o.push(plain(v)); else if (Array.isArray(v)) v.forEach(w); else if (typeof v === 'object') { for (const [k, vv] of Object.entries(v)) { if (k === 'svg' || k === 'html') continue; if (k === 'table') { (vv.rows || []).forEach((r) => o.push(r.map(plain).join(' – '))); } else w(vv); } } })(x); return o.join('; '); };
  entities.forEach((e, i) => {
    add(e, 'Sintesi', e.summary ? plain(e.summary) : '');
    const keys = keysList[i] && keysList[i].length ? keysList[i] : (CORE[e.type] || []).concat(['assist', 'compl']);
    for (const k of pickKeys(e, keys, 4)) add(e, origLabel(e, k), flat(e.sections[k]));
  });
  if (S.length < 5) for (const r of search(q, { limit: 4 })) { if (entities.some((e) => e.id === r.e.id)) continue; add(r.e, 'Sintesi', plain(r.e.summary || '')); if (S.length >= 6) break; }
  return S;
}

function mdLite(text, srcMap, webMap) {
  const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[([SW])(\d+)\]/g, (_, k, n) => {
    if (k === 'S') { const x = srcMap[+n]; return x ? `<a class="cite" data-go="${esc(routeFor(BY_ID.get(x.id)))}">${n}</a>` : ''; }
    const w = webMap[+n]; return w ? `<a class="cite web" data-ext="${esc(w.url)}">W${n}</a>` : '';
  });
  const lines = String(text).split(/\n/);
  let html = '', list = null;
  const close = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const ln of lines) {
    const t = ln.trim();
    if (!t) { close(); continue; }
    let m;
    if ((m = /^(?:[-*•])\s+(.*)$/.exec(t))) { if (list !== 'ul') { close(); html += '<ul class="bul">'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = /^\d+[.)]\s+(.*)$/.exec(t))) { if (list !== 'ol') { close(); html += '<ol class="steps">'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = /^#{1,4}\s+(.*)$/.exec(t))) { close(); html += `<h4>${inline(m[1])}</h4>`; }
    else { close(); html += `<p>${inline(t)}</p>`; }
  }
  close();
  return html;
}

async function askAI(q, hist, S, web) {
  const srcBlock = S.map((s) => `[S${s.n}] ${s.title} — ${s.label}: ${s.text}`).join('\n');
  const webBlock = web.map((w, i) => `[W${i + 1}] ${w.src}: ${w.title}${w.text ? ' — ' + w.text.slice(0, 500) : ''}`).join('\n');
  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
  for (const h of hist.slice(-6)) messages.push({ role: h.role === 'user' ? 'user' : 'assistant', content: String(h.text || '').slice(0, 600) });
  messages.push({ role: 'user', content: `DOMANDA: ${q}\n\nFONTI DELL'APP:\n${srcBlock || '(nessuna scheda pertinente)'}${webBlock ? `\n\nFONTI WEB:\n${webBlock}` : ''}\n\nRispondi alla domanda usando solo queste fonti.` });
  const r = await chat(messages);
  if (!r.ok) return r;
  const sf = splitFollowups(r.text);
  const sd = stripDoses(sf.text);
  const srcMap = {}; S.forEach((s) => { srcMap[s.n] = s; });
  const webMap = {}; web.forEach((w, i) => { webMap[i + 1] = w; });
  return { ok: true, html: mdLite(sd.text, srcMap, webMap), follow: sf.follow, model: r.model, removed: sd.removed, plain: sd.text };
}

// ---------------------------------------------------------------- API principale
/** ctx = {entity, keys}; hist = ultimi messaggi [{role:'user'|'bot', text}]. Ritorna un messaggio del bot. */
export async function respond(question, ctx = {}, hist = [], opts = {}) {
  const raw = String(question || '').trim();
  const qn = norm(raw);
  if (!raw) return wrapMsg('<p>Scrivi una domanda.</p>');
  const act = detectAction(raw, qn, ctx);
  if (act) {
    switch (act.type) {
      case 'help': return wrapMsg(HELP, { chips: STARTERS.slice(0, 3).map((t) => ({ t, q: t })) });
      case 'hello': return wrapMsg('<p>Ciao! Chiedimi di una patologia, una procedura, un farmaco o un organo: rispondo con le schede dell’app e posso preparare riassunti, mappe e schemi.</p>', { chips: STARTERS.slice(0, 4).map((t) => ({ t, q: t })) });
      case 'thanks': return wrapMsg('<p>Prego! Se vuoi, posso fare un riassunto o uno schema dell’argomento.</p>', { chips: ctx.entity ? [{ t: 'Riassumi', gen: `${ctx.entity}:riassunto`, ic: 'file-text' }, { t: 'Schema', gen: `${ctx.entity}:schema`, ic: 'layout-grid' }] : [] });
      case 'gen': {
        const label = { riassunto: 'il riassunto', mappa: 'la mappa concettuale', schema: 'lo schema', infografica: 'l’infografica illustrata' }[act.kind];
        return wrapMsg(`<p>Preparo ${label} di <b>${esc(act.e.title)}</b>: lì potrai cambiare versione, scaricare PNG o PDF e condividerlo.</p>`, { nav: `/genera/${encodeURIComponent(act.e.id)}?k=${act.kind}`, ent: act.e.id, chips: [{ t: 'Apri', gen: `${act.e.id}:${act.kind}`, ic: 'sparkles' }] });
      }
      case 'ask-topic': return wrapMsg(`<p>Su quale argomento? Scrivi, per esempio, “${act.kind === 'mappa' ? 'mappa concettuale dell’ictus' : act.kind === 'schema' ? 'schema sul diabete' : 'riassumi la BPCO'}”.</p>`, { chips: ['sepsi', 'diabete mellito', 'ictus', 'BPCO'].map((t) => ({ t, q: `${act.kind === 'mappa' ? 'Mappa concettuale di' : act.kind === 'schema' ? 'Schema su' : 'Riassumi'} ${t}` })) });
      case 'case': return wrapMsg(`<p>Genero un caso clinico${act.e ? ` su <b>${esc(act.e.title)}</b>` : ' a sorpresa'}: lo potrai svolgere, rifare e rivedere.</p>`, { nav: `/studio/casi?new=${act.e ? encodeURIComponent(act.e.title) : '1'}`, chips: [{ t: 'Tutti i casi', go: '/studio/casi', ic: 'clipboard-check' }] });
      case 'quiz': return wrapMsg(`<p>Ti preparo un quiz${act.e ? ` su <b>${esc(act.e.title)}</b>` : ''}.</p>`, { nav: `/studio/quiz${act.e ? '?q=' + encodeURIComponent(act.e.title) : ''}` });
      case 'fav': {
        if (!act.e) return wrapMsg('<p>Quale scheda vuoi salvare nei preferiti?</p>');
        if (!favs.has(act.e.id)) favs.toggle(act.e.id);
        return wrapMsg(`<p><b>${esc(act.e.title)}</b> è nei preferiti.</p>`, { chips: [{ t: 'Apri preferiti', go: '/preferiti', ic: 'bookmark' }], ent: act.e.id });
      }
      case 'note': {
        if (!act.e || !act.text) return wrapMsg('<p>Dimmi la scheda e il testo, per esempio: “Scrivi una nota sulla sepsi: nel mio reparto la scheda sepsi è in cartella”.</p>');
        const prev = notes.get(act.e.id);
        notes.set(act.e.id, prev ? `${prev}\n${act.text}` : act.text);
        return wrapMsg(`<p>Ho aggiunto la nota a <b>${esc(act.e.title)}</b>. Resta solo su questo dispositivo.</p>`, { chips: [{ t: 'Apri la scheda', go: routeFor(act.e), ic: 'file-text' }], ent: act.e.id });
      }
      case 'calc': return wrapMsg(act.html, { chips: [{ t: 'Apri il calcolatore', go: '/calcolatore', ic: 'calculator' }] });
      case 'nav': return wrapMsg(`<p>Apro: <b>${esc(act.label)}</b>.</p>`, { nav: act.path });
      case 'search': return wrapMsg(`<p>Cerco “${esc(act.q)}” nell’app.</p>`, { search: act.q });
      case 'web': {
        if (!act.q) return wrapMsg('<p>Cosa devo cercare sul web?</p>');
        const w = await webLookup(act.q);
        return wrapMsg(webHtml(w.items, w.errors, act.q), { mode: 'web', web: w.items.map((x) => x.url) });
      }
      default: break;
    }
  }

  // ---- domanda di contenuto
  const emerg = EMERG_RE.test(qn) ? callout('danger', '<b>Se è un’emergenza reale</b>: chiama subito il 112 (o attiva il protocollo di emergenza della struttura) e inizia le manovre previste. Quanto segue è solo materiale di studio.') : '';
  const doseQ = DOSE_RE.test(qn);
  const intents = INTENTS.filter((i) => i.re.test(qn));
  let keys = [...new Set(intents.flatMap((i) => i.keys))];
  const ents = findEntities(raw, 3);
  const wantsCompare = /\b(differenz\w*|confront\w*|vs|meglio|oppure|rispetto a)\b/.test(qn);
  let main = ents[0] ? ents[0].e : null;
  let usedCtx = false;
  if (!main && ctx.entity && (intents.length || /^(e|ed|poi|invece)\b/.test(qn) || contentTokens(qn).length === 0)) { main = get(ctx.entity); usedCtx = !!main; }
  if (main && !intents.length && /^e\b/.test(qn) && ctx.keys && ctx.keys.length && ents[0]) keys = ctx.keys;
  const S = { entities: [], keys: [] };
  let msg;
  const doseNote = doseQ ? callout('warn', '<b>Posologie.</b> L’app non riporta dosi né diluizioni: usa il RCP/AIFA, la prescrizione e il protocollo della tua struttura. Per i calcoli (mL/h, gocce/min) c’è il calcolatore.') : '';

  if (main && wantsCompare && ents.length >= 2 && ents[1].e.id !== main.id) {
    const a = ents[0].e, b = ents[1].e;
    msg = wrapMsg(compareAnswer(a, b, keys) + doseNote + emerg, { src: [a.id, b.id], ent: a.id, keys, chips: [{ t: `Schema: ${short(a.title, 24)}`, gen: `${a.id}:schema`, ic: 'layout-grid' }, { t: `Schema: ${short(b.title, 24)}`, gen: `${b.id}:schema`, ic: 'layout-grid' }, { t: `Parlami di ${short(a.title, 24)}`, ask: { ent: a.id, keys: [] } }, { t: `Parlami di ${short(b.title, 24)}`, ask: { ent: b.id, keys: [] } }], srcNames: [...new Set([...sourcesNote(a), ...sourcesNote(b)])].slice(0, 5) });
    S.entities = [a, b]; S.keys = [keys, keys];
  } else if (main) {
    const a = answerEntity(main, keys, { q: raw, notice: emerg + doseNote });
    const extra = [];
    if (ents[1] && ents[1].score > ents[0].score * 0.85 && !usedCtx && ents[1].e.id !== main.id && MAIN_TYPES.has(ents[1].e.type)) extra.push({ t: `Forse cercavi: ${short(ents[1].e.title, 28)}`, ask: { ent: ents[1].e.id, keys } });
    msg = wrapMsg(a.html, { chips: [...extra, ...a.chips], src: a.src, srcNames: a.srcNames, ent: a.ent, keys: a.shown });
    S.entities = [main]; S.keys = [keys];
  } else {
    const res = resultsList(raw);
    if (res) {
      msg = wrapMsg(`<div class="ahead"><b>Ho trovato queste schede</b></div><p class="small muted">Scegli quella che ti interessa.</p>`, { chips: res.slice(0, 6).map((r) => ({ t: short(r.e.title, 40), ask: { ent: r.e.id, keys } })), src: res.slice(0, 3).map((r) => r.e.id) });
      S.entities = res.slice(0, 3).map((r) => r.e); S.keys = S.entities.map(() => keys);
    } else {
      msg = wrapMsg(`${emerg}<p>Non trovo nulla su questo nelle schede dell’app, quindi non rispondo a memoria. Posso cercare sul web (Wikipedia e PubMed) e mostrarti i risultati con i link.</p>${doseNote}`, { chips: [{ t: 'Cerca sul web', web: raw, ic: 'globe' }, { t: 'Cosa sai fare?', q: 'aiuto' }, ...STARTERS.slice(0, 2).map((t) => ({ t, q: t }))], notFound: true });
    }
  }

  // ---- ricerca web su richiesta dell'utente (impostazione) e AI facoltativa
  const cfg = aiCfg.get();
  const web = [];
  if (cfg.on && cfg.web && opts.web !== false && (msg.notFound || /\b(ultim\w+|recent\w*|linee guida|2025|2026|novita|aggiornament\w+)\b/.test(qn))) {
    const w = await webLookup(raw);
    web.push(...w.items.slice(0, 4));
    if (web.length) msg.web = web.map((x) => x.url);
  }
  if (aiCfg.ready() && !(msg.notFound && !web.length)) {
    const P = passagesFor(S.entities, S.keys, raw);
    const ai = await askAI(raw, hist, P, web);
    if (ai.ok) {
      const follow = ai.follow.map((t) => ({ t, q: t }));
      const used = P.filter((p) => ai.html.includes(`/e/${p.id}`) || true).map((p) => p.id);
      const srcIds = [...new Set(used)].slice(0, 5);
      return {
        role: 'bot', mode: 'ai', model: ai.model,
        html: `${emerg}${doseNote}${ai.html}${ai.removed ? callout('warn', 'Ho omesso un dosaggio comparso nella risposta: usa RCP/AIFA e protocollo locale.') : ''}${web.length ? webHtml(web, [], raw).replace(/<div class="ahead">[\s\S]*?<\/div>/, '<h4>Dal web</h4>') : ''}`,
        chips: [...follow, ...(msg.chips || []).filter((c) => !c.ask || !follow.length).slice(0, 6)], src: srcIds, srcNames: msg.srcNames || [], ent: msg.ent, keys: msg.keys,
        detail: msg.html,
      };
    }
    msg.aiError = ai.error;
    msg.html += callout('note', `L’assistente AI non ha risposto (${esc(ai.error)}): ti mostro le schede dell’app.`);
  } else if (web.length) {
    msg.html += webHtml(web, [], raw);
  }
  return msg;
}

/** Risposta a una scelta dei suggerimenti (ent+keys), senza passare dal riconoscimento del testo. */
export async function respondAsk({ ent, keys = [] }, label = '', ctx = {}, hist = [], opts = {}) {
  const e = get(ent);
  if (!e) return wrapMsg('<p>Scheda non trovata.</p>');
  const a = answerEntity(e, keys, {});
  const msg = wrapMsg(a.html, { chips: a.chips, src: a.src, srcNames: a.srcNames, ent: a.ent, keys: a.shown });
  if (aiCfg.ready() && opts.ai !== false) {
    const P = passagesFor([e], [keys], `${e.title} ${label}`);
    const ai = await askAI(`${label ? label + ' — ' : ''}${e.title}`, hist, P, []);
    if (ai.ok) return { role: 'bot', mode: 'ai', model: ai.model, html: ai.html, chips: [...ai.follow.map((t) => ({ t, q: t })), ...a.chips.slice(0, 6)], src: a.src, srcNames: a.srcNames, ent: a.ent, keys: a.shown, detail: a.html };
    msg.html += callout('note', `L’assistente AI non ha risposto (${esc(ai.error)}): ti mostro le schede dell’app.`);
  }
  return msg;
}

export const chatStore = {
  load() { const c = store.get('chat', null); return c && Array.isArray(c.msgs) ? c : { msgs: [], ctx: {} }; },
  save(c) { store.set('chat', { msgs: c.msgs.slice(-40), ctx: c.ctx }); },
  clear() { store.del('chat'); },
};
