import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const gameStrategy = readFileSync("day02-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)
  
  let totalScore = 0
  const rock = {
    opponentLetter: "A",
    playerLetter: "X",
    score: 1
  }

  const paper = {
    opponentLetter: "B",
    playerLetter: "Y",
    score: 2
  }

  const scissors = {
    opponentLetter: "C",
    playerLetter: "Z",
    score: 3
  }

  const result = (opponent, player) => {
    if ((player === rock.playerLetter && opponent === scissors.opponentLetter) || 
        (player === paper.playerLetter && opponent === rock.opponentLetter) || 
        (player === scissors.playerLetter && opponent === paper.opponentLetter)) {
        console.log(`=========1`)
        return totalScore +=6
    }
    if ((opponent === rock.opponentLetter && player === scissors.playerLetter) || 
        (opponent === paper.opponentLetter && player === rock.playerLetter) || 
        (opponent === scissors.opponentLetter && player === paper.playerLetter)) {
        console.log(`=========2`)
        return totalScore +=0
    }
    console.log(`=========3`)
    return totalScore +=3
  }

  console.log(`gameStrategy is: ${gameStrategy}`)

function part1() {
    const rounds = gameStrategy.map(round => {
        console.log(`round is: ${round}`)
        const turn = round.split(" ")
 
        result(turn[0], turn[1])
        console.log(`totalScore is: ${totalScore}`)
    })

}

function part2() {

}
 
part1();
part2();