// Palindrome Number

// Problem 9
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true

// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  let digitsReversed = [];
  while (x > 0) {
    digitsReversed.push(x % 10);
    x = Math.floor(x / 10);
  }

  if (digitsReversed[0] == 0) {
    return false;
  }

  let i = 0,
    len = digitsReversed.length;
  // leftIndex = i
  // rightIndex = len - 1 - i
  while (len - 1 - i - i > 0) {
    if (digitsReversed[i] != digitsReversed[len - 1 - i]) {
      return false;
    }

    i++;
  }

  return true;
};

module.exports = isPalindrome;
