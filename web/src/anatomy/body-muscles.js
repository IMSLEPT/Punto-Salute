// Muscoli principali (forme fusiformi stilizzate).
import { tube, ellipsoid, merge, mirrorX } from './geo.js';

const MUSCLE = '#b8473c';

export function buildMuscles(add) {
  const pair = (g) => merge([g, mirrorX(g)]);

  add('muscolo-pettorale', ['muscoli'], pair(ellipsoid(0.088, 0.058, 0.013, { at: [0.098, 1.332, 0.113], rot: [0.05, -0.28, -0.32], seg: 22, hseg: 12 })), { color: MUSCLE });
  add('muscolo-deltoide', ['muscoli'], pair(ellipsoid(0.043, 0.068, 0.048, { at: [0.216, 1.362, 0.004], rot: [0, 0, 0.16], seg: 20, hseg: 14 })), { color: '#c0503f' });
  add('muscolo-bicipite', ['muscoli'], pair(tube([[0.226, 1.318, 0.030], [0.236, 1.250, 0.034], [0.248, 1.170, 0.030], [0.254, 1.126, 0.022]], [0.007, 0.024, 0.021, 0.008], { radial: 12, segs: 14 })), { color: MUSCLE });
  add('muscolo-tricipite', ['muscoli'], pair(tube([[0.214, 1.330, -0.030], [0.230, 1.250, -0.036], [0.246, 1.170, -0.030], [0.252, 1.128, -0.016]], [0.009, 0.027, 0.022, 0.009], { radial: 12, segs: 14 })), { color: '#ad3f36' });
  add('muscoli-avambraccio', ['muscoli'], pair(merge([
    tube([[0.256, 1.116, 0.026], [0.272, 1.050, 0.034], [0.294, 0.940, 0.028], [0.304, 0.880, 0.022]], [0.026, 0.030, 0.016, 0.006], { radial: 10, segs: 12 }),
    tube([[0.254, 1.114, -0.020], [0.272, 1.040, -0.024], [0.294, 0.940, -0.016], [0.304, 0.878, -0.004]], [0.022, 0.028, 0.015, 0.006], { radial: 10, segs: 12 }),
  ])), { color: '#b04439' });

  add('muscolo-retto-addome', ['muscoli'], pair(merge([
    ellipsoid(0.026, 0.145, 0.011, { at: [0.027, 1.060, 0.092], rot: [-0.05, 0, 0.02], seg: 18, hseg: 14 }),
  ])), { color: '#c24d41' });
  add('muscoli-obliqui', ['muscoli'], pair(ellipsoid(0.056, 0.090, 0.012, { at: [0.118, 1.080, 0.062], rot: [0.0, -0.75, -0.18], seg: 20, hseg: 14 })), { color: '#b7453a' });
  add('muscolo-trapezio', ['muscoli'], pair(ellipsoid(0.085, 0.125, 0.010, { at: [0.060, 1.350, -0.108], rot: [0, 0.12, -0.30], seg: 20, hseg: 14 })), { color: '#a63b34' });
  add('muscolo-gran-dorsale', ['muscoli'], pair(ellipsoid(0.078, 0.135, 0.010, { at: [0.092, 1.160, -0.098], rot: [0, 0.35, -0.35], seg: 20, hseg: 14 })), { color: '#b0463b' });
  add('muscolo-gluteo', ['muscoli'], pair(ellipsoid(0.074, 0.070, 0.046, { at: [0.078, 0.915, -0.082], rot: [0.2, 0, 0], seg: 20, hseg: 14 })), { color: '#bd4a3e' });
  add('muscolo-quadricipite', ['muscoli'], pair(merge([
    tube([[0.100, 0.880, 0.042], [0.104, 0.720, 0.054], [0.100, 0.560, 0.048], [0.096, 0.510, 0.040]], [0.028, 0.040, 0.034, 0.014], { radial: 12, segs: 16 }),
    tube([[0.122, 0.870, 0.024], [0.130, 0.720, 0.030], [0.122, 0.560, 0.030], [0.114, 0.510, 0.030]], [0.022, 0.034, 0.028, 0.010], { radial: 12, segs: 16 }),
    tube([[0.074, 0.860, 0.030], [0.072, 0.720, 0.040], [0.080, 0.560, 0.038], [0.086, 0.508, 0.034]], [0.020, 0.030, 0.026, 0.010], { radial: 12, segs: 16 }),
  ])), { color: '#c0483c' });
  add('muscoli-ischiocrurali', ['muscoli'], pair(tube([[0.100, 0.870, -0.046], [0.100, 0.730, -0.056], [0.100, 0.600, -0.046], [0.098, 0.520, -0.034]], [0.026, 0.044, 0.038, 0.016], { radial: 12, segs: 16 })), { color: '#a83e35' });
  add('muscolo-gastrocnemio', ['muscoli'], pair(merge([
    tube([[0.082, 0.488, -0.030], [0.082, 0.400, -0.044], [0.090, 0.290, -0.028], [0.092, 0.150, -0.012]], [0.020, 0.032, 0.018, 0.007], { radial: 10, segs: 14 }),
    tube([[0.110, 0.488, -0.030], [0.112, 0.400, -0.040], [0.102, 0.290, -0.028], [0.096, 0.150, -0.012]], [0.020, 0.030, 0.018, 0.007], { radial: 10, segs: 14 }),
  ])), { color: '#b5443a' });
  add('muscolo-tibiale-anteriore', ['muscoli'], pair(tube([[0.112, 0.460, 0.022], [0.110, 0.360, 0.034], [0.104, 0.230, 0.034], [0.098, 0.110, 0.030]], [0.010, 0.017, 0.012, 0.005], { radial: 8, segs: 12 })), { color: '#bb4a3e' });
  add('muscolo-sternocleidomastoideo', ['muscoli'], pair(tube([[0.058, 1.588, -0.020], [0.040, 1.530, 0.022], [0.020, 1.468, 0.052]], [0.007, 0.012, 0.008], { radial: 8, segs: 10 })), { color: '#c24d41' });
}
