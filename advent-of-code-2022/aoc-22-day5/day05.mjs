// Thanks to @tpatel for their helpful Youtube vid in going over this particular coding challenge!

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
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[stackIndexes[i]]) {
        stacks[stackIndexes[i]] = [];
      }
      stacks[stackIndexes[i]].unshift(line[i])
    }
    
  }
}

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

}


function part2() {

}
 
part1();
part2();

