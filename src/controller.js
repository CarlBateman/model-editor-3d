import * as THREE from "three";
import { MakeSelectionHighlighter } from "./highlightSelection.js";

let camera, scene, renderer, composer, effectFXAA, outlinePass;
let meshes = [];
let selectionHighlighter;

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

function setup() {
  // TODO don't set display = "none" here
  document.getElementById("1").style.display = "none";

  setupCamera();
  setupScene();
  setupRenderer();
  selectionHighlighter = MakeSelectionHighlighter(renderer, scene, camera);
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
  //renderer.render(scene, camera);
  selectionHighlighter.render();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  selectionHighlighter.resize(window.innerWidth, window.innerHeight);
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
  onWindowResize,
};

export { controller, camera, renderer, scene, meshes };
