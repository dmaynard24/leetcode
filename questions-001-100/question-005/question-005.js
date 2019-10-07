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
var longestPalindrome = function(s) {
  if (!s || s.length == 1) {
    return s;
  }

  let longestLength = 1,
    longest = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    if (s.length - i < longestLength / 2 + 1) {
      break;
    }

    let prev = s[i - 1],
      curr = s[i],
      next = s[i + 1];

    if (curr == next) {
      checkPalindrome(2, i - 1, i + 2);
    }
    if (prev && prev == next) {
      checkPalindrome(3, i - 2, i + 2);
    }
  }

  function checkPalindrome(length, prevI, nextI) {
    let prev = s[prevI],
      next = s[nextI],
      j = 0;
    while (prev && next && prev == next) {
      length += 2;
      j++;
      prev = s[prevI - j];
      next = s[nextI + j];
    }

    if (length > longestLength) {
      longest = s.substring(prevI - j + 1, nextI + j);
      longestLength = length;
    }
  }

  return longest;
};

module.exports = longestPalindrome;
