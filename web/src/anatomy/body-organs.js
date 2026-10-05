// Organi del torace e dell'addome: cuore, grossi vasi, polmoni, vie aeree, apparato digerente, urinario.
// Lato destro del paziente = x negativo.
import * as THREE from 'three';
import { tube, ellipsoid, sphere, merge, mirrorX, carve, rng } from './geo.js';

export function buildTorsoOrgans(add) {
  // ================================================================ CUORE
  const heart = merge([
    ellipsoid(0.041, 0.060, 0.040, { at: [0.038, 1.232, 0.040], rot: [0.12, 0, 0.55], seg: 26, hseg: 18, noise: 0.012, seed: 2 }),   // ventricolo sinistro
    ellipsoid(0.037, 0.052, 0.031, { at: [-0.010, 1.245, 0.060], rot: [0.0, 0, 0.42], seg: 24, hseg: 16, noise: 0.012, seed: 5 }),   // ventricolo destro
    ellipsoid(0.026, 0.037, 0.026, { at: [-0.050, 1.262, 0.032], rot: [0, 0, 0.1], seg: 20, hseg: 14 }),                            // atrio destro
    ellipsoid(0.030, 0.022, 0.025, { at: [0.020, 1.296, 0.004], seg: 20, hseg: 12 }),                                                // atrio sinistro
    ellipsoid(0.012, 0.016, 0.010, { at: [-0.012, 1.302, 0.062], rot: [0, 0, 0.6], seg: 10, hseg: 8 }),                              // auricola
  ]);
  add('cuore', ['cardiovascolare', 'organi'], heart, { color: '#b5303a', roughness: 0.5 });
  // vene polmonari (4 brevi tronchi) – parte del cuore
  const pv = [
    tube([[0.050, 1.300, -0.002], [0.075, 1.306, -0.012], [0.092, 1.300, -0.018]], 0.0045, { radial: 8, segs: 6 }),
    tube([[0.046, 1.288, -0.004], [0.072, 1.282, -0.012], [0.090, 1.276, -0.02]], 0.0045, { radial: 8, segs: 6 }),
    tube([[0.000, 1.298, -0.004], [-0.040, 1.306, -0.012], [-0.080, 1.300, -0.02]], 0.0045, { radial: 8, segs: 6 }),
    tube([[0.002, 1.286, -0.004], [-0.040, 1.282, -0.012], [-0.078, 1.274, -0.02]], 0.0045, { radial: 8, segs: 6 }),
  ];
  add('cuore', ['cardiovascolare', 'organi'], merge(pv), { color: '#b5303a' });

  // ================================================================ GROSSI VASI
  const aorta = tube([
    [0.008, 1.292, 0.034], [0.004, 1.335, 0.040], [0.016, 1.378, 0.030], [0.040, 1.402, 0.004], [0.060, 1.390, -0.030],
    [0.066, 1.350, -0.056], [0.056, 1.280, -0.062], [0.044, 1.190, -0.058], [0.032, 1.100, -0.046], [0.020, 1.020, -0.034], [0.012, 0.978, -0.026],
  ], [0.0135, 0.0135, 0.0125, 0.0120, 0.0115, 0.0110, 0.0108, 0.0105, 0.010, 0.0098, 0.0095], { radial: 14, ends: 'round' });
  add('aorta', ['cardiovascolare'], aorta, { color: '#d63a3f' });
  // vasi del tronco sopra-aortico (tronco brachiocefalico + carotide sx + succlavia sx) origine
  add('aorta', ['cardiovascolare'], merge([
    tube([[0.012, 1.395, 0.020], [-0.010, 1.412, 0.018], [-0.030, 1.425, 0.014]], 0.0065, { radial: 8, segs: 6 }),
    tube([[0.036, 1.402, 0.004], [0.034, 1.425, 0.008], [0.034, 1.445, 0.012]], 0.0055, { radial: 8, segs: 6 }),
    tube([[0.054, 1.396, -0.02], [0.075, 1.418, -0.004], [0.100, 1.432, 0.008]], 0.0055, { radial: 8, segs: 6 }),
  ]), { color: '#d63a3f' });

  add('arteria-polmonare', ['cardiovascolare'], merge([
    tube([[-0.002, 1.286, 0.074], [0.004, 1.318, 0.060], [0.012, 1.336, 0.034], [0.020, 1.338, 0.010]], 0.0115, { radial: 12 }),
    tube([[0.020, 1.338, 0.008], [0.060, 1.340, -0.004], [0.095, 1.322, -0.012]], 0.0085, { radial: 10, segs: 8 }),
    tube([[0.016, 1.340, 0.008], [-0.030, 1.346, 0.0], [-0.090, 1.326, -0.012]], 0.0085, { radial: 10, segs: 8 }),
  ]), { color: '#4a74c9' });

  add('vena-cava-superiore', ['cardiovascolare'], tube([[-0.036, 1.425, 0.014], [-0.040, 1.380, 0.014], [-0.044, 1.330, 0.020], [-0.048, 1.292, 0.026]], 0.0098, { radial: 12 }), { color: '#3b62c6' });
  add('vena-cava-inferiore', ['cardiovascolare'], tube([[-0.048, 1.232, 0.016], [-0.040, 1.160, -0.010], [-0.032, 1.090, -0.038], [-0.024, 1.020, -0.034], [-0.020, 0.978, -0.028]], [0.013, 0.0145, 0.0155, 0.0150, 0.0145], { radial: 14 }), { color: '#3b62c6' });

  // ================================================================ VIE AEREE
  add('trachea', ['respiratorio'], merge([
    tube([[0, 1.538, 0.020], [0, 1.470, 0.012], [0, 1.376, 0.004]], 0.0105, { radial: 14, segs: 24, ends: 'flat' }),
    tube([[0, 1.376, 0.004], [-0.020, 1.360, 0.0], [-0.045, 1.338, -0.004]], 0.0075, { radial: 10, segs: 8 }),
    tube([[0, 1.376, 0.004], [0.024, 1.358, -0.002], [0.052, 1.332, -0.008]], 0.0072, { radial: 10, segs: 8 }),
  ]), { color: '#9fc7de' });
  add('bronchi', ['respiratorio'], merge([
    // albero bronchiale lobare e segmentale
    ...[[-1, 1.0], [1, 1.0]].flatMap(([s]) => [
      tube([[s * 0.045, 1.338, -0.004], [s * 0.065, 1.370, -0.002], [s * 0.085, 1.400, 0.0]], 0.0042, { radial: 8, segs: 6 }),
      tube([[s * 0.048, 1.334, -0.004], [s * 0.074, 1.322, 0.004], [s * 0.094, 1.296, 0.016]], 0.0040, { radial: 8, segs: 6 }),
      tube([[s * 0.048, 1.334, -0.006], [s * 0.074, 1.290, -0.020], [s * 0.088, 1.240, -0.034], [s * 0.095, 1.190, -0.042]], 0.0045, { radial: 8, segs: 10 }),
      tube([[s * 0.074, 1.286, -0.018], [s * 0.098, 1.250, -0.008], [s * 0.112, 1.220, 0.0]], 0.0030, { radial: 6, segs: 6 }),
      tube([[s * 0.082, 1.262, -0.028], [s * 0.060, 1.210, -0.044]], 0.0030, { radial: 6, segs: 6 }),
    ]),
  ]), { color: '#a9c9de' });
  add('laringe', ['respiratorio'], merge([
    ellipsoid(0.017, 0.015, 0.014, { at: [0, 1.545, 0.024], seg: 14, hseg: 10 }),
    tube([[-0.02, 1.575, 0.02], [0, 1.572, 0.03], [0.02, 1.575, 0.02]], 0.0035, { radial: 6, segs: 6 }),
  ]), { color: '#c3d9e8' });

  // ================================================================ POLMONI
  const heartExcl = [0.012, 1.255, 0.048], heartR = [0.082, 0.075, 0.062];
  const lung = (c, r, rot, seed, tint, sx) => {
    const g = ellipsoid(r[0], r[1], r[2], { at: c, rot, seg: 30, hseg: 22, noise: 0.01, seed });
    return carve(g, heartExcl, heartR, 1.0);
  };
  const lungs = {
    r: [
      lung([-0.092, 1.350, 0.002], [0.066, 0.072, 0.076], [0.1, 0, -0.15], 1),
      lung([-0.088, 1.240, 0.048], [0.060, 0.032, 0.046], [0.0, 0, 0.0], 3),
      lung([-0.094, 1.200, -0.042], [0.068, 0.078, 0.070], [-0.1, 0, 0.0], 5),
    ],
    l: [
      lung([0.096, 1.340, 0.004], [0.060, 0.082, 0.074], [0.1, 0, 0.15], 7),
      lung([0.098, 1.190, -0.030], [0.066, 0.082, 0.082], [-0.1, 0, 0.0], 9),
    ],
  };
  add('polmone-destro', ['respiratorio', 'organi'], lungs.r[0], { color: '#ec9aa2', matKey: 'a' });
  add('polmone-destro', ['respiratorio', 'organi'], lungs.r[1], { color: '#f2adb3', matKey: 'b' });
  add('polmone-destro', ['respiratorio', 'organi'], lungs.r[2], { color: '#e58a95', matKey: 'c' });
  add('polmone-sinistro', ['respiratorio', 'organi'], lungs.l[0], { color: '#ec9aa2', matKey: 'a' });
  add('polmone-sinistro', ['respiratorio', 'organi'], lungs.l[1], { color: '#e58a95', matKey: 'c' });

  // diaframma (due emicupole)
  const dome = (s, h) => {
    const g = new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    g.scale(0.095, h, 0.12);
    g.translate(s * 0.07, 1.105, 0.0);
    return g;
  };
  add('diaframma', ['respiratorio', 'muscoli'], merge([dome(-1, 0.062), dome(1, 0.050)]), { color: '#b9473f', double: true, opacity: 0.88, transparent: true });

  // ================================================================ APPARATO DIGERENTE
  add('esofago', ['digerente'], tube([[0.002, 1.540, 0.002], [0.004, 1.480, -0.008], [0.010, 1.390, -0.034], [0.014, 1.290, -0.046], [0.020, 1.190, -0.042], [0.030, 1.118, -0.020], [0.040, 1.104, -0.010]], 0.0085, { radial: 12, segs: 36 }), { color: '#d98a7b' });

  const stomach = merge([
    tube([[0.052, 1.128, -0.014], [0.082, 1.112, 0.0], [0.086, 1.070, 0.020], [0.070, 1.030, 0.040], [0.034, 1.008, 0.052], [0.000, 1.004, 0.054], [-0.032, 1.020, 0.046]], [0.030, 0.043, 0.044, 0.036, 0.024, 0.017, 0.013], { radial: 18, segs: 34 }),
    sphere(0.033, [0.070, 1.126, -0.010], 18),
  ]);
  add('stomaco', ['digerente', 'organi'], stomach, { color: '#e6a399' });

  // fegato
  const liverR = ellipsoid(0.088, 0.060, 0.078, { at: [-0.070, 1.112, 0.006], rot: [0.0, 0, 0.12], seg: 32, hseg: 22, noise: 0.012, seed: 4 });
  const liverL = ellipsoid(0.062, 0.036, 0.058, { at: [0.022, 1.098, 0.036], rot: [0.1, 0, -0.15], seg: 26, hseg: 16, noise: 0.01, seed: 8 });
  add('fegato', ['digerente', 'organi'], merge([liverR, liverL]), { color: '#8a3a30', roughness: 0.45 });
  add('colecisti', ['digerente', 'organi'], merge([
    ellipsoid(0.013, 0.026, 0.013, { at: [-0.052, 1.066, 0.056], rot: [0.3, 0, 0.2], seg: 14, hseg: 10 }),
    tube([[-0.048, 1.052, 0.050], [-0.040, 1.042, 0.040], [-0.034, 1.040, 0.028]], 0.0028, { radial: 6, segs: 6 }),
  ]), { color: '#3d8a4b' });

  add('pancreas', ['digerente', 'endocrino', 'organi'], tube([[-0.048, 1.034, 0.0], [-0.012, 1.050, -0.012], [0.030, 1.058, -0.026], [0.070, 1.080, -0.040], [0.100, 1.094, -0.048]], [0.021, 0.016, 0.0145, 0.012, 0.009], { radial: 12, segs: 24 }), { color: '#e8c67f' });
  add('duodeno', ['digerente'], tube([[-0.030, 1.024, 0.030], [-0.062, 1.018, 0.004], [-0.068, 0.985, -0.010], [-0.036, 0.962, -0.016], [0.010, 0.968, -0.022], [0.030, 0.980, -0.024]], 0.0125, { radial: 12, segs: 28 }), { color: '#eaa88b' });

  // intestino tenue (digiuno-ileo): percorso a anse
  const r = rng(11);
  const pts = [];
  const rows = 8;
  for (let i = 0; i < rows; i++) {
    const y = 0.995 - i * 0.0125;
    const dir = i % 2 === 0 ? 1 : -1;
    const n = 7;
    for (let k = 0; k < n; k++) {
      const f = k / (n - 1);
      const x = (dir > 0 ? -0.085 + f * 0.17 : 0.085 - f * 0.17);
      pts.push([x, y + (r() - 0.5) * 0.006, 0.020 + (r() - 0.5) * 0.045 + 0.02 * Math.sin(f * Math.PI)]);
    }
  }
  add('intestino-tenue', ['digerente'], tube(pts, 0.0105, { radial: 10, segs: 340 }), { color: '#edb69b' });

  // colon
  add('colon', ['digerente'], merge([
    sphere(0.026, [-0.086, 0.918, 0.034], 16),
    tube([[-0.086, 0.924, 0.034], [-0.100, 0.985, 0.030], [-0.108, 1.048, 0.022]], 0.0195, { radial: 14, segs: 14 }),
    tube([[-0.108, 1.048, 0.022], [-0.092, 1.024, 0.066], [-0.040, 1.008, 0.078], [0.030, 1.012, 0.074], [0.090, 1.036, 0.050], [0.120, 1.068, 0.006]], 0.0195, { radial: 14, segs: 30 }),
    tube([[0.120, 1.068, 0.006], [0.116, 1.010, -0.012], [0.104, 0.950, -0.016], [0.090, 0.915, -0.006]], 0.0185, { radial: 14, segs: 16 }),
    tube([[0.090, 0.915, -0.006], [0.060, 0.895, 0.026], [0.032, 0.905, 0.012], [0.012, 0.890, -0.016], [0.002, 0.872, -0.038], [0.002, 0.840, -0.058]], [0.016, 0.016, 0.015, 0.015, 0.015, 0.016], { radial: 12, segs: 28 }),
  ]), { color: '#d89c86' });
  add('appendice', ['digerente'], tube([[-0.078, 0.900, 0.040], [-0.070, 0.876, 0.046], [-0.060, 0.866, 0.040]], 0.0045, { radial: 6, segs: 8 }), { color: '#e6a493' });
  add('retto', ['digerente'], tube([[0.002, 0.872, -0.040], [0.002, 0.842, -0.062], [0.0, 0.812, -0.066], [0.0, 0.790, -0.054]], [0.016, 0.019, 0.016, 0.010], { radial: 12, segs: 12 }), { color: '#c98978' });

  // ================================================================ APPARATO URINARIO
  const kid = (s, y) => ellipsoid(0.027, 0.056, 0.023, {
    at: [s * 0.064, y, -0.054], rot: [0.0, 0, -s * 0.12], seg: 26, hseg: 18,
    deform: (v) => { v.x -= s * 0.0 ; const med = -s; if (v.x * med > 0) v.x -= med * 0.012 * Math.exp(-(v.y * v.y) / 0.0004); },
  });
  add('rene', ['urinario', 'organi'], merge([kid(-1, 1.090), kid(1, 1.108)]), { color: '#a14c4a', roughness: 0.4 });
  add('ureteri', ['urinario'], merge([-1, 1].map((s) => tube([[s * 0.050, 1.082, -0.048], [s * 0.046, 1.040, -0.052], [s * 0.040, 0.990, -0.050], [s * 0.046, 0.940, -0.034], [s * 0.040, 0.905, -0.004], [s * 0.026, 0.886, 0.026]], 0.0034, { radial: 6, segs: 30 }))), { color: '#e2c35c' });
  add('vescica', ['urinario', 'organi'], merge([
    ellipsoid(0.040, 0.034, 0.038, { at: [0, 0.878, 0.046], seg: 20, hseg: 14 }),
    tube([[0, 0.850, 0.056], [0, 0.826, 0.072], [0, 0.808, 0.082]], 0.0055, { radial: 8, segs: 6 }),
  ]), { color: '#f0d27a', opacity: 0.95, transparent: true });

  // ================================================================ ENDOCRINO / LINFATICO (organi del tronco)
  add('surrene', ['endocrino', 'organi'], merge([-1, 1].map((s) => ellipsoid(0.019, 0.0085, 0.013, { at: [s * 0.049, 1.158 + (s > 0 ? 0.012 : 0), -0.054], rot: [0, 0, -s * 0.5], seg: 12, hseg: 8 }))), { color: '#e3bf5e' });
  add('tiroide', ['endocrino', 'organi'], merge([
    ellipsoid(0.011, 0.022, 0.010, { at: [-0.021, 1.502, 0.022], rot: [0, 0, 0.1], seg: 14, hseg: 10 }),
    ellipsoid(0.011, 0.022, 0.010, { at: [0.021, 1.502, 0.022], rot: [0, 0, -0.1], seg: 14, hseg: 10 }),
    ellipsoid(0.014, 0.0045, 0.005, { at: [0, 1.490, 0.026], seg: 10, hseg: 6 }),
  ]), { color: '#bf5f4c' });
  add('timo', ['linfatico', 'endocrino', 'organi'], merge([
    ellipsoid(0.014, 0.034, 0.010, { at: [-0.012, 1.372, 0.054], rot: [0.1, 0, 0.1], seg: 12, hseg: 10 }),
    ellipsoid(0.014, 0.034, 0.010, { at: [0.012, 1.372, 0.054], rot: [0.1, 0, -0.1], seg: 12, hseg: 10 }),
  ]), { color: '#dab6a2' });
  add('milza', ['linfatico', 'organi'], ellipsoid(0.021, 0.046, 0.027, { at: [0.126, 1.100, -0.050], rot: [0.0, 0.2, -0.22], seg: 18, hseg: 12 }), { color: '#7a3b5d' });
}
