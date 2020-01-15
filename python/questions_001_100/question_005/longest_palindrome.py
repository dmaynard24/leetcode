# Longest Palindromic Substring

# Problem 5
# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

# Example 1:
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.

# Example 2:
# Input: "cbbd"
# Output: "bb"


class Solution:
  def longest_palindrome(self, s: str) -> str:
    if len(s) <= 1:
      return s

    longest_start = 0
    longest_end = 1
    longest_length = 1

    for i in range(len(s) - 1):
      if len(s) - i < longest_length / 2 + 1:
        break

      for j in range(i, i + 2):
        prev_char = s[i]
        next_char = s[j]
        l = 0
        while prev_char == next_char:
          l += 1
          if i - l < 0 or j + l > len(s) - 1:
            break
          prev_char = s[i - l]
          next_char = s[j + l]

        start = i - l + 1
        end = j + l
        length = end - start
        if length > longest_length:
          longest_start = start
          longest_end = end
          longest_length = length

    return s[longest_start:longest_end]
