/*

LEVEL: EASY
See image in "problem-images" folder"

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree image, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Constraints:

The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
	let stack1 = [root1];
	let stack2 = [root2];
	let leaves1 = [];
	let leaves2 = [];

	while (stack1.length > 0) {
		let node = stack1.pop();

		if (!node.left && !node.right) {
			// then we know we've hit a leaf node if there's no children
			leaves1.push(node.val);
		}

		// but if the node does have children then add them to the stack for processing
		if (node.right) {
			stack1.push(node.right);
		}

		if (node.left) {
			stack1.push(node.left);
		}
	}

	while (stack2.length > 0) {
		let node = stack2.pop();

		if (!node.left && !node.right) {
			// then we know we've hit a leaf node if there's no children
			leaves2.push(node.val);
		}

		// but if the node does have children then add them to the stack for processing
		if (node.right) {
			stack2.push(node.right);
		}

		if (node.left) {
			stack2.push(node.left);
		}
	}

	if (leaves1.length !== leaves2.length) {
		return false;
	}

	for (let i = 0; i < leaves1.length; i++) {
		if (leaves1[i] !== leaves2[i]) {
			return false;
		}
	}

	return true;
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
const root1 = arrayToTreeNode([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const root2 = arrayToTreeNode([
	3,
	5,
	1,
	6,
	7,
	4,
	2,
	null,
	null,
	null,
	null,
	null,
	null,
	9,
	8,
]);
console.log(leafSimilar(root1, root2)); // true

const root3 = arrayToTreeNode([1, 2, 3]);
const root4 = arrayToTreeNode([1, 3, 2]);
console.log(leafSimilar(root3, root4)); // false
