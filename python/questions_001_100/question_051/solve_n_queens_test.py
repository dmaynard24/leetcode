import unittest
from . import solve_n_queens


class TestSolveNQueens(unittest.TestCase):
  def test_n_queens(self):
    self.assertEqual(solve_n_queens.Solution().solve_n_queens(3), [])
    self.assertEqual(
        solve_n_queens.Solution().solve_n_queens(4),
        [['..Q.', 'Q...', '...Q', '.Q..'], ['.Q..', '...Q', 'Q...', '..Q.']])
    self.assertEqual(solve_n_queens.Solution().solve_n_queens(5),
                     [['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
                      ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
                      ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
                      ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
                      ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
                      ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
                      ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
                      ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
                      ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
                      ['..Q..', '....Q', '.Q...', '...Q.', 'Q....']])


if __name__ == '__main__':
  unittest.main()