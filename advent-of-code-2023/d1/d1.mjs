import { readFileSync } from "node:fs";

const lines = readFileSync("d1/d1-input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split where it finds a single new line and create an array

function partOne() {
        const numbers = lines.map((line) => {
        let firstNumber = line.split('').find((index) => !Number.isNaN(Number(index)));
        let lastNumber = line.split('').findLast((index) => !Number.isNaN(Number(index)));
        return Number(firstNumber + lastNumber);
    })

    console.log('PART 1 ANSWER:', numbers.reduce((prev, curr) => prev + curr))
}

partOne();

function partTwo() {
    const numberLettersMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
    }

    const numbers = lines.map((line) => {
        let array = [];
        for (const [key, value] of Object.entries(numberLettersMap)) {
            if (line.includes(key)) {
                array.push(value)
            }
        }

        console.log('array:', array)
    })
    

    // console.log('PART 2 ANSWER:', numbers.reduce((prev, curr) => prev + curr))
}

partTwo();