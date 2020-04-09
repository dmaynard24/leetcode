// Find First and Last Position of Element in Sorted Array

// Problem 34
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
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

    if (left <= right) {
      if (nums[middle] < target) {
        return binarySearch(middle + 1, right);
      }
      return binarySearch(left, middle - 1);
    }

    return -1;
  }

  const foundIndex = binarySearch(0, nums.length - 1);
  if (foundIndex === -1) {
    return [-1, -1];
  }

  let l = foundIndex;
  while (nums[l - 1] === target) {
    l--;
  }
  let r = foundIndex;
  while (nums[r + 1] === target) {
    r++;
  }

  return [l, r];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
