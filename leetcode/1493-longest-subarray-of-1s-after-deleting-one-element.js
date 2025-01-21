/*

LEVEL: MEDIUM

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Constraints:

1 <= nums.length <= 10(power of 5)
nums[i] is either 0 or 1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
	let left = 0;
	let countOfZeros = 0;
	let maxOnes = 0;

	// right tracks the number of 1's
	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			countOfZeros++;
		}

		// shrink the sliding window from left to right based on number of 0's
		if (countOfZeros > 1) {
			if (nums[left++] === 0) {
				countOfZeros--;
			}
		}

		// store the current max window size per iteration
		maxOnes = Math.max(maxOnes, right - left);
	}

	return maxOnes;
};

console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log(longestSubarray([1, 1, 1])); // 2
