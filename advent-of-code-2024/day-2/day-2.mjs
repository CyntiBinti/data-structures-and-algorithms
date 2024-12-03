import { readFileSync } from 'node:fs';

const reports = readFileSync('day-2-input.txt', { encoding: 'utf-8' })
	.split('\n') // Split where it finds a single new line and create an array
	.map(
		(report) => report.trim().split(/\s+/).map(Number) // Trim, split where it finds one or more whitespaces, and convert each string into a number
	);

/**
 * @description - A function to check if a given report is safe or not
 * @param {Array} report - An array of numbers
 * @returns {Boolean} - True if the report is safe, False if otherwise
 */
const isReportSafe = (report) => {
	const ALLOWED_DIFF = [1, 2, 3];
	// Loop through each number in a report...
	return report.every((number, index, array) => {
		// Check that array[index + 1] is valid before using it else will access undefined at the last index
		if (index + 1 < array.length) {
			// check that the difference between the current number and the next one is not less than 1 or more than 3. We take the absolute value to avoid negative numbers
			const diff = Math.abs(number - array[index + 1]);
			if (!ALLOWED_DIFF.includes(diff)) {
				return false; // Break the `every` loop early if the difference isn't between 1 and 3
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
				return false; // Break the `every` loop early if it forms a peak
			}
		}
		return true; // If all checks pass, return true
	});
};

const functionOne = (reports) => {
	let safeReportsCount = 0;
	reports.forEach((report) => {
		if (isReportSafe(report)) {
			// If the report passes all checks, increase the counter
			safeReportsCount++;
		}
	});
	// Log the number of safe reports
	console.log('Safe Reports:', safeReportsCount);
};

functionOne(reports);

const functionTwo = (reports) => {
	let safeReportsCount = 0;
	reports.forEach((report) => {
		if (isReportSafe(report)) {
			// If the report  passes all checks already, then increase the counter
			safeReportsCount++;
		} else {
			// Otherwise, try removing each number in the report and re-test to see if it becomes safe
			for (let i = 0; i < report.length; i++) {
				// Create a copy of the report with the current number removed
				const modifiedReport = [
					...report.slice(0, i), // Create a new array containing all numbers of the report, spread out, from the start (index 0) up to (but not including) the current number at index i.

					...report.slice(i + 1), // Create a new array containing all numbers of the report, spread out, starting from the number after the current index i (index i + 1) and going to the end of the report array
				];
				// Check if the modified report is safe with the current number we're looping over being removed
				if (isReportSafe(modifiedReport)) {
					safeReportsCount++;
					return; // If it is safe then no need to check further removals for this report
				}
			}
		}
	});
	// Log the number of updated safe reports
	console.log('Updated Safe Reports:', safeReportsCount);
};

functionTwo(reports);
