import unittest
from . import length_of_last_word


class TestLengthOfLastWord(unittest.TestCase):
  def test_length_of_last_word(self):
    self.assertEqual(
        length_of_last_word.Solution().length_of_last_word('Hello World'), 5)
    self.assertEqual(
        length_of_last_word.Solution().length_of_last_word(
            '   fly me   to   the moon  '), 4)
    self.assertEqual(
        length_of_last_word.Solution().length_of_last_word(
            'luffy is still joyboy'), 6)


if __name__ == '__main__':
  unittest.main()