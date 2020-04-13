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
  candidates.sort((a, b) => b - a);

  const solutionSet = [];

  function getComboSum(i, remaining, solution) {
    for (let j = i; j < candidates.length; j++) {
      const candidateVal = candidates[j];
      const maxCandidateCount = Math.floor(remaining / candidateVal);
      for (let candidateCount = maxCandidateCount; candidateCount > 0; candidateCount--) {
        if (remaining === target) {
          solution = Array(candidateCount).fill(candidateVal);
        } else {
          solution = solution.concat(Array(candidateCount).fill(candidateVal));
        }
        remaining -= candidateVal * candidateCount;
        if (remaining === 0) {
          solutionSet.push(solution);
        }

        getComboSum(j + 1, remaining, solution);

        remaining += candidateVal * candidateCount;
      }
    }
  }

  getComboSum(0, target, []);

  return solutionSet;
};

// console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
