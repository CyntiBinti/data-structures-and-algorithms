import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const input = readFileSync("day05-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace

const [stackInput, stackMoves] = input.split("\n\n").map(line => line.split("\n"));

const parsedStacks = stackInput.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);

const stackIndexes = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
  console.log(line[1])
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[stackIndexes[i]]) {
        stacks[stackIndexes[i]] = [];
      }
      stacks[stackIndexes[i]].unshift(line[i])
    }
    
  }
}

// console.log(stacks)

function part1() {

  // for each crate move instruction do the following:
    // function1:
      // make a function that parses and converts each crate move line into 3 variables of: numberofCratesToMove, stackToMoveFrom, stackToMoveTo
      // then create a for/loop where:
        // i is <= numberofCratesToMove, stackToMoveFrom value is the stack[index -1] of the stacks subarray, and stackToMoveTo value is the stack[index -1] of the stacks subarray
        // where for each numberofCratesToMove, it pops the crate from the stackToMoveFrom, and then pushes it onto the stackToMoveTo
        // once the for loop is complete (ie no more numberofCratesToMove), then the for loop exits and it runs a new loop for the next line of instructions
    


    // function2:
      // once all the moves have been made, loop through the stacks array and pop the last crate of each stack (i.e. stacks[i][stacks[i.length-1]]) and push it into a topCrates array
      // console.log this topCrates array for the answer

}


function part2() {

}
 
part1();
part2();

