# Median of Two Sorted Arrays

# Problem 4
# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# You may assume nums1 and nums2 cannot be both empty.

# Example 1:
# nums1 = [1, 3]
# nums2 = [2]

# The median is 2.0

# Example 2:
# nums1 = [1, 2]
# nums2 = [3, 4]

# The median is (2 + 3)/2 = 2.5

import math, sys


class Solution:
	def find_median_sorted_arrays(self, nums1: [int], nums2: [int]) -> float:
		def find_median_single_sorted_array(nums: [int]) -> float:
			length = len(nums)
			mid_index = math.floor(length / 2)
			if (length % 2 == 1):
				return nums[mid_index]
			else:
				return (nums[mid_index - 1] + nums[mid_index]) / 2

		if len(nums1) < 1:
			return find_median_single_sorted_array(nums2)

		if len(nums2) < 1:
			return find_median_single_sorted_array(nums1)

		if len(nums1) > len(nums2):
			return self.find_median_sorted_arrays(nums2, nums1)

		x_length = len(nums1)
		y_length = len(nums2)
		low = 0
		high = x_length
		while low <= high:
			partition_x = math.floor((low + high) / 2)
			partition_y = math.floor((x_length + y_length + 1) / 2) - partition_x
			low_x = None
			if partition_x - 1 > -1 and partition_x - 1 < len(nums1):
				low_x = nums1[partition_x - 1]
			else:
				low_x = -sys.maxsize - 1
			high_x = None
			if partition_x > -1 and partition_x < len(nums1):
				high_x = nums1[partition_x]
			else:
				high_x = sys.maxsize
			low_y = None
			if partition_y - 1 > -1 and partition_y - 1 < len(nums2):
				low_y = nums2[partition_y - 1]
			else:
				low_y = -sys.maxsize - 1
			high_y = None
			if partition_y > -1 and partition_y < len(nums2):
				high_y = nums2[partition_y]
			else:
				high_y = sys.maxsize

			if low_x <= high_y and low_y <= high_x:
				if (x_length + y_length) % 2 == 0:
					return (max(low_x, low_y) + min(high_x, high_y)) / 2
				else:
					return max(low_x, low_y)
			elif low_x > high_y:
				high = partition_x - 1
			else:
				low = partition_x + 1
