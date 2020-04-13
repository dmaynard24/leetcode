// Combination Sum II

// Problem 40
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  const solutionSet = [];

  candidates.sort((a, b) => a - b);

  function getComboSum(i, remaining, solution) {
    if (remaining < 0) {
      return false;
    }

    if (remaining === 0) {
      solutionSet.push(solution);
      return false;
    }

    for (let j = i; j < candidates.length; j++) {
      if (candidates[j] > target) {
        break;
      }
      if (j > i && candidates[j] === candidates[j - 1]) {
        continue;
      }
      getComboSum(j + 1, remaining - candidates[j], solution.concat(candidates[j]));
    }

    return true;
  }

  getComboSum(0, target, []);

  return solutionSet;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
