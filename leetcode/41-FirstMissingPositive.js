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
    // TO-DO: to write next is to cover negative integers/empty array inputs
    // can run a filter on the input that filters out if num < 0 then return what's left
    // and if that leaves the input array empty then return 1 as the smallest integer
    // else continue with the below code!
    
    const sortedArray = A.sort()

    const arrayHashMap = new Set(sortedArray);

    for (let i = 1; i < 100000; i++) {
        if (!arrayHashMap.has(i)) {
            return i;
        }
    }
}

console.log(`smallestInteger input1 is: ${solutionA([1, 3, 6, 4, 1, 2])}`)
console.log(`smallestInteger input2 is: ${solutionA([1, 2, 3])}`)
// solutionA([−1, −3])
