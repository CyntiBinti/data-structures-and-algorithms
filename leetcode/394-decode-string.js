/*

LEVEL: MEDIUM

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].

*/

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		// push chars onto stack until you hit an closed bracket
		if (s[i] !== ']') {
			stack.push(s[i]);
		} else {
			// once open bracket hit, pop the chars off stack, and store them in a substring (preserving their order)
			// until the open bracket is reached
			let substring = '';
			while (stack[stack.length - 1] !== '[') {
				substring = stack.pop() + substring;
			}
			// do an extra pop so that the open bracket is removed
			stack.pop();

			// declare multiplier as a string as k <= 300 so need to account for multi-digits, before turning into a number
			let multiplier = '';
			while (
				!Number.isNaN(Number(stack[stack.length - 1])) &&
				stack !== undefined
			) {
				// while the last char in the stack is a number and stack isn't empty, add the digits (preserving their order)
				multiplier = stack.pop() + multiplier;
			}

			// once the substring and multiplier for that group are found, push the substring x multiplier times into the stack
			stack.push(substring.repeat(Number(multiplier)));
		}
	}

	// continue through the nested groups until all substrings are found, then return the final stack as a string
	return stack.join('');
};

console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
console.log(decodeString('3[a2[c]]')); // "accaccacc"
console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"
console.log(decodeString('13[a]2[bc]')); // "aaaaaaaaaaaaabcbc"
