/*

LEVEL: MEDIUM

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Constraints:

1 <= nums.length <= 10(power of 5)
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
	let maxOnes = 0;
	let currentZeros = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			currentZeros++;
		}

		while (currentZeros > k) {
			if (nums[left] === 0) {
				currentZeros--;
			}
			left++;
		}

		// re-calculate maxOnes in updated window
		maxOnes = Math.max(maxOnes, right - left + 1);
	}

	return maxOnes;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
	longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
