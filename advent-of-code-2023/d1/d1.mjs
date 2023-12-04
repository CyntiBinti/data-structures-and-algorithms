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

// partOne();

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
        nine: 9
    }

    const reversedNumberLettersMap = {
        eno: 1,
        owt: 2,
        eerht: 3,
        ruof: 4,
        evif: 5,
        xis: 6,
        neves: 7,
        thgie: 8,
        enin: 9
    }


    const numbers = lines.map(([...line]) => {

        // to get the FIRST number
        let finalFirstNumber = [];
        let firstArray = [];

            for (let i = 0; i < line.length; i++) {
                if (finalFirstNumber.length === 0) {
                    if (!Number.isNaN(Number(line[i]))) {
                        finalFirstNumber.push(Number(line[i]));
                    }

                    firstArray.push(line[i]);

                    const lineSubStringFirst = firstArray.join('');

                    for (const [key, value] of Object.entries(numberLettersMap)) {
                    if (lineSubStringFirst.includes(key)) {
                        finalFirstNumber.push(value);
                        }
                    }
                }
            }
        console.log('finalFirstNumber', finalFirstNumber)


        // to get the LAST number
        let finalLastNumber = [];
        let lastArray = [];
        let reversedLine = [...line].reverse();

            for (let i = 0; i < line.length; i++) {
                if (finalLastNumber.length === 0) {
                    if (!Number.isNaN(Number(reversedLine[i]))) {
                        finalLastNumber.push(Number(reversedLine[i]));
                    }

                    lastArray.push(reversedLine[i]);

                    const lineSubStringLast = lastArray.join('');

                    for (const [key, value] of Object.entries(reversedNumberLettersMap)) {
                    if (lineSubStringLast.includes(key)) {
                        finalLastNumber.push(value);
                        }
                    }
                }
            }
        console.log('finalLastNumber', finalLastNumber)

        const finalLineNumber = finalFirstNumber.concat(finalLastNumber);

        console.log('finalLineNumber:', finalLineNumber)

        return finalLineNumber;
    })
    

    // console.log('PART 2 ANSWER:', numbers.reduce((prev, curr) => prev + curr))
}

partTwo();