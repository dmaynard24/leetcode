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

const findMedianSingleSortedArray = function(nums) {
  const len = nums.length;
  return len % 2 === 1 ? nums[Math.floor(len / 2)] : (nums[len / 2 - 1] + nums[len / 2]) / 2;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length < 1) {
    return findMedianSingleSortedArray(nums2);
  }

  if (nums2.length < 1) {
    return findMedianSingleSortedArray(nums1);
  }

  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const xLength = nums1.length;
  const yLength = nums2.length;
  let low = 0;
  let high = xLength;
  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((xLength + yLength + 1) / 2) - partitionX;
    const lowX = nums1[partitionX - 1] ? nums1[partitionX - 1] : Number.MIN_SAFE_INTEGER;
    const highX = nums1[partitionX] ? nums1[partitionX] : Number.MAX_SAFE_INTEGER;
    const lowY = nums2[partitionY - 1] ? nums2[partitionY - 1] : Number.MIN_SAFE_INTEGER;
    const highY = nums2[partitionY] ? nums2[partitionY] : Number.MAX_SAFE_INTEGER;

    if (lowX <= highY && lowY <= highX) {
      if ((xLength + yLength) % 2 === 0) {
        return (Math.max(lowX, lowY) + Math.min(highX, highY)) / 2;
      }
      return Math.max(lowX, lowY);
    }
    if (lowX > highY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  return 0;
};

module.exports = findMedianSortedArrays;
