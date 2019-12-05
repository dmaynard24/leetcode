# ZigZag Conversion

# Problem 6
# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);

# Example 1:
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:

# P     I    N
# A   L S  I G
# Y A   H R
# P     I


class Solution:
  def convert(self, s: str, num_rows: int) -> str:
    if s is None or num_rows == 1:
      return s

    grid_rows = [''] * num_rows
    curr_row = 0
    step = 1
    for i in range(len(s)):
      grid_rows[curr_row] += s[i]
      curr_row += step

      if curr_row == num_rows - 1 or curr_row == 0:
        step *= -1

    return ''.join(grid_rows)
