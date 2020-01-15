import unittest, longest_palindrome


class TestLongestPalindrome(unittest.TestCase):
  def test_longest_palindrome(self):
    self.assertEqual(longest_palindrome.Solution().longest_palindrome('babad'),
                     'bab')
    self.assertEqual(longest_palindrome.Solution().longest_palindrome('cbbd'),
                     'bb')
    self.assertEqual(longest_palindrome.Solution().longest_palindrome('aaaa'),
                     'aaaa')


if __name__ == '__main__':
  unittest.main()
