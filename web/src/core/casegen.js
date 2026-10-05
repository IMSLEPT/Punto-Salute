// Generatore di casi clinici didattici a partire dalle schede dell'app (patologie, procedure, farmaci).
// Ogni opzione errata proviene da un'altra scheda e viene scartata se il suo contenuto compare nella scheda del caso
// (così non esistono risposte "quasi giuste"). Il caso e' fittizio e riproducibile dal seme.
import { ALL, BY_ID, flatText } from './data.js';
import { norm } from './dom.js';
import { plain } from './text.js';
import { rng } from '../kit/util.js';
import { digest, gist, ideas, bare, friendlyLabel } from '../kit/digest.js';

const TYPE_OK = ['patho', 'proc', 'drug'];
const NEED = { patho: [['sintomi', 'segni'], ['esami'], ['assist', 'monit'], ['compl', 'monit', 'edu']], proc: [['prep', 'ctr'], ['mat'], ['tec'], ['err', 'compl', 'mon']], drug: [['ind'], ['av'], ['inf', 'mon'], ['edu', 'prec']] };

const words = (s) => norm(s).split(' ').filter((w) => w.length >= 5);
const flatCache = new Map();
const flatOf = (e) => { let f = flatCache.get(e.id); if (!f) { f = new Set(words(plain(flatText(e)))); flatCache.set(e.id, f); } return f; };

const digestCache = new Map();
const digestOf = (e) => { let d = digestCache.get(e.id); if (!d) { d = digest(e); digestCache.set(e.id, d); } return d; };
function sectionIdeas(e, keys, maxLen = 110) {
  for (const k of keys) {
    const sec = digestOf(e).sections.find((s) => s.k === k);
    if (sec) { const out = ideas(sec.items, maxLen); if (out.length) return { k, list: out }; }
  }
  return null;
}
const eligible = (e) => TYPE_OK.includes(e.type) && NEED[e.type].every((keys) => !!sectionIdeas(e, keys));

/** Il testo "d" contraddice il caso solo se non e' gia' contenuto nella scheda e. */
function foreign(d, e) {
  // ogni voce (separata da ;) deve essere estranea alla scheda: nessun frammento "quasi giusto"
  for (const part of String(d).split(/;\s*/)) {
    const w = words(part);
    if (!w.length) continue;
    const f = flatOf(e);
    const inside = w.filter((x) => f.has(x)).length;
    if (inside / w.length >= 0.26) return false;
  }
  return words(d).length > 0;
}
const overlap = (a, b) => { const A = new Set(words(a)), B = new Set(words(b)); if (!A.size || !B.size) return 0; let n = 0; for (const x of A) if (B.has(x)) n++; return n / Math.min(A.size, B.size); };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const trim = (s, n = 150) => (s.length > n ? gist(s, n) : s);

function mkStep(R, q, correct, fbOk, distractors) {
  // distractors: [{text, fb}] gia' filtrati; ne servono 3
  if (distractors.length < 3) return null;
  const opts = [[cap(trim(correct)), true, fbOk], ...distractors.slice(0, 3).map((d) => [cap(trim(d.text)), false, d.fb])];
  const texts = new Set(opts.map((o) => norm(o[0])));
  if (texts.size < 4) return null;
  return { q, opts };
}

function pickDistractors(R, E, others, keys, fbFn, take = 3, joinN = 1) {
  const pool = R.shuffle(others);
  const out = [];
  for (const o of pool) {
    const s = sectionIdeas(o, keys);
    if (!s) continue;
    const text = R.shuffle(s.list).slice(0, joinN).join('; ');
    if (!foreign(text, E)) continue;
    if (out.some((x) => overlap(x.text, text) > 0.5)) continue;
    out.push({ text, fb: fbFn(o, text) });
    if (out.length >= take) break;
  }
  return out;
}

const SPEC = (e) => e.cat || (TYPES_LABEL[e.type] || 'Medicina');
const TYPES_LABEL = { patho: 'Patologia', proc: 'Procedura', drug: 'Farmacologia' };

