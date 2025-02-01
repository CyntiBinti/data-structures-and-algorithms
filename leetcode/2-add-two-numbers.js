/*

LEVEL: MEDIUM
See image in "problem-images" folder"

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
	// NOTE LIMITATION: this solution won't work for large linked list values ie 10(power of 30)
	// as resulting sum will exceed JavaScript’s safe integer limit, causing precision errors.

	let list1Sum = 0;
	let list2Sum = 0;

	// set head of list to current variable
	let l1Current = l1;
	let l2Current = l2;

	// use multiplier so can ensure list is reversed with values being assigned
	// the right 'ones/tens/hundreds' position. Lists normally store data in reverse
	let multiplier = 1;

	// loop through till the end and sum list in reverse order
	while (l1Current !== null) {
		list1Sum += l1Current.val * multiplier;
		multiplier *= 10;
		l1Current = l1Current.next;
	}

	multiplier = 1;
	while (l2Current !== null) {
		list2Sum += l2Current.val * multiplier;
		multiplier *= 10;
		l2Current = l2Current.next;
	}

	const sum = list1Sum + list2Sum;

	// spread into a string array and reverse the values
	const sumAsArray = [...String(sum)].reverse();

	// create a new list
	let current = (dummyHead = new ListNode(0));

	// loop through the array and set each number as the value for that node
	for (let i = 0; i < sumAsArray.length; i++) {
		current.next = new ListNode(Number(sumAsArray[i]));
		current = current.next;
	}

	// as we initialised the list with 0 as the head, we just want everything after that i.e. the intended numbers
	return dummyHead.next;
};

class NodeList {
	constructor(val, next) {
		this.val = val !== undefined ? val : 0;
		this.next = next !== undefined ? next : undefined;
	}
}

function arrayToList(arr) {
	let dummyHead = new NodeList(0);
	let current = dummyHead;
	for (let num of arr) {
		current.next = new NodeList(num);
		current = current.next;
	}
	return dummyHead.next;
}

console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]))); // [7,0,8]

// testcases
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
// console.log(addTwoNumbers([0], [0])); // [0]
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [8,9,9,9,0,0,0,1]
