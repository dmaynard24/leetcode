import unittest, median_sorted_arrays


class TestMedianSortedArrays(unittest.TestCase):
  def test_median_sorted_arrays(self):
    self.assertEqual(
        median_sorted_arrays.Solution().find_median_sorted_arrays([1, 3], [2]),
        2)
    self.assertEqual(
        median_sorted_arrays.Solution().find_median_sorted_arrays([1, 2],
                                                                  [3, 4]), 2.5)
    self.assertEqual(
        median_sorted_arrays.Solution().find_median_sorted_arrays(
            [1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]), 11)
    self.assertEqual(
        median_sorted_arrays.Solution().find_median_sorted_arrays([2], []), 2)
    self.assertEqual(
        median_sorted_arrays.Solution().find_median_sorted_arrays(
            [1, 2, 3, 5, 6], [4]), 3.5)


if __name__ == '__main__':
  unittest.main()