function buildPatho(E, R) {
  const others = ALL.filter((x) => x.type === 'patho' && x.id !== E.id && eligible(x));
  const sym = sectionIdeas(E, ['sintomi', 'segni'], 44);
  const sig = sectionIdeas(E, ['segni', 'sintomi'], 44);
  const bad = /qsofa|news2|score|punteggio|:|^gravit|^fattori|^anzian/i;
  const symptoms = R.shuffle(sym.list.filter((x) => x.length < 70 && !bad.test(x))).slice(0, 3);
  const signs = R.shuffle(sig.list.filter((x) => x.length < 70 && !symptoms.includes(x) && !bad.test(x))).slice(0, 3);
  const cause = sectionIdeas(E, ['cause']);
  const risk = cause ? R.shuffle(cause.list.filter((x) => x.length < 70 && x.length > 8 && !/:|^fattori/i.test(x)))[0] : null;
  const age = 38 + R.int(50);
  const who = R.int(2) ? `Una donna di ${age} anni` : `Un uomo di ${age} anni`;
  const names = [E.title, ...(E.aliases || [])].map(norm).filter((n) => n.length >= 4);
  const clean = (s) => (names.some((n) => norm(s).includes(n)) ? null : s);
  const sy = symptoms.map(clean).filter(Boolean), sg = signs.map(clean).filter(Boolean);
  if (!sy.length && !sg.length) return null;
  const lc = (s) => s.charAt(0).toLowerCase() + s.slice(1);
  let intro = `${who}`;
  if (risk && !names.some((n) => norm(risk).includes(n))) intro += `, con possibile fattore di rischio: ${lc(risk)}`;
  intro += `. ${sy.length ? 'Riferisce: ' + sy.map(lc).join('; ') + '.' : ''} ${sg.length ? 'All’osservazione: ' + sg.map(lc).join('; ') + '.' : ''}`.replace(/\s+/g, ' ');
  const steps = [];
  const first = (E.summary ? bare(E.summary) : '');
  // 1) quadro clinico
  const dis = [];
  for (const o of R.shuffle(others)) {
    if (o.cat && o.cat === E.cat && dis.length < 2 || !o.cat || o.cat !== E.cat || dis.length >= 2) {
      const f = sectionIdeas(o, ['sintomi', 'segni']);
      if (!f) continue;
      const mine = [...sy, ...sg].join(' ');
      if (overlap(mine, f.list.join(' ')) > 0.3) continue;
      if (dis.some((d) => d.id === o.id)) continue;
      dis.push({ id: o.id, text: o.title, fb: `${o.title}: ${gist(bare(o.summary || ''), 120)} I dati descritti non sono i più coerenti con questo quadro.` });
      if (dis.length === 3) break;
    }
  }
  const s1 = mkStep(R, 'Quale quadro clinico è più coerente con questi dati?', E.title, `${E.title}: ${gist(first, 150)} I segni e i sintomi descritti sono tipici di questo quadro.`, dis);
  if (!s1) return null;
  steps.push(s1);
  // 2) esami
  const ex = sectionIdeas(E, ['esami']);
  const exCorrect = ex.list.slice(0, 3).join('; ');
  const s2 = mkStep(R, `Se il sospetto è ${E.title}, quali accertamenti sono più pertinenti?`, exCorrect, 'Sono gli accertamenti indicati per questo quadro nella scheda di riferimento.', pickDistractors(R, E, others, ['esami'], (o) => `Sono accertamenti tipici di ${o.title}, non del quadro sospettato.`, 3, 3));
  if (s2) steps.push(s2);
  // 3) assistenza
  const as = sectionIdeas(E, ['assist', 'monit']);
  const asCorrect = R.shuffle(as.list.filter((x) => x.length > 12)).slice(0, 2).join('; ') || as.list[0];
  const s3 = mkStep(R, 'Quale intervento infermieristico è coerente con questo quadro?', asCorrect, 'È coerente con l’assistenza indicata nella scheda di riferimento.', pickDistractors(R, E, others, [as.k === 'assist' ? 'assist' : 'monit'], (o) => `È un intervento tipico dell’assistenza in ${o.title}, non specifico per questo quadro.`, 3, 2));
  if (s3) steps.push(s3);
  // 4) complicanze / monitoraggio / educazione
  const cp = sectionIdeas(E, ['compl', 'monit', 'edu']);
  if (cp) {
    const lab = cp.k === 'compl' ? 'Quali complicanze vanno tenute presenti e monitorate?' : cp.k === 'monit' ? 'Cosa va monitorato con più attenzione?' : 'Cosa è importante spiegare alla persona?';
    const s4 = mkStep(R, lab, cp.list.slice(0, 3).join('; '), 'È quanto indicato nella scheda di riferimento.', pickDistractors(R, E, others, [cp.k], (o) => `Riguarda soprattutto ${o.title}, non questo quadro.`, 3, 3));
    if (s4) steps.push(s4);
  }
  if (steps.length < 3) return null;
  const title = `Caso: ${(sy[0] || sg[0]).slice(0, 48)}`.replace(/[.;]$/, '');
  return { title, spec: SPEC(E), intro, steps, outro: `Il caso era costruito sulla scheda “${E.title}”: ${gist(first, 170)} Le decisioni cliniche reali seguono linee guida e protocolli della struttura.` };
}

