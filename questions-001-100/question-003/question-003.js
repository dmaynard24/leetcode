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

    let j = i + 1;
    while (j < s.length) {
      let char = s[j];
      if (substrChars[char]) {
        break;
      }

      substrChars[char] = 1;
      j++;
    }

    length = j - i;
    longest = Math.max(longest, length);
  }

  return longest == 0 ? s.length : longest;
};

const now = require('performance-now');
const time0 = now();
console.log(lengthOfLongestSubstring('bbbbb'));
const time1 = now();
console.log(`call took ${time1 - time0} milliseconds`);
