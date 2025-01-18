/*

LEVEL: MEDIUM

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

Constraints:

1 <= nums.length <= 10(power of 5)
1 <= nums[i] <= 10(power of 9)
1 <= k <= 10(power of 9)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
	nums.sort((a, b) => a - b); // use comparison function to explicitly sort by numerical value, else will convert to strings and sort by dictionary lexicographical order!

	let count = 0;
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let sum = nums[left] + nums[right];
		if (sum === k) {
			count++;
			left++;
			right--;
		} else if (sum > k) {
			right--;
		} else {
			left++;
		}
	}

	return count;
};

console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(
	maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
); // 2
console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4)); // 2
