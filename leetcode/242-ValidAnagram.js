/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters

*/

const isAnagram = (s, t) => {

    const sSortedArray = [...s].sort();
    const tSortedArray = [...t].sort();

    const tSortedSet = new Set(tSortedArray);

    for (const letter of sSortedArray) {
        if (!tSortedSet.has(letter)) {
            return false;
        }
    } return true;

};

console.log(`input 1 answer is: ${isAnagram('anagram', 'nagaram')}`); // true
console.log(`input 2 answer is: ${isAnagram('rat', 'car')}`); // false
