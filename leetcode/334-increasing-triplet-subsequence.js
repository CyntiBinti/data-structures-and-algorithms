/*

LEVEL: MEDIUM

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

Constraints:

1 <= nums.length <= 5 * 10(power of 5)
-2(power of 31) <= nums[i] <= 2(power of 31) - 1

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
	if (nums.length < 3) return false;

	let thirdTriplet = nums[nums.length - 1]; // assume the last number in the array is the largest
	let secondTriplet;

	// start the loop from the 2nd to last element; work backwards to find a triplet
	for (let i = nums.length - 2; i >= 0; i--) {
		if (secondTriplet === undefined && nums[i] < thirdTriplet) {
			secondTriplet = nums[i];
		}

		if (nums[i] > thirdTriplet) {
			thirdTriplet = nums[i];
		}

		if (nums[i] < thirdTriplet) {
			if (nums[i] < secondTriplet) {
				return true;
			}
			secondTriplet = nums[i];
		}
	}
	return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3])); // false
console.log(increasingTriplet([1, 5, 0, 4, 1, 3])); // true
