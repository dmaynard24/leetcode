import unittest, int_to_roman


class TestIntToRoman(unittest.TestCase):
  def test_int_to_roman(self):
    self.assertEqual(int_to_roman.Solution().int_to_roman(3), 'III')
    self.assertEqual(int_to_roman.Solution().int_to_roman(4), 'IV')
    self.assertEqual(int_to_roman.Solution().int_to_roman(9), 'IX')
    self.assertEqual(int_to_roman.Solution().int_to_roman(58), 'LVIII')
    self.assertEqual(int_to_roman.Solution().int_to_roman(1994), 'MCMXCIV')


if __name__ == '__main__':
  unittest.main()