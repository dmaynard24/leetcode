# Merge Two Sorted Lists

# Problem 21
# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

# Example:
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

from ...util import listnode


class Solution:
  def merge_two_lists(self, l1: listnode.ListNode,
                      l2: listnode.ListNode) -> listnode.ListNode:
    if l1 is None:
      return l2
    if l2 is None:
      return l1

    if l1.val < l2.val:
      l1.next = self.merge_two_lists(l1.next, l2)
      return l1
    l2.next = self.merge_two_lists(l1, l2.next)
    return l2
