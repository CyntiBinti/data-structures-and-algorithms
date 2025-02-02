/*

LEVEL: MEDIUM

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:

1 <= intervals.length <= 10(power of 4)
intervals[i].length == 2
0 <= starti <= endi <= 10(power of 4)

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
	if (!intervals.length) return [];

	// sort intervals by start time
	intervals.sort((a, b) => a[0] - b[0]);

	// initialise result with the first interval
	let result = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		let prev = result[result.length - 1]; // get last interval in result
		let curr = intervals[i];

		if (prev[1] >= curr[0]) {
			// if overlapping therefore overwrite the end index
			prev[1] = Math.max(prev[1], curr[1]);
		} else {
			// if not overlapping, then just add that interval
			result.push(curr);
		}
	}

	return result;
};

// testcases
console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
); // [[1,6],[8,10],[15,18]]
console.log(
	merge([
		[1, 4],
		[4, 5],
	])
); // [[1,5]]
