class Layer {
	isVisible = true;

	constructor(name) {
		this.name = name;
	}

	toggleVisbility() {
		this.isVisible = !this.isVisible;
	}
}

class Document {
	layersMap = new Map();
	layerCount = 0;

	addNewLayer(layerName) {
		if (this.layersMap.has(layerName)) {
			throw new Error('this layer name already exists');
		} else {
			const newLayer = new Layer(layerName);
			this.layersMap.set(layerName, newLayer);
			this.layerCount++;
		}
	}

	removeLayer(existingLayerName) {
		if (this.layersMap.has(existingLayerName)) {
			this.layersMap.delete(existingLayerName);
			this.layerCount--;
		} else {
			throw new Error('this layer name does not exist');
		}
	}

	toggleLayerVisibility(layerName) {
		if (this.layersMap.has(layerName)) {
			const layer = this.layersMap.get(layerName);
			layer.toggleVisbility();
		} else {
			throw new Error('this layer name does not exist');
		}
	}

	printLayers() {
		console.log(
			`there are currently ${this.layerCount} layers created in this document:`
		);
		this.layersMap.forEach((layer) => {
			console.log(
				`${layer.name}: ${layer.isVisible ? 'Visible' : 'Hidden'}`
			);
		});
	}
}

// testcases
const doc = new Document();
doc.addNewLayer('Background');
doc.addNewLayer('Background');
doc.removeLayer('Button');
doc.addNewLayer('Text');
doc.printLayers();
doc.toggleLayerVisibility('Text');
doc.toggleLayerVisibility('Button');
doc.printLayers();
doc.removeLayer('Background');
doc.printLayers();
