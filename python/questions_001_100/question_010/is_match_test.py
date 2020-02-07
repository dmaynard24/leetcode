import unittest, is_match


class TestIsMatch(unittest.TestCase):
  def test_is_match(self):
    self.assertEqual(is_match.Solution().isMatch('aa', 'a'), False)
    self.assertEqual(is_match.Solution().isMatch('aa', 'a*'), True)
    self.assertEqual(is_match.Solution().isMatch('ab', '.*'), True)
    self.assertEqual(is_match.Solution().isMatch('aab', 'c*a*b'), True)
    self.assertEqual(is_match.Solution().isMatch('mississippi', 'a'), False)


if __name__ == '__main__':
  unittest.main()