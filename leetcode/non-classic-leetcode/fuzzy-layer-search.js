// ==============================================
// PROBLEM 3: FUZZY LAYER SEARCH
// ==============================================

/*
LEVEL: MEDIUM

Create a function called fuzzySearchLayers that implements fuzzy string matching for layer names, similar to Figma's search functionality.

The function should:
- Return layers that approximately match the query
- Score matches based on character sequence and proximity
- Return results sorted by relevance (highest score first)
- Include the match score for each result

Scoring rules:
- Exact match: score = 1.0
- Contains query as substring: score = 0.8
- Characters match in order: score based on gaps between characters
- No match: not included in results

Example 1:
Input: fuzzySearchLayers(['Button Primary', 'btn-secondary', 'Header'], 'btn')
Output: [
  { layer: 'btn-secondary', score: 0.8 },
  { layer: 'Button Primary', score: 0.6 }
]

Example 2:
Input: fuzzySearchLayers(['Rectangle', 'Circle', 'Triangle'], 'rec')
Output: [
  { layer: 'Rectangle', score: 0.8 }
]

Example 3:
Input: fuzzySearchLayers(['Frame 1', 'Frame 2'], 'frame')
Output: [
  { layer: 'Frame 1', score: 0.8 },
  { layer: 'Frame 2', score: 0.8 }
]

Example 4:
Input: fuzzySearchLayers(['test'], 'xyz')
Output: []

Example 5:
Input: fuzzySearchLayers([], 'search')
Output: []

Constraints:
- Case-insensitive matching
- Query length >= 1
- Return empty array if no matches
*/

function fuzzySearchLayers(layers, query) {
	// Your implementation here
}

// Test cases
console.log(
	fuzzySearchLayers(['Button Primary', 'btn-secondary', 'Header'], 'btn')
);
// [{ layer: 'btn-secondary', score: 0.8 }, { layer: 'Button Primary', score: ~0.6 }]

console.log(fuzzySearchLayers(['Rectangle', 'Circle', 'Triangle'], 'rec'));
// [{ layer: 'Rectangle', score: 0.8 }]

console.log(fuzzySearchLayers(['Frame 1', 'Frame 2'], 'frame'));
// [{ layer: 'Frame 1', score: 0.8 }, { layer: 'Frame 2', score: 0.8 }]

console.log(fuzzySearchLayers(['test'], 'xyz'));
// []

console.log(fuzzySearchLayers([], 'search'));
// []

console.log(
	fuzzySearchLayers(['MainButton', 'SideButton', 'TopButton'], 'button')
);
// Should return all three with scores
