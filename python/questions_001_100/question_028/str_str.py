# Implement strStr()

# Problem 28
# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# Example 1:
# Input: haystack = "hello", needle = "ll"
# Output: 2

# Example 2:
# Input: haystack = "aaaaa", needle = "bba"
# Output: -1


class Solution:
  def str_str(self, haystack: str, needle: str) -> int:
    if len(needle) == 0:
      return 0

    for i in range(len(haystack) - len(needle) + 1):
      if haystack[i] != needle[0]:
        continue

      if len(needle) == 1:
        return i

      if len(needle) > 1:
        j = 1
        while j < len(needle):
          if haystack[i + j] != needle[j]:
            break
          j += 1
        if j == len(needle):
          return i

    return -1