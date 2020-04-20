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

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([0, 1, 0, 2])); // 1
console.log(trap([2, 0, 2])); // 2
console.log(trap([4, 2, 3])); // 1
console.log(trap([5, 4, 1, 2])); // 1
console.log(trap([2, 1, 0, 2])); // 3
console.log(trap([5, 2, 1, 2, 1, 5])); // 14
