// Combination Sum

// Problem 39
// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

// Example 2:
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  const solutionSet = [];

  candidates.sort((a, b) => b - a);

  function getComboSum(i, remaining, solution) {
    if (remaining === 0) {
      solutionSet.push(solution);
      return false;
    }

    if (remaining < 0) {
      return false;
    }

    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j];
      const maxCount = Math.floor(remaining / candidate);
      for (let count = maxCount; count > 0; count--) {
        remaining -= candidate * count;
        getComboSum(j + 1, remaining, solution.concat(Array(count).fill(candidate)));
        remaining += candidate * count;
      }
    }

    return true;
  }

  getComboSum(0, target, []);

  return solutionSet;
};

module.exports = { combinationSum };
