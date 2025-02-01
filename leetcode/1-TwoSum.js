/*

LEVEL: EASY

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 10(power of 4)
-10(power of 9) <= nums[i] <= 10(power of 9)
-10(power of 9) <= target <= 10(power of 9)
Only one valid answer exists

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
	const map = new Map();

	// create a map of nums (key) and their associated index (value)
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], i);
	}

	// loop through, find the diff, if that diff exists in the map and the index value of that diff
	// isn't the same as the current index in the loop, then return the pair of indices
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff) && map.get(diff) !== i) {
			return [i, map.get(diff)];
		}
	}

	// else no pairs found, so return an empty array
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]