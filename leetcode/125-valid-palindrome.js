/*

LEVEL: EASY

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 10(power of 5)
s consists only of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const onlyAlphanumericChars = s.toLowerCase().replace(/[^a-z0-9]/g, '');

	if (onlyAlphanumericChars === '') {
		return true;
	}

	return (
		onlyAlphanumericChars ===
		onlyAlphanumericChars.split('').reverse().join('')
	);
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('.,')); // true