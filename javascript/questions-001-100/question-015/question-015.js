// 3Sum

// Problem 15
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }

  // must sort
  nums.sort((a, b) => a - b);

  let solutionSet = [],
    cachedTermIndices = new Map();

  // start by caching terms indices
  for (let i = 0; i < nums.length; i++) {
    if (cachedTermIndices.get(nums[i]) == undefined) {
      cachedTermIndices.set(nums[i], [i]);
    } else {
      cachedTermIndices.get(nums[i]).push(i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    let firstTerm = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let secondTerm = nums[j],
        thirdTerm = (firstTerm + secondTerm) * -1,
        thirdTermIndices = cachedTermIndices.get(thirdTerm);
      if (thirdTermIndices == undefined) {
        continue;
      }

      for (let k = 0; k < thirdTermIndices.length; k++) {
        if (thirdTermIndices[k] > j) {
          let prevSet = solutionSet[solutionSet.length - 1];
          if (prevSet == undefined || prevSet[0] != firstTerm || prevSet[1] != secondTerm || prevSet[2] != thirdTerm) {
            solutionSet.push([firstTerm, secondTerm, thirdTerm]);
          }
          break;
        }
      }
    }
  }

  return solutionSet;
};

module.exports = threeSum;
