/*

LEVEL: MEDIUM

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 10 (to the power of 5)
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	return nums.map((_, index, array) => {
		return array.toSpliced(index, 1).reduce((prev, curr) => prev * curr);
	});

	/*
		NB: use of toSpliced inside the map function is causing the function to perform poorly on larger datasets (e.g num lengths of >50k). The toSpliced method creates a new array on each iteration, and the subsequent reduce operation adds another layer of complexity, making the overall time complexity approximately 𝑂(𝑛2). Will redo as 𝑂(𝑛) time instead.
	*/
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
