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
  let validStrLens = new Map();

  let openStackLen = 0,
    localLen = 0,
    potentialLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      openStackLen++;
      localLen = 1;
    } else {
      if (openStackLen >= 0) {
        localLen += 1;
        potentialLen += 2;
      }

      openStackLen--;
      if (openStackLen >= 0) {
        let currentLen = openStackLen == 0 ? potentialLen : localLen,
          len = currentLen;
        if (validStrLens.has(i - currentLen)) {
          // combine current with adjacent previous length
          len = validStrLens.get(i - currentLen) + currentLen;
          validStrLens.delete(i - currentLen);
        }
        validStrLens.set(i, len);
      }
      if (openStackLen <= 0) {
        // reset
        openStackLen = 0;
        potentialLen = 0;
        localLen = 0;
      }
    }
  }

  return Math.max.apply(null, [...validStrLens.values()]);
};

module.exports = longestValidParentheses;
