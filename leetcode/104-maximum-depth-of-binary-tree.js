/*

LEVEL: EASY
See image in "problem-images" folder"

Given the root of a binary tree, return its maximum depth (i.e. height).

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node

Constraints:

The number of nodes in the tree is in the range [0, 10(power of 4)].
-100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
	// if the tree is empty, the depth is 0
	if (root === null) {
		return 0;
	}

	// initialise the stack with the parent node, and a depth of 1
	let stack = [{ node: root, depth: 1 }];
	let maxDepth = 0;

	while (stack.length > 0) {
		// deconstruct the node and depth properties from the popped stack object
		let { node, depth } = stack.pop();

		// update the maximum depth
		maxDepth = Math.max(maxDepth, depth);

		// push the left child node if it exists, and increment the depth counter
		if (node.left) {
			stack.push({ node: node.left, depth: depth + 1 });
		}

		// push the right child node if it exists, and increment the depth counter
		if (node.right) {
			stack.push({ node: node.right, depth: depth + 1 });
		}
	}

	return maxDepth;
};

// Helper function to construct a binary tree from an array (level-order traversal).
function arrayToTreeNode(array) {
	if (array.length === 0) return null;

	const root = new TreeNode(array[0]);
	const queue = [root];
	let i = 1;

	while (queue.length > 0 && i < array.length) {
		const node = queue.shift();

		if (array[i] !== null) {
			node.left = new TreeNode(array[i]);
			queue.push(node.left);
		}
		i++;

		if (i < array.length && array[i] !== null) {
			node.right = new TreeNode(array[i]);
			queue.push(node.right);
		}
		i++;
	}

	return root;
}

// Definition for a binary tree node.
class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// Testcases
const root1 = arrayToTreeNode([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root1)); // Output: 3

const root2 = arrayToTreeNode([1, null, 2]);
console.log(maxDepth(root2)); // Output: 2
