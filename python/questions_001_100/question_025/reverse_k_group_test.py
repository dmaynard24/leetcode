import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import listnode

import unittest, reverse_k_group

head = listnode.ListNode(1)
head.next = listnode.ListNode(2)
head.next.next = listnode.ListNode(3)
head.next.next.next = listnode.ListNode(4)
head.next.next.next.next = listnode.ListNode(5)


class TestReverseKGroup(unittest.TestCase):
  def test_reverse_k_group(self):
    solution_node_expected_vals = [2, 1, 4, 3, 5]
    solution_node = reverse_k_group.Solution().reverse_k_group(head, 2)
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
