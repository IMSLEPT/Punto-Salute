// Primitive geometriche procedurali per il corpo umano stilizzato.
// Convenzione: y verso l'alto, z verso il davanti del paziente, x positivo = SINISTRA del paziente
// (visto di fronte, la sinistra del paziente appare a destra dell'osservatore).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const LEFT = 1;
export const RIGHT = -1;

const V3 = (a) => (a.isVector3 ? a : new THREE.Vector3(a[0], a[1], a[2]));

/** Interpolazione lineare tra campioni ordinati {y,...}. */
export function lerpProfile(profile, y, key) {
  const n = profile.length;
  if (y <= profile[0].y) return profile[0][key];
  if (y >= profile[n - 1].y) return profile[n - 1][key];
  for (let i = 0; i < n - 1; i++) {
    const a = profile[i], b = profile[i + 1];
    if (y >= a.y && y <= b.y) {
      const t = (y - a.y) / (b.y - a.y);
      const s = t * t * (3 - 2 * t); // smoothstep
      return a[key] + (b[key] - a[key]) * s;
    }
  }
  return profile[n - 1][key];
}

/** Loft di sezioni ellittiche: [{y,x,z,rx,rz}] dal basso verso l'alto. */
export function loft(sections, { seg = 28, capTop = true, capBottom = true } = {}) {
  const pos = [];
  const idx = [];
  const ring = seg + 1;
  sections.forEach((s) => {
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      pos.push((s.x || 0) + s.rx * Math.cos(a), s.y, (s.z || 0) + s.rz * Math.sin(a));
    }
  });
  for (let j = 0; j < sections.length - 1; j++) {
    for (let i = 0; i < seg; i++) {
      const a = j * ring + i, b = a + 1, c = a + ring, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  const addCap = (j, flip) => {
    const s = sections[j];
    const c = pos.length / 3;
    pos.push(s.x || 0, s.y, s.z || 0);
    for (let i = 0; i < seg; i++) {
      const a = j * ring + i, b = a + 1;
      if (flip) idx.push(c, b, a); else idx.push(c, a, b);
    }
  };
  if (capBottom) addCap(0, false);
  if (capTop) addCap(sections.length - 1, true);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/**
 * Tubo rastremato lungo una spline Catmull-Rom.
 * radii: numero oppure array (interpolato lungo il percorso) oppure funzione t->raggio.
 * ends: 'round' (calotte sferiche) | 'flat' | 'open'
 */
export function tube(points, radii = 0.01, { radial = 10, segs = null, ends = 'round', tension = 0.5, closed = false, ellip = 1 } = {}) {
  const pts = points.map(V3);
  const curve = new THREE.CatmullRomCurve3(pts, closed, 'catmullrom', tension);
  const len = curve.getLength();
  const n = segs || Math.max(6, Math.min(400, Math.ceil(len / 0.012)));
  const rf = typeof radii === 'function' ? radii
    : Array.isArray(radii) ? (t) => {
      const f = t * (radii.length - 1);
      const i = Math.min(radii.length - 2, Math.floor(f));
      const u = f - i;
      return radii[i] + (radii[i + 1] - radii[i]) * u;
    } : () => radii;
  const frames = curve.computeFrenetFrames(n, closed);
  const pos = [];
  const idx = [];
  const ringCount = n + 1;
  const capRings = ends === 'round' ? 3 : 0;
  // anelli di calotta iniziale
  const rings = [];
  const pushRing = (c, nrm, bin, r, k = 1) => {
    const base = pos.length / 3;
    for (let i = 0; i < radial; i++) {
      const a = (i / radial) * Math.PI * 2;
      const cx = Math.cos(a) * r, cy = Math.sin(a) * r * ellip;
      pos.push(c.x + (nrm.x * cx + bin.x * cy) * k, c.y + (nrm.y * cx + bin.y * cy) * k, c.z + (nrm.z * cx + bin.z * cy) * k);
    }
    rings.push(base);
  };
  const p0 = curve.getPointAt(0), pn = curve.getPointAt(1);
  const r0 = rf(0), rn = rf(1);
  if (capRings) {
    const t0 = curve.getTangentAt(0).negate();
    for (let k = capRings; k >= 1; k--) {
      const ang = (k / (capRings + 1)) * (Math.PI / 2);
      const off = t0.clone().multiplyScalar(Math.sin(ang) * r0);
      pushRing(p0.clone().add(off), frames.normals[0], frames.binormals[0], r0 * Math.cos(ang));
    }
  }
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = curve.getPointAt(t);
    pushRing(p, frames.normals[i], frames.binormals[i], rf(t));
  }
  if (capRings) {
    const t1 = curve.getTangentAt(1);
    for (let k = 1; k <= capRings; k++) {
      const ang = (k / (capRings + 1)) * (Math.PI / 2);
      const off = t1.clone().multiplyScalar(Math.sin(ang) * rn);
      pushRing(pn.clone().add(off), frames.normals[n], frames.binormals[n], rn * Math.cos(ang));
    }
  }
  for (let j = 0; j < rings.length - 1; j++) {
    for (let i = 0; i < radial; i++) {
      const A = rings[j] + i, B = rings[j] + ((i + 1) % radial);
      const C = rings[j + 1] + i, D = rings[j + 1] + ((i + 1) % radial);
      idx.push(A, B, C, B, D, C);
    }
  }
  if (ends === 'flat') {
    const addC = (ringBase, c, flip) => {
      const ci = pos.length / 3;
      pos.push(c.x, c.y, c.z);
      for (let i = 0; i < radial; i++) {
        const A = ringBase + i, B = ringBase + ((i + 1) % radial);
        if (flip) idx.push(ci, B, A); else idx.push(ci, A, B);
      }
    };
    addC(rings[0], p0, true);
    addC(rings[rings.length - 1], pn, false);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** Ellissoide posizionato, con rotazione opzionale (rad) e deformazione organica. */
export function ellipsoid(rx, ry, rz, { at = [0, 0, 0], rot = [0, 0, 0], seg = 28, hseg = 18, noise = 0, seed = 1, freq = 3, deform = null } = {}) {
  const g = new THREE.SphereGeometry(1, seg, hseg);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    let k = 1;
    if (noise) {
      k += noise * (Math.sin(v.x * freq * 2.1 + seed) * Math.cos(v.y * freq * 1.7 + seed * 1.3) + Math.sin(v.z * freq * 2.7 + seed * 0.7) * 0.7);
    }
    v.multiplyScalar(k);
    v.set(v.x * rx, v.y * ry, v.z * rz);
    if (deform) deform(v);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3(...at),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),
    new THREE.Vector3(1, 1, 1),
  );
  g.applyMatrix4(m);
  return g;
}

export function sphere(r, at, seg = 16) { return ellipsoid(r, r, r, { at, seg, hseg: Math.max(8, seg >> 1) }); }

/** Osso lungo: tubo tra due punti con epifisi sferiche. */
export function longBone(a, b, r = 0.012, { r0 = null, r1 = null, mid = 0, epi = 1.5 } = {}) {
  const A = V3(a), B = V3(b);
  const R0 = r0 ?? r, R1 = r1 ?? r;
  const geos = [tube([A, A.clone().lerp(B, 0.5), B], [R0 * 1.1, r * (1 - mid), R1 * 1.1], { radial: 8, segs: 12, ends: 'flat' })];
  if (epi) {
    geos.push(sphere(R0 * epi, A.toArray(), 12));
    geos.push(sphere(R1 * epi, B.toArray(), 12));
  }
  return merge(geos);
}

function plainPos(x, indexed) {
  let g = x;
  if (indexed) g = x.clone(); else g = x.index ? x.toNonIndexed() : x.clone();
  for (const k of Object.keys(g.attributes)) if (k !== 'position') g.deleteAttribute(k);
  return g;
}

export function merge(geos) {
  const indexed = geos.every((g) => g.index);
  const g = mergeGeometries(geos.map((x) => plainPos(x, indexed)));
  if (!g) throw new Error('merge fallito');
  g.computeVertexNormals();
  return g;
}

export function mirrorX(geo) {
  const g = geo.clone();
  g.scale(-1, 1, 1);
  // il flip inverte l'orientamento delle facce
  const idx = g.index;
  if (idx) {
    const a = idx.array;
    for (let i = 0; i < a.length; i += 3) { const t = a[i + 1]; a[i + 1] = a[i + 2]; a[i + 2] = t; }
    idx.needsUpdate = true;
  } else {
    const p = g.attributes.position.array;
    for (let i = 0; i < p.length; i += 9) {
      for (let k = 0; k < 3; k++) { const t = p[i + 3 + k]; p[i + 3 + k] = p[i + 6 + k]; p[i + 6 + k] = t; }
    }
    g.attributes.position.needsUpdate = true;
  }
  g.computeVertexNormals();
  return g;
}

export const mx = (pts, s) => pts.map((p) => [p[0] * s, p[1], p[2]]);

/** Scava un'ellissoide (es. ingombro del cuore) in una geometria spingendo i vertici all'esterno. */
export function carve(geo, c, r, margin = 1.0) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const dx = (p.getX(i) - c[0]) / r[0], dy = (p.getY(i) - c[1]) / r[1], dz = (p.getZ(i) - c[2]) / r[2];
    const d = Math.hypot(dx, dy, dz);
    if (d < margin && d > 1e-6) {
      const k = margin / d;
      p.setXYZ(i, c[0] + dx * k * r[0], c[1] + dy * k * r[1], c[2] + dz * k * r[2]);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

/** Pseudo-casuale deterministico. */
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
