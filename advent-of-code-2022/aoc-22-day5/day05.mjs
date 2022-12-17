import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const crateMovement = readFileSync("day05-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split where it finds a single new line and create a 2D substring array

  console.log(`1st move = ${crateMovement[0]}`)
  console.log(`2nd move = ${crateMovement[1]}`)
  console.log(`3rd move = ${crateMovement[2]}`)
  console.log(`4th move = ${crateMovement[3]}`)

const stacks = [["Z", "N", "D"], ["M", "C"],["P"]]
let topCrates = [];

function part1() {

  // for each crate move instruction do the following:
    // function1:
      // make a function that parses and converts each crate move line into 3 variables of: numberofCratesToMove, stackToMoveFrom, stackToMoveTo
      // then create a for/loop where:
        // i is <= numberofCratesToMove, stackToMoveFrom value is the stack[index -1] of the stacks subarray, and stackToMoveTo value is the stack[index -1] of the stacks subarray
        // where for each numberofCratesToMove, it pops the crate from the stackToMoveFrom, and then pushes it onto the stackToMoveTo
        // once the for loop is complete (ie no more numberofCratesToMove), then the for loop exits and it runs a new loop for the next line of instructions
    
    // const crateMove = crateMovement.map(fullMove => {
    //   const moveValues = fullMove.replace(/\D/g,'')

    //   console.log(moveValues)
      
    // })

    // function2:
      // once all the moves have been made, loop through the stacks array and pop the last crate of each stack (i.e. stacks[i][stacks[i.length-1]]) and push it into a topCrates array
      // console.log this topCrates array for the answer

}


function part2() {

}
 
part1();
part2();

