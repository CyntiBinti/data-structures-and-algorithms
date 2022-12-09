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
    console.log(`opponent is: ${opponent}`)
    console.log(`player is: ${player}`)
    if ((opponent === rock.letter && player === scissors.letter) || 
        (opponent === paper.letter && player === rock.letter) || 
        (opponent === scissors.letter && player === paper.letter)) {
        console.log(`=========1`)
        return totalScore +=0
    }
    if ((player === rock.letter && opponent === scissors.letter) || 
        (player === paper.letter && opponent === rock.letter) || 
        (player === scissors.letter && opponent === paper.letter)) {
        console.log(`=========2`)
        return totalScore +=6
    }
    console.log(`=========3`)
    return totalScore +=3
  }

  console.log(`gameStrategy is: ${gameStrategy}`)

function part1() {
    const rounds = gameStrategy.map(round => {
        console.log(`round is: ${round}`)
        const turn = round.split(" ")
        console.log(`turn[0] is: ${turn[0]}`) 
        console.log(`turn[1] is: ${turn[1]}`) 
 
        result(turn[0], turn[1])
        console.log(`totalScore is: ${totalScore}`)
    })

}

function part2() {

}
 
part1();
part2();