// Longest Common Prefix

// Problem 14
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ``;
  }

  strs.sort();
  const minStr = strs[0];
  const maxStr = strs[strs.length - 1];

  for (let i = 0; i < minStr.length; i++) {
    if (minStr[i] !== maxStr[i]) {
      return minStr.substring(0, i);
    }
  }

  return minStr;
};

module.exports = longestCommonPrefix;
