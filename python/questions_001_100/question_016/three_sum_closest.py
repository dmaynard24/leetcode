# 3Sum Closest

# Problem 16
# Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

# Example:
# Given array nums = [-1, 2, 1, -4], and target = 1.
# The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


class Solution:
  def three_sum_closest(self, nums: [int], target: int) -> int:
    closest_sum = nums[0] + nums[1] + nums[2]
    smallest_diff = abs(target - closest_sum)

    for i in range(len(nums)):
      for j in range(i + 1, len(nums)):
        for k in range(j + 1, len(nums)):
          set_sum = nums[i] + nums[j] + nums[k]
          if set_sum == target:
            return set_sum

          diff = abs(target - set_sum)
          if diff < smallest_diff:
            closest_sum = set_sum
            smallest_diff = diff

    return closest_sum