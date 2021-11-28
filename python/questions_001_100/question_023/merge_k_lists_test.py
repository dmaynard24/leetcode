import unittest
from ...util import listnode
from . import merge_k_lists

l1 = listnode.ListNode(1)
l1.next = listnode.ListNode(4)
l1.next.next = listnode.ListNode(5)

l2 = listnode.ListNode(1)
l2.next = listnode.ListNode(3)
l2.next.next = listnode.ListNode(4)

l3 = listnode.ListNode(2)
l3.next = listnode.ListNode(6)


class TestMergeKLists(unittest.TestCase):
  def test_merge_k_lists(self):
    solution_node_expected_vals = [1, 1, 2, 3, 4, 4, 5, 6]
    solution_node = merge_k_lists.Solution().merge_k_lists([l1, l2, l3])
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
