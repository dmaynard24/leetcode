import unittest, longest_common_prefix


class TestLongestCommonPrefix(unittest.TestCase):
  def test_longest_common_prefix(self):
    self.assertEqual(
        longest_common_prefix.Solution().longest_common_prefix(
            ['flower', 'flow', 'flight']), 'fl')
    self.assertEqual(
        longest_common_prefix.Solution().longest_common_prefix(
            ['dog', 'racecar', 'car']), '')
    self.assertEqual(
        longest_common_prefix.Solution().longest_common_prefix([]), '')
    self.assertEqual(
        longest_common_prefix.Solution().longest_common_prefix(''), '')


if __name__ == '__main__':
  unittest.main()