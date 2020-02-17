import unittest, four_sum


class TestFourSum(unittest.TestCase):
  def test_four_sum(self):
    self.assertEqual(four_sum.Solution().four_sum([1, 0, -1, 0, -2, 2], 0), [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
    ])


if __name__ == '__main__':
  unittest.main()