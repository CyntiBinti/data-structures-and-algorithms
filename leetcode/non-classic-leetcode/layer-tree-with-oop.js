/**
Implement two classes:
- Layer(name) with toggleVisibility()
- FigmaDoc that manages multiple Layer instances
Supports:
- addLayer(name)
- toggleVisibility(index)
- getVisibleLayers() → names of visible layers
 */

class Layer {
	visibility = true;

	constructor(layerName) {
		this.layerName = layerName;
	}

	toggleVisibility() {
		this.visibility = !this.visibility;
	}
}

class FigmaDoc {
	layerMap = new Map();

	addLayer(layerName) {
		if (this.layerMap.has(layerName)) {
			return console.error(`Layer ${layerName} already exists`);
		}
		const layer = new Layer(layerName);
		this.layerMap.set(layerName, layer);
	}

	toggleLayer(index) {
		if (
			index === null ||
			Number.isNaN(index) ||
			index < 0 ||
			index > this.layerMap.size - 1
		) {
			return console.error(`Index ${index} invalid`);
		}

		const selectedLayer = [...this.layerMap.values()][index];
		selectedLayer.toggleVisibility();
	}

	getVisibleLayers() {
		return [...this.layerMap.values()]
			.filter((layer) => layer.visibility)
			.map((layer) => layer.layerName);
	}
}

const doc = new FigmaDoc();

// test cases
doc.addLayer('Background');
doc.addLayer('Button');
doc.addLayer('Icon');
console.log(doc.getVisibleLayers()); // ['Background', 'Button', 'Icon']

doc.toggleLayer(1);
console.log(doc.getVisibleLayers()); // ['Background', 'Icon']

doc.toggleLayer(0);
console.log(doc.getVisibleLayers()); // ['Icon']

doc.toggleLayer(5); // invalid index — ignore safely
console.log(doc.getVisibleLayers()); // ['Icon']
