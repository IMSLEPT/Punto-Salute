// Riassunto in linguaggio semplice, orientato all'esame. Produce un documento a blocchi (anteprima HTML e PDF).
import { digest, easy, gist, keywords, sortByPriority, clean, bare } from './digest.js';
import { rng } from './util.js';

export const SUMMARY_STYLES = [
  { id: 'completo', name: 'Completo e semplice' },
  { id: 'breve', name: 'Breve (una pagina)' },
  { id: 'domande', name: 'Domande e risposte' },
  { id: 'ripasso', name: 'Ripasso veloce a punti' },
];

const Q = {
  patho: { sintomi: 'Quali sintomi fanno sospettare {t}?', segni: 'Quali segni si osservano in {t}?', cause: 'Quali sono le cause e i fattori di rischio di {t}?', fisio: 'Cosa succede nel corpo in {t}?', esami: 'Quali esami si usano per {t}?', dx: 'Come si arriva alla diagnosi di {t}?', tratt: 'Come si tratta {t}, in sintesi?', farmaci: 'Quali farmaci si usano in {t}?', assist: 'Qual è il ruolo dell’infermiere in {t}?', monit: 'Cosa va monitorato in {t}?', compl: 'Quali complicanze possono comparire in {t}?', edu: 'Cosa spiegheresti alla persona con {t}?' },
  proc: { ind: 'Quando si esegue: {t}?', ctr: 'Quando serve particolare attenzione: {t}?', mat: 'Quale materiale serve per: {t}?', prep: 'Come ci si prepara a: {t}?', tec: 'Quali sono i passaggi principali di: {t}?', mon: 'Cosa si controlla durante e dopo: {t}?', compl: 'Quali complicanze può avere: {t}?', doc: 'Cosa va scritto in cartella dopo: {t}?', err: 'Quali errori evitare in: {t}?' },
  dev: { cos: 'Cos’è {t}?', dove: 'Dove si posiziona {t}?', perche: 'A cosa serve {t}?', gest: 'Come si gestisce {t}?', ctrl: 'Cosa si controlla in {t}?', compl: 'Quali complicanze può dare {t}?', all: 'Quali sono i segnali di allarme di {t}?' },
  drug: { cl: 'A quale classe appartiene {t} e come agisce?', ind: 'Quando si usa {t}?', av: 'Quali effetti indesiderati può dare {t}?', prec: 'Quali precauzioni servono con {t}?', inf: 'Cosa fa l’infermiere con {t}?', mon: 'Cosa si monitora con {t}?', edu: 'Cosa spiegheresti alla persona che assume {t}?' },
  exam: { cos: 'Cos’è l’esame {t}?', rif: 'Quali sono i valori di riferimento di {t}?', aum: 'Cosa significa un valore alto di {t}?', dim: 'Cosa significa un valore basso di {t}?', prelievo: 'Come si prepara e si esegue il prelievo per {t}?', inf: 'Cosa fa l’infermiere per {t}?' },
  anat: { pos: 'Dove si trova: {t}?', rapp: 'Con quali strutture è in rapporto: {t}?', vasc: 'Quali vasi e nervi riguardano: {t}?', funz: 'A cosa serve: {t}?', fisio: 'Come funziona: {t}?', pat: 'Quali malattie principali riguardano: {t}?', inf: 'Cosa serve sapere in reparto su: {t}?' },
  emerg: { quando: 'Quando si applica: {t}?', valut: 'Cosa si valuta in: {t}?', azioni: 'Quali azioni si fanno in: {t}?', inf: 'Qual è il ruolo dell’infermiere in: {t}?', err: 'Quali errori evitare in: {t}?' },
};
function questionFor(d, s) {
  const tpl = Q[d.type] && Q[d.type][s.k];
  const t = d.title;
  if (tpl) return tpl.replace('{t}', t);
  return `Cosa ricordi su “${s.friendly}” riguardo a ${t}?`;
}

const asBullets = (items, max, len) => items.filter((i) => ['i', 's', 'r'].includes(i.k)).slice(0, max).map((i) => easy(i.t, len));

