/*

LEVEL: MEDIUM

You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.

Constraints:

1 <= s.length <= 10(power of 5)
s consists of lowercase English letters and stars *.
The operation above can be performed on s.

*/

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
	let starCount = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '*') {
			starCount++;
		}
	}

	if (starCount * 2 === s.length) {
		return '';
	}

	let string = [...s];
	let result = [];
	let i = string.length - 1;
	let count = 0;

	// work backwards, remove non-star chars and add to start of result array
	while (i >= 0) {
		if (string[i] !== '*') {
			result.unshift(string.pop());
			i--;
		}

		// but star chars are removed and the various counts adjusted
		if (string[i] === '*') {
			string.pop();
			starCount--;
			count++;
			i--;
		}

		// remove non-star chars until count is back to 0
		while (count > 0 && string[i] !== '*') {
			string.pop();
			count--;
			i--;
		}

		// if all the stars have been found, then no need to continue traversing the string
		// can just add the remaining string to result and join it, before returning
		if (starCount === 0) {
			result.unshift(...string);
			return result.join('');
		}
	}
};

console.log(removeStars('hel*l*o')); // "heo"
console.log(removeStars('leet**cod*e')); // "lecoe"
console.log(removeStars('erase*****')); // ""
