import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const sectionPairs = readFileSync("day04-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)

  let overlapCounter = 0;

function part1() {

  const elfPair = sectionPairs.map(sectionPair => {
    const aSection = sectionPair.toString().split(",");
    const firstElfSection = aSection[0]
    const secondElfSection = aSection[1]

    const firstElf = firstElfSection.toString().split("-");
    const firstElfSectionStartID = Number(firstElf[0]);
    const firstElfSectionEndID = Number(firstElf[1]);

    const secondElf = secondElfSection.toString().split("-");
    const secondElfSectionStartID = Number(secondElf[0]);
    const secondElfSectionEndID = Number(secondElf[1]);

    if ((firstElfSectionStartID <= secondElfSectionStartID) && (firstElfSectionEndID >= secondElfSectionEndID) ||
    (firstElfSectionStartID >= secondElfSectionStartID) && (firstElfSectionEndID <= secondElfSectionEndID )) {
      overlapCounter ++
    }

  })
  console.log(`overlapCounter is: ${overlapCounter}`)
  return overlapCounter;

}


function part2() {

}
 
part1();
part2();

