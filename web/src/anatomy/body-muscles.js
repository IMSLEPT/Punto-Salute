// Muscoli non presenti nel dataset BodyParts3D 4.0 (retto dell'addome, gran dorsale): forme stilizzate con lo stesso colore.
import { ellipsoid, merge, mirrorX } from './geo.js';

const MUSCLE = '#b9453b';

export function buildMuscles(add) {
  const pair = (g) => merge([g, mirrorX(g)]);
  add('muscolo-retto-addome', ['muscoli'], pair(ellipsoid(0.026, 0.145, 0.011, { at: [0.027, 1.060, 0.092], rot: [-0.05, 0, 0.02], seg: 24, hseg: 18 })), { color: MUSCLE, roughness: 0.55 });
  add('muscolo-gran-dorsale', ['muscoli'], pair(ellipsoid(0.078, 0.135, 0.010, { at: [0.092, 1.160, -0.098], rot: [0, 0.35, -0.35], seg: 24, hseg: 18 })), { color: MUSCLE, roughness: 0.55 });
}
