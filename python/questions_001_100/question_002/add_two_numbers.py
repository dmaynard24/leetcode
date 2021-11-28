# Add Two Numbers

# Problem 2
# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

import sys, os

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import listnode


class Solution:
  def add_two_numbers(self, l1: listnode.ListNode,
                      l2: listnode.ListNode) -> listnode.ListNode:
    carry = 0
    return_node = listnode.ListNode(0)
    node = return_node

    while l1 is not None or l2 is not None:
      l1_val = l1.val if l1 is not None else 0
      l2_val = l2.val if l2 is not None else 0
      node_sum = l1_val + l2_val + carry

      if node_sum >= 10:
        carry = node_sum // 10
        node_sum %= 10
      else:
        carry = 0

      node.next = listnode.ListNode(node_sum)
      node = node.next

      l1 = l1.next if l1 is not None else None
      l2 = l2.next if l2 is not None else None

    if carry > 0:
      node.next = listnode.ListNode(carry)

    return return_node.next
