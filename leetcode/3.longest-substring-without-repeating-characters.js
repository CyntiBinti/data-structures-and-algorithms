/*

LEVEL: MEDIUM

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 10(power of 4)
s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	let left = 0;
	let maxLength = 0;
	const charSet = new Set();

	for (let right = 0; right < s.length; right++) {
		while (charSet.has(s[right])) {
			charSet.delete(s[left]); // Remove leftmost character; slide window
			left++;
		}
		charSet.add(s[right]);
		maxLength = Math.max(maxLength, right - left + 1); // we +1 as 0-indexed
	}

	return maxLength;
};

// testcases
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
