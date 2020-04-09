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
  function binarySearch(left, right) {
    const mid = Math.floor((left + right) / 2);

    if (right >= left) {
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[mid] > target) {
        return binarySearch(left, mid - 1);
      }
      return binarySearch(mid + 1, right);
    }

    return -1;
  }

  // find pivot, flip to sort
  let pivot;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      pivot = i;
      nums = [...nums.slice(i), ...nums.slice(0, i)];
    }
  }

  if (pivot) {
    const searchIndex = binarySearch(0, nums.length - 1);
    if (searchIndex === -1) {
      return searchIndex;
    }
    return searchIndex + pivot;
  }
  return binarySearch(0, nums.length - 1);
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([1], 1)); // 0
// console.log(search([3, 1], 3)); // 0
console.log(search([3, 5, 1], 3)); // 0
