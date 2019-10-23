// Merge Two Sorted Lists

// Problem 21
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let returnNode = new ListNode(0),
    node = returnNode;

  while (l1 != null || l2 != null) {
    if (l1 != null && l2 != null) {
      if (l1.val < l2.val) {
        node.next = new ListNode(l1.val);
        l1 = advanceList(l1);
      } else {
        node.next = new ListNode(l2.val);
        l2 = advanceList(l2);
      }
      node = node.next;
    } else {
      if (l1 != null) {
        while (l1 != null) {
          node.next = new ListNode(l1.val);
          l1 = advanceList(l1);
          node = node.next;
        }
      } else {
        while (l2 != null) {
          node.next = new ListNode(l2.val);
          l2 = advanceList(l2);
          node = node.next;
        }
      }
    }
  }

  return returnNode.next;
};

var advanceList = function(list) {
  return list && list.next ? list.next : null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { ListNode, mergeTwoLists };
