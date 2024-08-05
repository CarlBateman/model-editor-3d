import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

function MakeSelectionHighlighter(renderer, scene, camera) {
	let composer = null;
	let outlinePass = null;
	let effectFXAA = null;

	(function setup() {
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

		addEventListener("objectSelected", updateSelection, false);

	})();

	function updateSelection(e) {
		if (e.detail.mesh) {
			if (outlinePass.selectedObjects && outlinePass.selectedObjects[0] !== e.detail.mesh) {
				let curr = e.detail.mesh;
				outlinePass.selectedObjects = [curr];
			}
		} else {
			outlinePass.selectedObjects = [];
		}
	}

	return {
		resize(innerWidth, innerHeight) {
			composer.setSize(innerWidth, innerHeight);
			effectFXAA.uniforms["resolution"].value.set(
				1 / innerWidth,
				1 / innerHeight
			);
		},

		render() {
			if (composer) composer.render();
		},
	};
}

export { MakeSelectionHighlighter };