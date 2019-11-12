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
    potentialLen = 0,
    localLen = 0,
    longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      openStackLen++;
    } else {
      if (openStackLen > 0) {
        potentialLen += 2;
        localLen += 2;
      }

      openStackLen--;
      if (openStackLen == 0) {
        longest = Math.max(potentialLen, longest);
        localLen = 0;
      } else if (openStackLen < 0) {
        potentialLen = 0;
        localLen = 0;
        openStackLen = 0;
      }
    }
  }

  if (openStackLen != 0) {
    console.log(localLen, potentialLen, longest);
    return Math.max(localLen, longest);
  }

  return Math.max(potentialLen, longest);
};

console.log(longestValidParentheses('(()(((()'));

module.exports = longestValidParentheses;
