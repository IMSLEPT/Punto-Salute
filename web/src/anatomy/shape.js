// Proporzioni condivise del corpo (adulto, 1,75 m, posizione anatomica). Unità: metri.
import { lerpProfile } from './geo.js';

export const HEIGHT = 1.75;

/** Profilo del tronco: raggi ellittici (x = larghezza, z = profondita') e centro z. */
export const TORSO = [
  { y: 0.78, rx: 0.150, rz: 0.098, cz: 0.000 },
  { y: 0.86, rx: 0.172, rz: 0.108, cz: 0.000 },
  { y: 0.93, rx: 0.171, rz: 0.108, cz: 0.002 },
  { y: 1.03, rx: 0.148, rz: 0.100, cz: 0.004 },
  { y: 1.12, rx: 0.154, rz: 0.106, cz: 0.006 },
  { y: 1.22, rx: 0.170, rz: 0.118, cz: 0.006 },
  { y: 1.32, rx: 0.180, rz: 0.124, cz: 0.006 },
  { y: 1.40, rx: 0.190, rz: 0.110, cz: 0.000 },
  { y: 1.445, rx: 0.150, rz: 0.088, cz: 0.000 },
  { y: 1.485, rx: 0.074, rz: 0.066, cz: 0.002 },
];
export const torso = (y) => ({
  rx: lerpProfile(TORSO, y, 'rx'), rz: lerpProfile(TORSO, y, 'rz'), cz: lerpProfile(TORSO, y, 'cz'),
});
export const frontZ = (y) => { const t = torso(y); return t.cz + t.rz; };
export const backZ = (y) => { const t = torso(y); return t.cz - t.rz; };

/** Asse della colonna vertebrale (z in funzione di y). */
const SPINE_Z = [
  { y: 0.84, z: -0.088 }, { y: 0.92, z: -0.076 }, { y: 0.98, z: -0.062 }, { y: 1.04, z: -0.060 },
  { y: 1.12, z: -0.072 }, { y: 1.20, z: -0.082 }, { y: 1.30, z: -0.084 }, { y: 1.40, z: -0.068 },
  { y: 1.46, z: -0.052 }, { y: 1.53, z: -0.030 },
];
export const spineZ = (y) => lerpProfile(SPINE_Z, y, 'z');

/** Centri delle vertebre (y) per segmento. */
export const VERT = (() => {
  const C = Array.from({ length: 7 }, (_, i) => 1.525 - i * 0.0133);
  const T = Array.from({ length: 12 }, (_, i) => 1.425 - i * 0.02545);
  const L = Array.from({ length: 5 }, (_, i) => 1.115 - i * 0.0325);
  return { C, T, L };
})();

/** Punti chiave comuni. */
export const LM = {
  jugular: 1.465,
  clavicleY: 1.425,
  shoulderX: 0.200,
  xiphoid: 1.205,
  umbilicus: 1.02,
  iliacCrest: 1.0,
  pubis: 0.875,
  hipX: 0.088,
  hipY: 0.905,
  kneeY: 0.495,
  ankleY: 0.085,
  headY: 1.65,
};
