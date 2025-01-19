/*

LEVEL: EASY

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10(power of -5) will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

n == nums.length
1 <= k <= n <= 10(power of 5)
-10(power of 4) <= nums[i] <= 10(power of 4)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
	if (nums.length === 1) {
		return nums[0];
	}

	let i = 0;
	let j = 0;
	let count = 0;
	let contiguousNums = 0;
	let maxAveValue = -Infinity; // as nums[i] >= -10(power of 4)

	while (j < nums.length) {
		contiguousNums += nums[j];
		j++;
		count++;
		if (count === k) {
			maxAveValue = Math.max(maxAveValue, contiguousNums / k);
			contiguousNums -= nums[i];
			i++;
			count--;
		}
	}

	return maxAveValue;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // 4.00000
