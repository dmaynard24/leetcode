# Two Sum

# Problem 1
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].


class Solution:
	def two_sum(self, nums: [int], target: int) -> [int]:
		cached_nums = {}

		for i in range(len(nums)):
			remaining = cached_nums.get(target - nums[i])
			if remaining is not None:
				return [remaining, i]

			cached_nums[nums[i]] = i
