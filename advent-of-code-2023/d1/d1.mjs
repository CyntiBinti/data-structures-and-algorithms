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
        let finalFirstNumber = [];
        let finalLastNumber = [];

        // to get the FIRST number
        let firstWordNumber;
        let firstNumber;
        let firstArray = []

        // to get the LAST number
        let lastWordNumber;
        let lastNumber;
        let lastArray = []
        let reversedLine = [...line].reverse()

        for (let i = 0; i < line.length; i++) {
            if (!Number.isNaN(Number(line[i]))) {
                firstNumber = Number(line[i]);
                finalFirstNumber.push(firstNumber);
                console.log('finalFirstNumber', finalFirstNumber)
            }
            if (!Number.isNaN(Number(reversedLine[i]))) {
                lastNumber = Number(reversedLine[i]);
                finalLastNumber.push(lastNumber);
                console.log('finalLastNumber', finalLastNumber)
            }

            firstArray.push(line[i])
            lastArray.push(reversedLine[i])

            const lineSubStringFirst = firstArray.join('')
            console.log('lineSubStringFirst', lineSubStringFirst)
            const lineSubStringLast = lastArray.join('')
            console.log('lineSubStringLast', lineSubStringLast)

            for (const [key, value] of Object.entries(numberLettersMap)) {
                if (lineSubStringFirst.includes(key)) {
                    firstWordNumber = value
                    finalFirstNumber.push(firstWordNumber);
                    console.log('finalFirstNumber', finalFirstNumber)
                }
            }
            for (const [key, value] of Object.entries(reversedNumberLettersMap)) {
                if (lineSubStringLast.includes(key)) {
                    lastWordNumber = value
                    finalLastNumber.push(lastWordNumber);
                    console.log('finalLastNumber', finalLastNumber)
                }
            }
            
            if ((firstNumber || firstWordNumber) && (lastNumber || lastWordNumber)) {
                console.log(`finalFirstNumber: ${finalFirstNumber} and finalLastNumber: ${finalLastNumber}`)
                break;
            }
        }

        const finalLineNumber = finalFirstNumber.concat(finalLastNumber);

        console.log('finalLineNumber:', finalLineNumber)

        return finalLineNumber;
    })
    

    // console.log('PART 2 ANSWER:', numbers.reduce((prev, curr) => prev + curr))
}

partTwo();