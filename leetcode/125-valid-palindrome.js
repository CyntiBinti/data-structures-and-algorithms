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
	const lowercaseString = s.toLowerCase();
	const onlyAlphanumericCharsRegex = /[a-z0-9]/;
	let left = 0;
	let right = lowercaseString.length - 1;

	while (left < right) {
		while (
			left < right &&
			!onlyAlphanumericCharsRegex.test(lowercaseString[left])
		) {
			left++;
		}

		while (
			right > left &&
			!onlyAlphanumericCharsRegex.test(lowercaseString[right])
		) {
			right--;
		}

		if (lowercaseString[left] !== lowercaseString[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('.,')); // true