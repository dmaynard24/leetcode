// Longest Palindromic Substring

// Problem 5
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s;
  }

  let longestStart = 0;
  let longestEnd = 1;
  let longestLength = 1;

  for (let i = 0; i < s.length - 1; i++) {
    if (s.length - i < longestLength / 2 + 1) {
      break;
    }

    for (let j = i; j <= i + 1; j++) {
      let prev = s[i];
      let next = s[j];
      let l = 0;
      while (prev && next && prev === next) {
        l++;
        prev = s[i - l];
        next = s[j + l];
      }

      const start = i - l + 1;
      const end = j + l;
      const length = end - start;
      if (length > longestLength) {
        longestStart = start;
        longestEnd = end;
        longestLength = length;
      }
    }
  }

  return s.substring(longestStart, longestEnd);
};

module.exports = longestPalindrome;
