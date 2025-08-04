/*

LEVEL: MEDIUM

Create a function called applyMarkdown that processes a given string containing italicised text in Markdown format (using single underscores '_' for emphasis, not double underscores '__'). The function should convert the italicised portions into proper HTML <i> tags.

Example 1:
Input: 'this is _italicized_'
Output: 'this is <i>italicized</i>'

Example 2:
Input: '_should eager match _ if possible_'
Output: '<i>should eager match </i> if possible_'

Example 3:
Input: 'this is a sentence'
Output: 'this is a sentence'

Example 4:
Input: ''
Output: ''

Constraints:
None
**/

/**
 *
 * @param {string} text - text containing italicised text in Markdown format
 * @returns {string} - text converted with the italicised portions into proper HTML <i> tags
 */
function applyMarkdown(text) {
	if (!text) {
		return text;
	}

	const chars = Array.from(text);

	let j = 0;

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === '_') {
			j = i + 1;

			while (chars[j] !== '_' && j < chars.length) {
				j++;
				continue;
			}

			if (chars[j] === '_') {
				chars[i] = '<i>';
				chars[j] = '</i>';
			}
			i = j + 1;
		}
	}

	return chars.join('');
}

// test cases
console.log(applyMarkdown('')); // ''
console.log(applyMarkdown('this is a sentence')); // 'this is a sentence'
console.log(applyMarkdown('this is _italicized_')); // 'this is <i>italicized</i>'
console.log(applyMarkdown('italicize whitespace _ _')); // 'italicize whitespace <i> </i>'
console.log(applyMarkdown('_this sentence_ _has_ _a_ lot of _italics_')); // '<i>this sentence</i> <i>has</i> <i>a</i> lot of <i>italics</i>'
console.log(applyMarkdown('_side by side_ _ italic _')); // '<i>side by side</i> <i> italic </i>'
console.log(applyMarkdown('this is just a single _ underscore')); // 'this is just a single _ underscore'
console.log(applyMarkdown('_should eager match _ if possible_')); // '<i>should eager match </i> if possible_'
