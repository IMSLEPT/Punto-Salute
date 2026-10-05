// Backup e ripristino dei dati dell'app (preferiti, note, piani, casi, progressi, impostazioni, chat e, a scelta, chiavi API).
// Il file e' JSON; se contiene le chiavi API (o se l'utente imposta una password) viene cifrato con AES-256-GCM (chiave da PBKDF2-SHA256, 250.000 iterazioni).
import { store } from './store.js';

const ITER = 250000;
const FORMAT = 'punto-salute-backup';
const KEY_OK = /^[A-Za-z][A-Za-z0-9_-]{0,48}$/;
const SKIP = new Set(['lastError']);
const b64 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode(...u8.subarray(i, i + 8192)); return btoa(s); };
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function deriveKey(password, salt, usage) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, usage);
}

export function snapshot({ includeKeys = false } = {}) {
  const data = store.exportAll();
  for (const k of Object.keys(data)) if (SKIP.has(k)) delete data[k];
  if (data.ai) data.ai = includeKeys ? data.ai : { ...data.ai, key: '' };
  return data;
}

/** Crea il testo del backup. includeKeys richiede una password. */
export async function createBackup({ password = '', includeKeys = false, version = '' } = {}) {
  if (includeKeys && !password) throw new Error('Per includere le chiavi API serve una password');
  const body = { app: FORMAT, v: 1, created: new Date().toISOString(), appVersion: version, data: snapshot({ includeKeys }) };
  const plain = JSON.stringify(body);
  if (!password) return JSON.stringify({ format: FORMAT, v: 1, enc: 'none', payload: body });
  const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, ['encrypt']);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plain)));
  return JSON.stringify({ format: FORMAT, v: 1, enc: 'aes-256-gcm', kdf: 'pbkdf2-sha256', iter: ITER, salt: b64(salt), iv: b64(iv), ct: b64(ct) });
}

/** Legge un backup: ritorna {needsPassword} oppure {data, created, hasKeys}. Lancia Error con messaggio leggibile. */
export async function readBackup(text, password = '') {
  let env;
  try { env = JSON.parse(String(text).trim()); } catch { throw new Error('Il file non è un backup di Punto Salute'); }
  if (!env || env.format !== FORMAT) throw new Error('Il file non è un backup di Punto Salute');
  let body;
  if (env.enc === 'none') body = env.payload;
  else if (env.enc === 'aes-256-gcm') {
    if (!password) return { needsPassword: true };
    try {
      const key = await deriveKey(password, unb64(env.salt), ['decrypt']);
      const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(env.iv) }, key, unb64(env.ct));
      body = JSON.parse(new TextDecoder().decode(pt));
    } catch { throw new Error('Password errata o file danneggiato'); }
  } else throw new Error('Formato di backup non riconosciuto');
  if (!body || body.app !== FORMAT || typeof body.data !== 'object' || !body.data) throw new Error('Backup non valido');
  return { data: body.data, created: body.created, appVersion: body.appVersion, hasKeys: !!(body.data.ai && body.data.ai.key) };
}

/** Applica i dati (unisce e sovrascrive le chiavi presenti nel backup). Ritorna il numero di voci ripristinate. */
export function applyBackup(data) {
  let n = 0;
  for (const [k, v] of Object.entries(data || {})) {
    if (!KEY_OK.test(k) || SKIP.has(k) || v === undefined) continue;
    if (JSON.stringify(v).length > 4e6) continue;
    store.set(k, v); n++;
  }
  return n;
}
