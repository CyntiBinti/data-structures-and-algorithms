import { readFileSync } from "node:fs";

const lines = readFileSync("d2/d2-input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create an array

function partOne() {
    let possibleGameIDs = [];

    for (const line of lines) {
        let isSetPossible = true;

        const game = line.replaceAll(':', ';').split(';');
        const gameID = Number(game[0].split(' ')[1]);
        game.shift();
        
        for (const sets of game) {
            const cubes = sets.split(',');

            for (let i = 0; i < cubes.length; i++) {
                if (isSetPossible) {
                    if (cubes[i].endsWith('red')) {
                        const redCubeValue = Number(cubes[i].trim().split(' ')[0])
                        if (redCubeValue > 12) {
                            isSetPossible = false;
                            }
                    }
                    if (cubes[i].endsWith('green')) {
                        const greenCubeValue = Number(cubes[i].trim().split(' ')[0])
                        if (greenCubeValue > 13) {
                            isSetPossible = false;
                            }
                    }
                    if (cubes[i].endsWith('blue')) {
                        const blueCubeValue = Number(cubes[i].trim().split(' ')[0])
                        if (blueCubeValue > 14) {
                            isSetPossible = false;
                            }
                    }
                }
            }
        }

        if (isSetPossible) {
            possibleGameIDs.push(gameID);
        }
    }
    
    console.log('Part 1 Answer:', possibleGameIDs.reduce((prev, curr) => prev + curr))
}


function partTwo() {
    let sumOfAllPowers = [];

    for (const line of lines) {
        let highestRedValue = 0
        let highestGreenValue = 0
        let highestBlueValue = 0

        const game = line.replace(':', ',').replaceAll(';', ',').split(',')
        game.shift();
        
        for (const cube of game) {

            if (cube.endsWith('red')) {
                const redCubeValue = Number(cube.trim().split(' ')[0])
                if (redCubeValue > highestRedValue) {
                    highestRedValue = redCubeValue
                }
            }
            if (cube.endsWith('green')) {
                const greenCubeValue = Number(cube.trim().split(' ')[0])
                if (greenCubeValue > highestGreenValue) {
                    highestGreenValue = greenCubeValue
                }
            }
            if (cube.endsWith('blue')) {
                const blueCubeValue = Number(cube.trim().split(' ')[0])
                if (blueCubeValue > highestBlueValue) {
                    highestBlueValue = blueCubeValue
                }
            }
        }

        const gameSumOfPowers = (highestRedValue * highestGreenValue * highestBlueValue)

        sumOfAllPowers.push(gameSumOfPowers);
    }
    
    console.log('Part 2 Answer:', sumOfAllPowers.reduce((prev, curr) => prev + curr))
}

partOne();
partTwo();