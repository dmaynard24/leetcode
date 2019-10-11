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
// var maxArea = function(height) {
//   let largestArea = 0,
//     largestLeft = {
//       height: 0,
//       n: 0
//     },
//     largestRight = {
//       height: 0,
//       n: height.length - 1
//     };

//   for (let n = largestLeft.n; n <= largestRight.n; n++) {
//     let leftHeight = height[n];
//     if (leftHeight < largestLeft.height) {
//       continue;
//     }

//     for (let o = largestRight.n; o >= 0; o--) {
//       let rightHeight = height[o];
//       if (rightHeight < largestRight.height) {
//         continue;
//       }

//       let w = o + 1 - (n + 1),
//         h = Math.min(leftHeight, rightHeight),
//         area = w * h;

//       if (area > largestArea) {
//         largestArea = area;
//         largestLeft = {
//           height: leftHeight,
//           n: n
//         };
//         largestRight = {
//           height: rightHeight,
//           n: o
//         };
//       }
//     }
//   }

//   return largestArea;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftVertical = {
      n: 0,
      height: 0,
      tentativeArea: 0
    },
    rightVertical = {
      n: 0,
      height: 0,
      tentativeArea: 0
    };

  for (let n = 0; n < height.length; n++) {
    let tentativeAreaLeft = height[n] * (height.length - (n + 1));
    if (tentativeAreaLeft > leftVertical.tentativeArea) {
      leftVertical = {
        n: n,
        height: height[n],
        tentativeArea: tentativeAreaLeft
      };
    }

    if (n > leftVertical.n) {
      let tentativeAreaRight = height[n] * n;
      if (tentativeAreaRight >= rightVertical.tentativeArea) {
        rightVertical = {
          n: n,
          height: height[n],
          tentativeArea: tentativeAreaRight
        };
      }
    }
  }

  console.log(leftVertical, rightVertical);
  let w = rightVertical.n + 1 - (leftVertical.n + 1),
    h = Math.min(leftVertical.height, rightVertical.height),
    area = w * h;

  return area;
};

console.log(maxArea([9, 6, 14, 11, 2, 2, 4, 9, 3, 8]));

module.exports = maxArea;
