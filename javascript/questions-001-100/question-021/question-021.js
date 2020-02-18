// Merge Two Sorted Lists

// Problem 21
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const ListNode = require(`../../util/ListNode`);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

module.exports = mergeTwoLists;
