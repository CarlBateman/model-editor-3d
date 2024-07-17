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
  setupCamera();
  setupScene();
  setupRenderer();
  // setupControls();
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
  if (userinteraction.getCurrentSelection()) {
    if (curr !== userinteraction.getCurrentSelection()) {
      curr = userinteraction.getCurrentSelection();
      outlinePass.selectedObjects = [curr];
      const properties = getMeshProperties(curr);

      initializeInfoDiv(properties);
    }

    const properties = getMeshProperties(curr);
    updateInfoDiv(properties);
    document.getElementById("1").style.display = "block";
  } else {
    document.getElementById("1").style.display = "none";
    outlinePass.selectedObjects = [];
  }
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

const infoDiv = document.getElementById("info");

function getMeshProperties(mesh) {
  return {
    position: mesh.position,
    rotation: mesh.rotation,
    scale: mesh.scale,
    materialColor: mesh.material.color,
    geometryType: mesh.geometry.type,
  };
}

function createPropertyEventHandler(object, property, axis) {
  return function (event) {
    object[property][axis] = parseFloat(event.target.value);
  };
}

function createColorEventHandler(material) {
  return function (event) {
    material.color.set(event.target.value);
  };
}

function setEventHandlers() {
  document.querySelectorAll("input[data-prop]").forEach((input) => {
    const [property, axis] = input.getAttribute("data-prop").split("-");
    if (property === "color") {
      input.addEventListener(
        "input",
        createColorEventHandler(userinteraction.getCurrentSelection().material)
      );
    } else {
      input.addEventListener(
        "input",
        createPropertyEventHandler(
          userinteraction.getCurrentSelection(),
          property,
          axis
        )
      );
    }
  });
}

function generateTableRow(propertyName, property, labels) {
  let row = `<tr><td>${propertyName}</td>`;
  labels.forEach((label) => {
    const axis = label.toLowerCase();
    const value = property[axis] !== undefined ? property[axis].toFixed(2) : 0;
    row += `<td><label for="${propertyName}-${axis}">${label}: </label><input type="number" id="${propertyName}-${axis}" data-prop="${propertyName}-${axis}" value="${value}"></td>`;
  });
  row += "</tr>";
  return row;
}

function updateInputValue(propertyName, property, labels) {
  labels.forEach((label) => {
    const axis = label.toLowerCase();
    const input = document.getElementById(`${propertyName}-${axis}`);
    if (input) {
      input.value =
        property[axis] !== undefined ? property[axis].toFixed(2) : 0;
    }
  });
}

function updateColorInputValue(color) {
  const input = document.getElementById("color");
  if (input) {
    input.value = `#${color.getHexString()}`;
  }
}

// Function to initialize the HTML div with mesh properties in a table
function initializeInfoDiv(properties) {
  let tableContent = "";

  if (properties.position) {
    // prettier-ignore
    tableContent += generateTableRow('position', properties.position, ['X', 'Y', 'Z']);
  }
  if (properties.rotation) {
    // prettier-ignore
    tableContent += generateTableRow('rotation', properties.rotation, ['X', 'Y', 'Z']);
  }
  if (properties.scale) {
    // prettier-ignore
    tableContent += generateTableRow('scale', properties.scale, ['X', 'Y', 'Z']);
  }
  if (properties.materialColor) {
    tableContent += `
                <tr>
                    <td>Material Color</td>
                    <td colspan="3"><label for="color">Color: </label><input type="color" id="color" data-prop="color" value="#${properties.materialColor.getHexString()}"></td>
                </tr>
            `;
  }
  if (properties.geometryType) {
    tableContent += `
                <tr>
                    <td>Geometry Type</td>
                    <td colspan="3">${properties.geometryType}</td>
                </tr>
            `;
  }

  infoDiv.innerHTML = `<strong>Properties</strong><table class="blueTable">${tableContent}</table>`;

  // Set the event handlers after updating the HTML
  setEventHandlers();
}

// Function to update the HTML div with mesh properties in a table
function updateInfoDiv(properties) {
  if (properties.position) {
    // prettier-ignore
    updateInputValue('position', properties.position, ['X', 'Y', 'Z']);
  }
  if (properties.rotation) {
    updateInputValue("rotation", properties.rotation, ["X", "Y", "Z"]);
  }
  if (properties.scale) {
    updateInputValue("scale", properties.scale, ["X", "Y", "Z"]);
  }
  if (properties.materialColor) {
    updateColorInputValue(properties.materialColor);
  }
}

const controller = {
  setup,
  onWindowResize,
};

export { controller, camera, renderer, scene, meshes };
