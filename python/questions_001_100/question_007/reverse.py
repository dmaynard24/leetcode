# Reverse Integer

# Problem 7
# Given a 32-bit signed integer, reverse digits of an integer.

# Example 1:
# Input: 123
# Output: 321

# Example 2:
# Input: -123
# Output: -321

# Example 3:
# Input: 120
# Output: 21

# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


class Solution:
	def reverse(self, x: int) -> int:
		is_negative = False

		if x < 0:
			is_negative = True
			x *= -1

		reversed_num = 0
		while x > 0:
			reversed_num = reversed_num * 10 + (x % 10)
			x //= 10

		num = reversed_num * -1 if is_negative else reversed_num

		MAX_SAFE_32BIT_INT = 2**31 - 1
		MIN_SAFE_32BIT_INT = MAX_SAFE_32BIT_INT * -1 - 1

		return 0 if num > MAX_SAFE_32BIT_INT or num < MIN_SAFE_32BIT_INT else num
