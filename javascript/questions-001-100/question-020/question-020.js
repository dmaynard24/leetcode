// Valid Parentheses

// Problem 20
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (s === ``) {
    return true;
  }

  if (s.length % 2 === 1) {
    return false;
  }

  const closeMap = {
    ')': `(`,
    ']': `[`,
    '}': `{`,
  };

  if (closeMap[s[0]] !== undefined) {
    return false;
  }

  const openStack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const closeChar = closeMap[char];

    if (closeChar) {
      if (openStack.pop() !== closeChar) {
        return false;
      }
    } else {
      openStack.push(char);
    }
  }

  return openStack.length === 0;
};

module.exports = isValid;
