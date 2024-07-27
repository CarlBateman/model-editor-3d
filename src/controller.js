import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

import { userinteraction } from "./user-interaction.js";

let camera, scene, renderer, composer, effectFXAA, outlinePass;
let meshes = [];
let curr;

function setupCamera() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  );
  camera.position.set(0, 2, 2.1);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function setupScene() {
  scene = new THREE.Scene();

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshLambertMaterial({ color: 0x008800 });
  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 1;
  scene.add(mesh);
  meshes.push(mesh);

  material = new THREE.MeshLambertMaterial({ color: 0x880000 });
  geometry = new THREE.SphereGeometry(0.71);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = -1;
  scene.add(mesh);
  meshes.push(mesh);

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
  renderer.domElement.id = "editor-view";
  document.body.appendChild(renderer.domElement);
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

function setup() {
  addEventListener("objectSelected", updateSelection, false);
  // TODO don't set display = "none" here
  document.getElementById("1").style.display = "none";

  setupCamera();
  setupScene();
  setupRenderer();
  // setupControls();
  setupPostProcessing();
  // setupEventListeners();
}

function updateSelection(e) {
  if (e.detail.mesh) {
    if (curr !== e.detail.mesh) {
      curr = e.detail.mesh;
      outlinePass.selectedObjects = [curr];
    }
  } else {
    outlinePass.selectedObjects = [];
  }}

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

function debugShowPoint(pos) {
  const geometry = new THREE.SphereGeometry(0.01);
  const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...pos);
  scene.add(mesh);
}

// const infoDiv = document.getElementById("info");

const controller = {
  setup,
  onWindowResize,
};

export { controller, camera, renderer, scene, meshes };
