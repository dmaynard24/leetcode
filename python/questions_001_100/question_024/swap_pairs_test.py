import unittest
from ...util import listnode
from . import swap_pairs

head = listnode.ListNode(1)
head.next = listnode.ListNode(2)
head.next.next = listnode.ListNode(3)
head.next.next.next = listnode.ListNode(4)


class TestSwapPairs(unittest.TestCase):
  def test_swap_pairs(self):
    solution_node_expected_vals = [2, 1, 4, 3]
    solution_node = swap_pairs.Solution().swap_pairs(head)
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
