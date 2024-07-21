import { drag } from "./interact";
import { dragElement } from "./dragElement";
import { controller } from "./controller.js";
import { userinteraction } from "./user-interaction.js";
import { meshinfo } from "./meshinfo.js";

let el = document.getElementById("myDiv");
if (el) dragElement(el);
drag.setup();

controller.setup();
userinteraction.setup();

window.addEventListener("resize", controller.onWindowResize);
document.addEventListener("pointermove", userinteraction.onPointerMove);
document.addEventListener("mousedown", userinteraction.onMouseDown);
document.addEventListener("mouseup", userinteraction.onMouseUp);
document.addEventListener("keyup", userinteraction.onKeyUp);
document.addEventListener("keydown", userinteraction.onKeyDown);
document.addEventListener("dblclick", userinteraction.onDoubleClick);
