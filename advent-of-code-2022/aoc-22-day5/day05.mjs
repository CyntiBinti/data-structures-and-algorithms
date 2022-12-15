import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const XXX = readFileSync("day05-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)


function part1() {

}


function part2() {

}
 
part1();
part2();

