// Remove Nth Node From End of List

// Problem 19
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

const ListNode = require(`../../util/ListNode`);

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const returnNode = new ListNode(0);
  returnNode.next = head;

  let first = returnNode;
  let second = returnNode;

  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return returnNode.next;
};

module.exports = removeNthFromEnd;
