# # N-Queens

# # Problem 51
# # The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

# # Given an integer n, return all distinct solutions to the n-queens puzzle.

# # Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

# # Example

# # Input: 4
# # Output: [
# #  [".Q..",  // Solution 1
# #   "...Q",
# #   "Q...",
# #   "..Q."],

# #  ["..Q.",  // Solution 2
# #   "Q...",
# #   "...Q",
# #   ".Q.."]
# # ]

# # Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.


class Solution:
  def solveNQueens(self, n: int) -> [[str]]:
    if n == 1:
      return [['Q']]

    # if extent of a side is an even number
    has_even_extent = n % 2 == 0

    def get_board_from_coords(coords):
      return [
          '.' * (n - (n - coord)) + 'Q' + '.' * (n - coord - 1)
          for coord in coords
      ]

    def place_next_queen(placed_x_coords, xy_diffs, xy_sums, solution_set):
      y = len(placed_x_coords)

      if y == n:
        if has_even_extent or (has_even_extent == False
                               and placed_x_coords[0] < n // 2):
          reflected_x_coords = [n - coord - 1 for coord in placed_x_coords]
          solution_set.append(get_board_from_coords(reflected_x_coords))
        solution_set.append(get_board_from_coords(placed_x_coords))

      for x in range(n):
        xy_diff = y - x
        xy_sum = y + x
        if x not in placed_x_coords and xy_diff not in xy_diffs and xy_sum not in xy_sums:
          # base case
          if y == 0:
            if has_even_extent:
              if x == n // 2:
                return solution_set
            else:
              if x == n // 2 + 1:
                return solution_set
          place_next_queen(placed_x_coords + [x], xy_diffs + [xy_diff],
                           xy_sums + [xy_sum], solution_set)

    return place_next_queen([], [], [], [])