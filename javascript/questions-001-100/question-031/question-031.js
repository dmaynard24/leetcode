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
  // move from left to right looking for a digit that's larger than the previous.
  // continue looking, don't break out.
  // slice everything starting from the left digit. sort it ascending.
  // "unshift" the slice with the first val that's larger than previous, and concat it.

  let smallerI;
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1],
      curr = nums[i];

    if (curr > prev) {
      smallerI = i - 1;
    }
  }

  if (smallerI === undefined) {
    return nums.reverse();
  }

  let arr;

  if (smallerI !== 0) {
    let smallerVal = nums[smallerI],
      sortedSlice = nums.slice(smallerI).sort((a, b) => a - b),
      firstLargerI;
    for (let i = 0; i < sortedSlice.length; i++) {
      if (sortedSlice[i] > smallerVal) {
        firstLargerI = i;
        break;
      }
    }

    arr = nums
      .slice(0, smallerI)
      .concat(sortedSlice.splice(firstLargerI, 1))
      .concat(sortedSlice);
  } else {
    // edge case: if left digit's index is 0, slice everything staring from the first digit that's larger than nums[0] and unshift nums with it. sort the rest ascending.
    let firstLargerI;
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[0]) {
        firstLargerI = i;
        break;
      }
    }

    arr = nums.slice(firstLargerI).concat(nums.slice(0, firstLargerI).sort((a, b) => a - b));
  }

  arr.forEach((num, i) => {
    nums[i] = num;
  });

  return nums;
};

module.exports = nextPermutation;
