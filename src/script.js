import { drag } from "./interact";
import { dragElement } from "./dragElement";
import { controller } from "./controller.js";
import { userInteraction } from "./user-interaction.js";
import { meshinfo } from "./meshinfo.js";

let el = document.getElementById("myDiv");
if (el) dragElement(el);
drag.setup();

controller.setup();
userInteraction.setup();

window.addEventListener("resize", controller.onWindowResize);
