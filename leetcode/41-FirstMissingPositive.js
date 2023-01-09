/*

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
* N is an integer within the range [1..100,000];
* each element of array A is an integer within the range [−1,000,000..1,000,000]

*/

function solutionA(A) {
    
    // covers negative integers/empty array inputs
    const positiveIntegerArray = A.filter(num => num > 0)

    if (positiveIntegerArray.length === 0) {
        return 1;
    } else {
        const sortedArray = positiveIntegerArray.sort()

        const arrayHashMap = new Set(sortedArray);

        for (let i = 1; i < 100000; i++) {
            if (!arrayHashMap.has(i)) {
                return i;
            }
        }
    }
}

console.log(`smallestInteger input1 is: ${solutionA([1, 3, 6, 4, 1, 2])}`);
console.log(`smallestInteger input2 is: ${solutionA([1, 2, 3])}`);
console.log(`smallestInteger input3 is: ${solutionA([0])}`);
