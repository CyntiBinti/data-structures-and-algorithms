import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const allRucksackContents = readFileSync("day03-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)

const duplicateItem = [];
const groupDuplicateItem = [];
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// PART1: using a hashMap, loop through compartmentB and check if compartmentA (the hashMap) has any duplicates. If so, then store the duplicate letter inside a variable to be used later
function rucksackCompartmentCheck(compartmentA, compartmentB) {
  const rucksackCompartment = new Set(compartmentA);
  for (const item of compartmentB) {
    if (rucksackCompartment.has(item)) {
      duplicateItem.push(item);
      return;
    }
  }
  return rucksackCompartment;
}



// PART2: using a hashMap, loop through rucksack1 and check if rucksack2 (the hashMap) has any duplicates. Store duplicates in an array, then hashmap loop through this new array compared against rucksack3 to find the common letter/item across all 3 bags
function rucksackGroupCheck(rucksack1, rucksack2, rucksack3) {
  const rucksackFirstCheck = new Set(rucksack1);
  const array = []

  // first loop adds common letters/items into an array between rucksack1 and rucksack2
  for (const item of rucksack2) {
    if (rucksackFirstCheck.has(item)) {
      array.push(item);
    }
  }
  // second loop adds common letters/items into the final array between the initial duplicates array and rucksack3
  const rucksackSecondCheck = new Set(rucksack3)
  for (const item of array) {
    if (rucksackSecondCheck.has(item)) {
      groupDuplicateItem.push(item);
      return;
    }
  }

  return rucksackSecondCheck;
}



// this function takes an input, and for each element it will push the index value of that element inside an array, and then a reduce function will sum the total of that array
function sumOfPriorityItems(duplicateItem) {
  const priorityItemValues = [];
  let priorityTotal = 0;
  const reduceStartingValue = 0;
  for (const item of duplicateItem) {
    priorityItemValues.push((alphabet.indexOf(item) + 1))
    priorityTotal = priorityItemValues.reduce((previousValue, currentValue) => previousValue + currentValue, reduceStartingValue)
  }
  console.log(`priorityTotal is: ${priorityTotal}`)
}


function part1() {
  // loops through each rucksack and for each rucksack it splits the contents into 2 equal compartments
  const compartment = allRucksackContents.map(rucksack => {
    const halfARucksack = Math.round(rucksack.length/2);
    const compartment1 = rucksack.slice(0, halfARucksack);
    const compartment2 = rucksack.slice(halfARucksack)

    // pass these newly created compartment halves into this function that will check for duplicate letters/items
    rucksackCompartmentCheck(compartment1, compartment2);
  })

  // loops through the duplicateItem array and stores the index of each letter (when checked against the alphabet array) into a reducer function, to get the final sum
  sumOfPriorityItems(duplicateItem);
}


function part2() {
    const elfGroupRucksacks = [];

    // loop through the puzzle input and at index points [0], [1], and [2] (ie every 3rd rucksack) add these into a new array (= the elf rucksack group)
    while(allRucksackContents.length) {
      elfGroupRucksacks.push(allRucksackContents.splice(0, 3));
    }

    elfGroupRucksacks.map(elfGroup => {
      const elfRucksack = elfGroup.toString().split(",");
      const rucksack1 = elfRucksack[0];
      const rucksack2 = elfRucksack[1];
      const rucksack3 = elfRucksack[2];

    // checks for duplicate item across all 3 rucksacks in an elf group
    rucksackGroupCheck(rucksack1, rucksack2, rucksack3);
    })

    // loops through the duplicateItem array and stores the index of each letter (when checked against the alphabet array) into a reducer function, to get the final sum
    sumOfPriorityItems(groupDuplicateItem);
    }
 
part1();
part2();

