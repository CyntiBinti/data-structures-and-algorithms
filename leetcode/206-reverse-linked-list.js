/*

LEVEL: EASY
See image in "problem-images" folder"

Given the head of a singly linked list, reverse the list, and return the reversed list.

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

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
 * @return {ListNode}
 */
var reverseList = function (head) {
	// if the linked list is empty then return null
	if (head === null) {
		return null;
	}

	// set 2 pointers to keep track of the updated linked list
	// set a temporary pointer to ensure the linked list connection isn't broken between iterations
	let currentNode = head;
	let previousNode = null;
	let tempNode = null;

	// i.e. loop until we get to the end of the linked list
	while (currentNode !== null) {
		// set temp so we don't lose who the next node in the list is
		tempNode = currentNode.next;

		// re-direct the current node to instead point to the previous node behind it
		currentNode.next = previousNode;

		// then move both prev and curr along to the right, pointing to the next 2 nodes before repeating
		previousNode = currentNode;
		currentNode = tempNode;
	}

	// as the nodes are all pointing to the left, therefore the last node is now head
	return previousNode;
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
const head1 = buildLinkedList([1, 2, 3, 4, 5]);
console.log(linkedListToArray(reverseList(head1))); // [5,4,3,2,1]

const head2 = buildLinkedList([1, 2]);
console.log(linkedListToArray(reverseList(head2))); // [2,1]

const head3 = buildLinkedList([]);
console.log(linkedListToArray(reverseList(head2))); // []
