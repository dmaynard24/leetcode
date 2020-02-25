import unittest, remove_duplicates


class TestTotalNQueens(unittest.TestCase):
  def test_n_queens(self):
    self.assertEqual(remove_duplicates.Solution().remove_duplicates([1, 1, 2]),
                     2)
    self.assertEqual(
        remove_duplicates.Solution().remove_duplicates(
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)


if __name__ == '__main__':
  unittest.main()