// Add Two Numbers

// Problem 2
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0,
    l1Val,
    l2Val,
    sum;

  setSum();

  let returnNode = new ListNode(sum),
    node = returnNode;

  while (l1.next || l2.next) {
    l1 = l1.next ? l1.next : 0;
    l2 = l2.next ? l2.next : 0;

    setSum();

    node.next = new ListNode(sum);
    node = node.next;
  }

  if (carry > 0) {
    node.next = new ListNode(carry);
  }

  function setSum() {
    l1Val = l1.val != undefined ? l1.val : 0;
    l2Val = l2.val != undefined ? l2.val : 0;
    sum = l1Val + l2Val + carry;

    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
  }

  return returnNode;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { ListNode, addTwoNumbers };
