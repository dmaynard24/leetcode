import unittest, letter_combinations


class TestLetterCombinations(unittest.TestCase):
  def test_letter_combinations(self):
    self.assertEqual(letter_combinations.Solution().letter_combinations('23'),
                     ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])


if __name__ == '__main__':
  unittest.main()