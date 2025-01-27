/*

LEVEL: MEDIUM

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Example 1:
See image in "problem-images" folder"

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:
See image in "problem-images" folder"

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:
See image in "problem-images" folder"

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

Constraints:

The number of nodes in the list is in the range [1, 10(power of 5)].
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
 * @return {ListNode}
 */
const deleteMiddle = function (head) {
	// handle edge case for single-node list
	if (head === null || head.next === null) {
		return null;
	}

	let current = head;
	let count = 0;

	// traverse the linked list and store length as count
	while (current !== null) {
		count++;
		current = current.next;
	}

	// get the middle node index
	let middleNodeIndex = Math.floor(count / 2);

	// set current back to the beginning head node
	current = head;

	// traverse the linked list again, up to the node immediately before middle
	for (let i = 0; i < middleNodeIndex - 1; i++) {
		current = current.next;
	}

	// "delete" the next node by skipping it (i.e. setting the next node as 2 nodes along)
	current.next = current.next.next;

	// return the modified linked list with the removed middle node
	return head;
};

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
const head1 = buildLinkedList([1, 3, 4, 7, 1, 2, 6]);
console.log(linkedListToArray(deleteMiddle(head1))); // [1, 3, 4, 1, 2, 6]

const head2 = buildLinkedList([1, 2, 3, 4]);
console.log(linkedListToArray(deleteMiddle(head2))); // [1, 2, 4]

const head3 = buildLinkedList([2, 1]);
console.log(linkedListToArray(deleteMiddle(head3))); // [2]
