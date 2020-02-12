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

    for i, chars in enumerate(zip(*strs)):
      if len(set(chars)) > 1:
        return strs[0][:i]

    return min(strs)