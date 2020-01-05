import unittest, two_sum


class TestTwoSum(unittest.TestCase):
  def test_two_sum(self):
    self.assertEqual(two_sum.Solution().two_sum([2, 7, 11, 15], 9), [0, 1])
    self.assertEqual(two_sum.Solution().two_sum([2, 7, 11, 15], 13), [0, 2])


if __name__ == '__main__':
  unittest.main()
