// First Missing Positive

// Problem 41
// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:
// Input: [1,2,0]
// Output: 3

// Example 2:
// Input: [3,4,-1,1]
// Output: 2

// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  const seenNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    seenNums.set(nums[i], 1);
  }

  let i = 1;
  while (seenNums.has(i)) {
    i++;
  }

  return i;
};

module.exports = { firstMissingPositive };
