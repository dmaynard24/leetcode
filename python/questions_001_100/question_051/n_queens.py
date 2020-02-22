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

    no_corners = False
    # if extent of a side is an even number
    if n % 2 == 0:
      no_corners = True

    def is_valid_place(test_y, test_x, placed_coords):
      for pc in placed_coords:
        # invalid vertically or invalid diagonally
        if test_x == pc[1] or abs(test_x - pc[1]) == abs(test_y - pc[0]):
          return False
      return True

    def place_next_queen(y, x, placed_coords):
      if x >= n:
        if len(placed_coords) > 0:
          prev_placed_coords = placed_coords.pop()
          return place_next_queen(y - 1, prev_placed_coords[1] + 1,
                                  placed_coords)
        else:
          return []

      if len(placed_coords) == n:
        return placed_coords

      if is_valid_place(y, x, placed_coords):
        placed_coords.append([y, x])
        return place_next_queen(y + 1, 0, placed_coords)
      else:
        return place_next_queen(y, x + 1, placed_coords)

    solution_set = []
    x = 0
    while x < n - 1:
      # y is 0 because we only start with the top row
      solution = place_next_queen(0, x, [])
      if len(solution) == 0:
        return solution
      solution_set.append(solution)
      x = solution[0][1] + 1

    boards = []
    for solution in solution_set:
      board = []
      row = ''
      for coord in solution:
        row = ('.' * (n - (n - coord[1]))) + 'Q' + ('.' * (n - coord[1] - 1))
        board.append(row)
      boards.append(board)

    return boards


print(Solution().solveNQueens(4))
