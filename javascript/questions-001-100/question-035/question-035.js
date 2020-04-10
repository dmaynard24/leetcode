// Search Insert Position

// Problem 35
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:
// Input: [1,3,5,6], 7
// Output: 4

// Example 4:
// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
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

    return left;
  }

  return binarySearch(0, nums.length - 1);
};

module.exports = { searchInsert };

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
