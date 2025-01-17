/*

LEVEL: EASY

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 10(power of 4)
s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 10(power of 9), and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
	let i = 0;
	let j = 0;

	if (s === t) {
		return true;
	}

	while (i < t.length) {
		if (s[j] === t[i]) {
			j++;
			i++;
		} else {
			i++;
		}
	}

	return j === s.length ? true : false;
};

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
