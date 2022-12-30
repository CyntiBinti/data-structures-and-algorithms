// Thanks to @tpatel (https://github.com/tpatel/advent-of-code-2022/blob/main/day05.mjs) for their helpful Youtube vid for hints/tips going over this particular coding challenge!

import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const input = readFileSync("day05-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace

// take the raw input and split and store the data into 2 variables; within those variables, split the data again into individual lines
const [stackInput, stackMoves] = input.split("\n\n").map(line => line.split("\n"));

// for the stackInput variable, map over each line and spread the contents of 'line' into an array of characters and filter out values where the index % has a remainder of 1 
const parsedStacks = stackInput.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);

// remove the last line of the stackInput 2D array and store it in a variable (to denote the numerical position of where the crate stack will be held)
const stackIndexes = parsedStacks.pop();

// for each line of parsedStacks, loop over the length of each line and where there isn't an empty character:
  // at that index, if there isn't already an array then add an empty one
  // move the character at the beginning of the line array and push it on to the stacks array 
const stacks = {};
for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[stackIndexes[i]]) {
        stacks[stackIndexes[i]] = [];
      }
      stacks[stackIndexes[i]].unshift(line[i])
    }
    
  }
}

// for each line of stackMoves, store the numerical values (using regex) into variables which are then pushed into the empty 'moves' array:
const moves = [];
for (const move of stackMoves) {
  const moveValue = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: parseInt(moveValue[1]),
    from: parseInt(moveValue[2]),
    to: parseInt(moveValue[3]),
  });
}

function part1() {

  // create copy of stacks object so that original stacks object stays untouched for part2 of coding challenge
  const localStacks = JSON.parse(JSON.stringify(stacks));

  // loop over each move line and pop the crate on the 'from' stack and push it onto the 'to' stack
  for (const move of moves) {
    for (let i = move.count; i > 0; i--) {
      const crateRemoved = localStacks[move.from].pop();
      localStacks[move.to].push(crateRemoved);
    }
  }

  // store the values of the localStacks object into an array, then map over this 2D array to push the last index crate into the topCrates array, then join the letters without spacing
  const topCrates = [];
  let crateValues = Object.values(localStacks);

  crateValues.map(stack => {
    return topCrates.push(stack[stack.length - 1])
  })
  console.log(`part 1 is: ${topCrates.join("")}`)

}


function part2() {

  // create copy of stacks object so that original stacks object stays untouched
  const localStacks = JSON.parse(JSON.stringify(stacks));

  // loop over each move line and then:
    // for as many move.counts, pop + push the crate 'from' into a cratesRemoved array (this essentially pushes a 2D array into the relevant localStacks object)
    // so to remove the 2D array behaviour, we then spread the contents + reverse the order of the cratesRemoved array (this also then creates a new 2D array)
    // so then finally spread this new array again and push it onto the crate 'to' position of localStacks (no more nested arrays :D ... yay!)
  for (const move of moves) {

    const cratesRemoved = [];

    for (let i = move.count; i > 0; i--) {
      const crateRemoved = localStacks[move.from].pop();
      cratesRemoved.push(crateRemoved)
    }
    localStacks[move.to].push(...[...cratesRemoved].reverse());
  }

  // store the values of the localStacks object into an array, then map over this 2D array to push the last index crate into the topCrates array, then join the letters without spacing
  const topCrates = [];
  let crateValues = Object.values(localStacks);

  crateValues.map(stack => {
    return topCrates.push(stack[stack.length - 1])
  })
  console.log(`part 2 is: ${topCrates.join("")}`)

}
 
part1();
part2();

