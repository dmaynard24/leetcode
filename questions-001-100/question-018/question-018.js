// 4Sum

// Problem 18
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }

  // must sort
  nums.sort((a, b) => a - b);

  let solutionSet = [],
    cachedTermIndices = new Map(),
    cachedSets = new Map();

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
      let secondTerm = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        let thirdTerm = nums[k];

        let fourthTerm = target - (firstTerm + secondTerm + thirdTerm),
          fourthTermIndices = cachedTermIndices.get(fourthTerm);
        if (fourthTermIndices == undefined) {
          continue;
        }

        for (let l = 0; l < fourthTermIndices.length; l++) {
          if (fourthTermIndices[l] > k) {
            let set = [firstTerm, secondTerm, thirdTerm, fourthTerm],
              cachedSetKey = set.join(),
              cachedSet = cachedSets.get(cachedSetKey);
            if (cachedSet != 1) {
              solutionSet.push(set);
              cachedSets.set(cachedSetKey, 1);
            }
            break;
          }
        }
      }
    }
  }

  return solutionSet;
};

module.exports = fourSum;
