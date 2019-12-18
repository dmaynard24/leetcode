# Longest Substring Without Repeating Characters

# Problem 3
# Given a string, find the length of the longest substring without repeating characters.

# Example 1:
# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: "dvdf"
# Output: 3
# Explanation: The answer is "vdf", with the length of 3.

# Example 4:
# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


class Solution:
  def length_of_longest_substring(self, s: str) -> int:
    longest = 0
    char_indices = {}

    i = 0
    for j in range(len(s)):
      if len(s) - i < longest:
        break

      char = s[j]
      cached_char_index = char_indices.get(char)
      if cached_char_index is not None:
        i = max(cached_char_index, i)

      longest = max(longest, j - i + 1)
      char_indices[char] = j + 1

    return longest