# Multiply Strings

# Problem 43
# Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

# Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

# Example 1:
# Input: num1 = "2", num2 = "3"
# Output: "6"

# Example 2:
# Input: num1 = "123", num2 = "456"
# Output: "56088"


class Solution:
  def multiply(self, num1: str, num2: str) -> str:
    total = 0
    for i in range(len(num1)):
      bottom_digit = int(num1[len(num1) - i - 1])
      carry = 0
      line = 0

      # for all digits in the top besides the first
      for j in range(len(num2) - 1):
        top_digit = int(num2[len(num2) - j - 1])
        product = bottom_digit * top_digit
        last_digit = product % 10
        line += (last_digit + carry) * 10**j
        carry = product // 10

      # for the first digit in the top number, do something slightly different
      top_digit = int(num2[0])
      product = bottom_digit * top_digit
      line += (product + carry) * 10**(len(num2) - 1)
      total += line * 10**i

    return str(total)