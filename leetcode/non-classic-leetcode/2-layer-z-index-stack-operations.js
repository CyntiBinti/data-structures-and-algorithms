// ==============================================
// PROBLEM 2: LAYER Z-INDEX STACK OPERATIONS
// ==============================================

/*
LEVEL: MEDIUM

Create a LayerStack class that manages layer ordering (z-index) with stack-like operations. Layers are stored from bottom (index 0) to top (highest index).

The class should support:
- bringToFront(layerId): Move layer to top of stack
- sendToBack(layerId): Move layer to bottom of stack  
- bringForward(layerId): Move layer up one position
- sendBackward(layerId): Move layer down one position
- getOrder(): Return current layer order

Example 1:
stack = new LayerStack(['bg', 'content', 'overlay'])
stack.bringToFront('bg')
stack.getOrder() → ['content', 'overlay', 'bg']

Example 2:
stack = new LayerStack(['a', 'b', 'c'])
stack.sendBackward('c')
stack.getOrder() → ['a', 'c', 'b']

Example 3:
stack = new LayerStack(['single'])
stack.bringToFront('single')
stack.getOrder() → ['single']

Example 4:
stack = new LayerStack([])
stack.bringToFront('nonexistent')
stack.getOrder() → []

Constraints:
- Handle non-existent layer IDs gracefully
- Operations on single/empty stacks should work
*/

class LayerStack {
	constructor(layers = []) {
		this.layers = Array.isArray(layers) && layers.length > 0 ? layers : [];
	}

	errorMessage = 'layer id does not exist';

	bringToFront(layerId) {
		if (!this.layers.includes(layerId)) {
			console.error(this.errorMessage);
			return;
		}
		const layerCurrentPosition = this.layers.indexOf(layerId);
		const [item] = this.layers.splice(layerCurrentPosition, 1);
		this.layers.push(item);
	}

	sendToBack(layerId) {
		if (!this.layers.includes(layerId)) {
			console.error(this.errorMessage);
			return;
		}
		const layerCurrentPosition = this.layers.indexOf(layerId);
		const [item] = this.layers.splice(layerCurrentPosition, 1);
		this.layers.unshift(item);
	}

	bringForward(layerId) {
		if (!this.layers.includes(layerId)) {
			console.error(this.errorMessage);
			return;
		}
		const layerCurrentPosition = this.layers.indexOf(layerId);

		if (layerCurrentPosition === this.layers.length - 1) {
			return;
		}

		const [item] = this.layers.splice(layerCurrentPosition, 1);
		this.layers.splice(layerCurrentPosition + 1, 0, item);
	}

	sendBackward(layerId) {
		if (!this.layers.includes(layerId)) {
			console.error(this.errorMessage);
			return;
		}
		const layerCurrentPosition = this.layers.indexOf(layerId);

		if (layerCurrentPosition === 0) {
			return;
		}

		const [item] = this.layers.splice(layerCurrentPosition, 1);
		this.layers.splice(layerCurrentPosition - 1, 0, item);
	}

	getOrder() {
		return this.layers;
	}
}

// Test cases
const stack1 = new LayerStack(['bg', 'content', 'overlay']);
stack1.bringToFront('bg');
console.log(stack1.getOrder()); // ['content', 'overlay', 'bg']

const stack2 = new LayerStack(['a', 'b', 'c']);
stack2.sendBackward('c');
console.log(stack2.getOrder()); // ['a', 'c', 'b']

const stack3 = new LayerStack(['single']);
stack3.bringToFront('single');
console.log(stack3.getOrder()); // ['single']

const stack4 = new LayerStack([]);
stack4.bringToFront('nonexistent');
console.log(stack4.getOrder()); // []

const stack5 = new LayerStack(['x', 'y', 'z']);
stack5.sendToBack('y');
console.log(stack5.getOrder()); // ['y', 'x', 'z']

const stack6 = new LayerStack(['blue', 'green', 'yellow']);
stack6.bringForward('blue');
console.log(stack6.getOrder()); // ['green', 'blue', 'yellow']

// Already at top, try bringToFront again
const stack7 = new LayerStack(['a', 'b', 'c']);
stack7.bringToFront('c');
stack7.bringToFront('c');
console.log(stack7.getOrder()); // ['a', 'b', 'c']

// Already at bottom, try sendToBack
const stack8 = new LayerStack(['a', 'b', 'c']);
stack8.sendToBack('a');
console.log(stack8.getOrder()); // ['a', 'b', 'c']

// Bring forward from top (should no-op)
const stack9 = new LayerStack(['a', 'b']);
stack9.bringForward('b');
console.log(stack9.getOrder()); // ['a', 'b']

// Send backward from bottom (should no-op)
const stack10 = new LayerStack(['x', 'y']);
stack10.sendBackward('x');
console.log(stack10.getOrder()); // ['x', 'y']

const stack11 = new LayerStack(['a', 'b']);
stack11.bringToFront(null); // should error or no-op gracefully
console.log(stack11.getOrder()); // ['a', 'b']

