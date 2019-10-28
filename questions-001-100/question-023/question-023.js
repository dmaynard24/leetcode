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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let returnNode = new ListNode(0),
    node = returnNode;

  let nonNulls = lists.filter(list => list != null);
  while (nonNulls.length > 1) {
    let smallestListVal = Infinity,
      smallestListIndex;

    for (let i = 0; i < nonNulls.length; i++) {
      if (nonNulls[i].val < smallestListVal) {
        smallestListVal = nonNulls[i].val;
        smallestListIndex = i;
      }
    }

    let smallestList = nonNulls[smallestListIndex];
    node.next = new ListNode(smallestList.val);
    nonNulls[smallestListIndex] = advanceList(smallestList);
    node = node.next;

    if (nonNulls[smallestListIndex] == null) {
      nonNulls.splice(smallestListIndex, 1);
    }
  }

  let lastList = nonNulls[0];
  while (lastList != null) {
    node.next = new ListNode(lastList.val);
    lastList = advanceList(lastList);
    node = node.next;
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

module.exports = { ListNode, mergeKLists };
