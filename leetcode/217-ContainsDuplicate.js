/*

LEVEL: EASY

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

# Example 1:

Input: nums = [1,2,3,1]
Output: true

# Example 2:

Input: nums = [1,2,3,4]
Output: false

#Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
	const set = new Set();

	for (const number of nums) {
		if (!set.has(number)) {
			set.add(number);
		} else {
			return true;
		}
	}

	return false;
}

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true