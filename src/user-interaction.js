import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera, renderer, scene, meshes } from "./controller.js";

const Interaction = {
	None: "None",
	Orbit: "Orbit",
	Drag: "Drag",
	Transform: "Transform",
};

function MakeUserInteraction() {
	let interaction = Interaction.None;

	let pointer = new THREE.Vector2();

	let shiftKey = false;
	let ctrlKey = false;
	let altKey = false;

	let currentSelection, grabPoint;

	let dragging = false;
	let transformDragging = false;
	let mouseDown = false;

	let plane = new THREE.Plane();
	let transformControl, orbitControl;
	const raycaster = new THREE.Raycaster();

	function setup() {
		orbitControl = new OrbitControls(camera, renderer.domElement);

		transformControl = new TransformControls(camera, renderer.domElement);

		transformControl.addEventListener("change", function (event) {
			const objectMovedEvent = new CustomEvent("objectMoved", {
				detail: { mesh: transformControl.object },
			});
			//console.log(transformControl);
			dispatchEvent(objectMovedEvent);


		});

		transformControl.addEventListener('dragging-changed', function (event) {
			orbitControl.enabled = !event.value;
			transformDragging = event.value;
		});



		transformControl.setMode("scale");
		transformControl.enabled = false;
		scene.add(transformControl);
	}

	function onKeyDown(event) {
		shiftKey = event.shiftKey;
		ctrlKey = event.ctrlKey;
		altKey = event.altKey;
	}

	function onKeyUp(event) {
		shiftKey = event.shiftKey;
		ctrlKey = event.ctrlKey;
		altKey = event.altKey;
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

	function onMouseDown(event) {
		if (event.target.id !== "editor-view") return;

		// if selected new object then drag
		// if reselected old object and not transforming then drag
		// if nothing selected then orbit
		mouseDown = true;

		if (transformDragging) return;

		raycaster.setFromCamera(pointer, camera);

		const intersectedObjects = raycaster.intersectObjects(meshes);
		if (intersectedObjects.length > 0) {
			// object selecting so drag or transform
			if (currentSelection !== intersectedObjects[0].object) {
				// selection changed or new
				currentSelection = intersectedObjects[0].object;

				const objectSelectedEvent = new CustomEvent("objectSelected", {
					detail: { mesh: currentSelection },
				});
				dispatchEvent(objectSelectedEvent);

				interaction = Interaction.Drag;

				if (transformControl.enabled) {
					transformControl.enabled = false;
					transformControl.detach();
					transformControl.setMode("scale");
				}
			}

			if (interaction !== Interaction.Transform) {
				orbitControl.enabled = false;

				interaction = Interaction.Drag;

				const fwd = new THREE.Vector3();
				camera.getWorldDirection(fwd);

				const d = currentSelection.position.clone();
				d.negate();
				d.projectOnVector(fwd);
				const sd = d.dot(fwd);
				plane.set(fwd, sd);

				const intersect = new THREE.Vector3();
				raycaster.ray.intersectPlane(plane, intersect);
				grabPoint = intersect;
			}

			orbitControl.enabled = false;
			if (transformControl.enabled) interaction = Interaction.Transform;
			else interaction = Interaction.Drag;
		} else {
			//transformControl.enabled = false;
			orbitControl.enabled = true;
			interaction = Interaction.Orbit;
			const objectSelectedEvent = new CustomEvent("objectSelected", {

				detail: { mesh: null },
			});
			dispatchEvent(objectSelectedEvent);

		}
	}

	function onPointerMove(event) {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
		dragging = mouseDown;

		if (interaction === Interaction.Drag && dragging) {
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

			const objectMovedEvent = new CustomEvent("objectMoved", {
				detail: { mesh: currentSelection },
			});

			dispatchEvent(objectMovedEvent);
		}
	}

	function onMouseUp(event) {
		if (event.target.id !== "editor-view") return;

		if (orbitControl.enabled && !dragging) {
			// currentSelection = null;
			transformControl.detach();
			transformControl.enabled = false;
			transformControl.setMode("scale");
		}
		dragging = false;
		// interaction = Interaction.None;
		orbitControl.enabled = true;
		mouseDown = false;
	}

	function onDoubleClick(event) {
		if (event.target.id !== "editor-view") return;

		if (currentSelection) {
			if (transformControl.enabled && transformControl.mode === "scale") {
				interaction = Interaction.Drag;

				transformControl.enabled = false;
				transformControl.detach();
				transformControl.setMode("scale");
			} else {
				interaction = Interaction.Transform;
				transformControl.attach(currentSelection);
				switch (transformControl.mode) {
					case "translate":
						transformControl.setMode("rotate");
						break;
					case "rotate":
						transformControl.setMode("scale");
						break;
					case "scale":
						transformControl.setMode("translate");
						break;
				}
				transformControl.enabled = true;
			}
		}
	}

	function getCurrentSelection() {
		return currentSelection;
	}


	document.addEventListener("pointermove", onPointerMove);
	document.addEventListener("mousedown", onMouseDown);
	document.addEventListener("mouseup", onMouseUp);
	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown);
	document.addEventListener("dblclick", onDoubleClick);

	return { setup };
};

let userinteraction = MakeUserInteraction();

export { userinteraction };
