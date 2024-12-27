/*

LEVEL: EASY

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Constraints:

1 <= flowerbed.length <= 2 * 10(power of 4)
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
	// we want to check for 3 zero's in a row so add a zero
	// to the start and end of flowerbed to account for this
	let updatedFlowerbed = [0, ...flowerbed, 0];
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < updatedFlowerbed.length; j++) {
			if (
				updatedFlowerbed[j] === 0 &&
				updatedFlowerbed[j - 1] === 0 &&
				updatedFlowerbed[j + 1] === 0
			) {
				// if the current index is zero, and the index before and after
				// are also zero then insert a 'one' instead of the current zero
				updatedFlowerbed.splice(j, 1, 1);
				count++;
			}
		}
	}

	// if the number of possible 'ones' are the same or greater than 'n'
	// then return true, else return false
	return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 1, 0, 0], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // true
