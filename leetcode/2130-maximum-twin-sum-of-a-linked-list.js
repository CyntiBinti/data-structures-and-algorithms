/*

LEVEL: MEDIUM
See image in "problem-images" folder"

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

Constraints:

The number of nodes in the list is an even integer in the range [2, 10(power of 5)].
1 <= Node.val <= 10(power of 5)

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
	if (head === null || head.next === null) {
		return null;
	}

	// traverse the list to collect node values in an array
	let values = [];
	let current = head;
	while (current !== null) {
		values.push(current.val);
		current = current.next;
	}

	// calculate the twin sums using array indexing
	let maxTwinSum = 0;
	let n = values.length;

	// use i < n / 2 as only need to do half of array length, as looking for pairs
	for (let i = 0; i < n / 2; i++) {
		let twinSum = values[i] + values[n - 1 - i];
		maxTwinSum = Math.max(maxTwinSum, twinSum);
	}

	return maxTwinSum;
};

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Helper function to build a linked list from an array
function buildLinkedList(arr) {
	if (arr.length === 0) return null;
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
}

// Helper function to convert a linked list back to an array
function linkedListToArray(head) {
	let result = [];
	while (head !== null) {
		result.push(head.val);
		head = head.next;
	}
	return result;
}

// testcases
const head1 = buildLinkedList([5, 4, 2, 1]);
console.log(linkedListToArray(pairSum(head1))); // 6

const head2 = buildLinkedList([4, 2, 2, 3]);
console.log(linkedListToArray(pairSum(head2))); // 7

const head3 = buildLinkedList([1, 100000]);
console.log(linkedListToArray(pairSum(head3))); // 100001
