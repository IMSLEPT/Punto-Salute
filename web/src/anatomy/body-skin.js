// Superficie corporea (cute) stilizzata, semitrasparente.
import { loft, tube, ellipsoid, merge, mirrorX } from './geo.js';
import { TORSO, torso, LM } from './shape.js';

export const ARM = {
  // spalla -> gomito -> polso (lato sinistro del paziente; x positivo)
  pts: [[0.200, 1.385, 0.0], [0.226, 1.25, 0.004], [0.250, 1.12, 0.010], [0.278, 1.0, 0.014], [0.302, 0.86, 0.012]],
  r: [0.056, 0.047, 0.036, 0.034, 0.023],
  hand: [0.312, 0.775, 0.012],
};
export const LEG = {
  pts: [[0.088, 0.90, 0.0], [0.094, 0.70, 0.006], [0.096, 0.50, 0.012], [0.095, 0.30, -0.004], [0.094, 0.088, -0.004]],
  r: [0.092, 0.075, 0.053, 0.052, 0.030],
};

export function buildSkin(add) {
  const secs = [];
  for (let y = 0.78; y <= 1.485; y += 0.0235) {
    const t = torso(y);
    secs.push({ y, x: 0, z: t.cz, rx: t.rx, rz: t.rz });
  }
  const geos = [];
  geos.push(loft(secs, { seg: 40 }));
  // collo
  geos.push(loft([
    { y: 1.47, z: 0.004, rx: 0.058, rz: 0.058 }, { y: 1.52, z: 0.008, rx: 0.050, rz: 0.054 }, { y: 1.575, z: 0.012, rx: 0.052, rz: 0.056 },
  ], { seg: 20 }));
  // testa e mandibola
  geos.push(ellipsoid(0.083, 0.106, 0.098, { at: [0, 1.655, 0.0], seg: 32, hseg: 22 }));
  geos.push(ellipsoid(0.058, 0.048, 0.068, { at: [0, 1.585, 0.032], seg: 24, hseg: 14 }));
  // braccia
  const armG = [tube(ARM.pts, ARM.r, { radial: 16, ends: 'round' }), ellipsoid(0.030, 0.085, 0.016, { at: ARM.hand, seg: 16, hseg: 12, rot: [0, 0, 0.12] }),
    tube([[0.286, 0.82, 0.03], [0.292, 0.77, 0.045], [0.296, 0.73, 0.05]], 0.0095, { radial: 8 })];
  const arms = armG.map((g) => g);
  geos.push(...arms, ...arms.map(mirrorX));
  // gambe e piedi
  const leg = [tube(LEG.pts, LEG.r, { radial: 18, ends: 'round' }), ellipsoid(0.042, 0.034, 0.108, { at: [0.095, 0.036, 0.045], seg: 18, hseg: 12 })];
  geos.push(...leg, ...leg.map(mirrorX));
  add('cute', ['cute'], merge(geos), { color: '#e6b99a', opacity: 0.2, transparent: true, depthWrite: false, renderOrder: 10, double: false });
}
