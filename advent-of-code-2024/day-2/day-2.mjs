import { readFileSync } from 'node:fs';

const reports = readFileSync('day-2-input.txt', { encoding: 'utf-8' })
	.split('\n') // Split where it finds a single new line and create an array
	.map(
		(report) => report.trim().split(/\s+/).map(Number) // Trim, split where it finds one or more whitespaces, and convert each string into a number
	);

const functionOne = (reports) => {
	const safeReports = [];
	const ALLOWED_DIFF = [1, 2, 3];

	reports.forEach((report) => {
		// Loop through each number in the report...
		const result = report.every((number, index, array) => {
			// Check that array[index + 1] is valid before using it else will access undefined at the last index
			if (index + 1 < array.length) {
				// check that the difference between the current number and the next one is not less than 1 or more than 3. We take absolute value to avoid negative numbers
				const diff = Math.abs(number - array[index + 1]);
				if (!ALLOWED_DIFF.includes(diff)) {
					return false; // Break the `every` loop if the difference isn't between 1 and 3
				}
			}

			// Check that index is greater than 0 and array[index + 1] is valid before using it else will access undefined
			if (index > 0 && index + 1 < array.length) {
				if (
					// Check if there's a peak i.e. it doesn't start increasing then decreasing, and vice versa
					(array[index] > array[index - 1] &&
						array[index] > array[index + 1]) ||
					(array[index] < array[index - 1] &&
						array[index] < array[index + 1])
				) {
					return false; // Break the `every` loop if it forms a peak
				}
			}
			return true; // Continue if all checks pass
		});

		if (result) {
			// If the report passes all checks, add it to the safeReports array
			safeReports.push(report);
		}
	});
	// Log the number of safe reports
	console.log('Safe Reports:', safeReports.length);
};

functionOne(reports);


const functionTwo = () => {
	// todo
};

functionTwo();
