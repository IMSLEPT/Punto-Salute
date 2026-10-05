// Rete: richieste HTTPS tramite il ponte nativo (sola uscita verso host pubblici). Fuori dall'app usa fetch (solo per prove).
let seq = 0;
const waits = new Map();
window.__psHttp = (id, ok, status, body) => {
  const w = waits.get(id);
  if (w) { waits.delete(id); w({ ok, status, body }); }
};

export const hasNet = () => !!(window.PuntoSalute && window.PuntoSalute.http) || !!window.__psFetchMock || typeof fetch === 'function';
export const nativeNet = () => !!(window.PuntoSalute && window.PuntoSalute.http);

/** {url, method, headers, body, timeout} -> Promise<{ok, status, body}> (mai rifiuta: gli errori arrivano in ok=false). */
export function httpReq({ url, method = 'GET', headers = {}, body = null, timeout = 30000 }) {
  return new Promise((resolve) => {
    if (!/^https:\/\//i.test(url)) { resolve({ ok: false, status: 0, body: 'Indirizzo non sicuro (serve https)' }); return; }
    const bridge = window.PuntoSalute && window.PuntoSalute.http;
    if (bridge) {
      const id = 'h' + (++seq);
      const timer = setTimeout(() => { if (waits.delete(id)) resolve({ ok: false, status: 0, body: 'Tempo scaduto: rete assente o lenta' }); }, timeout + 8000);
      waits.set(id, (r) => { clearTimeout(timer); resolve(r); });
      try { window.PuntoSalute.http(id, JSON.stringify({ url, method, headers, body: body == null ? '' : typeof body === 'string' ? body : JSON.stringify(body), timeout })); }
      catch (e) { clearTimeout(timer); waits.delete(id); resolve({ ok: false, status: 0, body: String((e && e.message) || e) }); }
      return;
    }
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), timeout);
    (window.__psFetchMock || fetch)(url, { method, headers, body: body == null ? undefined : typeof body === 'string' ? body : JSON.stringify(body), signal: ctl.signal })
      .then(async (r) => resolve({ ok: r.ok, status: r.status, body: await r.text() }))
      .catch((e) => resolve({ ok: false, status: 0, body: e && e.name === 'AbortError' ? 'Tempo scaduto' : 'Rete non disponibile' }))
      .finally(() => clearTimeout(timer));
  });
}

export async function httpJson(opts) {
  const r = await httpReq(opts);
  let json = null;
  try { json = JSON.parse(r.body); } catch { /* non JSON */ }
  return { ...r, json };
}
