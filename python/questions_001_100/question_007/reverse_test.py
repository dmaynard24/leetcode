import unittest
from . import reverse


class TestReverse(unittest.TestCase):
  def test_reverse(self):
    self.assertEqual(reverse.Solution().reverse(123), 321)
    self.assertEqual(reverse.Solution().reverse(-123), -321)
    self.assertEqual(reverse.Solution().reverse(120), 21)


if __name__ == '__main__':
  unittest.main()
