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
  def total_n_queens(self, n: int) -> int:
    if n == 1:
      return 1

    def place_next_queen(placed_x_coords, xy_diffs, xy_sums):
      y = len(placed_x_coords)

      if y == n:
        # reflect coords for every column except the center of a board with an odd extent
        if placed_x_coords[0] < n // 2:
          return 2
        return 1

      total = 0

      for next_x in range(n):
        # break out after checking all solutions for the first half of the board
        # add 1 to n and floor it to account for boards with both even and odd extents
        if y == 0 and next_x == (n + 1) // 2:
          break

        xy_diff = y - next_x
        xy_sum = y + next_x

        # invalid place
        if next_x in placed_x_coords or xy_diff in xy_diffs or xy_sum in xy_sums:
          continue

        placed_x_coords.append(next_x)
        xy_diffs.add(xy_diff)
        xy_sums.add(xy_sum)

        total += place_next_queen(placed_x_coords, xy_diffs, xy_sums)

        # backtrack
        placed_x_coords.pop()
        xy_diffs.remove(xy_diff)
        xy_sums.remove(xy_sum)

      return total

    return place_next_queen([], set(), set())