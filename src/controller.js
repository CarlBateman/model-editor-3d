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

let camera, scene, renderer;
let pointer = new THREE.Vector2();
let meshes = [];
let inactiveMeshes = [];
let currentSelection = null;

let dragging = false;
let mouseDown = false;

let interaction = Interaction.None;

let grabPoint = null;
let plane = new THREE.Plane();
const raycaster = new THREE.Raycaster();
let composer, effectFXAA, outlinePass;
let shiftKey = false,
  ctrlKey = false,
  altKey = false;
let control = null;
let orbit = null;

function setup() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  );
  camera.position.z = 1.1;
  camera.position.y = 2;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  //camera.rotateY(-0.2);

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x000040, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
  //window.addEventListener('resize', scene.onWindowResize);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0x008800 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  meshes.push(cube);

  const size = 100;
  const divisions = 100;

  const gridHelper = new THREE.GridHelper(size, divisions);
  scene.add(gridHelper);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // transform control
  orbit = new OrbitControls(camera, renderer.domElement);

  // control = new TransformControls(currentCamera, renderer.domElement);
  // control.addEventListener("change", render);

  // control.addEventListener("dragging-changed", function (event) {
  //   orbit.enabled = !event.value;
  // });

  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;

  control = new TransformControls(camera, renderer.domElement);
  control.setMode("scale");
  control.enabled = false;
  scene.add(control);

  // postprocessing
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

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  effectFXAA = new ShaderPass(FXAAShader);
  effectFXAA.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
  composer.addPass(effectFXAA);
}

function addMesh(response) {
  //const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: response.texture });
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: response.texture,
  });

  const geometry = new THREE.PlaneGeometry(0.5, 0.5 * response.ratio);
  const mesh = new THREE.Mesh(geometry, material);
  //mesh.position.z = 0.1;
  //mesh.position.x = 10;
  //mesh.position.y = 0.5;
  //mesh.rotation.y = 0.5;
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
    if (interaction != Interaction.Transform) {
      orbit.enabled = false;
      interaction = Interaction.Drag;

      currentSelection = intersects[0].object;
      outlinePass.selectedObjects = [currentSelection];

      // construct plane perpendicular to camera forward passing through current selection
      let fwd = new THREE.Vector3();
      camera.getWorldDirection(fwd);

      let d = currentSelection.position.clone();
      d.negate();
      d.projectOnVector(fwd);

      // get signed distance
      let sd = d.dot(fwd);

      // set plane
      plane.set(fwd, sd);

      // cast ray to find grab point
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
  // cycle through transform controls
  // if(Interaction.Drag)
  if (currentSelection) {
    if (control.enabled && control.mode == "scale") {
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

  if (interaction == Interaction.Drag) {
    // cast ray to find new grab point
    const newGrabPoint = new THREE.Vector3();
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, newGrabPoint);

    let change = grabPoint.clone();
    change.sub(newGrabPoint);

    if (ctrlKey) {
      let a = grabPoint.clone();
      let b = newGrabPoint.clone();
      currentSelection.worldToLocal(a);
      currentSelection.worldToLocal(b);
      let ab = a.clone().cross(b);

      let r = b.angleTo(a);
      currentSelection.rotateZ(r * Math.sign(ab.z));
    } else {
      currentSelection.position.sub(change);
    }
    grabPoint = newGrabPoint;
  }
}

function debugShowPoint(pos) {
  //for debug put sphere on intersect point
  const geometry = new THREE.SphereGeometry(0.01);
  const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...pos);
  scene.add(mesh);
}

let controller = {
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
