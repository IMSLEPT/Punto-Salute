// Ottimizza i GLB di BodyParts3D 4.0 (CC BY 4.0, © DBCLS) per l'uso mobile: semplificazione per mesh + fusione.
// uso: node tools/optimize-anatomy.mjs <cartella-sorgente> <cartella-destinazione>
import { NodeIO } from '@gltf-transform/core';
import { weld, simplify, prune, dedup } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import fs from 'node:fs';
import path from 'node:path';

const [src, dst] = process.argv.slice(2);
fs.mkdirSync(dst, { recursive: true });
await MeshoptSimplifier.ready;
const io = new NodeIO();

// rapporti di semplificazione: ossa piu' fedeli, muscoli molto ridotti
const ratioFor = (name, tri) => {
  const n = name.toLowerCase();
  let r;
  if (/parietal|frontal|occiput|temporal|sphenoid|ethmoid|maxilla|mandible|palatine|vomer|zygomatic|lacrimal|nasal/.test(n)) r = 0.18;
  else if (/scapula/.test(n)) r = 0.08;
  else if (/rib/.test(n)) r = 0.28;
  else if (/vertebra|axis|atlas|sacrum/.test(n)) r = 0.34;
  else if (/femur|tibia|fibula|humerus|ulna|radius|clavicle|hip-bone|patella|calcaneus|talus|phalanx|metacarpal|metatarsal|carpal|cuneiform|cuboid|navicular|scaphoid|lunate|capitate|hamate|trapez|pisiform|triquetral|sesamoid/.test(n)) r = 0.45;
  else if (/disk|symphysis/.test(n)) r = 0.25;
  else if (/ligament|membrane|tendon|retinaculum/.test(n)) r = 0.3;
  else if (/external-oblique/.test(n)) r = 0.035;
  else if (/serratus/.test(n)) r = 0.06;
  else if (/erector/.test(n)) r = 0.07;
  else r = 0.16; // muscoli
  const target = Math.max(150, Math.min(tri, tri * r));
  return Math.min(1, target / tri);
};

let before = 0, after = 0;
for (const f of fs.readdirSync(src).filter((x) => x.endsWith('.glb'))) {
  const doc = await io.read(path.join(src, f));
  await doc.transform(weld({ tolerance: 0.00002 }));
  for (const mesh of doc.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      const idx = prim.getIndices();
      if (!idx) continue;
      const tri = idx.getCount() / 3;
      before += tri;
      const ratio = ratioFor(mesh.getName() || f, tri);
      if (ratio < 0.999) {
        try {
          await doc.transform(simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.03, lockBorder: false, _only: prim }));
        } catch (e) { /* fallback sotto */ }
      }
    }
  }
  await doc.transform(prune(), dedup());
  let t = 0;
  for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) t += (p.getIndices()?.getCount() || 0) / 3;
  after += t;
  await io.write(path.join(dst, f), doc);
  console.log(f.padEnd(52), Math.round(t), 'tri', (fs.statSync(path.join(dst, f)).size / 1e6).toFixed(2), 'MB');
}
console.log('triangoli', Math.round(before), '->', Math.round(after));
