// Scena 3D: renderer, camera, controlli, selezione per struttura, livelli (sistemi) visibili.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildSkin } from './body-skin.js';
import { buildSkeleton } from './body-skeleton.js';
import { buildMuscles } from './body-muscles.js';
import { buildTorsoOrgans } from './body-organs.js';
import { buildVessels } from './body-vessels.js';
import { buildNerves } from './body-nerves.js';
import { buildMisc } from './body-misc.js';

export const LAYERS = [
  { id: 'cute', label: 'Cute', icon: 'user-round' },
  { id: 'scheletro', label: 'Scheletro', icon: 'bone' },
  { id: 'muscoli', label: 'Muscoli', icon: 'dumbbell' },
  { id: 'cardiovascolare', label: 'Cardiovascolare', icon: 'heart-pulse' },
  { id: 'vasi', label: 'Arterie e vene', icon: 'droplets' },
  { id: 'nervoso', label: 'Nervoso', icon: 'brain' },
  { id: 'respiratorio', label: 'Respiratorio', icon: 'lungs' },
  { id: 'digerente', label: 'Digerente', icon: 'stomach' },
  { id: 'urinario', label: 'Urinario', icon: 'kidney' },
  { id: 'riproduttivo', label: 'Riproduttivo', icon: 'baby' },
  { id: 'endocrino', label: 'Endocrino', icon: 'flask-conical' },
  { id: 'linfatico', label: 'Linfatico', icon: 'waypoints' },
  { id: 'organi', label: 'Organi', icon: 'cell' },
];

