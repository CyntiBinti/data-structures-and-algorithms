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
- Characters match in order: score based on gaps between characters (i.e. 1 - (gaps × 0.1))
- No match: not included in results

Example 1:
Input: fuzzySearchLayers(['Button Primary', 'btn-secondary', 'Header'], 'btn')
Output: [
  { layer: 'btn-secondary', score: 0.8 },
  { layer: 'Button Primary', score: 0.7 }
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
	if (
		!query ||
		query.length < 1 ||
		!Array.isArray(layers) ||
		layers.length === 0
	) {
		return [];
	}

	const lowercaseQuery = query.toLowerCase();
	const result = [];

	layers.forEach((layer) => {
		const lowercaseLayer = layer.toLowerCase();

		// exact match
		if (lowercaseLayer === lowercaseQuery) {
			result.push({ layer: layer, score: 1 });
		} else if (lowercaseLayer.includes(lowercaseQuery)) {
			// substring match
			result.push({ layer: layer, score: 0.8 });
		} else {
			// gap match
			let j = 0;
			let gap = 0;

			// find where to start (first occurrence of query[0])
      // so gap count not increasing from the beginning unnecessarily
			let startIndex = lowercaseLayer.indexOf(lowercaseQuery[0]);
			if (startIndex === -1) return; // no possible match, skip this layer

			for (
				let i = startIndex;
				i < lowercaseLayer.length && j < lowercaseQuery.length;
				i++
			) {
				if (lowercaseLayer[i] === lowercaseQuery[j]) {
					j++;
				} else {
					gap++;
				}
			}

      // once all query chars have been matched
			if (j === lowercaseQuery.length) {
        // use math.max to prevent negative scores
				const score = Math.max(0, 1 - gap * 0.1);
				result.push({ layer: layer, score: score });
			}
		}
	});

	return result.sort((a, b) => b.score - a.score);
}


// Test cases
console.log(
	fuzzySearchLayers(
		[
			'btn',
			'Button Primary',
			'btn-secondary',
			'destructive-button',
			'Header',
		],
		'btn'
	)
);
// [
// 	{ layer: 'btn', score: 1 },
// 	{ layer: 'btn-secondary', score: 0.8 },
// 	{ layer: 'Button Primary', score: 0.7 },
// 	{ layer: 'destructive-button', score: 0.7 }
// ];

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
// [{ layer: 'MainButton', score: 0.8 }, { layer: 'SideButton', score: 0.8 }, { layer: 'TopButton', score: 0.8 }]
