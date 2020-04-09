// Search in Rotated Sorted Array

// Problem 33
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  function binarySearch(left, right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }

    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (right >= left) {
      if (nums[left] <= nums[middle]) {
        if (nums[left] <= target && target <= nums[middle]) {
          return binarySearch(left, middle - 1);
        }
        return binarySearch(middle + 1, right);
      }
      if (nums[middle + 1] <= target && target <= nums[right]) {
        return binarySearch(middle + 1, right);
      }
      return binarySearch(left, middle - 1);
    }

    return -1;
  }

  return binarySearch(0, nums.length - 1);
};

module.exports = { search };
