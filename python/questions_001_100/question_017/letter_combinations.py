# Letter Combinations of a Phone Number

# Problem 17
# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

# A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

# Example:
# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

# Note:
# Although the above answer is in lexicographical order, your answer could be in any order you want.


class Solution:
  def letter_combinations(self, digits: str) -> [str]:
    if len(digits) == 0:
      return []

    phone_number_letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    digits_arr = list(digits)

    def get_combos(index, combo):
      combos = []

      if index == len(digits_arr):
        combos.append(combo)
      else:
        digit_letters = phone_number_letters[digits_arr[index]]

        for i in range(len(digit_letters)):
          new_combo = combo + digit_letters[i]
          combos.extend(get_combos(index + 1, new_combo))

      return combos

    return get_combos(0, '')