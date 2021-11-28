import unittest
from . import is_palindrome


class TestIsPalindrome(unittest.TestCase):
  def test_is_palindrome(self):
    self.assertEqual(is_palindrome.Solution().is_palindrome(121), True)
    self.assertEqual(is_palindrome.Solution().is_palindrome(-121), False)
    self.assertEqual(is_palindrome.Solution().is_palindrome(10), False)


if __name__ == '__main__':
  unittest.main()