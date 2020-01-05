import unittest, length_of_longest_substring


class TestLengthOfLongestSubstring(unittest.TestCase):
  def test_length_of_longest_substring(self):
    self.assertEqual(
        length_of_longest_substring.Solution().length_of_longest_substring(
            'abcabcbb'), 3)
    self.assertEqual(
        length_of_longest_substring.Solution().length_of_longest_substring(
            'bbbbb'), 1)
    self.assertEqual(
        length_of_longest_substring.Solution().length_of_longest_substring(
            'dvdf'), 3)
    self.assertEqual(
        length_of_longest_substring.Solution().length_of_longest_substring(
            'pwwkew'), 3)


if __name__ == '__main__':
  unittest.main()
