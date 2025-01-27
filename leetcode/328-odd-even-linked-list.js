/*

LEVEL: MEDIUM
See image in "problem-images" folder"

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Constraints:

The number of nodes in the linked list is in the range [0, 10(power of 4)].
-10(power of 6) <= Node.val <= 10(power of 6)

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
const oddEvenList = function (head) {
	if (head === null || head.next === null) {
		return head;
	}

	// create 2 nodes to keep track of odd and even nodes (means no extra memory as just using pointers)
	// odd is set to head as it's the 1st node
	// even is set to dummy (to keep track of the 2nd node i.e. even node)
	// dummy is set to head.next as it's the 2nd node (even and dummy initially point to the same memory ref.)
	let odd = head;
	let even = (dummyEven = head.next);

	// keep track of dummyEven (and not odd) as dummyEven is what's facilitating the traversal
	while (dummyEven !== null && dummyEven.next !== null) {
		// traverse through and set the next odd node to the even-node's next (ie the next odd node)
		odd.next = dummyEven.next;
		// then update the odd node to point to this odd.next node instead
		odd = odd.next;
		// same for even nodes as above
		dummyEven.next = odd.next;
		dummyEven = dummyEven.next;
	}

	// then point the end of odd.next to even (i.e. beginning ref. of start of dummyEven), to join the 2 lists together
	odd.next = even;

	// return head, as the existing linked list has been modified in place (don't return odd as this is pointing to the last odd node)
	return head;
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
console.log(linkedListToArray(oddEvenList(head1))); // [1,3,5,2,4]

const head2 = buildLinkedList([2, 1, 3, 5, 6, 4, 7]);
console.log(linkedListToArray(oddEvenList(head2))); // [2,3,6,7,1,5,4]
