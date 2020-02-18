import unittest, is_valid


class TestIsValid(unittest.TestCase):
  def test_is_valid(self):
    self.assertEqual(is_valid.Solution().is_valid('()'), True)
    self.assertEqual(is_valid.Solution().is_valid('()[]{}'), True)
    self.assertEqual(is_valid.Solution().is_valid('(]'), False)
    self.assertEqual(is_valid.Solution().is_valid('([)]'), False)
    self.assertEqual(is_valid.Solution().is_valid('{[]}'), True)


if __name__ == '__main__':
  unittest.main()