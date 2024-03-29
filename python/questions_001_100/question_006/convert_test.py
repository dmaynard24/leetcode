import unittest
from . import convert


class TestConvert(unittest.TestCase):
  def test_convert(self):
    self.assertEqual(convert.Solution().convert('PAYPALISHIRING', 3),
                     'PAHNAPLSIIGYIR')
    self.assertEqual(convert.Solution().convert('PAYPALISHIRING', 4),
                     'PINALSIGYAHRPI')
    self.assertEqual(convert.Solution().convert('ABC', 2), 'ACB')


if __name__ == '__main__':
  unittest.main()
