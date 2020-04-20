/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  let amount = 0;

  const leftMax = [height[0]];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = [];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    amount += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return amount;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([0, 1, 0, 2])); // 1
console.log(trap([2, 0, 2])); // 2
console.log(trap([4, 2, 3])); // 1
console.log(trap([5, 4, 1, 2])); // 1
console.log(trap([2, 1, 0, 2])); // 3
console.log(trap([5, 2, 1, 2, 1, 5])); // 14
