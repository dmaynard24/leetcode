import unittest
from ...util import listnode
from . import add_two_numbers

l1 = listnode.ListNode(2)
l1.next = listnode.ListNode(4)
l1.next.next = listnode.ListNode(3)

l2 = listnode.ListNode(5)
l2.next = listnode.ListNode(6)
l2.next.next = listnode.ListNode(4)


class TestTwoSum(unittest.TestCase):
  def test_add_two_numbers(self):
    solution_node_expected_vals = [7, 0, 8]
    solution_node = add_two_numbers.Solution().add_two_numbers(l1, l2)
    solution_node_vals = []

    while solution_node.next is not None:
      solution_node_vals.append(solution_node.val)
      solution_node = solution_node.next

    solution_node_vals.append(solution_node.val)

    self.assertListEqual(solution_node_expected_vals, solution_node_vals)


if __name__ == '__main__':
  unittest.main()
