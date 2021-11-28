import unittest
from ...util import listnode
from . import remove_nth_from_end

l1 = listnode.ListNode(1)
l1.next = listnode.ListNode(2)
l1.next.next = listnode.ListNode(3)
l1.next.next.next = listnode.ListNode(4)
l1.next.next.next.next = listnode.ListNode(5)


class TestRemoveNthFromEnd(unittest.TestCase):
  def test_remove_nth_from_end(self):
    solution_node_expected_vals = [1, 2, 3, 5]
    solution_node = remove_nth_from_end.Solution().remove_nth_from_end(l1, 2)
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
