function MakeMeshInfo() {
	const infoDiv = document.getElementById("info");

	function initInfo(e) {
		initializeInfoDiv(e.detail.mesh);

		removeEventListener("objectSelected", initInfo);

		addEventListener("objectSelected", updateInfoDiv, false);
	}

	addEventListener("objectSelected", initInfo, false);
	addEventListener("objectMoved", updateInfoDiv, false);

	// addEventListener(
	//   "objectSelected",
	//   (e) => {
	//     initializeInfoDiv(e.detail.mesh);

	//     // removeEventListener("objectSelected");

	//     // const event = new CustomEvent("objectSelected", {
	//     //   detail: { mesh: currentSelection },
	//     // });
	//     // dispatchEvent(event);
	//   },
	//   false
	// );

	let currMesh;

	function getMeshProperties(currMesh) {
		return {
			position: currMesh.position,
			rotation: currMesh.rotation,
			scale: currMesh.scale,
			materialColor: currMesh.material.color,
			geometryType: currMesh.geometry.type,
		};
	}

	function createPropertyEventHandler(object, property, axis) {
		return function (event) {
			object[property][axis] = parseFloat(event.target.value);
		};
	}

	function createColorEventHandler(material) {
		return function (event) {
			material.color.set(event.target.value);
		};
	}

	function setEventHandlers() {
		document.querySelectorAll("input[data-prop]").forEach((input) => {
			const [property, axis] = input.getAttribute("data-prop").split("-");
			if (property === "color") {
				input.addEventListener(
					"input",
					createColorEventHandler(currMesh.material)
				);
			} else {
				input.addEventListener(
					"input",
					createPropertyEventHandler(currMesh, property, axis)
				);
			}
		});
	}

	function generateTableRow(propertyName, property, labels) {
		let row = `<tr><td class="propertyName">${propertyName}</td>`;
		labels.forEach((label) => {
			const axis = label.toLowerCase();
			const value =
				property[axis] !== undefined ? property[axis].toFixed(2) : 0;
			row += `<td><label for="${propertyName}-${axis}">${label}: </label><input type="number" id="${propertyName}-${axis}" data-prop="${propertyName}-${axis}" value="${value}"></td>`;
		});
		row += "</tr>";
		return row;
	}

	function updateInputValue(propertyName, property, labels) {
		labels.forEach((label) => {
			const axis = label.toLowerCase();
			const input = document.getElementById(`${propertyName}-${axis}`);
			if (input) {
				input.value =
					property[axis] !== undefined ? property[axis].toFixed(2) : 0;
			}
		});
	}

	function updateColorInputValue(color) {
		const input = document.getElementById("color");
		if (input) {
			input.value = `#${color.getHexString()}`;
		}
	}

	// Function to initialize the HTML div with currMesh properties in a table
	function initializeInfoDiv(mesh) {
		currMesh = mesh;
		const properties = getMeshProperties(currMesh);
		let tableContent = "";

		if (properties.position) {
			// prettier-ignore
			tableContent += generateTableRow('position', properties.position, ['X', 'Y', 'Z']);
		}
		if (properties.rotation) {
			// prettier-ignore
			tableContent += generateTableRow('rotation', properties.rotation, ['X', 'Y', 'Z']);
		}
		if (properties.scale) {
			// prettier-ignore
			tableContent += generateTableRow('scale', properties.scale, ['X', 'Y', 'Z']);
		}
		if (properties.materialColor) {
			tableContent += `
                  <tr>
                      <td>Material Color</td>
                      <td colspan="3"><label for="color">Color: </label><input type="color" id="color" data-prop="color" value="#${properties.materialColor.getHexString()}"></td>
                  </tr>
              `;
		}
		if (properties.geometryType) {
			tableContent += `
                  <tr>
                      <td>Geometry Type</td>
                      <td colspan="3">${properties.geometryType}</td>
                  </tr>
              `;
		}

		infoDiv.innerHTML = `<strong>Properties</strong><table class="blueTable">${tableContent}</table>`;

		// Set the event handlers after updating the HTML
		setEventHandlers();
	}

	// Function to update the HTML div with currMesh properties in a table
	function updateInfoDiv(e) {
		if (e.detail.mesh) {
			currMesh = e.detail.mesh;
			const properties = getMeshProperties(currMesh);
			if (properties.position) {
				// prettier-ignore
				updateInputValue('position', properties.position, ['X', 'Y', 'Z']);
			}
			if (properties.rotation) {
				updateInputValue("rotation", properties.rotation, ["X", "Y", "Z"]);
			}
			if (properties.scale) {
				updateInputValue("scale", properties.scale, ["X", "Y", "Z"]);
			}
			if (properties.materialColor) {
				updateColorInputValue(properties.materialColor);
			}
			document.getElementById("1").style.display = "block";
		} else {
			document.getElementById("1").style.display = "none";
		}

	}

	return { updateInfoDiv, initializeInfoDiv };
}

const meshinfo = MakeMeshInfo();

export { meshinfo };
