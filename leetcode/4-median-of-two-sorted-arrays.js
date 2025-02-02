/*

LEVEL: HARD

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10(power of 6) <= nums1[i], nums2[i] <= 10(power of 6)

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
	if (nums1.length === 0 && nums2.length === 0) {
		return null;
	}

	let totalLength = nums1.length + nums2.length;
	let medianIndex = totalLength / 2;
	let isOddLength;

	if (totalLength % 2 === 0) {
		isOddLength = false;
		medianIndex = medianIndex - 1; // as 0-indexed
	} else {
		isOddLength = true;
		medianIndex = Math.round(medianIndex) - 1; // as 0-indexed
	}

	const combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);

	if (isOddLength) {
		return combinedArray[medianIndex];
	} else {
		let sum =
			(combinedArray[medianIndex] + combinedArray[medianIndex + 1]) / 2;
		return sum;
	}
};

// testcases
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [2, 3])); // 2.5
