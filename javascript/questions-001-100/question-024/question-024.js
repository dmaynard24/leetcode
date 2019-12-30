// Swap Nodes in Pairs

// Problem 24
// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

const ListNode = require('../../util/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	let returnNode = new ListNode(0),
		node = returnNode;

	while (head != null) {
		let hasNext = head.next != null;

		if (hasNext) {
			node.next = new ListNode(head.next.val);
			node = node.next;
		}
		node.next = new ListNode(head.val);
		node = node.next;

		head = hasNext ? head.next.next : head.next;
	}

	return returnNode.next;
};

module.exports = swapPairs;
