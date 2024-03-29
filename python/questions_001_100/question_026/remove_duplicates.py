# Remove Duplicates from Sorted Array

# Problem 26
# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# Example 1:
# Given nums = [1,1,2],
# Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

# Example 2:
# Given nums = [0,0,1,1,1,2,2,3,3,4],
# Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

from typing import List


class Solution:
  def remove_duplicates(self, nums: List[int]) -> int:
    i = 0
    for j in range(1, len(nums)):
      if nums[j] != nums[i]:
        i += 1
        nums[i] = nums[j]

    del nums[i + 1:]

    return len(nums)
