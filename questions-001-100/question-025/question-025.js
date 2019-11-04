// Reverse Nodes in k-Group

// Problem 25
// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

const ListNode = require('../../util/ListNode');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let returnNode = new ListNode(0),
    node = returnNode;

  while (head != null) {
    let dummyHead = head,
      nextVals = [dummyHead.val];
    for (let i = 0; i < k - 1; i++) {
      let nextVal = dummyHead.next;
      if (nextVal == null) {
        break;
      }
      nextVals.push(dummyHead.next.val);
      dummyHead = dummyHead.next;
    }

    if (nextVals.length == k) {
      for (let i = k - 1; i >= 0; i--) {
        node.next = new ListNode(nextVals[i]);
        node = node.next;
      }
    } else {
      node.next = head;
    }

    head = dummyHead.next;
  }

  return returnNode.next;
};

module.exports = reverseKGroup;
