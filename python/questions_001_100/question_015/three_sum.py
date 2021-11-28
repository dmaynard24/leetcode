# 3Sum

# Problem 15
# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# Note:

# The solution set must not contain duplicate triplets.

# Example:

# Given array nums = [-1, 0, 1, 2, -1, -4],

# A solution set is:
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]

from typing import List


class Solution:
  def three_sum(self, nums: List[int]) -> List[List[int]]:
    if len(nums) < 3:
      return []

    # must sort
    nums.sort()

    solution_set = []
    cached_term_indices = {}

    # start by caching term indices
    for i in range(len(nums)):
      if nums[i] not in cached_term_indices:
        cached_term_indices[nums[i]] = [i]
      else:
        cached_term_indices[nums[i]].append(i)

    for i in range(len(nums)):
      if i > 0 and nums[i] == nums[i - 1]:
        continue
      first_term = nums[i]

      for j in range(i + 1, len(nums)):
        second_term = nums[j]
        third_term = (first_term + second_term) * -1
        third_term_indices = cached_term_indices.get(third_term)
        if third_term_indices is None:
          continue

        for k in range(len(third_term_indices)):
          if third_term_indices[k] > j:
            prev_set = solution_set[-1] if len(solution_set) > 0 else None
            curr_set = [first_term, second_term, third_term]
            if prev_set is None or prev_set != curr_set:
              solution_set.append(curr_set)
            break

    return solution_set
