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

   if (s.length !== t.length) {
    return false;
   } 
   else {
        const sSortedArray = [...s].sort();
        const tSortedArray = [...t].sort();

        const tSortedSet = new Set(tSortedArray);
        // realised using the Set object isn't best as doesnt make new entries duplicate values, so duplicates are filtered out
        // and thus if the remaining chars across both arrays are the same then it gives a false positive
        // TO-DO: instead use a Map object as this creates a new entry for duplicate values (rather than ignoring them)

        for (const letter of sSortedArray) {
            if (!tSortedSet.has(letter)) {
                return false;
            }
        } return true;
   };

};

console.log(`input 1 answer is: ${isAnagram('anagram', 'nagaram')}`); // true
console.log(`input 2 answer is: ${isAnagram('rat', 'car')}`); // false
console.log(`input 3 answer is: ${isAnagram('ac', 'bb')}`); // false
console.log(`input 4 answer is: ${isAnagram('aacc', 'ccac')}`); // false

