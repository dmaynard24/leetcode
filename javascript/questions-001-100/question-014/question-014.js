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
var longestCommonPrefix = function(strs) {
	if (strs.length == 0) {
		return '';
	}

	let prefix = '';

	for (let i = 0; i < strs[0].length; i++) {
		let allMatch = true;
		for (let j = 1; j < strs.length; j++) {
			allMatch = strs[j - 1][i] === strs[j][i];
			if (!allMatch) {
				return prefix;
			}
		}

		prefix += strs[0][i];
	}

	return prefix;
};

module.exports = longestCommonPrefix;