function buildProc(E, R) {
  const others = ALL.filter((x) => x.type === 'proc' && x.id !== E.id && eligible(x));
  const steps = [];
  const intro = `Devi eseguire la procedura “${E.title}”. ${E.summary ? bare(E.summary) : ''} Prima di iniziare ripassi mentalmente cosa serve e a cosa fare attenzione.`;
  const prep = sectionIdeas(E, ['prep', 'ctr']);
  const s1 = mkStep(R, 'Cosa è corretto preparare o verificare prima di iniziare?', R.shuffle(prep.list).slice(0, 2).join('; '), 'È coerente con la preparazione indicata nella scheda della procedura.', pickDistractors(R, E, others, [prep.k], (o) => `È una verifica tipica di “${o.title}”, non di questa procedura.`, 3, 2));
  if (s1) steps.push(s1);
  const mat = sectionIdeas(E, ['mat']);
  const s2 = mkStep(R, 'Quale materiale serve per questa procedura?', mat.list.slice(0, 3).join('; '), 'È il materiale indicato nella scheda.', pickDistractors(R, E, others, ['mat'], (o) => `È il materiale di “${o.title}”, non di questa procedura.`, 3, 3));
  if (s2) steps.push(s2);
  const tec = sectionIdeas(E, ['tec']);
  const errs = others.map((o) => sectionIdeas(o, ['err'])).filter(Boolean);
  const dErr = [];
  for (const o of R.shuffle(others)) { const s = sectionIdeas(o, ['err']); if (!s) continue; const t = R.pick(s.list); if (foreign(t, E) && !dErr.some((x) => overlap(x.text, t) > 0.5)) dErr.push({ text: t, fb: 'È descritto come errore da evitare nella scheda di un’altra procedura: non è una buona pratica.' }); if (dErr.length >= 3) break; }
  const tecItem = R.pick(tec.list.filter((x) => x.length > 20)) || tec.list[0];
  const s3 = mkStep(R, 'Quale di queste azioni è corretta durante la procedura?', tecItem, 'È un passaggio indicato nella tecnica della scheda.', dErr);
  if (s3) steps.push(s3);
  const cp = sectionIdeas(E, ['err', 'compl', 'mon']);
  const lab = cp.k === 'err' ? 'Quale errore è tipico di questa procedura e va evitato?' : cp.k === 'compl' ? 'Quale complicanza va tenuta presente?' : 'Cosa va controllato durante e dopo?';
  const s4 = mkStep(R, lab, R.shuffle(cp.list).slice(0, 2).join('; '), 'È quanto indicato nella scheda di riferimento.', pickDistractors(R, E, others, [cp.k], (o) => `Riguarda “${o.title}”, non questa procedura.`, 3, 2));
  if (s4) steps.push(s4);
  if (steps.length < 3) return null;
  return { title: `Caso pratico: ${E.title}`, spec: SPEC(E), intro, steps, outro: `Il caso era costruito sulla scheda “${E.title}”. Le procedure reali seguono il protocollo e le istruzioni d’uso in dotazione nella tua struttura.` };
}

