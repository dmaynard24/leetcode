# Generate Parentheses

# Problem 22
# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# For example, given n = 3, a solution set is:

# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]

from typing import List


class Solution:
  def generate_parenthesis(self, n: int) -> List[str]:
    if n == 1:
      return ['()']

    def get_filtered_combos(arr, pick):
      if pick == 0:
        return [[]]

      if len(arr) == 0:
        return []

      first = arr[0]
      rest = arr[1:]

      # filter based on well-formed parens rule
      if first > (n - pick) * 2:
        return []

      next_combos = get_filtered_combos(rest, pick - 1)
      # essentially map()
      for combo in next_combos:
        combo.insert(0, first)

      return next_combos + get_filtered_combos(rest, pick)

    indices = range(n * 2 - 1)
    open_indices_combos = get_filtered_combos(indices, n)

    solution_set = []
    for oic in open_indices_combos:
      valid_combo_arr = [')'] * (n * 2)
      for i in oic:
        valid_combo_arr[i] = '('
      solution_set.append(''.join(valid_combo_arr))

    return solution_set