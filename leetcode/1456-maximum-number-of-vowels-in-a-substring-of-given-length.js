/*

LEVEL: MEDIUM

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

Constraints:

1 <= s.length <= 10(power of 5)
s consists of lowercase English letters.
1 <= k <= s.length

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
	let substring = [];
	let count = 0;
	let maxVowels = 0;
	let i = 0;

	while (i < s.length) {
		substring.push(s[i]);
		count++;
		i++;

		if (count === k) {
			const matches = substring.join('').match(/(a|e|i|o|u)+/gm);
			if (matches) {
				maxVowels = Math.max(maxVowels, matches.join('').length);
				substring.shift();
				count--;
			} else {
				substring.shift();
				count--;
			}
		}
	}

	return maxVowels;
};

console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
