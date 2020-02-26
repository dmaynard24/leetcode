import unittest, str_str


class TestStrStr(unittest.TestCase):
  def test_str_str(self):
    self.assertEqual(str_str.Solution().str_str('hello', 'll'), 2)
    self.assertEqual(str_str.Solution().str_str('aaaaa', 'bba'), -1)
    self.assertEqual(str_str.Solution().str_str('a', 'a'), 0)


if __name__ == '__main__':
  unittest.main()