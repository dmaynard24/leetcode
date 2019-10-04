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
  if (s.length == 1) {
    return 1;
  }

  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < longest) {
      break;
    }

    let substrChars = [];
    substrChars[s[i]] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (substrChars[s[j]]) {
        let len = j - i;
        longest = len > longest ? len : longest;
        break;
      }

      if (j == s.length - 1) {
        let len = j + 1 - i;
        longest = len > longest ? len : longest;
      }

      substrChars[s[j]] = 1;
    }
  }

  return longest == 0 ? s.length : longest;
};

module.exports = lengthOfLongestSubstring;
