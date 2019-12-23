import unittest, length_of_longest_substring


class TestLengthOfLongestSubstringOne(unittest.TestCase):
	def test_length_of_longest_substring(self):
		self.assertEqual(
			length_of_longest_substring.Solution().length_of_longest_substring(
			'abcabcbb'), 3)


class TestLengthOfLongestSubstringTwo(unittest.TestCase):
	def test_length_of_longest_substring(self):
		self.assertEqual(
			length_of_longest_substring.Solution().length_of_longest_substring(
			'bbbbb'), 1)


class TestLengthOfLongestSubstringThree(unittest.TestCase):
	def test_length_of_longest_substring(self):
		self.assertEqual(
			length_of_longest_substring.Solution().length_of_longest_substring(
			'dvdf'), 3)


class TestLengthOfLongestSubstringFour(unittest.TestCase):
	def test_length_of_longest_substring(self):
		self.assertEqual(
			length_of_longest_substring.Solution().length_of_longest_substring(
			'pwwkew'), 3)


if __name__ == '__main__':
	unittest.main()
