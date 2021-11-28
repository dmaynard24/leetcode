import unittest
from . import total_n_queens


class TestTotalNQueens(unittest.TestCase):
  def test_n_queens(self):
    self.assertEqual(total_n_queens.Solution().total_n_queens(3), 0)
    self.assertEqual(total_n_queens.Solution().total_n_queens(4), 2)
    self.assertEqual(total_n_queens.Solution().total_n_queens(5), 10)
    self.assertEqual(total_n_queens.Solution().total_n_queens(6), 4)
    self.assertEqual(total_n_queens.Solution().total_n_queens(7), 40)
    self.assertEqual(total_n_queens.Solution().total_n_queens(8), 92)


if __name__ == '__main__':
  unittest.main()