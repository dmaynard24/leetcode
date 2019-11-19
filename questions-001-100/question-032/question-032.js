// Longest Valid Parentheses

// Problem 32
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"

// Example 2:
// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let openStackLen = 0,
    closedStackLen = 0,
    longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      openStackLen++;
    } else {
      if (s.length - i < openStackLen - closedStackLen) {
        // invalidate, reset
        openStackLen = 1;
        closedStackLen = 0;
      }

      closedStackLen++;

      if (openStackLen - closedStackLen >= 0) {
        longest = Math.max(longest, closedStackLen * 2);
      } else {
        // invalidate, reset
        openStackLen = 0;
        closedStackLen = 0;
      }
    }
  }

  return longest;
};

module.exports = longestValidParentheses;
