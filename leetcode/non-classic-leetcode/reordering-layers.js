/**
Implement reorderLayer(layers: string[], from: number, to: number) that moves the element at from index to to index.
 */

function reorderLayer(layers, indexFrom, indexTo) {
	if (
		!Array.isArray(layers) ||
		layers.length < 2 ||
		!Number.isInteger(indexFrom) ||
		!Number.isInteger(indexTo) ||
		indexFrom >= layers.length ||
		indexTo >= layers.length ||
		indexFrom < 0 ||
		indexTo < 0
	) {
		return layers;
	}

	const [removedLayer] = layers.splice(indexFrom, 1);
	layers.splice(indexTo, 0, removedLayer);
	return layers;
}

// test cases
console.log(reorderLayer(['A', 'B', 'C', 'D'], 1, 3));
// ['A', 'C', 'D', 'B']

console.log(reorderLayer(['X', 'Y', 'Z'], 0, 2));
// ['Y', 'Z', 'X']

console.log(reorderLayer(['Header', 'Body', 'Footer'], 2, 0));
// ['Footer', 'Header', 'Body']

console.log(reorderLayer(['Layer1'], 0, 0));
// ['Layer1'] (no change)

console.log(reorderLayer(['A', 'B'], 5, 0));
// ['A', 'B'] (invalid index — no change)
