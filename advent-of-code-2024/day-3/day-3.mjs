import { readFileSync } from 'node:fs';

const corruptedProgramData = readFileSync('day-3-input.txt', {
	encoding: 'utf-8',
});

const functionOne = (corruptedProgramData) => {
	// find all the good data that matches the pattern: mul(1-3 digits, 1-3 digits)
	const goodDataFound = corruptedProgramData.match(
		/mul\((\d{1,3}),(\d{1,3})\)/g
	);
	// loop through all the good data and for each one: match where it finds just the number part of the string, convert them both into a number, and then multiply them
	const multipliedNumbers = goodDataFound.map((data) => {
		const numbers = data.match(/\d{1,3}/g);
		const xValue = Number(numbers[0]);
		const yValue = Number(numbers[1]);
		return xValue * yValue;
	});

	// sum all the multiplied numbers
	const sumofMultipliedNumbers = multipliedNumbers.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	console.log(sumofMultipliedNumbers);
};

functionOne(corruptedProgramData);

const functionTwo = (corruptedProgramData) => {
	const goodDataFound = [];

	// split the data into segments based on the pattern: don't() or do()
	const segments = corruptedProgramData.split(/(don't\(\)|do\(\))/);

	// loop through all the segments and for each one...
	segments.forEach((segment, index, array) => {
		// if it's the 1st segment in the array, add it to the "good data found" array
		if (index === 0) {
			goodDataFound.push(segment);
		}

		// if it's not the 1st segment in the array (so as to avoid undefined values) and the previous segment is do(), then add it to the "good data found" array
		if (index > 0 && array[index - 1] === 'do()') {
			goodDataFound.push(segment);
		}
	});

	// join all the "good data found" together as a string instead of array elements
	const goodDataAsAString = goodDataFound.join('');

	// reuse functionOne to handle the same logic as before
	functionOne(goodDataAsAString);
};

functionTwo(corruptedProgramData);
