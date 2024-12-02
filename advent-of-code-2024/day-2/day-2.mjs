import { readFileSync } from 'node:fs';

const reports = readFileSync('day-2-input.txt', { encoding: 'utf-8' })
	.replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
	.split('\n') // Split where it finds a single new line and create an array
	.map(
		(report) => report.trim().split(/\s+/).map(Number) // Trim again, and split where it finds one or more whitespaces
	);

const functionOne = (reports) => {
	const safeReports = [];
	const ALLOWED_DIFF = [1, 2, 3];

	reports.map((report) => {
		report.every((number, index, array) => {
			if (ALLOWED_DIFF.includes(number - (index + 1))) {
				//todo
				safeReports.push(report);
			}
		});
	});
	console.log(safeReports);
};

functionOne(reports);

const functionTwo = () => {
	// todo
};

functionTwo();
