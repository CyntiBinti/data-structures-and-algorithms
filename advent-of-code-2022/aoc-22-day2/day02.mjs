import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const gameStrategy = readFileSync("day02-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)
  
  let totalScore = 0;

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
    // if player wins
    if ((player === rock.playerLetter && opponent === scissors.opponentLetter) || 
        (player === paper.playerLetter && opponent === rock.opponentLetter) || 
        (player === scissors.playerLetter && opponent === paper.opponentLetter)) {
        return totalScore +=6;
    }
    // if opponent wins
    if ((opponent === rock.opponentLetter && player === scissors.playerLetter) || 
        (opponent === paper.opponentLetter && player === rock.playerLetter) || 
        (opponent === scissors.opponentLetter && player === paper.playerLetter)) {
        return totalScore +=0;
    }
    // if it's a tie
    return totalScore +=3;
  }

  const playerScore = (player) => {
    if (player === rock.playerLetter) {
        return totalScore += rock.score;
    }
    if (player === paper.playerLetter) {
        return totalScore += paper.score;
    }
    if (player === scissors.playerLetter) {
        return totalScore += scissors.score;
    }
  }

function part1() {
    const rounds = gameStrategy.map(round => {
        const turn = round.split(" ")
 
        result(turn[0], turn[1]);

        playerScore(turn[1]);
    })

    console.log(`totalScore is: ${totalScore}`);
}

function part2() {

}
 
part1();
part2();