function buildDrug(E, R) {
  const others = ALL.filter((x) => x.type === 'drug' && x.id !== E.id && eligible(x));
  const ex = sectionIdeas(E, ['esempi']);
  const intro = `Alla persona assistita viene prescritto un farmaco della classe “${E.title}”${ex ? ` (esempi: ${ex.list.slice(0, 1).join('').slice(0, 90)})` : ''}. Non vengono riportate dosi: sono nella prescrizione e nel RCP.`;
  const steps = [];
  const ind = sectionIdeas(E, ['ind']);
  const s1 = mkStep(R, 'A cosa serve, in generale, questa classe di farmaci?', ind.list.slice(0, 2).join('; '), 'È l’indicazione riportata nella scheda.', pickDistractors(R, E, others, ['ind'], (o) => `È l’uso tipico di “${o.title}”.`, 3, 2));
  if (s1) steps.push(s1);
  const av = sectionIdeas(E, ['av']);
  const s2 = mkStep(R, 'Quali effetti indesiderati vanno tenuti presenti?', av.list.slice(0, 3).join('; '), 'Sono gli effetti indesiderati riportati nella scheda.', pickDistractors(R, E, others, ['av'], (o) => `Sono effetti tipici di “${o.title}”, non di questa classe.`, 3, 3));
  if (s2) steps.push(s2);
  const inf = sectionIdeas(E, ['inf', 'mon']);
  const s3 = mkStep(R, 'Cosa fa l’infermiere con questo farmaco?', inf.list.slice(0, 2).join('; '), 'È coerente con l’assistenza indicata nella scheda.', pickDistractors(R, E, others, [inf.k], (o) => `È un’attenzione tipica di “${o.title}”.`, 3, 2));
  if (s3) steps.push(s3);
  const ed = sectionIdeas(E, ['edu', 'prec']);
  const s4 = mkStep(R, ed.k === 'edu' ? 'Cosa è importante spiegare alla persona?' : 'Quali precauzioni vanno considerate?', ed.list.slice(0, 2).join('; '), 'È quanto indicato nella scheda.', pickDistractors(R, E, others, [ed.k], (o) => `Riguarda “${o.title}”, non questa classe.`, 3, 2));
  if (s4) steps.push(s4);
  if (steps.length < 3) return null;
  return { title: `Caso: terapia con ${E.title}`, spec: 'Farmacologia', intro, steps, outro: `Il caso era costruito sulla scheda “${E.title}” (senza posologie). Dosi, diluizioni e compatibilità: prescrizione, RCP/AIFA e protocollo locale.` };
}

const BUILD = { patho: buildPatho, proc: buildProc, drug: buildDrug };

/** Candidati utilizzabili (con tutte le sezioni necessarie). */
let ELIG = null;
export function eligibleCards() { if (!ELIG) ELIG = ALL.filter(eligible); return ELIG; }

/** opts: {type: 'patho'|'proc'|'drug'|'auto', entity: id, seed}. Ritorna un caso completo o null. */
export function generateCase({ type = 'auto', entity = null, seed = Date.now() % 2147483647 } = {}) {
  const R = rng(seed);
  let pool = eligibleCards();
  if (entity && BY_ID.get(entity)) pool = pool.filter((e) => e.id === entity);
  else if (type !== 'auto') pool = pool.filter((e) => e.type === type);
  if (!pool.length) return null;
  const order = R.shuffle(pool);
  for (const E of order.slice(0, 25)) {
    const c = BUILD[E.type](E, R);
    if (c) return { ...c, id: `gen-${E.id}-${seed.toString(36)}`, gen: true, ent: E.id, seed, level: 'Generato', time: `${Math.max(3, c.steps.length)} min`, rel: [E.id, ...(E.rel || []).filter((r) => BY_ID.has(r)).slice(0, 4)], created: Date.now() };
  }
  return null;
}

// accesso di prova per i test automatici
if (typeof window !== 'undefined') window.__psCaseGen = { generateCase, eligibleCards };
