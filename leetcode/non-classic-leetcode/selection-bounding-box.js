// ==============================================
// PROBLEM 5: SELECTION BOUNDING BOX
// ==============================================

/*
LEVEL: MEDIUM

Create a function called calculateBounds that takes an array of shapes (with x, y, width, height properties) and returns the bounding box that encompasses all selected shapes.

The function should:
- Return the minimum x, y and maximum width, height that contains all shapes
- Handle empty selection gracefully
- Support shapes with different positions and sizes
- Return null for empty input

Example 1:
Input: calculateBounds([{x: 10, y: 10, width: 50, height: 30}])
Output: {x: 10, y: 10, width: 50, height: 30}

Example 2:
Input: calculateBounds([
  {x: 0, y: 0, width: 100, height: 50},
  {x: 50, y: 25, width: 100, height: 50}
])
Output: {x: 0, y: 0, width: 150, height: 75}

Example 3:
Input: calculateBounds([])
Output: null

Example 4:
Input: calculateBounds([
  {x: -10, y: -5, width: 20, height: 10},
  {x: 30, y: 40, width: 15, height: 25}
])
Output: {x: -10, y: -5, width: 55, height: 70}

Example 5:
Input: calculateBounds([{x: 100, y: 200, width: 0, height: 0}])
Output: {x: 100, y: 200, width: 0, height: 0}

Constraints:
- Shapes can have negative coordinates
- Width/height can be 0
- Handle floating point coordinates
*/

function calculateBounds(shapes) {
	// Your implementation here
}

// Test cases
console.log(calculateBounds([{ x: 10, y: 10, width: 50, height: 30 }]));
// {x: 10, y: 10, width: 50, height: 30}

console.log(
	calculateBounds([
		{ x: 0, y: 0, width: 100, height: 50 },
		{ x: 50, y: 25, width: 100, height: 50 },
	])
);
// {x: 0, y: 0, width: 150, height: 75}

console.log(calculateBounds([]));
// null

console.log(
	calculateBounds([
		{ x: -10, y: -5, width: 20, height: 10 },
		{ x: 30, y: 40, width: 15, height: 25 },
	])
);
// {x: -10, y: -5, width: 55, height: 70}

console.log(calculateBounds([{ x: 100, y: 200, width: 0, height: 0 }]));
// {x: 100, y: 200, width: 0, height: 0}

console.log(
	calculateBounds([
		{ x: 0, y: 0, width: 10, height: 10 },
		{ x: 5, y: 5, width: 10, height: 10 },
		{ x: 12, y: 8, width: 3, height: 7 },
	])
);
// Should calculate bounds for three overlapping rectangles
