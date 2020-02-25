# N-Queens

# Problem 51
# The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

# Given an integer n, return all distinct solutions to the n-queens puzzle.

# Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

# Example

# Input: 4
# Output: [
#  [".Q..",  // Solution 1
#   "...Q",
#   "Q...",
#   "..Q."],

#  ["..Q.",  // Solution 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]

# Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.


class Solution:
  def solveNQueens(self, n: int) -> [[str]]:
    if n == 1:
      return [['Q']]

    def get_board_from_coords(coords):
      return [
          '.' * (n - (n - coord)) + 'Q' + '.' * (n - coord - 1)
          for coord in coords
      ]

    def place_next_queen(placed_x_coords, xy_diffs, xy_sums):
      y = len(placed_x_coords)

      solution_set = []

      if y == n:
        # reflect coords for every column except the center of a board with an odd extent
        if placed_x_coords[0] < n // 2:
          reflected_coords = [n - coord - 1 for coord in placed_x_coords]
          solution_set.append(get_board_from_coords(reflected_coords))
        solution_set.append(get_board_from_coords(placed_x_coords))
        return solution_set

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

        next_solutions = place_next_queen(placed_x_coords, xy_diffs, xy_sums)
        solution_set.extend(next_solutions)

        # backtrack
        placed_x_coords.pop()
        xy_diffs.remove(xy_diff)
        xy_sums.remove(xy_sum)

      return solution_set

    return place_next_queen([], set(), set())