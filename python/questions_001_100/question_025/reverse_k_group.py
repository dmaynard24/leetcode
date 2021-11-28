# Reverse Nodes in k-Group

# Problem 25
# Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

# k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

# Example:

# Given this linked list: 1->2->3->4->5

# For k = 2, you should return: 2->1->4->3->5

# For k = 3, you should return: 3->2->1->4->5

from ...util import listnode


class Solution:
  def reverse_k_group(self, head: listnode.ListNode,
                      k: int) -> listnode.ListNode:
    return_node = listnode.ListNode(0)
    node = return_node

    while head is not None:
      dummy_head = head
      next_vals = [dummy_head.val]
      for i in range(k - 1):
        next_val = dummy_head.next
        if next_val is None:
          break
        next_vals.append(dummy_head.next.val)
        dummy_head = dummy_head.next

      if len(next_vals) == k:
        for i in range(k - 1, -1, -1):
          node.next = listnode.ListNode(next_vals[i])
          node = node.next
      else:
        node.next = head

      head = dummy_head.next

    return return_node.next
