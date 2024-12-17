/*

LEVEL: EASY

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const greatestCommonDivisorOfStrings = function (str1, str2) {
	// return empty if the strings don't match regardless of the order you place them
	if (str1 + str2 !== str2 + str1) {
		return '';
	}

	const longestString = str1.length > str2.length ? str1 : str2;
	const shortestString = str1.length < str2.length ? str1 : str2;

	// remove one letter at a time until the resulting word, when mod'ed with both strings, has no remainder. That way we know it's the greatest common divisor for both strings
	for (let i = shortestString.length; i >= 0; i--) {
		const greatestCommonDivisor = shortestString.slice(0, i);
		if (
			shortestString.length % greatestCommonDivisor.length === 0 &&
			longestString.length % greatestCommonDivisor.length === 0
		) {
			return greatestCommonDivisor;
		}
	}

	// for anything else that doesn't match, then return empty
	return '';
};

console.log(greatestCommonDivisorOfStrings('ABCABC', 'ABC')); // "ABC"
console.log(greatestCommonDivisorOfStrings('ABABAB', 'ABAB')); // "AB"
console.log(greatestCommonDivisorOfStrings('LEET', 'CODE')); // ""
console.log(greatestCommonDivisorOfStrings('ABCDEF', 'ABC')); // ""
console.log(greatestCommonDivisorOfStrings('ABABABAB', 'ABAB')); // "ABAB"
console.log(
	greatestCommonDivisorOfStrings(
		'TAUXXTAUXXTAUXXTAUXXTAUXX',
		'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
	)
); // "TAUXX"
console.log(greatestCommonDivisorOfStrings('AAAAAAAAA', 'AAACCC')); // ""
console.log(
	greatestCommonDivisorOfStrings(
		'CXTXNCXTXNCXTXNCXTXNCXTXN',
		'CXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXN'
	)
); // "CXTXN"
