# Container With Most Water

# Problem 11
# Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.

# The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

# Example:
# Input: [1,8,6,2,5,4,8,3,7]
# Output: 49

from typing import List


class Solution:
  def max_area(self, height: List[int]) -> int:
    l = 0
    r = len(height) - 1
    largest_area = 0

    while l < r:
      left_height = height[l]
      right_height = height[r]
      w = r + 1 - (l + 1)
      h = min(left_height, right_height)
      area = w * h

      largest_area = max(largest_area, area)

      if left_height < right_height:
        l += 1
      else:
        r -= 1

    return largest_area