/*

LEVEL: EASY

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

Constraints:

1 <= s.length <= 3 * 10 (to the power of 5)
s consist of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	const regex = /[aeiou]/gi;
	const matchedVowels = s.match(regex);
	if (matchedVowels) {
		const reversedMatchedVowels = matchedVowels.reverse();
		let reversedString = [];
		let count = 0;

		[...s].forEach((letter) => {
			if (matchedVowels.includes(letter)) {
				reversedString.push(reversedMatchedVowels[count]);
				count++;
			} else {
				reversedString.push(letter);
			}
		});

		return reversedString.join('');
	} else {
		return s;
	}
};

console.log(reverseVowels('IceCreAm')); // AceCreIm
console.log(reverseVowels('leetcode')); // leotcede
