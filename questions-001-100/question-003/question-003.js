// Longest Substring Without Repeating Characters

// Problem 3
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "dvdf"
// Output: 3
// Explanation: The answer is "vdf", with the length of 3.

// Example 4:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0,
    charIndices = new Map();

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (s.length - i < longest) {
      break;
    }

    let char = s[j],
      cachedCharIndex = charIndices.get(char);
    if (cachedCharIndex) {
      i = Math.max(cachedCharIndex, i);
    }

    longest = Math.max(longest, j - i + 1);
    charIndices.set(char, j + 1);
  }

  return longest;
};

module.exports = lengthOfLongestSubstring;
