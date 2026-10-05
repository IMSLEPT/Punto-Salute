// Scheletro e muscoli reali: BodyParts3D 4.0 (© The Database Center for Life Science, CC BY 4.0).
// Dati semplificati offline (web/tools/optimize-anatomy.mjs). I nomi mesh hanno la forma <regione><nome>isaFJ<id>[M].
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import f1 from '../assets/anatomy/head-neck.glb';
import f2 from '../assets/anatomy/shoulder.glb';
import f3 from '../assets/anatomy/elbow-forearm.glb';
import f4 from '../assets/anatomy/wrist-hand.glb';
import f5 from '../assets/anatomy/spine-trunk.glb';
import f6 from '../assets/anatomy/hip-pelvis.glb';
import f7 from '../assets/anatomy/knee.glb';
import f8 from '../assets/anatomy/ankle-foot.glb';
import s1 from '../assets/anatomy/supplement-shoulder-muscle.glb';
import s2 from '../assets/anatomy/supplement-spine-trunk-muscle-pectorals.glb';
import s3 from '../assets/anatomy/supplement-spine-trunk-muscle-abdominals.glb';
import s4 from '../assets/anatomy/supplement-spine-trunk-muscle-erector-spinae.glb';
import s5 from '../assets/anatomy/supplement-spine-trunk-connective.glb';
import s6 from '../assets/anatomy/supplement-hip-pelvis-muscle.glb';
import s7 from '../assets/anatomy/supplement-knee-muscle.glb';
import s8 from '../assets/anatomy/supplement-elbow-forearm-muscle.glb';
import s9 from '../assets/anatomy/supplement-wrist-hand-muscle.glb';
import s10 from '../assets/anatomy/supplement-ankle-foot-muscle.glb';
import s11 from '../assets/anatomy/supplement-ankle-foot-connective.glb';
import s12 from '../assets/anatomy/supplement-head-neck-connective.glb';

