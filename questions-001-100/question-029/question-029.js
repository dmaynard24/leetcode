// Divide Two integers

// Problem 29
// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2

// Note:
// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let quotient = 0,
    absoluteDividend = Math.abs(dividend),
    dividendIsNegative = absoluteDividend != dividend,
    absoluteDivisor = Math.abs(divisor),
    divisorIsNegative = absoluteDivisor != divisor,
    quotientIsNegative = (dividendIsNegative && !divisorIsNegative) || (!dividendIsNegative && divisorIsNegative);

  while (absoluteDividend >= absoluteDivisor) {
    quotient = quotientIsNegative ? quotient - 1 : quotient + 1;
    absoluteDividend -= absoluteDivisor;
  }

  return quotient;
};

const MAX_SAFE_32BIT_INT = Math.pow(2, 31) - 1,
  MIN_SAFE_32BIT_INT = MAX_SAFE_32BIT_INT * -1 - 1;

module.exports = divide;
