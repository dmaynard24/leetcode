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

const mergeTwoLists = require(`../question-021/question-021`);
const ListNode = require(`../../util/ListNode`);

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null; // this is dumb, but leetcode won't pass without it
  }

  while (lists.length > 1) {
    const offset = lists.length % 2 === 0 ? 1 : 2;
    for (let i = 0; i < lists.length - offset; i += 2) {
      lists.splice(i, 2, mergeTwoLists(lists[i], lists[i + 1]));
    }
  }

  return lists[0];
};

module.exports = mergeKLists;
