// ==============================================
// PROBLEM 1: LAYER REORDERING (ARRAY MUTATIONS)
// ==============================================

/*
LEVEL: EASY-MEDIUM

Create a function called reorderLayers that takes an array of layer names and moves a layer from one position to another, similar to dragging layers in Figma's layer panel.

The function should:
- Move the layer at oldIndex to newIndex
- Shift other elements accordingly
- Return the modified array
- Handle edge cases gracefully

Example 1:
Input: reorderLayers(['bg', 'header', 'button', 'footer'], 2, 0)
Output: ['button', 'bg', 'header', 'footer']

Example 2:
Input: reorderLayers(['layer1'], 0, 0)
Output: ['layer1']

Example 3:
Input: reorderLayers(['a', 'b', 'c', 'd'], 0, 3)
Output: ['b', 'c', 'd', 'a']

Example 4:
Input: reorderLayers([], 0, 1)
Output: []

Example 5:
Input: reorderLayers(['x', 'y', 'z'], 1, 1)
Output: ['x', 'y', 'z']

Constraints:
- 0 <= oldIndex, newIndex < array.length
- Handle invalid indices gracefully
*/

function reorderLayers(layers, oldIndex, newIndex) {
	// Your implementation here
}

// Test cases
console.log(reorderLayers(['bg', 'header', 'button', 'footer'], 2, 0)); // ['button', 'bg', 'header', 'footer']
console.log(reorderLayers(['layer1'], 0, 0)); // ['layer1']
console.log(reorderLayers(['a', 'b', 'c', 'd'], 0, 3)); // ['b', 'c', 'd', 'a']
console.log(reorderLayers([], 0, 1)); // []
console.log(reorderLayers(['x', 'y', 'z'], 1, 1)); // ['x', 'y', 'z']
console.log(reorderLayers(['first', 'second', 'third'], 2, 0)); // ['third', 'first', 'second']
console.log(reorderLayers(['only'], 0, 0)); // ['only']
