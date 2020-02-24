# N-Queens II

# Problem 52
# The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

# Given an integer n, return the number of distinct solutions to the n-queens puzzle.

# Example:
# Input: 4
# Output: 2
# Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
# [
#  [".Q..",  // Solution 1
#   "...Q",
#   "Q...",
#   "..Q."],

#  ["..Q.",  // Solution 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]


class Solution:
  def totalNQueens(self, n: int) -> int:
    if n == 1:
      return 1

    # if extent of a side is an even number
    has_even_extent = n % 2 == 0

    def place_next_queen(placed_x_coords, xy_diffs, xy_sums):
      total = 0
      y = len(placed_x_coords)

      if y == n:
        if has_even_extent or (has_even_extent == False
                               and placed_x_coords[0] < n // 2):
          total += 1
        total += 1

      for x in range(n):
        xy_diff = y - x
        xy_sum = y + x
        if x not in placed_x_coords and xy_diff not in xy_diffs and xy_sum not in xy_sums:
          # base case
          if y == 0:
            if has_even_extent:
              if x == n // 2:
                break
            else:
              if x == n // 2 + 1:
                break
          total += place_next_queen(placed_x_coords + [x],
                                    xy_diffs + [xy_diff], xy_sums + [xy_sum])

      return total

    return place_next_queen([], [], [])