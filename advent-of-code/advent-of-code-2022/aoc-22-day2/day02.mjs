import { readFileSync } from "node:fs";

// takes in a text file and tidies it up via the readFileSync function
const gameStrategy = readFileSync("day02-input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create a 2D substring array (at the point of the single newline)
  
  let totalScore = 0;
  let newTotalScore = 0;

  const outcomes = {
    lose: "X",
    draw: "Y",
    win: "Z"
  }

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

  const newResult = (opponent, outcome) => {
    if (opponent === rock.opponentLetter) {
        if (outcome === outcomes.lose) {
            return newTotalScore += (0 + scissors.score)
        }
        if (outcome === outcomes.win) {
            return newTotalScore += (6 + paper.score)
        }
        if (outcome === outcomes.draw) {
            return newTotalScore += (3 + rock.score)
        }
    }
    if (opponent === paper.opponentLetter) {
        if (outcome === outcomes.lose) {
            return newTotalScore += (0 + rock.score)
        }
        if (outcome === outcomes.win) {
            return newTotalScore += (6 + scissors.score)
        }
        if (outcome === outcomes.draw) {
            return newTotalScore += (3 + paper.score)
        }
    }
    if (opponent === scissors.opponentLetter) {
        if (outcome === outcomes.lose) {
            return newTotalScore += (0 + paper.score)
        }
        if (outcome === outcomes.win) {
            return newTotalScore += (6 + rock.score)
        }
        if (outcome === outcomes.draw) {
            return newTotalScore += (3 + scissors.score)
        }
    }
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
    const rounds = gameStrategy.map(round => {
        const turn = round.split(" ")
 
        newResult(turn[0], turn[1]);
    })
    
    console.log(`newTotalScore is: ${newTotalScore}`);
}
 
part1();
part2();
