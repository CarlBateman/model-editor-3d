// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import interact from "interactjs";
import { drag } from "./interact";
import { dragElement } from "./dragElement";
import { scene } from "./scene.js";

let el = document.getElementById("mydiv");
if (el) {
  dragElement(el);
}

// this function is used later in the resizing and gesture demos
drag.setup();

scene.setup();

window.addEventListener("resize", scene.onWindowResize);
document.addEventListener("pointermove", scene.onPointerMove);
document.addEventListener("mousedown", scene.pick);
document.addEventListener("keyup", scene.onkeyup);
