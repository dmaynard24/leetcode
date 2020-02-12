# Longest Common Prefix

# Problem 14
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:
# Input: ["flower","flow","flight"]
# Output: "fl"

# Example 2:
# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

# Note:
# All given inputs are in lowercase letters a-z.


class Solution:
  def longest_common_prefix(self, strs: [str]) -> str:
    if len(strs) == 0:
      return ''

    min_str = min(strs)
    max_str = max(strs)

    for i, char in enumerate(min_str):
      if char != max_str[i]:
        return min_str[:i]

    return min_str