// Container With Most Water

// Problem 11
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0,
    r = height.length - 1,
    largestArea = 0;

  while (l < r) {
    let leftHeight = height[l],
      rightHeight = height[r],
      w = r + 1 - (l + 1),
      h = Math.min(leftHeight, rightHeight),
      area = w * h;

    largestArea = Math.max(largestArea, area);

    if (leftHeight < rightHeight) {
      l++;
    } else {
      r--;
    }
  }

  return largestArea;
};

module.exports = maxArea;
