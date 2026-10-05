// Trasformazione che porta le parti procedurali (organi, vasi, nervi, cute) nel sistema di riferimento
// dello scheletro reale: mappa a tratti in y (livelli vertebrali), larghezza/profondita' del tronco e arti sui segmenti articolari.
import * as THREE from 'three';
import { torso, spineZ, VERT } from './shape.js';
import { ARM, LEG } from './body-skin.js';

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);

function piecewise(nodes) {          // nodes: [[myY, realY]] ordinati per myY crescente
  return (y) => {
    if (y <= nodes[0][0]) return nodes[0][1] + (y - nodes[0][0]);
    const n = nodes.length;
    if (y >= nodes[n - 1][0]) return nodes[n - 1][1] + (y - nodes[n - 1][0]);
    for (let i = 0; i < n - 1; i++) {
      const [a0, b0] = nodes[i], [a1, b1] = nodes[i + 1];
      if (y >= a0 && y <= a1) return b0 + ((y - a0) / (a1 - a0)) * (b1 - b0);
    }
    return y;
  };
}

class LimbMap {
  constructor(mine, real) {
    this.m = mine.map(V); this.r = real.map(V);
    this.segs = [];
    for (let i = 0; i < this.m.length - 1; i++) {
      const dm = this.m[i + 1].clone().sub(this.m[i]);
      const dr = this.r[i + 1].clone().sub(this.r[i]);
      this.segs.push({ i, lenM: dm.length(), dm: dm.clone().normalize(), dr: dr.clone().normalize(), lenR: dr.length(), q: new THREE.Quaternion().setFromUnitVectors(dm.clone().normalize(), dr.clone().normalize()) });
    }
  }
  /** distanza dal tracciato "mio" e punto mappato */
  map(p, out) {
    let best = null;
    for (const s of this.segs) {
      const a = this.m[s.i];
      const t = ((p.x - a.x) * s.dm.x + (p.y - a.y) * s.dm.y + (p.z - a.z) * s.dm.z) / s.lenM;
      const tc = Math.min(1, Math.max(0, t));
      const ax = a.x + s.dm.x * s.lenM * tc, ay = a.y + s.dm.y * s.lenM * tc, az = a.z + s.dm.z * s.lenM * tc;
      const d = Math.hypot(p.x - ax, p.y - ay, p.z - az);
      if (!best || d < best.d) best = { d, s, t, tc, ax, ay, az };
    }
    const { s, t, tc, ax, ay, az } = best;
    const tt = (best.s.i === this.segs.length - 1 && t > 1) || (best.s.i === 0 && t < 0) ? t : tc; // estrapola alle estremita'
    const off = new THREE.Vector3(p.x - ax, p.y - ay, p.z - az).applyQuaternion(s.q);
    const ar = this.r[s.i].clone().addScaledVector(s.dr, s.lenR * tt);
    out.copy(ar).add(off);
    return best.d;
  }
}

