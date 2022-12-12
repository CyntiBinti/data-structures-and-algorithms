import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const allRucksackContents = readFileSync("day03-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)

  /*
  Part1 task: find the common letter that appears in both compartments of each rucksack & then find its priority value. Sum all these values across all backpacks
  */

  function rucksackCompartmentCheck(setA, setB) {
    const rucksackCompartment = new Set(setA);
    for (const item of setB) {
      if (rucksackCompartment.has(item)) {
        const duplicateItem = item;
        console.log(`item is: ${duplicateItem}`)
        return;
      }
    }
    return rucksackCompartment;
  }

function part1() {

  const compartment = allRucksackContents.map(rucksack => {
    const halfARucksack = Math.round(rucksack.length/2);
    const compartment1 = rucksack.slice(0, halfARucksack);
    const compartment2 = rucksack.slice(halfARucksack)

    rucksackCompartmentCheck(compartment1, compartment2)

  })
}

function part2() {

}
 
part1();
part2();

