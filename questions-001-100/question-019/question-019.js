// Remove Nth Node From End of List

// Problem 19
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let tempNode = new ListNode(0),
    node = tempNode,
    len = 0;

  while (head != null) {
    node.next = new ListNode(head.val);
    node = node.next;

    head = head.next;
    len++;
  }
  let removeIndex = len - n + 1;

  let returnNode = new ListNode(0);
  tempNode = tempNode.next;
  node = returnNode;
  len = 0;
  while (tempNode != null) {
    len++;
    if (len != removeIndex) {
      node.next = new ListNode(tempNode.val);
      node = node.next;
    }

    tempNode = tempNode.next;
  }

  return returnNode.next;
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

module.exports = { ListNode, removeNthFromEnd };
