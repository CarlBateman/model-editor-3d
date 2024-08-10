import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { OrbitControls } from "../three-custom/OrbitControl.js";
import { camera, renderer, scene, meshes } from "./controller.js";

function createUserInteraction() {
	const pointer = new THREE.Vector2();
	let shiftKey = false;
	let ctrlKey = false;
	let altKey = false;
	let currentSelection = null;
	let grabPoint = null;
	let mouseDown = false;
	let dragging = false;
	let transformDragging = false;
	const plane = new THREE.Plane();
	let transformControl = null;
	let orbitControl = null;
	const raycaster = new THREE.Raycaster();

	// Create instances of each state upfront
	const baseState = createBaseState();
	const orbitState = createOrbitState();
	const dragState = createDragState();
	const transformState = createTransformState();
	let state = baseState;

	function transitionTo(newState) {
		// console.log(state.name, " > ", newState.name);
		state = newState;
	}

	function setup() {
		orbitControl = new OrbitControls(camera, renderer.domElement);
		transformControl = new TransformControls(camera, renderer.domElement);

		transformControl.addEventListener("change", onTransformChange);
		transformControl.addEventListener("dragging-changed", onTransformDraggingChanged);

		transformControl.setMode("scale");
		transformControl.enabled = false;
		scene.add(transformControl);

		addEventListeners();
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
	}

	function onTransformChange(event) {
		const mesh = transformControl.object ? transformControl.object : currentSelection;
		const objectMovedEvent = new CustomEvent("objectMoved", {
			detail: { mesh },
		});
		dispatchEvent(objectMovedEvent);
	}

	function onTransformDraggingChanged(event) {
		orbitControl.enabled = !event.value;
		transformDragging = event.value;
	}

	function addEventListeners() {
		document.addEventListener("pointermove", onPointerMove);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("keyup", onKeyUp);
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("dblclick", onDoubleClick);
	}

	function onPointerMove(event) {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
		dragging = mouseDown
		//// console.log("Move", state.name);
		state.onPointerMove(event);
	}

	function onMouseDown(event) {
		if (event.target.id !== "editor-view") return;
		mouseDown = true;
		// console.log("Down", state.name);
		state.onMouseDown(event);
	}

	function onMouseUp(event) {
		mouseDown = false;
		orbitControl.enabled = true;
		// console.log("Up", state.name);
		state.onMouseUp(event);
	}

	function onDoubleClick(event) {
		 // console.log("Double Click", state.name);
		state.onDoubleClick(event);
	}

	function updateSelection(mesh) {
		if (currentSelection !== mesh) {
			currentSelection = mesh;
			const objectSelectedEvent = new CustomEvent("objectSelected", {
				detail: { mesh }
			});
			dispatchEvent(objectSelectedEvent);

			transformControl.enabled = false;
			transformControl.detach();
			transformControl.setMode("scale");
		}
	}

	function initialiseGrabPoint() {
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

	function createBaseState() {
		let selected = false;
		return {
		name : "BaseState",
			onMouseDown(event) {
				mouseDown = true;
				// look for intersection
				raycaster.setFromCamera(pointer, camera);
				const intersectedObjects = raycaster.intersectObjects(meshes);

				if (intersectedObjects.length > 0) {
					updateSelection(intersectedObjects[0].object);

					initialiseGrabPoint();

					orbitControl.enabled = false;
					transitionTo(dragState);
				} else {
					transitionTo(orbitState);
				}
			},
			onPointerMove(event) { },
			onMouseUp(event) { },
			onDoubleClick(event) {
				if (currentSelection) {
					transformControl.attach(currentSelection);
					transformControl.setMode("translate");
					transformControl.enabled = true;
					transitionTo(transformState);
				}
			},
		};
	}

	function createOrbitState() {
		return {
		name : "OrbitState",
			onPointerMove(event) {
				dragging = mouseDown;
			},
			onMouseDown(event) {
				mouseDown = true;
			},
			onMouseUp(event) {
				if (!dragging) {
					transformControl.detach();
					updateSelection(null);
				}
				transitionTo(baseState);
			},
			onDoubleClick(event) { },
		};
	}

	function createDragState() {
		return {
		name : "DragState",
			onPointerMove(event) {
				const newGrabPoint = new THREE.Vector3();
				raycaster.setFromCamera(pointer, camera);
				raycaster.ray.intersectPlane(plane, newGrabPoint);

				const change = grabPoint.clone().sub(newGrabPoint);
				currentSelection.position.sub(change);
				grabPoint = newGrabPoint;

				const objectMovedEvent = new CustomEvent("objectMoved", {
					detail: { mesh: currentSelection },
				});
				dispatchEvent(objectMovedEvent);
			},
			onMouseDown(event) { },
			onMouseUp(event) {
				transitionTo(baseState);
			},
			onDoubleClick(event) {
				transitionTo(transformState);
			},
		};
	}

	function createTransformState() {
		let currSelection;
		let selectionChanged = false;
		return {
		name : "TransformState",
			onMouseDown(event) {
				selectionChanged = false;
				mouseDown = true;
				// look for intersection
				raycaster.setFromCamera(pointer, camera);
				const intersectedObjects = raycaster.intersectObjects(meshes);

				if (intersectedObjects.length > 0) {
						orbitControl.enabled = false;
					if (currentSelection !== intersectedObjects[0].object) {
						selectionChanged = true;

						updateSelection(intersectedObjects[0].object);

						initialiseGrabPoint();

						transitionTo(dragState);
					}
				} else {
					if (!transformDragging) {
						transitionTo(orbitState);
					}
				}
			},
			onPointerMove(event) { },
			onMouseUp(event) { },
			onDoubleClick(event) {
				if (currentSelection) {
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
							transformControl.detach();
							transformControl.enabled = false;
							transitionTo(baseState);
							break;
					}
					transformControl.enabled = true;
				}
			},
		};
	}

	return { setup };
}

const userInteraction = createUserInteraction();
export { userInteraction };
