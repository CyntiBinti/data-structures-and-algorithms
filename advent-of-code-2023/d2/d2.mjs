import { readFileSync } from "node:fs";

const lines = readFileSync("d2/d2-input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create an array

function partOne() {
    let gameIDs = [];

    for (const line of lines) {
        const gameSets = line.replaceAll(';', ',').replace(':', ',').split(',');
        const gameID = Number(gameSets[0].split(' ')[1]);
        let totalRedCubes = 0;
        let totalGreenCubes = 0;
        let totalBlueCubes = 0;
        
        for (const cube of gameSets) {
            if (cube.endsWith('red')) {
                totalRedCubes += Number(cube.trim().split(' ')[0])
            }
            if (cube.endsWith('green')) {
                totalGreenCubes += Number(cube.trim().split(' ')[0])
            }
            if (cube.endsWith('blue')) {
                totalBlueCubes += Number(cube.trim().split(' ')[0])
            }
        }

        console.log(`gameID: ${gameID}, reds: ${totalRedCubes}, greens: ${totalGreenCubes}, blues: ${totalBlueCubes}`)

        if (totalRedCubes < 13 && totalGreenCubes < 14 && totalBlueCubes < 15) {
            gameIDs.push(gameID)
        }
    }
    console.log('possible gameIDs:', gameIDs)
    console.log('gameIDs Totals:', gameIDs.reduce((prev, curr) => prev + curr))
}

function partTwo() {
    // something
}

partOne();
partTwo();