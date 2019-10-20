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
  let solutionSet = [],
    cachedTermsIndices = new Map(),
    cachedFirstTerms = new Map(),
    cachedSets = new Map();

  // start by caching terms, removing any term that's used more than thrice
  for (let i = 0; i < nums.length; i++) {
    if (cachedTermsIndices.get(nums[i]) == undefined) {
      cachedTermsIndices.set(nums[i], [i]);
    } else {
      let cachedIndices = cachedTermsIndices.get(nums[i]);
      if (cachedIndices.length == 3) {
        nums.splice(i, 1);
        i--;
      } else {
        cachedTermsIndices.set(nums[i], cachedIndices.concat(i));
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let firstTerm = nums[i];
    if (cachedFirstTerms.get(firstTerm) == 1) {
      continue;
    } else {
      cachedFirstTerms.set(firstTerm, 1);
    }

    for (let j = i + 1; j < nums.length; j++) {
      let secondTerm = nums[j];

      let thirdTerm = (firstTerm + secondTerm) * -1,
        cachedIndices = cachedTermsIndices.get(thirdTerm);
      if (cachedIndices == undefined) {
        continue;
      }

      for (let k = 0; k < cachedIndices.length; k++) {
        // ensure it hasn't been used by the first or second term
        if (cachedIndices[k] != i && cachedIndices[k] != j) {
          let sortedSet = [firstTerm, secondTerm, thirdTerm].sort((a, b) => a - b),
            cachedSetKey = sortedSet.join('');
          if (cachedSets.get(cachedSetKey) == 1) {
            continue;
          }

          solutionSet.push(sortedSet);
          cachedSets.set(cachedSetKey, 1);
          break;
        }
      }
    }
  }

  return solutionSet;
};

module.exports = threeSum;
