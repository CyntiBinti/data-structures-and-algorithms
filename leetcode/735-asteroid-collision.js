/*

LEVEL: MEDIUM

We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Constraints:

2 <= asteroids.length <= 10(power of 4)
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
	let stack = []; // stack to store surviving asteroids; LIFO

	for (let asteroid of asteroids) {
		let collision = false;

		// process collisions based on the top of the stack
		while (
			stack.length > 0 &&
			stack[stack.length - 1] > 0 && // i.e. top of stack is moving right
			asteroid < 0 // i.e. current asteroid is moving left
		) {
			let top = stack.pop(); // remove the top asteroid from the stack for comparison

			if (Math.abs(top) > Math.abs(asteroid)) {
				// top asteroid survives
				stack.push(top);
				collision = true; // current asteroid is destroyed
				break; // break the loop and iterate to the next asteroid
			} else if (Math.abs(top) === Math.abs(asteroid)) {
				// both asteroids destroy each other
				collision = true; // current asteroid is destroyed
				break; // break the loop and iterate to the next asteroid
			}
			// otherwise, the current asteroid survives and keeps moving
		}

		if (!collision) {
			// if no collision occurred, push the current asteroid
			stack.push(asteroid);
		}
	}

	return stack;
};

console.log(asteroidCollision([-5, -10, -5])); // [-5, -10, -5]
console.log(asteroidCollision([5, 10, 5])); // [5, 10, 5]
console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([8, -8, 4, 4])); // [4, 4]