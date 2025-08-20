// ==============================================
// PROBLEM 4: DESIGN TOKEN RESOLVER
// ==============================================

/*
LEVEL: MEDIUM-HARD

Create a function called resolveTokens that processes design token references in strings. Design tokens use the format {token.path} and can reference other tokens.

The function should:
- Replace {token.path} with actual values from a token map
- Support nested token references like {color.{theme}}
- Handle circular references by throwing an error
- Return the resolved string

How nested tokens work (see example 2 as ref.):
- Inner tokens resolve first: {size} → 'large'
- Result substitutes into outer path: {spacing.{size}} → {spacing.large}
- Final token resolves: {spacing.large} → '20px'

Example 1:
Input: resolveTokens('Color: {color.primary}', { color: { primary: '#FF0000' } })
Output: 'Color: #FF0000'

Example 2:
Input: resolveTokens('Size: {spacing.{size}}', { spacing: { large: '20px' }, size: 'large' })
Output: 'Size: 20px'
Note: {size} resolves to 'large', making the path {spacing.large} → '20px'

Example 3:
Input: resolveTokens('No tokens here', { color: { primary: '#FF0000' } })
Output: 'No tokens here'

Example 4:
Input: resolveTokens('Missing: {color.missing}', { color: { primary: '#FF0000' } })
Output: 'Missing: {color.missing}'

Example 5:
Input: resolveTokens('Circular: {a}', { a: '{b}', b: '{a}' })
Output: Error: 'Circular reference detected'

Constraints:
- Maximum 10 levels of nesting to prevent infinite loops
- Preserve original token syntax if value not found
- Case-sensitive token paths
*/

function resolveTokens(input, tokenMap) {
	// Your implementation here
}

// Test cases
console.log(
	resolveTokens('Color: {color.primary}', { color: { primary: '#FF0000' } })
);
// 'Color: #FF0000'

console.log(
	resolveTokens('Size: {spacing.{size}}', {
		spacing: { large: '20px' },
		size: 'large',
	})
);
// 'Size: 20px'

console.log(resolveTokens('No tokens here', { color: { primary: '#FF0000' } }));
// 'No tokens here'

console.log(
	resolveTokens('Missing: {color.missing}', { color: { primary: '#FF0000' } })
);
// 'Missing: {color.missing}'

try {
	console.log(resolveTokens('Circular: {a}', { a: '{b}', b: '{a}' }));
} catch (e) {
	console.log('Error:', e.message); // 'Error: Circular reference detected'
}

console.log(
	resolveTokens('Multiple: {color.primary} and {spacing.large}', {
		color: { primary: 'blue' },
		spacing: { large: '16px' },
	})
);
// 'Multiple: blue and 16px'
