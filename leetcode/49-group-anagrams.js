/*

LEVEL: MEDIUM

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 10(power of 4)
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
	const result = new Map();

	for (const word of strs) {
		const sortedWord = [...word].sort().join('')
		if (!result.has(sortedWord)) {
			result.set(sortedWord, [])
		}
		result.get(sortedWord).push(word);
	}

	return Array.from(result.values())
};

// testcases
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
