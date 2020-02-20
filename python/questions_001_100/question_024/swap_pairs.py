# Swap Nodes in Pairs

# Problem 24
# Given a linked list, swap every two adjacent nodes and return its head.

# You may not modify the values in the list's nodes, only nodes itself may be changed.

# Example:
# Given 1->2->3->4, you should return the list as 2->1->4->3.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import listnode


class Solution:
  def swap_pairs(self, head: listnode.ListNode) -> listnode.ListNode:
    return_node = listnode.ListNode(0)
    node = return_node

    while head is not None:
      has_next = head.next is not None

      if has_next:
        node.next = listnode.ListNode(head.next.val)
        node = node.next
      node.next = listnode.ListNode(head.val)
      node = node.next

      head = head.next.next if has_next else head.next

    return return_node.next