export function buildSummary(e, { style = 0, seed = 1 } = {}) {
  const d = digest(e);
  const R = rng(seed * 7919 + 13);
  const st = SUMMARY_STYLES[style % SUMMARY_STYLES.length].id;
  const secs = d.sections;
  const blocks = [];
  const lead = d.summaryRich || (secs[0] && secs[0].items[0] ? secs[0].items[0].t : '');
  if (lead) blocks.push({ t: 'lead', text: easy(lead, 260) });

  // punti da ricordare: avvisi/errori + prima idea delle sezioni piu' utili
  const key = [];
  for (const s of secs) for (const it of s.items) if (it.k === 'danger' || it.k === 'warn') key.push(easy(it.t, 170));
  for (const k of ['segni', 'sintomi', 'tratt', 'assist', 'inf', 'compl', 'all', 'err', 'azioni', 'ind', 'av']) {
    const s = secs.find((x) => x.k === k);
    if (s) { const it = s.items.find((x) => ['i', 's', 'r'].includes(x.k)); if (it) key.push(`${s.friendly}: ${gist(it.t, 120)}`); }
  }
  const keyPts = [...new Set(key)];
  const picked = (n) => (R(0) > 0.5 && keyPts.length > n ? R.shuffle(keyPts).slice(0, n) : keyPts.slice(0, n));
  const terms = keywords(d, st === 'breve' ? 4 : 8);

  const sectionBlocks = (maxItems, len, ordered = false) => {
    const list = ordered ? sortByPriority(secs) : secs;
    for (const s of list) {
      const items = asBullets(s.items, maxItems, len);
      const warns = s.items.filter((i) => i.k === 'warn' || i.k === 'danger' || i.k === 'note').slice(0, 2);
      if (!items.length && !warns.length) continue;
      blocks.push({ t: 'h2', text: s.friendly, icon: s.icon });
      const steps = s.items.some((i) => i.k === 's');
      if (items.length) blocks.push({ t: steps ? 'ol' : 'ul', items });
      for (const w of warns) blocks.push({ t: 'box', kind: w.k === 'note' ? 'tip' : 'warn', title: w.k === 'note' ? 'Nota' : 'Attenzione', items: [easy(w.t, 200)] });
    }
  };

  if (st === 'completo') {
    sectionBlocks(5, 190);
    if (terms.length) blocks.push({ t: 'terms', title: 'Parole chiave spiegate semplice', items: terms });
    if (keyPts.length) blocks.push({ t: 'box', kind: 'key', title: 'Da ricordare per l’esame', items: picked(6) });
    const qs = R.shuffle(secs.filter((s) => Q[d.type] && Q[d.type][s.k] || true)).slice(0, 4);
    blocks.push({ t: 'qa', title: 'Domande tipiche d’esame (prova a rispondere a voce)', items: [{ q: `Che cos’è: ${d.title}?`, a: easy(d.summaryRich, 200) }, ...qs.map((s) => ({ q: questionFor(d, s), a: asBullets(s.items, 3, 130).join(' • ') }))].filter((x) => x.a) });
  } else if (st === 'breve') {
    const top = sortByPriority(secs).slice(0, 6);
    blocks.push({ t: 'h2', text: 'L’essenziale', icon: 'sparkles' });
    blocks.push({ t: 'ul', items: top.map((s) => { const it = s.items.find((x) => ['i', 's', 'r'].includes(x.k)); return it ? `**${s.friendly}:** ${gist(it.t, 120)}` : null; }).filter(Boolean) });
    if (keyPts.length) blocks.push({ t: 'box', kind: 'key', title: 'Da ricordare', items: picked(4) });
    if (terms.length) blocks.push({ t: 'terms', title: 'Parole chiave', items: terms });
  } else if (st === 'domande') {
    blocks.push({ t: 'qa', title: 'Domande e risposte per l’esame', items: [{ q: `Che cos’è: ${d.title}?`, a: easy(d.summaryRich, 240) }, ...R.shuffle(secs).map((s) => ({ q: questionFor(d, s), a: asBullets(s.items, 4, 160).join(' • ') })).filter((x) => x.a)] });
    if (terms.length) blocks.push({ t: 'terms', title: 'Parole chiave', items: terms });
  } else {
    blocks.push({ t: 'h2', text: 'Ripasso a punti', icon: 'list' });
    for (const s of sortByPriority(secs)) {
      const items = s.items.filter((i) => ['i', 's', 'r'].includes(i.k)).slice(0, 4).map((i) => gist(i.t, 90));
      if (!items.length) continue;
      blocks.push({ t: 'h3', text: s.friendly });
      blocks.push({ t: 'ul', items });
    }
    if (keyPts.length) blocks.push({ t: 'box', kind: 'key', title: 'Da ricordare', items: picked(5) });
  }
  if (d.rel.length) blocks.push({ t: 'links', title: 'Argomenti collegati da ripassare', items: d.rel.slice(0, 10).map((x) => x.title) });
  return {
    kind: 'riassunto', id: d.id, title: d.title, subtitle: `${d.typeLabel}${d.cat ? ' · ' + d.cat : ''} — riassunto in parole semplici`,
    style: st, styleName: SUMMARY_STYLES[style % SUMMARY_STYLES.length].name, blocks,
    sources: d.sources, rev: d.rev, color: d.color,
    notice: 'Riassunto didattico generato dalle schede dell’app (fonti e revisione indicate): serve a studiare, non a decidere. Verifica sempre il protocollo della tua struttura e le fonti aggiornate.',
  };
}

/** Testo semplice del riassunto (per condivisione). */
export function summaryToText(doc) {
  const out = [doc.title.toUpperCase(), doc.subtitle, ''];
  for (const b of doc.blocks) {
    if (b.t === 'lead') out.push(bare(b.text), '');
    else if (b.t === 'h2' || b.t === 'h3') out.push('', b.text.toUpperCase());
    else if (b.t === 'ul' || b.t === 'ol') b.items.forEach((x, i) => out.push((b.t === 'ol' ? `${i + 1}. ` : '• ') + bare(x)));
    else if (b.t === 'box') { out.push('', `[${b.title}]`); b.items.forEach((x) => out.push('• ' + bare(x))); }
    else if (b.t === 'terms') { out.push('', b.title.toUpperCase()); b.items.forEach((x) => out.push(`• ${x.title}: ${bare(x.def)}`)); }
    else if (b.t === 'qa') { out.push('', b.title.toUpperCase()); b.items.forEach((x) => out.push(`D: ${x.q}`, `R: ${bare(x.a)}`, '')); }
    else if (b.t === 'links') out.push('', `${b.title}: ${b.items.join(', ')}`);
  }
  out.push('', 'Fonti: ' + doc.sources.join('; '), doc.notice);
  return out.join('\n');
}
