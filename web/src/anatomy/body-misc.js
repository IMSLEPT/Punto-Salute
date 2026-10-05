// Apparato riproduttivo (femminile/maschile), sistema linfatico, ipofisi.
import { tube, ellipsoid, sphere, merge, mirrorX, rng } from './geo.js';

export function buildMisc(add) {
  // ---------------------------------------------------------------- endocrino: ipofisi
  add('ipofisi', ['endocrino', 'organi'], ellipsoid(0.0065, 0.005, 0.0055, { at: [0, 1.628, 0.022], seg: 12, hseg: 8 }), { color: '#e8a24a' });

  // ---------------------------------------------------------------- riproduttivo femminile
  add('utero', ['riproduttivo'], merge([
    ellipsoid(0.031, 0.040, 0.023, { at: [0, 0.912, 0.002], rot: [0.5, 0, 0], seg: 20, hseg: 14 }),
    tube([[0, 0.890, -0.004], [0, 0.870, 0.006]], 0.0105, { radial: 10, segs: 4 }),
  ]), { color: '#c9606f', sex: 'f' });
  const tubaL = merge([
    tube([[0.020, 0.930, 0.004], [0.050, 0.945, 0.002], [0.078, 0.935, -0.006], [0.094, 0.908, -0.012]], 0.0036, { radial: 8, segs: 14 }),
    sphere(0.0055, [0.094, 0.904, -0.012], 8),
  ]);
  add('tube-uterine', ['riproduttivo'], merge([tubaL, mirrorX(tubaL)]), { color: '#dc8c97', sex: 'f' });
  const ov = ellipsoid(0.017, 0.011, 0.0095, { at: [0.098, 0.892, -0.018], rot: [0, 0, -0.4], seg: 14, hseg: 10 });
  add('ovaio', ['riproduttivo', 'endocrino'], merge([ov, mirrorX(ov)]), { color: '#dca85c', sex: 'f' });
  add('vagina', ['riproduttivo'], tube([[0, 0.872, 0.002], [0, 0.848, 0.018], [0, 0.820, 0.042], [0, 0.806, 0.056]], 0.0115, { radial: 12, segs: 10, ellip: 0.6 }), { color: '#d4788a', sex: 'f' });

  // ---------------------------------------------------------------- riproduttivo maschile
  add('prostata', ['riproduttivo'], merge([
    ellipsoid(0.019, 0.016, 0.016, { at: [0, 0.852, 0.030], seg: 14, hseg: 10 }),
  ]), { color: '#c98f5f', sex: 'm' });
  const vs = tube([[0.012, 0.866, 0.014], [0.026, 0.884, 0.004], [0.034, 0.900, -0.012]], 0.0050, { radial: 8, segs: 8 });
  add('vescicole-seminali', ['riproduttivo'], merge([vs, mirrorX(vs)]), { color: '#d9a870', sex: 'm' });
  const dx = tube([[0.024, 0.768, 0.070], [0.034, 0.830, 0.074], [0.042, 0.890, 0.056], [0.040, 0.912, 0.020], [0.030, 0.890, -0.004], [0.014, 0.862, 0.016]], 0.0027, { radial: 6, segs: 24 });
  add('dotto-deferente', ['riproduttivo'], merge([dx, mirrorX(dx)]), { color: '#f0d9b0', sex: 'm' });
  const te = merge([ellipsoid(0.017, 0.025, 0.016, { at: [0.024, 0.742, 0.080], seg: 14, hseg: 10 }), tube([[0.026, 0.768, 0.070], [0.032, 0.738, 0.062], [0.030, 0.715, 0.066]], 0.0045, { radial: 6, segs: 8 })]);
  add('testicolo', ['riproduttivo', 'endocrino'], merge([te, mirrorX(te)]), { color: '#e2b98a', sex: 'm' });

  // ---------------------------------------------------------------- linfatico
  const r = rng(21);
  const nodes = (cx, cy, cz, n, spread, size) => {
    const out = [];
    for (let i = 0; i < n; i++) {
      out.push(ellipsoid(size * (0.8 + r() * 0.6), size * (0.8 + r() * 0.7), size * (0.7 + r() * 0.5), {
        at: [cx + (r() - 0.5) * spread[0], cy + (r() - 0.5) * spread[1], cz + (r() - 0.5) * spread[2]], seg: 8, hseg: 6,
      }));
    }
    return out;
  };
  const sideNodes = merge([
    ...nodes(0.050, 1.540, 0.020, 7, [0.016, 0.060, 0.020], 0.0065),     // cervicali
    ...nodes(0.080, 1.446, 0.020, 3, [0.040, 0.010, 0.010], 0.0060),     // sovraclaveari
    ...nodes(0.178, 1.340, 0.004, 9, [0.036, 0.050, 0.030], 0.0070),     // ascellari
    ...nodes(0.034, 1.320, 0.0, 3, [0.012, 0.030, 0.014], 0.0065),       // ilari / mediastinici
    ...nodes(0.066, 0.935, 0.004, 4, [0.020, 0.030, 0.014], 0.0070),     // iliaci
    ...nodes(0.086, 0.862, 0.058, 7, [0.040, 0.030, 0.012], 0.0075),     // inguinali
  ]);
  const midNodes = merge([
    ...nodes(0.0, 1.030, -0.030, 7, [0.010, 0.090, 0.012], 0.0070),      // paraortici
    ...nodes(0.0, 0.990, 0.010, 8, [0.060, 0.040, 0.030], 0.0070),       // mesenterici
  ]);
  add('linfonodi', ['linfatico'], merge([sideNodes, mirrorX(sideNodes), midNodes]), { color: '#2faa72' });
  add('dotto-toracico', ['linfatico'], tube([[0.004, 1.080, -0.040], [0.010, 1.160, -0.060], [0.012, 1.250, -0.066], [0.016, 1.340, -0.060], [0.030, 1.410, -0.030], [0.044, 1.438, 0.004]], 0.0034, { radial: 8, segs: 24 }), { color: '#35b8a4' });
}
