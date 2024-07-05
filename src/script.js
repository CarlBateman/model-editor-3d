import { drag } from "./interact";
import { dragElement } from "./dragElement";
import { controller } from "./controller.js";

let el = document.getElementById("myDiv");
if (el) dragElement(el);
drag.setup();

controller.setup();

window.addEventListener("resize", controller.onWindowResize);
document.addEventListener("pointermove", controller.onPointerMove);
document.addEventListener("mousedown", controller.onMouseDown);
document.addEventListener("mouseup", controller.onMouseUp);
document.addEventListener("keyup", controller.onKeyUp);
document.addEventListener("keydown", controller.onKeyDown);

// document.getElementById("control_options").addEventListener("mousedown", (event) => event.stopPropagation());
