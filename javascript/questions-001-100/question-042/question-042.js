// Trapping Rain Water

// Problem 42
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  if (height.length === 0) {
    return 0;
  }

  let amount = 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      amount += leftMax - height[left];
      left++;
    } else {
      amount += rightMax - height[right];
      right--;
    }
  }

  return amount;
};

module.exports = { trap };