export function buildFit(R) {
  // ---------------------------------------------------------------- punti di riferimento nel modello reale
  const by = (re, side = null) => R.filter((p) => re.test(p.base) && (side === null || p.side === side));
  const box = (list) => { const b = new THREE.Box3(); list.forEach((p) => b.union(p.box)); return b; };
  const cy = (re) => { const b = box(by(re)); return (b.min.y + b.max.y) / 2; };

  const realY = {
    sole: box(by(/phalanx|metatarsal|calcaneus/)).min.y,
    ankle: box(by(/^tibia$/, 1)).min.y + 0.025,
    knee: box(by(/^femur$/, 1)).min.y,
    sacrum: cy(/^sacrum$/),
    L5: cy(/fifth-lumbar/), L1: cy(/first-lumbar/), T12: cy(/twelfth-thoracic/), T1: cy(/first-thoracic/), C1: cy(/^atlas$/),
    top: box(by(/parietal|frontal-bone/)).max.y,
  };
  const fy = piecewise([[0, realY.sole], [0.085, realY.ankle], [0.495, realY.knee], [0.895, realY.sacrum], [0.985, realY.L5], [1.115, realY.L1], [1.145, realY.T12], [1.425, realY.T1], [1.525, realY.C1], [1.75, realY.top]]);

  // larghezza e profondita' del torace dalle coste reali
  const ribBox = box(by(/(^|-)(fifth|sixth|seventh)-rib$/));
  const chestHalf = Math.max(Math.abs(ribBox.min.x), Math.abs(ribBox.max.x));
  const sxChest = chestHalf / 0.155;
  const hipB = box(by(/^hip-bone$/));
  const pelvHalf = Math.max(Math.abs(hipB.min.x), Math.abs(hipB.max.x));
  const sxPelvis = pelvHalf / 0.165;
  // asse della colonna reale (z del centro corpo vertebrale) ai livelli noti
  const vz = (re, r) => box(by(re)).max.z - r;
  const zLevels = [
    [realY.sacrum, vz(/^sacrum$/, 0.03)], [realY.L5, vz(/fifth-lumbar/, 0.0245)], [realY.L1, vz(/first-lumbar/, 0.0245)], [realY.T12, vz(/twelfth-thoracic/, 0.02)],
    [cy(/sixth-thoracic/), vz(/sixth-thoracic/, 0.0185)], [realY.T1, vz(/first-thoracic/, 0.015)], [realY.C1, vz(/^atlas$/, 0.012)],
  ].sort((a, b) => a[0] - b[0]);
  const zSpine = (y) => {
    if (y <= zLevels[0][0]) return zLevels[0][1];
    for (let i = 0; i < zLevels.length - 1; i++) if (y <= zLevels[i + 1][0]) { const t = (y - zLevels[i][0]) / (zLevels[i + 1][0] - zLevels[i][0]); return zLevels[i][1] + t * (zLevels[i + 1][1] - zLevels[i][1]); }
    return zLevels[zLevels.length - 1][1];
  };
  const frontRealRib = box(by(/(^|-)(fourth|fifth|sixth)-rib$/)).max.z;
  const yMid = cy(/sixth-thoracic/);
  const depthReal = frontRealRib - zSpine(yMid);
  const depthMine = (torso(1.27).cz + torso(1.27).rz - 0.016) - spineZ(1.27);
  const sz = depthReal / depthMine;

  // articolazioni reali (lato sinistro x>0)
  const hum = box(by(/^humerus$/, 1));
  const rad = box(by(/^radius$/, 1));
  const midF = box(by(/^middle-phalanx-of-middle-finger$|distal-phalanx-of-middle-finger/, 1));
  const fem = box(by(/^femur$/, 1));
  const tib = box(by(/^tibia$/, 1));
  const cxz = (b, y) => [(b.min.x + b.max.x) / 2, y, (b.min.z + b.max.z) / 2];
  const realArm = [
    [hum.min.x + (hum.max.x - hum.min.x) * 0.3, hum.max.y - 0.025, (hum.min.z + hum.max.z) / 2],
    cxz(hum, hum.min.y + 0.01),
    cxz(rad, rad.min.y + 0.005),
    cxz(midF, midF.min.y),
  ];
  realArm[1][0] = (realArm[0][0] + realArm[2][0]) / 2 - 0.004;
  const realLeg = [
    [fem.min.x + (fem.max.x - fem.min.x) * 0.22, fem.max.y - 0.03, (fem.min.z + fem.max.z) / 2],
    cxz(fem, fem.min.y + 0.005),
    cxz(tib, tib.min.y + 0.02),
    [cxz(tib, 0)[0], realY.sole + 0.01, cxz(tib, 0)[2] + 0.07],
  ];
  const myArm = [ARM.pts[0], ARM.pts[2], ARM.pts[4], [ARM.hand[0] + 0.004, 0.70, ARM.hand[2]]];
  const myLeg = [LEG.pts[0], LEG.pts[2], LEG.pts[4], [0.095, 0.01, 0.05]];
  const armMap = new LimbMap(myArm, realArm);
  const legMap = new LimbMap(myLeg, realLeg);

  const info = { realY, chestHalf, sxChest, sxPelvis, sz, realArm, realLeg, zLevels: zLevels.map((z) => z[1]) };
  const tmp = new THREE.Vector3(), a = new THREE.Vector3(), l = new THREE.Vector3(), t = new THREE.Vector3();

  function torsoMap(p, out) {
    const y2 = fy(p.y);
    const sx = sxPelvis + (sxChest - sxPelvis) * sm(0.93, 1.12, p.y);
    const sxx = p.y > 1.46 ? 1 + (sx - 1) * (1 - sm(1.46, 1.58, p.y)) : sx;
    out.set(p.x * sxx, y2, zSpine(y2) + (p.z - spineZ(p.y)) * sz);
  }

  /** Applica la trasformazione ai vertici di una geometria (in place). */
  function apply(geo) {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const s = pos.getX(i) < 0 ? -1 : 1;
      tmp.set(Math.abs(pos.getX(i)), pos.getY(i), pos.getZ(i));
      torsoMap(tmp.set(pos.getX(i), pos.getY(i), pos.getZ(i)), t);   // t = mappa del tronco (coordinate con segno)
      tmp.set(Math.abs(pos.getX(i)), pos.getY(i), pos.getZ(i));
      // pesi di appartenenza agli arti
      const da = armMap.map(tmp, a);
      const dl = legMap.map(tmp, l);
      const wa = tmp.y < 1.46 ? 1 - sm(0.07, 0.125, da) : 0;
      const wl = tmp.y < 0.93 ? 1 - sm(0.095, 0.16, dl) : 0;
      let x = t.x, y = t.y, z = t.z;
      if (wa > 0) { x = x * (1 - wa) + a.x * s * wa; y = y * (1 - wa) + a.y * wa; z = z * (1 - wa) + a.z * wa; }
      if (wl > 0) { x = x * (1 - wl) + l.x * s * wl; y = y * (1 - wl) + l.y * wl; z = z * (1 - wl) + l.z * wl; }
      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    geo.computeBoundingBox(); geo.computeBoundingSphere();
    return geo;
  }

  return { apply, info, fy, zSpine, byBase: by, box };
}
