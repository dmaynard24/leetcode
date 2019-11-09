// Next Permutation

// Problem 31
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let isLargestPerm = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      isLargestPerm = false;
      break;
    }
  }

  if (isLargestPerm) {
    return nums.reverse();
  }

  let len = nums.length;
  for (let offset = 0; offset < len - 1; offset++) {
    let first = len - 2 - offset,
      second = len - 1 - offset;

    // swap with destructuring assignment
    [nums[first], nums[second]] = [nums[second], nums[first]];

    if (nums[first] > nums[second]) {
      break;
    }
  }

  return nums;
};

module.exports = nextPermutation;
