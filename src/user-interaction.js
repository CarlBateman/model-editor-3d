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
  let transformControlDragging = false;

  let plane = new THREE.Plane();
  let transformControl, orbitControl;
  const raycaster = new THREE.Raycaster();

  const userinteraction = {
    setup: function () {
      orbitControl = new OrbitControls(camera, renderer.domElement);

      transformControl = new TransformControls(camera, renderer.domElement);
      transformControl.addEventListener("dragging-changed", function (event) {
        transformControlDragging = !event.value;
      });

      transformControl.setMode("scale");
      transformControl.enabled = false;
      scene.add(transformControl);
    },

    onKeyDown: function (event) {
      shiftKey = event.shiftKey;
      ctrlKey = event.ctrlKey;
      altKey = event.altKey;
    },

    onKeyUp: function (event) {
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
    },

    onMouseDown: function (event) {
      if (event.target.id !== "editor-view") return;

      // if selected new object then drag
      // if reselected old object and not transforming then drag
      // if nothing selected then orbit

      raycaster.setFromCamera(pointer, camera);
      mouseDown = true;

      const intersectedObjects = raycaster.intersectObjects(meshes);
      if (intersectedObjects.length > 0) {
        // object selecting so drag or transform
        if (currentSelection !== intersectedObjects[0].object) {
          // selection changed or new
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
      }
    },

    onPointerMove: function (event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      dragging = mouseDown;

      orbitControl.enabled = transformControlDragging;

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
      }
    },

    onMouseUp: function (event) {
      if (event.target.id !== "editor-view") return;

      if (orbitControl.enabled && !dragging) {
        currentSelection = null;
        transformControl.detach();
        transformControl.enabled = false;
        transformControl.setMode("scale");
      }
      dragging = false;
      // interaction = Interaction.None;
      orbitControl.enabled = true;
      mouseDown = false;
    },

    onDoubleClick: function (event) {
      if (event.target.id !== "editor-view") return;

      if (currentSelection) {
        if (transformControl.enabled && transformControl.mode === "scale") {
          interaction = Interaction.None;
          transformControl.detach();
          transformControl.setMode("translate");
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
    },

    getCurrentSelection: function () {
      return currentSelection;
    },
  };
  return userinteraction;
}
let userinteraction = MakeUserInteraction();

export { userinteraction };
