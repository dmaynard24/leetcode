import unittest
from . import roman_to_int


class TestRomanToInt(unittest.TestCase):
  def test_roman_to_int(self):
    self.assertEqual(roman_to_int.Solution().roman_to_int('III'), 3)
    self.assertEqual(roman_to_int.Solution().roman_to_int('IV'), 4)
    self.assertEqual(roman_to_int.Solution().roman_to_int('IX'), 9)
    self.assertEqual(roman_to_int.Solution().roman_to_int('LVIII'), 58)
    self.assertEqual(roman_to_int.Solution().roman_to_int('MCMXCIV'), 1994)


if __name__ == '__main__':
  unittest.main()