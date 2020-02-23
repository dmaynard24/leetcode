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
  def totalNQueens(self, n: int) -> [[str]]:
    if n == 1:
      return 1

    # if extent of a side is an even number
    has_even_extent = n % 2 == 0

    def is_valid_place(test_y, test_x, placed_coords):
      for pc_y, pc in enumerate(placed_coords):
        # invalid vertically or invalid diagonally
        if test_x == pc or abs(test_x - pc) == abs(test_y - pc_y):
          return False
      return True

    def place_next_queen(y, x, placed_coords, total):
      if len(placed_coords) == 0:
        if has_even_extent:
          if x == n // 2:
            return total
        else:
          if x == n // 2 + 1:
            return total

      if len(placed_coords) == n:
        if has_even_extent or (has_even_extent == False
                               and placed_coords[0] < n // 2):
          total += 1
        total += 1

      for next_x in range(x, n):
        if is_valid_place(y, next_x, placed_coords):
          placed_coords.append(next_x)
          return place_next_queen(y + 1, 0, placed_coords, total)

      if len(placed_coords) > 0:
        prev_placed_coords = placed_coords.pop()
        return place_next_queen(y - 1, prev_placed_coords + 1, placed_coords,
                                total)

    return place_next_queen(0, 0, [], 0)