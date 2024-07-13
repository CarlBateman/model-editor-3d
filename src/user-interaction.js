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
  let transformControl, orbitControl;

  const userinteraction = {
    setup: function () {
      orbitControl = new OrbitControls(camera, renderer.domElement);

      transformControl = new TransformControls(camera, renderer.domElement);
      transformControl.setMode("scale");
      transformControl.enabled = false;
      scene.add(transformControl);
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

    onMouseDown: function (event) {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(pointer, camera);
      mouseDown = true;

      const intersectedObjects = raycaster.intersectObjects(meshes);
      if (intersectedObjects.length > 0) {
        if (currentSelection !== intersectedObjects[0].object) {
          currentSelection = intersectedObjects[0].object;
          interaction = Interaction.Drag;

          if (transformControl.enabled) {
            transformControl.enabled = false;
            transformControl.detach();
            transformControl.setMode("scale");
          }
        }

        if (interaction !== Interaction.Transform) {
          orbitControl.enabled = false;

          // set interaction to drag only if changed
          interaction = Interaction.Drag;

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
        orbitControl.enabled = true;
        interaction = Interaction.Orbit;
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

    onMouseUp: function (event) {
      if (orbitControl.enabled && !dragging) {
        currentSelection = null;
        transformControl.detach();
        transformControl.enabled = false;
        transformControl.setMode("scale");
      }
      dragging = false;
      interaction = Interaction.None;
      orbitControl.enabled = true;
      mouseDown = false;
    },

    onDoubleClick: function () {
      if (currentSelection) {
        if (transformControl.enabled && transformControl.mode === "scale") {
          interaction = Interaction.None;
          transformControl.setMode("scale");
          transformControl.detach();
          transformControl.enabled = false;
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
          // orbit.enabled = false;
        }
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
