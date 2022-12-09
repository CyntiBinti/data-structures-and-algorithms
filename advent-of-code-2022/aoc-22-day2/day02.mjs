import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const gameStrategy = readFileSync("day02-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)
  
  let totalScore = 0
  const rock = {
    letter: "A" || "X",
    score: 1
  }

  const paper = {
    letter: "B" || "Y",
    score: 2
  }

  const scissors = {
    letter: "C" || "Z",
    score: 3
  }

  const result = (opponent, player) => {
    if (player && opponent === (rock.letter || paper.letter || scissors.letter)) {
        return totalScore +=3
    }
    if ((player === rock.letter && opponent === scissors.letter) || 
        (player === paper.letter && opponent === rock.letter) || 
        (player === scissors.letter && opponent === paper.letter)) {
        return totalScore +=6
    } else return totalScore +=0
  }

  console.log(`gameStrategy is: ${gameStrategy}`)

function part1() {
    const rounds = gameStrategy.map(round => {
        console.log(`round is: ${round}`) 
        result(round[0], round[1])
        console.log(`totalScore is: ${totalScore}`)
    })

}

function part2() {

}
 
part1();
part2();