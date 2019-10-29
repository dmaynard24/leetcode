// Merge k Sorted Lists

// Problem 23
// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

const mergeTwoLists = require('../question-021/question-021').mergeTwoLists;

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length == 0) {
    return ''; // this is dumb, but leetcode won't pass without it
  }

  while (lists.length > 1) {
    let sortedPairs = [];
    for (let i = 0; i < lists.length; i += 2) {
      if (lists[i + 1] !== undefined) {
        sortedPairs.push(mergeTwoLists(lists[i], lists[i + 1]));
      } else {
        sortedPairs.push(lists[i]);
      }
    }
    lists = sortedPairs;
  }

  return lists[0];
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

module.exports = { ListNode, mergeKLists };
