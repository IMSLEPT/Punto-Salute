// Ricerca sul web con fonti aperte e autorevoli: Wikipedia (it) e PubMed (NCBI). Nessuna chiave richiesta.
import { httpJson } from './net.js';

const enc = encodeURIComponent;

async function wiki(q) {
  const s = await httpJson({ url: `https://it.wikipedia.org/w/api.php?action=query&list=search&srsearch=${enc(q)}&srlimit=3&format=json&utf8=1&origin=*`, timeout: 15000 });
  const hits = (s.json && s.json.query && s.json.query.search) || [];
  const out = [];
  for (const h of hits.slice(0, 2)) {
    const t = h.title;
    const r = await httpJson({ url: `https://it.wikipedia.org/api/rest_v1/page/summary/${enc(t.replace(/ /g, '_'))}`, timeout: 15000 });
    const ex = r.json && r.json.extract;
    if (ex) out.push({ src: 'Wikipedia (it)', title: t, text: ex.slice(0, 700), url: `https://it.wikipedia.org/wiki/${enc(t.replace(/ /g, '_'))}` });
  }
  return { items: out, error: s.ok ? null : s.body };
}

async function pubmed(q) {
  const e = await httpJson({ url: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=4&sort=relevance&term=${enc(q)}&tool=puntosalute`, timeout: 15000 });
  const ids = (e.json && e.json.esearchresult && e.json.esearchresult.idlist) || [];
  if (!ids.length) return { items: [], error: e.ok ? null : e.body };
  const r = await httpJson({ url: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(',')}&tool=puntosalute`, timeout: 15000 });
  const res = r.json && r.json.result;
  const items = [];
  if (res) for (const id of ids) {
    const x = res[id];
    if (x && x.title) items.push({ src: 'PubMed', title: String(x.title).replace(/\.$/, ''), text: `${x.source || ''}${x.pubdate ? ' · ' + x.pubdate : ''}`, url: `https://pubmed.ncbi.nlm.nih.gov/${id}/` });
  }
  return { items, error: r.ok ? null : r.body };
}

/** Cerca su Wikipedia e PubMed; non lancia mai: restituisce {items, errors}. */
export async function searchWeb(q, { english = null } = {}) {
  const items = [], errors = [];
  const [w, p] = await Promise.all([wiki(q).catch((e) => ({ items: [], error: String(e.message || e) })), pubmed(english || q).catch((e) => ({ items: [], error: String(e.message || e) }))]);
  items.push(...w.items, ...p.items);
  if (w.error) errors.push('Wikipedia: ' + w.error);
  if (p.error) errors.push('PubMed: ' + p.error);
  return { items, errors };
}
