// Reverse Integer

// Problem 7
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  let num = isNegative ? reversed * -1 : reversed;

  const MAX_SAFE_32BIT_INT = Math.pow(2, 31) - 1,
    MIN_SAFE_32BIT_INT = MAX_SAFE_32BIT_INT * -1 - 1;
  return num > MAX_SAFE_32BIT_INT || num < MIN_SAFE_32BIT_INT ? 0 : num;
};

module.exports = reverse;
