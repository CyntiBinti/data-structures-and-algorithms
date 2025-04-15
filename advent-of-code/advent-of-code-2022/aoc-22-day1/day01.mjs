import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const elves = readFileSync("day01-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split where it finds a double new line and create a 2D substring array (at the point of the double newlines)
  
  // *** elves input now looks like this: [1000 2000 3000,4000,5000 6000,7000 8000 9000,10000]

  // global scope: set the initial reducer value to start counting from 0
  const initialReducerValue = 0

  // global scope: loop through each substring (i.e. [1000 2000 3000] then [4000], etc etc), and for each substring...
  const calories = elves.map((elf) => {

    // ... where there is a single new line, split it (i.e. into [1000, 2000, 3000]) and then loop through and convert each substring element into a number...
    const calorie = elf.split("\n").map(Number);

    // ... then using the reduce function, sum the values of each of the elements in the substring array, starting the counter from 0...
    return calorie.reduce((accumulatorValue, currentValue) => accumulatorValue + currentValue, initialReducerValue);

    // ... then repeat these steps for the next substring block
  });

function part1() {
  // calories now stores an array of the summed values of each substring group (i.e. instead of [1000, 2000, 3000] it's now [6000]),...
  // ... so spread the contents of this array into the Math.max function...
  // ...and find the highest summed value
  console.log(`most calories: `, Math.max(...calories));
}

function part2() {
  // sort the calories array in descending order (highest to lowest)
  calories.sort((a, b) => b-a)

  // take the first 3 indices ([0], [1], [2]) and create a new array with them, and then sum their total value using the reduce function
  const top3Calories = calories.slice(0, 3).reduce((accumulatorValue, currentValue) => accumulatorValue + currentValue, initialReducerValue)
  
  console.log(`top 3 total calories: ${top3Calories}`);
}
 
part1();
part2();