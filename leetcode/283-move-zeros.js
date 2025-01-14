/*

LEVEL: EASY

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 10(power of 4)
-2(power of 31) <= nums[i] <= 2(power of 31) - 1

Follow up: Could you minimize the total number of operations done?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	// set up a two-pointer
	let i = 0;
	let count = 0;
	let zerosFound = 0;

	if (nums.length === 1 && nums[i] === 0) {
		return nums;
	}

	while (count < nums.length) {
		if (nums[i] === 0) {
			// remove the 0 in-place then push it to the end of the array
			nums.splice(i, 1);
			nums.push(0);
			count++;
			zerosFound++;
		} else {
			count++;
			i++;
		}
	}
	return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]
