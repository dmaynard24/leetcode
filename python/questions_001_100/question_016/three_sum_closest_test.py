import unittest
from . import three_sum_closest


class TestThreeSumClosest(unittest.TestCase):
  def test_three_sum_closest(self):
    self.assertEqual(
        three_sum_closest.Solution().three_sum_closest([-1, 2, 1, -4], 1), 2)
    self.assertEqual(
        three_sum_closest.Solution().three_sum_closest(
            [1, 2, 4, 8, 16, 32, 64, 128], 88), 88)


if __name__ == '__main__':
  unittest.main()