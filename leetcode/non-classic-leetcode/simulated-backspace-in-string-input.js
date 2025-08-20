/**
Create simulateBackspace(input: string, index: number) that mimics pressing backspace at a given index.
It removes the character just before index.
 */

function simulateBackspace(input, index) {
	if (
		typeof input !== 'string' ||
		!Number.isInteger(index) ||
		index > input.length ||
		index <= 0
	) {
		return input;
	}
	const inputA = [...input];
	inputA.splice(index - 1, 1);
	return inputA.join('');
}

// test cases
console.log(simulateBackspace('figma', 3)); // 'fima' (remove 'g')
console.log(simulateBackspace('design', 1)); // 'esign' (remove 'd')
console.log(simulateBackspace('layout', 0)); // 'layout' (nothing removed)
console.log(simulateBackspace('a', 1)); // '' (remove 'a')
console.log(simulateBackspace('frame', 4)); // 'frae' (remove 'm')
