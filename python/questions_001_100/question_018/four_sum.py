# 4Sum

# Problem 18
# Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

# Note:

# The solution set must not contain duplicate quadruplets.

# Example:

# Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

# A solution set is:
# [
#   [-1,  0, 0, 1],
#   [-2, -1, 1, 2],
#   [-2,  0, 0, 2]
# ]


class Solution:
  def four_sum(self, nums: [int], target: int) -> [[int]]:
    if len(nums) < 4:
      return []

    # must sort
    nums.sort()

    solution_set = []
    cached_term_indices = {}
    cached_sets = {}

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

        for k in range(j + 1, len(nums)):
          third_term = nums[k]

          fourth_term = target - (first_term + second_term + third_term)
          fourth_term_indices = cached_term_indices.get(fourth_term)
          if fourth_term_indices is None:
            continue

          for l in range(len(fourth_term_indices)):
            if fourth_term_indices[l] > k:
              curr_set = [first_term, second_term, third_term, fourth_term]
              cached_set_key = ''.join(map(str, curr_set))
              cached_set = cached_sets.get(cached_set_key)
              if cached_set != 1:
                solution_set.append(curr_set)
                cached_sets[cached_set_key] = 1
              break

    return solution_set
