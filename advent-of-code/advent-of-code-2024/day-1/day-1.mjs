import { readFileSync } from 'node:fs';

const listOne = [];
const listTwo = [];

const lines = readFileSync('day-1-input.txt', { encoding: 'utf-8' })
	.replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
	.split('\n') // Split where it finds a single new line and create an array
	.map((line) => {
		const data = line.trim().split(/\s+/); // Trim again, and split where it finds one or more whitespaces
		listOne.push(Number(data[0])); // Convert the 1st string into a number and push it into the listOne array
		listTwo.push(Number(data[1])); // Convert the 2nd string into a number and push it into the listTwo array
	});

const functionOne = (listOne, listTwo) => {
	const distances = [];
	const sortedListOne = listOne.sort(); // Sort the listOne array in ascending order
	const sortedListTwo = listTwo.sort(); // Sort the listTwo array in ascending order

	for (let i = 0; i < sortedListOne.length; i++) {
		distances.push(Math.abs(sortedListOne[i] - sortedListTwo[i]));
		// Loop through the sortedListOne array and calculate the absolute difference between the current element and the corresponding element in the sortedListTwo, then push the result into the distances array (this way negative numbers are converted to positive numbers)
	}
	const sumofDistances = distances.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	// Now that we have all the distances in the distances array, we can calculate the sum of all the distances
	console.log(sumofDistances);
};

functionOne(listOne, listTwo);

const functionTwo = (listOne, listTwo) => {
	const similarityScores = [];

	for (let i = 0; i < listTwo.length; i++) {
		let count = 0;
		listTwo.map((item) => {
			if (listOne[i] === item) {
				count += 1;
			}
			// Loop through the listTwo array and count the number of times the current element in the listOne array appears in the listTwo array
		});
		similarityScores.push(listOne[i] * count); // Multiply the current element in the listOne array by the count and push the result into the similarityScores array
	}

	const sumOfSimilarityScores = similarityScores.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	// Now that we have all the similarity scores in the similarityScores array, we can calculate the sum of all the similarity scores
	console.log(sumOfSimilarityScores);
};

functionTwo(listOne, listTwo);
