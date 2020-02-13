import unittest, three_sum


class TestThreeSum(unittest.TestCase):
  def test_three_sum(self):
    self.assertEqual(three_sum.Solution().three_sum([-1, 0, 1, 2, -1, -4]),
                     [[-1, -1, 2], [-1, 0, 1]])
    self.assertEqual(three_sum.Solution().three_sum([-1, 0, 1, 0]),
                     [[-1, 0, 1]])
    self.assertEqual(three_sum.Solution().three_sum([0, 0]), [])


if __name__ == '__main__':
  unittest.main()