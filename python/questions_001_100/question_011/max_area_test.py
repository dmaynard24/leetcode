import unittest
from . import max_area


class TestMaxArea(unittest.TestCase):
  def test_max_area(self):
    self.assertEqual(max_area.Solution().max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]),
                     49)
    self.assertEqual(max_area.Solution().max_area([1, 1]), 1)
    self.assertEqual(max_area.Solution().max_area([1, 2, 1]), 2)
    self.assertEqual(
        max_area.Solution().max_area([9, 6, 14, 11, 2, 2, 4, 9, 3, 8]), 72)


if __name__ == '__main__':
  unittest.main()