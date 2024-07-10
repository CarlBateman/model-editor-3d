import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

const Interaction = {
  None: "None",
  Orbit: "Orbit",
  Drag: "Drag",
  Transform: "Transform",
};

let camera, scene, renderer, composer, effectFXAA, outlinePass;
let pointer = new THREE.Vector2();
let meshes = [];
let currentSelection = null;

let dragging = false;
let mouseDown = false;

let interaction = Interaction.None;

let grabPoint = null;
let plane = new THREE.Plane();

let shiftKey = false,
  ctrlKey = false,
  altKey = false;
let control = null;
let orbit = null;

function setupCamera() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  );
  camera.position.set(0, 2, 1.1);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function setupScene() {
  scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0x008800 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  meshes.push(cube);

  const gridHelper = new THREE.GridHelper(100, 100);
  scene.add(gridHelper);

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x000040, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

function setupControls() {
  orbit = new OrbitControls(camera, renderer.domElement);

  control = new TransformControls(camera, renderer.domElement);
  control.setMode("scale");
  control.enabled = false;
  scene.add(control);
}

function setupPostProcessing() {
  composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  outlinePass = new OutlinePass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    scene,
    camera
  );
  outlinePass.edgeStrength = 1;
  outlinePass.edgeGlow = 4;
  outlinePass.edgeThickness = 1;
  composer.addPass(outlinePass);

  effectFXAA = new ShaderPass(FXAAShader);
  effectFXAA.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
  composer.addPass(effectFXAA);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);
}

// function setupEventListeners() {
//   window.addEventListener("resize", onWindowResize);
//   window.addEventListener("keydown", onKeyDown);
//   window.addEventListener("keyup", onKeyUp);
//   window.addEventListener("mousedown", onMouseDown);
//   window.addEventListener("mouseup", onMouseUp);
//   window.addEventListener("mousemove", onPointerMove);
//   window.addEventListener("dblclick", onDoubleClick);
// }

function setup() {
  setupCamera();
  setupScene();
  setupRenderer();
  setupControls();
  setupPostProcessing();
  // setupEventListeners();
}

function addMesh(response) {
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: response.texture,
  });
  const geometry = new THREE.PlaneGeometry(0.5, 0.5 * response.ratio);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  meshes.push(mesh);
}

function animation() {
  renderer.render(scene, camera);
  if (composer) composer.render();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);

  effectFXAA.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
}

function onKeyDown(e) {
  shiftKey = e.shiftKey;
  ctrlKey = e.ctrlKey;
  altKey = e.altKey;
}

function onKeyUp(e) {
  shiftKey = e.shiftKey;
  ctrlKey = e.ctrlKey;
  altKey = e.altKey;
  // if (e.key == "Delete" || e.key == "Backspace") {
  //   if (currentSelection != null) {
  //     control.detach();

  //     const index = meshes.indexOf(currentSelection);
  //     meshes.splice(index, 1);
  //     inactiveMeshes.push(currentSelection);

  //     currentSelection.visible = false;
  //     currentSelection = null;
  //   }
  //   return;
  // }
}

function onMouseUp(event) {
  if (orbit.enabled && !dragging) {
    currentSelection = null;
    outlinePass.selectedObjects = [];
    control.detach();
    control.enabled = false;
  }
  dragging = false;
  interaction = Interaction.None;
  orbit.enabled = true;
  mouseDown = false;
}

function onMouseDown(event) {
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(pointer, camera);
  mouseDown = true;

  const intersects = raycaster.intersectObjects(meshes);
  if (intersects.length > 0) {
    if (interaction !== Interaction.Transform) {
      orbit.enabled = false;
      interaction = Interaction.Drag;

      currentSelection = intersects[0].object;
      outlinePass.selectedObjects = [currentSelection];

      const fwd = new THREE.Vector3();
      camera.getWorldDirection(fwd);

      const d = currentSelection.position.clone().negate().projectOnVector(fwd);
      const sd = d.dot(fwd);
      plane.set(fwd, sd);

      const intersect = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersect);
      grabPoint = intersect;
    }
  } else {
    orbit.enabled = true;
    interaction = Interaction.Orbit;
  }
}

function onDoubleClick() {
  if (currentSelection) {
    if (control.enabled && control.mode === "scale") {
      interaction = Interaction.None;
      control.setMode("scale");
      control.detach();
      control.enabled = false;
    } else {
      interaction = Interaction.Transform;
      control.attach(currentSelection);
      switch (control.mode) {
        case "translate":
          control.setMode("rotate");
          break;
        case "rotate":
          control.setMode("scale");
          break;
        case "scale":
          control.setMode("translate");
          break;
      }
      control.enabled = true;
      orbit.enabled = false;
    }
  }
}

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  dragging = mouseDown;

  if (interaction === Interaction.Drag) {
    const newGrabPoint = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, newGrabPoint);

    // let change = grabPoint.clone();
    // change.sub(newGrabPoint);

    const change = grabPoint.clone().sub(newGrabPoint);

    if (ctrlKey) {
      const a = grabPoint.clone();
      const b = newGrabPoint.clone();
      currentSelection.worldToLocal(a);
      currentSelection.worldToLocal(b);
      const ab = a.clone().cross(b);
      const r = b.angleTo(a);
      currentSelection.rotateZ(r * Math.sign(ab.z));
    } else {
      currentSelection.position.sub(change);
    }
    grabPoint = newGrabPoint;
  }
}

function debugShowPoint(pos) {
  const geometry = new THREE.SphereGeometry(0.01);
  const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...pos);
  scene.add(mesh);
}

const controller = {
  setup,
  onMouseDown,
  onWindowResize,
  onPointerMove,
  onMouseUp,
  onKeyUp,
  onKeyDown,
  onDoubleClick,
};

export { controller };
