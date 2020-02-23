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

    # if extent of a side is an even number
    has_even_extent = n % 2 == 0

    def get_board_from_coords(coords):
      return list(
          map(
              lambda coord: ('.' * (n - (n - coord))) + 'Q' +
              ('.' * (n - coord - 1)), coords))

    def is_valid_place(test_y, test_x, placed_coords):
      for pc_y, pc in enumerate(placed_coords):
        # invalid vertically or invalid diagonally
        if test_x == pc or abs(test_x - pc) == abs(test_y - pc_y):
          return False
      return True

    def place_next_queen(y, x, placed_coords, solution_set):
      if len(placed_coords) == 0:
        if has_even_extent:
          if x == n // 2:
            return solution_set
        else:
          if x == n // 2 + 1:
            return solution_set

      if len(placed_coords) == n:
        if has_even_extent or (has_even_extent == False
                               and placed_coords[0] < n // 2):
          reflected_coords = []
          for coord in placed_coords:
            reflected_coords.append(n - coord - 1)
          solution_set.append(get_board_from_coords(reflected_coords))
        solution_set.append(get_board_from_coords(placed_coords))

      for next_x in range(x, n):
        if is_valid_place(y, next_x, placed_coords):
          placed_coords.append(next_x)
          return place_next_queen(y + 1, 0, placed_coords, solution_set)

      if len(placed_coords) > 0:
        prev_placed_coords = placed_coords.pop()
        return place_next_queen(y - 1, prev_placed_coords + 1, placed_coords,
                                solution_set)

    return place_next_queen(0, 0, [], [])


print(Solution().solveNQueens(4))
