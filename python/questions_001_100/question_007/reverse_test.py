import unittest, reverse


class TestReverseOne(unittest.TestCase):
  def test_reverse(self):
    self.assertEqual(reverse.Solution().reverse(123), 321)


class TestReverseTwo(unittest.TestCase):
  def test_reverse(self):
    self.assertEqual(reverse.Solution().reverse(-123), -321)


class TestReverseThree(unittest.TestCase):
  def test_reverse(self):
    self.assertEqual(reverse.Solution().reverse(120), 21)


if __name__ == '__main__':
  unittest.main()