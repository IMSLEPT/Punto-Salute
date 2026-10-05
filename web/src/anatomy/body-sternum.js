// Sterno e cartilagini costali (assenti nel dataset reale): costruiti sulle estremita' anteriori delle coste reali.
import * as THREE from 'three';
import { tube, ellipsoid, merge, mirrorX } from './geo.js';

const NAMES = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];

function ribEnd(parts, name, side) {
  const p = parts.find((x) => x.base === name + '-rib' && x.side === side);
  if (!p) return null;
  const pos = p.geo.attributes.position;
  let best = -1e9, bi = 0;
  for (let i = 0; i < pos.count; i++) { const z = pos.getZ(i) + 0.15 * (0.12 - Math.abs(pos.getX(i))); if (z > best) { best = z; bi = i; } }
  return new THREE.Vector3(pos.getX(bi), pos.getY(bi), pos.getZ(bi));
}

export function buildSternum(add, parts) {
  const L = NAMES.map((n) => ribEnd(parts, n, 1)), R = NAMES.map((n) => ribEnd(parts, n, -1));
  if (L.some((v) => !v) || R.some((v) => !v)) return;
  const zs = (L[3].z + R[3].z) / 2 + 0.014;
  const yTop = (L[0].y + R[0].y) / 2 + 0.02, yBot = (L[6].y + R[6].y) / 2 - 0.045;
  const yc = (yTop + yBot) / 2;
  add('sterno', ['scheletro'], merge([
    ellipsoid(0.034, 0.024, 0.0085, { at: [0, yTop - 0.02, zs + 0.002], seg: 20, hseg: 12 }),
    ellipsoid(0.023, (yTop - yBot) * 0.36, 0.0075, { at: [0, yc - 0.03, zs], seg: 20, hseg: 16 }),
    tube([[0, yBot + 0.03, zs - 0.002], [0, yBot, zs - 0.006], [0, yBot - 0.025, zs - 0.012]], [0.008, 0.005, 0.003], { radial: 8 }),
  ]), { color: '#f1e7d0', roughness: 0.5, real: true });
  const geos = [];
  const cart = (a) => {
    for (let i = 0; i < 7; i++) {
      const yS = yTop - 0.012 - i * ((yTop - yBot - 0.05) / 6);
      geos.push(tube([a[i], new THREE.Vector3((a[i].x * 0.4), (a[i].y + yS) / 2 + 0.004, (a[i].z + zs) / 2 + 0.006), new THREE.Vector3(Math.sign(a[i].x) * 0.021, yS, zs)], 0.0052, { radial: 8, segs: 8 }));
    }
    for (let i = 7; i < 10; i++) geos.push(tube([a[i], new THREE.Vector3((a[i].x + a[i - 1].x) / 2 * 0.95, (a[i].y + a[i - 1].y) / 2 + 0.006, (a[i].z + a[i - 1].z) / 2 + 0.004), a[i - 1]], 0.0048, { radial: 8, segs: 8 }));
  };
  cart(L); cart(R);
  add('coste', ['scheletro'], merge(geos), { color: '#d9e3df', roughness: 0.55, real: true, matKey: 'cart' });
}
