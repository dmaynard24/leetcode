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
// var findMedianSortedArrays = function(nums1, nums2) {
//   // attempt to concat in order based on the first term of each array
//   let both = nums1.concat(nums2).sort((a, b) => a - b),
//     len = both.length;
//   return len % 2 == 1 ? both[Math.floor(len / 2)] : (both[len / 2 - 1] + both[len / 2]) / 2;
// };

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    findMedianSortedArrays(nums2, nums1);
  }

  let xLength = nums1.length,
    yLength = nums2.length,
    low = 0,
    high = xLength;
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2),
      partitionY = (xLength + yLength + 1) / 2 - partitionX,
      lowX = nums1[partitionX - 1] ? nums1[partitionX - 1] : Number.MIN_SAFE_INTEGER,
      highX = nums1[partitionX] ? nums1[partitionX] : Number.MAX_SAFE_INTEGER,
      lowY = nums2[partitionY - 1] ? nums2[partitionY - 1] : Number.MIN_SAFE_INTEGER,
      highY = nums2[partitionY] ? nums2[partitionY] : Number.MAX_SAFE_INTEGER;

    if (lowX <= highY && lowY <= highX) {
      if ((xLength + yLength) % 2 == 0) {
        // console.log('HERE!', lowX, lowY, highX, highY);
        return (Math.max(lowX, lowY) + Math.min(highX, highY)) / 2;
      } else {
        return Math.max(lowX, lowY);
      }
    } else if (lowX > highY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

module.exports = findMedianSortedArrays;
