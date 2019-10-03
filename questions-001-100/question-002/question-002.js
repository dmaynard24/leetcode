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
  let numOneArr = [];
  while (l1.next) {
    numOneArr.push(l1.val);
    l1 = l1.next;
  }
  numOneArr.push(l1.val);
  numOneArr.reverse();

  let numTwoArr = [];
  while (l2.next) {
    numTwoArr.push(l2.val);
    l2 = l2.next;
  }
  numTwoArr.push(l2.val);
  numTwoArr.reverse();

  if (numOneArr.length != numTwoArr.length) {
    if (numOneArr.length > numTwoArr.length) {
      while (numTwoArr.length < numOneArr.length) {
        numTwoArr.unshift(0);
      }
    } else {
      while (numOneArr.length < numTwoArr.length) {
        numOneArr.unshift(0);
      }
    }
  }

  let carry = 0,
    sumDigits = [];
  for (let i = numOneArr.length - 1; i >= 0; i--) {
    let sum = numOneArr[i] + numTwoArr[i] + carry;

    if (sum >= 10) {
      sumDigits.push(sum % 10);
      carry = Math.floor(sum / 10);
    } else {
      sumDigits.push(sum);
      carry = 0;
    }
  }

  if (carry > 0) {
    sumDigits.push(carry);
  }

  let returnNode = new ListNode(sumDigits[0]),
    prevNode = returnNode;

  for (let i = 1; i < sumDigits.length; i++) {
    prevNode.next = new ListNode(sumDigits[i]);
    prevNode = prevNode.next;
  }

  return returnNode;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { ListNode, addTwoNumbers };
