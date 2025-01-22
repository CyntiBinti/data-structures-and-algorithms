/*

LEVEL: MEDIUM

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Constraints:

1 <= word1.length, word2.length <= 10(power of 5)
word1 and word2 contain only lowercase English letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
	// if they're not the same length then return false
	if (word1.length !== word2.length) {
		return false;
	}

	const word1Set = new Set(word1);
	const word1Map = new Map();
	const word2Set = new Set(word2);
	const word2Map = new Map();

	// if they both don't have the same unique characters then return false
	if (![...word1Set].every((char) => word2Set.has(char))) {
		return false;
	}

	// create a map of each character and it's occurrence
	for (let i = 0; i < word1.length; i++) {
		word1Map.set(word1[i], (word1Map.get(word1[i]) || 0) + 1);
	}

	// create a map of each character and it's occurrence
	for (let i = 0; i < word2.length; i++) {
		word2Map.set(word2[i], (word2Map.get(word2[i]) || 0) + 1);
	}

	// of the key:value pairs, store the values in an array
	const word1MapIteratorArray = [...word1Map.values()];
	const word2MapIteratorArray = [...word2Map.values()];

	// if the arrays are sorted and re-joined back as a string and they're the same then return true
	if (
		word1MapIteratorArray.sort((a, b) => a - b).join('') ===
		word2MapIteratorArray.sort((a, b) => a - b).join('')
	) {
		return true;
	}

	return false;
};

console.log(closeStrings('abc', 'bca')); // true
console.log(closeStrings('a', 'aa')); // false
console.log(closeStrings('cabbba', 'abbccc')); // true
console.log(closeStrings('cabbba', 'aabbss')); // false
console.log(closeStrings('abbzzca', 'babzzcz')); // false
