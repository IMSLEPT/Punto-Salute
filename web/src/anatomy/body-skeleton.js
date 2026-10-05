// Scheletro stilizzato: cranio, colonna, gabbia toracica, cingolo scapolare, arti, bacino.
import * as THREE from 'three';
import { tube, ellipsoid, sphere, longBone, merge, mirrorX } from './geo.js';
import { torso, frontZ, spineZ, VERT, LM } from './shape.js';
import { ARM, LEG } from './body-skin.js';

const BONE = '#efe6d3';

export function buildSkeleton(add) {
  // ---------------------------------------------------------------- cranio
  add('cranio', ['scheletro'], merge([
    ellipsoid(0.076, 0.082, 0.092, { at: [0, 1.665, -0.004], seg: 28, hseg: 18 }),
    ellipsoid(0.050, 0.046, 0.050, { at: [0, 1.600, 0.050], seg: 20, hseg: 12 }),
    tube([[-0.058, 1.625, 0.010], [-0.050, 1.585, 0.060], [0, 1.560, 0.085], [0.050, 1.585, 0.060], [0.058, 1.625, 0.010]], 0.0075, { radial: 8 }),
  ]), { color: BONE });

  // ---------------------------------------------------------------- colonna vertebrale
  const vg = [];
  const addVert = (y, r, h, withRibs) => {
    const z = spineZ(y);
    vg.push(new THREE.CylinderGeometry(r, r * 1.04, h, 14).translate(0, y, z));
    // arco e processo spinoso
    vg.push(tube([[0, y + h * 0.1, z - r * 0.8], [0, y, z - r - 0.016], [0, y - h * 0.35, z - r - 0.034]], r * 0.28, { radial: 6, segs: 4, ends: 'round' }));
    // processi trasversi
    vg.push(tube([[-r - 0.022, y, z - r * 0.5], [r + 0.022, y, z - r * 0.5]], r * 0.2, { radial: 6, segs: 3 }));
  };
  VERT.C.forEach((y, i) => addVert(y, 0.0125 + i * 0.0005, 0.0105, false));
  VERT.T.forEach((y, i) => addVert(y, 0.0150 + i * 0.00055, 0.019, true));
  VERT.L.forEach((y) => addVert(y, 0.0245, 0.0235, false));
  // sacro e coccige
  vg.push(ellipsoid(0.040, 0.060, 0.020, { at: [0, 0.895, spineZ(0.9) - 0.002], rot: [-0.35, 0, 0], seg: 18, hseg: 12 }));
  vg.push(tube([[0, 0.845, -0.092], [0, 0.82, -0.088], [0, 0.805, -0.078]], [0.012, 0.008, 0.004], { radial: 6 }));
  add('colonna', ['scheletro'], merge(vg), { color: BONE });

  // ---------------------------------------------------------------- gabbia toracica
  const ribs = [];
  const D = [0.012, 0.03, 0.05, 0.07, 0.085, 0.10, 0.115, 0.125, 0.13, 0.13, 0.10, 0.07];
  for (let i = 0; i < 12; i++) {
    const yp = VERT.T[i];
    const zs = spineZ(yp) - 0.002;
    const yEnd = yp - D[i];
    const yMid = yp - D[i] * 0.45;
    const t = torso(yMid);
    const a = t.rx - 0.016;
    const zf = t.cz + t.rz - 0.016;
    const zc = (zs + zf) / 2;
    const e = (zf - zs) / 2;
    let xe = 0.022;
    if (i >= 7 && i <= 9) xe = 0.05 + (i - 7) * 0.03;
    if (i === 10) xe = a * 0.85;
    if (i === 11) xe = a * 0.7;
    const angS = -Math.PI / 2 + Math.asin(Math.min(0.9, 0.014 / a));
    const angE = Math.PI / 2 - Math.asin(Math.min(0.95, xe / a));
    const pts = [];
    const N = 10;
    for (let k = 0; k <= N; k++) {
      const f = k / N;
      const ang = angS + f * (angE - angS);
      pts.push([a * Math.cos(ang), yp - D[i] * (0.15 * f + 0.85 * Math.pow(f, 2.2)), zc + e * Math.sin(ang)]);
    }
    const rr = i < 2 ? 0.0058 : 0.0046;
    const g = tube(pts, rr, { radial: 6, segs: 26, ends: 'round' });
    ribs.push(g, mirrorX(g));
  }
  add('coste', ['scheletro'], merge(ribs), { color: '#e9dfc9' });

  // sterno
  const zst = (y) => frontZ(y) - 0.016;
  add('sterno', ['scheletro'], merge([
    ellipsoid(0.032, 0.024, 0.008, { at: [0, 1.435, zst(1.435)], seg: 14, hseg: 8 }),
    ellipsoid(0.021, 0.082, 0.007, { at: [0, 1.335, zst(1.335)], seg: 14, hseg: 10 }),
    tube([[0, 1.250, zst(1.25)], [0, 1.225, zst(1.225)], [0, 1.205, zst(1.205) - 0.004]], [0.007, 0.005, 0.003], { radial: 6 }),
  ]), { color: '#f1e8d6' });

  // ---------------------------------------------------------------- cingolo scapolare
  const clav = tube([[0.014, 1.462, 0.060], [0.06, 1.455, 0.082], [0.12, 1.440, 0.058], [0.185, 1.425, 0.012]], 0.0075, { radial: 8 });
  add('clavicola', ['scheletro'], merge([clav, mirrorX(clav)]), { color: BONE });

  const scShape = new THREE.Shape();
  scShape.moveTo(0, 0.07); scShape.lineTo(0.05, 0.055); scShape.lineTo(0.065, -0.01); scShape.lineTo(0.012, -0.075); scShape.lineTo(-0.02, -0.01); scShape.closePath();
  const sc = new THREE.ExtrudeGeometry(scShape, { depth: 0.004, bevelEnabled: false }).translate(0, 0, 0);
  sc.rotateY(0.25);
  sc.translate(0.085, 1.335, -0.098);
  add('scapola', ['scheletro'], merge([sc, mirrorX(sc)]), { color: '#ece3cf' });

  // ---------------------------------------------------------------- arto superiore
  const omero = merge([longBone([0.2, 1.385, 0.0], [0.25, 1.125, 0.008], 0.0115, { r0: 0.013, r1: 0.014 }), sphere(0.024, [0.198, 1.382, 0.0])]);
  add('omero', ['scheletro'], merge([omero, mirrorX(omero)]), { color: BONE });
  const ul = longBone([0.252, 1.118, 0.004], [0.304, 0.862, 0.0], 0.0085, { r0: 0.011, r1: 0.008, epi: 1.3 });
  const ra = longBone([0.246, 1.116, 0.018], [0.296, 0.86, 0.022], 0.0075, { r0: 0.008, r1: 0.010, epi: 1.3 });
  add('avambraccio-ossa', ['scheletro'], merge([ul, ra, mirrorX(ul), mirrorX(ra)]), { color: BONE });
  const hand = [ellipsoid(0.022, 0.012, 0.010, { at: [0.309, 0.845, 0.012], seg: 10, hseg: 6 })];
  for (let f = 0; f < 5; f++) {
    const ang = (f - 2) * 0.12;
    hand.push(tube([[0.309 + (f - 2) * 0.008, 0.838, 0.012], [0.311 + (f - 2) * 0.012 + ang * 0.02, 0.795, 0.014], [0.314 + (f - 2) * 0.016 + ang * 0.05, 0.742 + (f === 0 ? 0.03 : 0) - (f === 2 ? 0.01 : 0), 0.016]], 0.0034, { radial: 5, segs: 6 }));
  }
  const handG = merge(hand);
  add('mano-ossa', ['scheletro'], merge([handG, mirrorX(handG)]), { color: BONE });

  // ---------------------------------------------------------------- bacino
  const iliac = ellipsoid(0.074, 0.062, 0.016, { at: [0.098, 0.975, -0.02], rot: [0.28, -0.55, -0.25], seg: 20, hseg: 12 });
  const pubic = tube([[0.045, 0.905, 0.058], [0.06, 0.875, 0.066], [0.018, 0.862, 0.078]], 0.0095, { radial: 8 });
  const ischium = tube([[0.082, 0.925, 0.0], [0.08, 0.875, -0.03], [0.058, 0.855, -0.02]], 0.011, { radial: 8 });
  const pelvisHalf = merge([iliac, pubic, ischium]);
  const sym = ellipsoid(0.020, 0.011, 0.010, { at: [0, 0.868, 0.078], seg: 10, hseg: 6 });
  add('bacino', ['scheletro'], merge([pelvisHalf, mirrorX(pelvisHalf), sym]), { color: '#ebe1cd' });

  // ---------------------------------------------------------------- arto inferiore
  const f = (p) => [p[0], p[1], p[2]];
  const femur = merge([
    longBone([0.098, 0.88, 0.0], [0.096, 0.51, 0.006], 0.0165, { r0: 0.017, r1: 0.026 }),
    tube([[0.062, 0.915, 0.0], [0.082, 0.905, 0.0], [0.108, 0.89, 0.0]], 0.0145, { radial: 8 }),
    sphere(0.026, [0.064, 0.916, 0.0]),
    sphere(0.020, [0.121, 0.893, 0.0]),
  ]);
  add('femore', ['scheletro'], merge([femur, mirrorX(femur)]), { color: BONE });
  const pat = ellipsoid(0.017, 0.021, 0.008, { at: [0.095, 0.493, 0.046], seg: 12, hseg: 8 });
  add('rotula', ['scheletro'], merge([pat, mirrorX(pat)]), { color: '#f2e9d7' });
  const tib = longBone([0.094, 0.478, 0.008], [0.092, 0.09, -0.002], 0.0135, { r0: 0.022, r1: 0.014, epi: 1.2 });
  const fib = longBone([0.118, 0.47, 0.0], [0.116, 0.088, -0.004], 0.0065, { r0: 0.009, r1: 0.011, epi: 1.2 });
  add('gamba-ossa', ['scheletro'], merge([tib, fib, mirrorX(tib), mirrorX(fib)]), { color: BONE });
  const foot = [ellipsoid(0.028, 0.016, 0.07, { at: [0.095, 0.034, 0.04], seg: 12, hseg: 8 })];
  for (let k = 0; k < 5; k++) foot.push(tube([[0.082 + k * 0.0095, 0.03, 0.09], [0.083 + k * 0.0095, 0.022, 0.135]], 0.0045, { radial: 5, segs: 4 }));
  const footG = merge(foot);
  add('piede-ossa', ['scheletro'], merge([footG, mirrorX(footG)]), { color: BONE });
}
