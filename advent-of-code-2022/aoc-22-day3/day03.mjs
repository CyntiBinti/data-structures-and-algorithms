import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const allRucksackContents = readFileSync("day03-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)

  const duplicateItem = [];
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


  // using a hashMap, loop through compartmentB and check if compartmentA (the hashMap) has any duplicates. If so, then store the duplicate letter inside a variable to be used later
  function rucksackCompartmentCheck(compartmentA, compartmentB) {
    const rucksackCompartment = new Set(compartmentA);
    for (const item of compartmentB) {
      if (rucksackCompartment.has(item)) {
        duplicateItem.push(item);
        console.log(`duplicate item is: ${duplicateItem}`)
        return;
      }
    }
    return rucksackCompartment;
  }

  // this function takes an input, and for each element it will push the index value of that element inside an array, and then a reduce function will sum the total of that array
  function sumOfPriorityItems(duplicateItem) {
    const priorityItemValues = [];
    for (const item of duplicateItem) {
      priorityItemValues.push((alphabet.indexOf(item) + 1))
      console.log(`priorityItemValues are: ${priorityItemValues}`)
      const priorityTotal = priorityItemValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      console.log(`priorityTotal is: ${priorityTotal}`)
    }
  }

function part1() {

  // loops through each rucksack and for each rucksack it splits the contents into 2 equal compartments
  const compartment = allRucksackContents.map(rucksack => {
    const halfARucksack = Math.round(rucksack.length/2);
    const compartment1 = rucksack.slice(0, halfARucksack);
    const compartment2 = rucksack.slice(halfARucksack)

    // pass these newly created compartment halves into this function that will check for duplicate letters/items
    rucksackCompartmentCheck(compartment1, compartment2);

    // loops through the duplicateItem array and stores the index of each letter (when checked against the alphabet array) into a reducer function, to get the final sum
    sumOfPriorityItems(duplicateItem);

  })
}

function part2() {

}
 
part1();
part2();

