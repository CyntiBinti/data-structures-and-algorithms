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
    const sortedArray = A.sort()

    const arrayHashMap = new Set(sortedArray);

    for (let i = 1; i < sortedArray[sortedArray.length-1]; i++) {
        if (!arrayHashMap.has(i)) {
            console.log(`smallestInteger is: ${i}`)
            return i;
        }
    }
}

solutionA([1, 3, 6, 4, 1, 2]);
solutionA([1, 2, 3]);
// solutionA([−1, −3])
