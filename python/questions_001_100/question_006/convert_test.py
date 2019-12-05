import unittest, convert


class TestConvertOne(unittest.TestCase):
  def test_convert(self):
    self.assertEqual(convert.Solution().convert('PAYPALISHIRING', 3),
                     'PAHNAPLSIIGYIR')


class TestConvertTwo(unittest.TestCase):
  def test_convert(self):
    self.assertEqual(convert.Solution().convert('PAYPALISHIRING', 4),
                     'PINALSIGYAHRPI')


class TestConvertThree(unittest.TestCase):
  def test_convert(self):
    self.assertEqual(convert.Solution().convert('ABC', 2), 'ACB')


if __name__ == '__main__':
  unittest.main()