/*

LEVEL: MEDIUM

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 10(power of 5)
-10(power of 4) <= nums[i] <= 10(power of 4)
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
	const map = new Map();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	const result = Array.from(map.entries())
		.sort((a, b) => b[1] - a[1])
		.splice(0, k)
		.map((element) => element[0]);

	return result;
};

// testcases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([3, 0, 1, 0], 1)); // [0]
