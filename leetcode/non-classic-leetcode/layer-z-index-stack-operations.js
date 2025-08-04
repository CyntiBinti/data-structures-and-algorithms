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
		// Your implementation here
	}

	bringToFront(layerId) {
		// Your implementation here
	}

	sendToBack(layerId) {
		// Your implementation here
	}

	bringForward(layerId) {
		// Your implementation here
	}

	sendBackward(layerId) {
		// Your implementation here
	}

	getOrder() {
		// Your implementation here
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
