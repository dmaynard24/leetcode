// Median of Two Sorted Arrays

// Problem 4
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // attempt to concat in order based on the first term of each array
  let both = nums1.concat(nums2).sort((a, b) => a - b),
    len = both.length;
  return len % 2 == 1 ? both[Math.floor(len / 2)] : (both[len / 2 - 1] + both[len / 2]) / 2;
};

module.exports = findMedianSortedArrays;
