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
  let mouseDown = false;

  let plane = new THREE.Plane();
  let control, orbit;

  const userinteraction = {
    setup: function () {
      orbit = new OrbitControls(camera, renderer.domElement);

      control = new TransformControls(camera, renderer.domElement);
      control.setMode("scale");
      control.enabled = false;
      scene.add(control);
    },

    onKeyDown: function (e) {
      shiftKey = e.shiftKey;
      ctrlKey = e.ctrlKey;
      altKey = e.altKey;
    },

    onKeyUp: function (e) {
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
    },

    onMouseUp: function (event) {
      if (orbit.enabled && !dragging) {
        currentSelection = null;
        control.detach();
        control.enabled = false;
      }
      dragging = false;
      interaction = Interaction.None;
      orbit.enabled = true;
      mouseDown = false;
    },

    onMouseDown: function (event) {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(pointer, camera);
      mouseDown = true;

      const intersects = raycaster.intersectObjects(meshes);
      if (intersects.length > 0) {
        if (interaction !== Interaction.Transform) {
          orbit.enabled = false;
          interaction = Interaction.Drag;

          currentSelection = intersects[0].object;

          const fwd = new THREE.Vector3();
          camera.getWorldDirection(fwd);

          const d = currentSelection.position
            .clone()
            .negate()
            .projectOnVector(fwd);
          const sd = d.dot(fwd);
          plane.set(fwd, sd);

          const intersect = new THREE.Vector3();
          raycaster.ray.intersectPlane(plane, intersect);
          grabPoint = intersect;
        }
      } else {
        orbit.enabled = true;
        interaction = Interaction.Orbit;
      }
    },

    onDoubleClick: function () {
      if (currentSelection) {
        if (control.enabled && control.mode === "scale") {
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
    },

    onPointerMove: function (event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      dragging = mouseDown;

      if (interaction === Interaction.Drag) {
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
      }
    },

    getCurrentSelection: function () {
      return currentSelection;
    },
  };
  return userinteraction;
}
let userinteraction = MakeUserInteraction();

export { userinteraction };
