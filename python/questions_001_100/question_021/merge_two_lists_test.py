import unittest
from ...util import listnode
from . import merge_two_lists

l1 = listnode.ListNode(1)
l1.next = listnode.ListNode(2)
l1.next.next = listnode.ListNode(4)

l2 = listnode.ListNode(1)
l2.next = listnode.ListNode(3)
l2.next.next = listnode.ListNode(4)


class TestMergeTwoLists(unittest.TestCase):
  def test_merge_two_lists(self):
    solution_node_expected_vals = [1, 1, 2, 3, 4, 4]
    solution_node = merge_two_lists.Solution().merge_two_lists(l1, l2)
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
