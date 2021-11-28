# Remove Nth Node From End of List

# Problem 19
# Given a linked list, remove the n-th node from the end of list and return its head.

# Example:

# Given linked list: 1->2->3->4->5, and n = 2.

# After removing the second node from the end, the linked list becomes 1->2->3->5.
# Note:

# Given n will always be valid.

from ...util import listnode


class Solution:
  def remove_nth_from_end(self, head: listnode.ListNode,
                          n: int) -> listnode.ListNode:
    return_node = listnode.ListNode(0)
    return_node.next = head

    first = return_node
    second = return_node

    for _ in range(n + 1):
      first = first.next

    while first is not None:
      first = first.next
      second = second.next

    second.next = second.next.next

    return return_node.next