export function createAnatomy(container, { onSelect, onFrame } = {}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    return { error: 'WebGL non disponibile su questo dispositivo.' };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.style.display = 'block';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 20);
  const home = { target: new THREE.Vector3(0, 0.90, 0), dist: 4.3 };
  camera.position.set(0, 1.0, home.dist);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(home.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.minDistance = 0.35;
  controls.maxDistance = 6.5;
  controls.rotateSpeed = 0.75;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.7;
  controls.screenSpacePanning = true;
  controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
  controls.update();

  // luci
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8aa0b8, 0.95));
  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(1.2, 2.4, 2.4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.5);
  rim.position.set(-2, 1.2, -2);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffe2cc, 0.45);
  fill.position.set(-1.5, 0.6, 2.2);
  scene.add(fill);

  // ---------------------------------------------------------------- parti
  const mats = new Map();          // ent -> material
  const entMeshes = new Map();     // ent -> [mesh]
  const meshes = [];
  const root = new THREE.Group();
  scene.add(root);

  function add(ent, layers, geometry, opts = {}) {
    const mkey = ent + (opts.matKey ? '\u0000' + opts.matKey : '');
    let mat = mats.get(mkey);
    if (!mat) {
      mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(opts.color || '#cccccc'),
        roughness: opts.roughness ?? 0.55,
        metalness: 0.02,
        transparent: !!opts.transparent,
        opacity: opts.opacity ?? 1,
        depthWrite: opts.depthWrite ?? true,
        side: opts.double ? THREE.DoubleSide : THREE.FrontSide,
        emissive: new THREE.Color(0x000000),
      });
      mat.userData = { base: mat.opacity, baseTransparent: mat.transparent, baseDepth: mat.depthWrite, color: new THREE.Color(opts.color || '#cccccc'), skin: ent === 'cute' };
      mats.set(mkey, mat);
    }
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.userData = { ent, layers, sex: opts.sex || null, key: opts.key || null };
    if (opts.renderOrder != null) mesh.renderOrder = opts.renderOrder;
    root.add(mesh);
    meshes.push(mesh);
    if (!entMeshes.has(ent)) entMeshes.set(ent, []);
    entMeshes.get(ent).push(mesh);
    return mesh;
  }
  for (const b of [buildSkin, buildSkeleton, buildMuscles, buildTorsoOrgans, buildVessels, buildNerves, buildMisc]) b(add);

  // ---------------------------------------------------------------- stato
  const active = new Set(['cute', 'organi']);
  let sex = 'f';
  let selected = null;

  function applyVisibility() {
    for (const m of meshes) {
      const u = m.userData;
      let vis = u.layers.some((l) => active.has(l));
      if (u.sex && u.sex !== sex) vis = false;
      m.visible = vis;
    }
    applySelection();
    invalidate();
  }

  function applySelection() {
    for (const [key, mat] of mats) {
      const ent = key;
      const isSel = selected && (key === selected || key.startsWith(selected + '\u0000'));
      const u = mat.userData;
      if (!selected) {
        mat.opacity = u.base; mat.transparent = u.baseTransparent; mat.depthWrite = u.baseDepth;
        mat.emissive.setHex(0x000000);
      } else if (isSel) {
        mat.opacity = 1; mat.transparent = false; mat.depthWrite = true;
        mat.emissive.copy(u.color).multiplyScalar(0.55);
      } else {
        mat.opacity = u.skin ? Math.min(u.base, 0.07) : 0.14; mat.transparent = true; mat.depthWrite = false;
        mat.emissive.setHex(0x000000);
      }
      mat.needsUpdate = true;
    }
  }

  // ---------------------------------------------------------------- render
  let dirty = true;
  let running = false;
  function invalidate() { dirty = true; if (!running) { running = true; requestAnimationFrame(loop); } }
  const tween = { active: false, t: 0, from: null, to: null };
  function loop() {
    if (!renderer) return;
    let moving = false;
    if (tween.active) {
      tween.t = Math.min(1, tween.t + 0.045);
      const k = 1 - Math.pow(1 - tween.t, 3);
      controls.target.lerpVectors(tween.from.target, tween.to.target, k);
      camera.position.lerpVectors(tween.from.pos, tween.to.pos, k);
      if (tween.t >= 1) tween.active = false;
      moving = true;
    }
    const changed = controls.update();
    renderer.render(scene, camera);
    if (onFrame) onFrame(camera, renderer.domElement);
    dirty = false;
    if (changed || moving || dirty) requestAnimationFrame(loop); else running = false;
  }
  controls.addEventListener('change', invalidate);
  controls.addEventListener('start', invalidate);

  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = w + 'px';
    renderer.domElement.style.height = h + 'px';
    camera.aspect = w / h;
    // su schermi stretti allontana la camera per inquadrare tutta la figura
    camera.fov = w / h < 0.7 ? 38 : 32;
    camera.updateProjectionMatrix();
    invalidate();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  function flyTo(target, dist, dir) {
    const d = dir ? dir.clone().normalize() : camera.position.clone().sub(controls.target).normalize();
    tween.from = { target: controls.target.clone(), pos: camera.position.clone() };
    tween.to = { target: target.clone(), pos: target.clone().add(d.multiplyScalar(dist)) };
    tween.t = 0; tween.active = true;
    invalidate();
  }

  // ---------------------------------------------------------------- selezione
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let down = null;
  const dom = renderer.domElement;
  dom.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  dom.addEventListener('pointerup', (e) => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const dt = performance.now() - down.t;
    down = null;
    if (moved > 7 || dt > 450) return;
    const r = dom.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(meshes.filter((m) => m.visible), false);
    let pick = hits.find((h) => h.object.userData.ent !== 'cute');
    if (!pick) pick = hits.find((h) => h.object.userData.ent === 'cute');
    if (pick) api.select(pick.object.userData.ent, { fly: false });
    else api.select(null);
  });

  function entBox(ent) {
    const box = new THREE.Box3();
    (entMeshes.get(ent) || []).forEach((m) => { if (m.visible) { m.geometry.computeBoundingBox(); box.union(m.geometry.boundingBox); } });
    return box;
  }

  const api = {
    renderer, camera, controls, meshes,
    layers: () => new Set(active),
    hasEnt: (ent) => entMeshes.has(ent),
    ents: () => [...entMeshes.keys()],
    entLayers: (ent) => (entMeshes.get(ent)?.[0]?.userData.layers || []),
    sex: () => sex,
    setLayer(id, on) {
      if (on) active.add(id); else active.delete(id);
      applyVisibility();
    },
    setLayers(list) { active.clear(); list.forEach((l) => active.add(l)); applyVisibility(); },
    setSex(s) { sex = s; applyVisibility(); },
    select(ent, { fly = true } = {}) {
      selected = ent;
      if (ent && !(entMeshes.get(ent) || []).some((m) => m.visible)) {
        // attiva i livelli necessari
        const ls = api.entLayers(ent);
        if (ls.length) active.add(ls[0]);
        const sx = entMeshes.get(ent)?.[0]?.userData.sex;
        if (sx) sex = sx;
        applyVisibility();
      } else applyVisibility();
      if (ent && fly) {
        const box = entBox(ent);
        if (!box.isEmpty()) {
          const c = box.getCenter(new THREE.Vector3());
          const s = box.getSize(new THREE.Vector3());
          const size = Math.max(s.x, s.y, s.z);
          const dist = THREE.MathUtils.clamp(size * 2.6 + 0.35, 0.55, 3.2);
          flyTo(c, dist);
        }
      }
      if (onSelect) onSelect(ent);
    },
    selected: () => selected,
    center(ent) { const b = entBox(ent); return b.isEmpty() ? null : b.getCenter(new THREE.Vector3()); },
    view(name) {
      const t = home.target.clone();
      const dirs = { front: [0, 0, 1], back: [0, 0, -1], left: [1, 0, 0], right: [-1, 0, 0], top: [0.001, 1, 0.001] };
      const d = new THREE.Vector3(...(dirs[name] || dirs.front));
      flyTo(t, home.dist, d);
    },
    reset() { selected = null; applyVisibility(); flyTo(home.target, home.dist, new THREE.Vector3(0, 0.04, 1)); if (onSelect) onSelect(null); },
    focusUp(ent) { api.select(ent, { fly: true }); },
    resize,
    invalidate,
    project(ent) {
      const c = api.center(ent);
      if (!c) return null;
      const v = c.clone().project(camera);
      const r = dom.getBoundingClientRect();
      return { x: (v.x * 0.5 + 0.5) * r.width, y: (-v.y * 0.5 + 0.5) * r.height, behind: v.z > 1 };
    },
    dispose() {
      ro.disconnect();
      controls.dispose();
      meshes.forEach((m) => m.geometry.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
      renderer = null;
    },
  };
  resize();
  applyVisibility();
  return api;
}