const URLS = [f1, f2, f3, f4, f5, f6, f7, f8, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
const REGION = /^(head-neck|shoulder|elbow-forearm|wrist-hand|spine-trunk|hip-pelvis|knee|ankle-foot|supplemental)/;

// ordine importante: la prima regola che combacia vince
const RULES = [
  [/disk|symphysis/, 'dischi-intervertebrali', 'scheletro'],
  [/calcaneal-tendon/, 'tendine-d-achille', 'scheletro'],
  [/ligament|membrane|retinaculum|tendon/, 'legamenti-e-membrane', 'scheletro'],
  [/(^|-)rib$/, 'coste', 'scheletro'],
  [/vertebra|^atlas$|^axis$/, 'colonna', 'scheletro'],
  [/sacrum|hip-bone/, 'bacino', 'scheletro'],
  [/occiput|frontal-bone|parietal|temporal-bone|sphenoid|ethmoid|nasal|lacrimal|maxilla|mandible|palatine|vomer|zygomatic|hyoid/, 'cranio', 'scheletro'],
  [/clavicle/, 'clavicola', 'scheletro'],
  [/scapula$/, 'scapola', 'scheletro'],
  [/humerus/, 'omero', 'scheletro'],
  [/^ulna$|^radius$/, 'avambraccio-ossa', 'scheletro'],
  [/scaphoid|lunate|triquetral|pisiform|trapezium|trapezoid|capitate|hamate|metacarpal|(phalanx-of-(thumb|index|middle|ring|little)-finger)|phalanx-of-thumb/, 'mano-ossa', 'scheletro'],
  [/femur/, 'femore', 'scheletro'],
  [/patella/, 'rotula', 'scheletro'],
  [/tibia$|fibula$/, 'gamba-ossa', 'scheletro'],
  [/calcaneus|talus|cuboid|cuneiform|navicular|metatarsal|toe|sesamoid/, 'piede-ossa', 'scheletro'],
  // muscoli
  [/pectoralis/, 'muscolo-pettorale', 'muscoli'],
  [/deltoid/, 'muscolo-deltoide', 'muscoli'],
  [/biceps-brachii/, 'muscolo-bicipite', 'muscoli'],
  [/triceps/, 'muscolo-tricipite', 'muscoli'],
  [/extensor-digitorum-longus|flexor-digitorum-(longus|brevis)|fibularis|tibialis-posterior|plantaris/, 'muscoli-peronei-flessori', 'muscoli'],
  [/tibialis-anterior/, 'muscolo-tibiale-anteriore', 'muscoli'],
  [/brachioradialis|extensor-carpi|extensor-digitorum|flexor-carpi|pronator|supinator|palmaris|finger-flexors/, 'muscoli-avambraccio', 'muscoli'],
  [/external-oblique/, 'muscoli-obliqui', 'muscoli'],
  [/trapezius/, 'muscolo-trapezio', 'muscoli'],
  [/levator-scapulae|rhomboid/, 'muscoli-romboidi', 'muscoli'],
  [/serratus/, 'muscolo-dentato-anteriore', 'muscoli'],
  [/supraspinatus|infraspinatus|subscapularis|teres/, 'muscoli-cuffia-rotatori', 'muscoli'],
  [/erector-spinae/, 'muscoli-erettori-spinali', 'muscoli'],
  [/gluteus|piriformis|obturator/, 'muscolo-gluteo', 'muscoli'],
  [/psoas|iliacus/, 'muscolo-psoas-iliaco', 'muscoli'],
  [/quadriceps/, 'muscolo-quadricipite', 'muscoli'],
  [/biceps-femoris|semitendinosus|semimembranosus/, 'muscoli-ischiocrurali', 'muscoli'],
  [/gastrocnemius|soleus|popliteus/, 'muscolo-gastrocnemio', 'muscoli'],
  [/sternocleidomastoid/, 'muscolo-sternocleidomastoideo', 'muscoli'],
  [/adductor|gracilis|sartorius/, 'muscoli-adduttori', 'muscoli'],
];

export function classify(raw) {
  const base = raw.replace(REGION, '').replace(/isaFJ\d+M?$/, '').replace(/partofFJ\d+$/, '').replace(/^-/, '');
  for (const [re, ent, layer] of RULES) if (re.test(base)) return { base, ent, layer };
  return { base, ent: null, layer: null };
}

let cache = null;

/** Carica tutti i GLB e restituisce le parti con geometria cotta in coordinate mondo. */
export async function loadReal() {
  if (cache) return cache;
  const loader = new GLTFLoader();
  const parts = [];
  const gltfs = await Promise.all(URLS.map((u) => loader.loadAsync(u)));
  for (const g of gltfs) {
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => {
      if (!o.isMesh) return;
      const geo = o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      for (const k of Object.keys(geo.attributes)) if (k !== 'position' && k !== 'normal') geo.deleteAttribute(k);
      if (!geo.attributes.normal) geo.computeVertexNormals();
      geo.computeBoundingBox();
      const c = classify(o.name || '');
      const box = geo.boundingBox.clone();
      const cx = (box.min.x + box.max.x) / 2;
      parts.push({ name: o.name, base: c.base, ent: c.ent, layer: c.layer, geo, box, side: cx > 0.004 ? 1 : cx < -0.004 ? -1 : 0 });
    });
  }
  cache = parts;
  return parts;
}

/** Unisce le geometrie (indicizzate, solo position+normal). */
export function mergeReal(geos) {
  const gs = geos.map((g) => (g.index ? g : g.toNonIndexed()));
  const allIdx = gs.every((g) => g.index);
  const out = mergeGeometries(allIdx ? gs : gs.map((g) => (g.index ? g.toNonIndexed() : g)));
  return out;
}

export const REAL_COLORS = { scheletro: '#ece1c8', muscoli: '#b9453b' };
