/*

LEVEL: EASY

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 10(power of 4)
s and t consist of lowercase English letters

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const sMap = new Map();

	for (const char of s) {
		sMap.set(char, (sMap.get(char) || 0) + 1);
	}

	for (const char of t) {
		if (!sMap.has(char)) {
			return false;
		}

		sMap.set(char, sMap.get(char) - 1);

		if (sMap.get(char) < 0) {
			return false;
		}
	}

	return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('ac', 'bb')); // false
console.log(isAnagram('aacc', 'ccac')); // false
console.log(isAnagram('ggii', 'eekk')); // false
console.log(isAnagram('fe', 'ja')); // false