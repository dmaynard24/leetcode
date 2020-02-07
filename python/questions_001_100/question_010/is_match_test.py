import unittest, is_match


class TestIsMatch(unittest.TestCase):
  def test_is_match(self):
    self.assertEqual(is_match.Solution().is_match('aa', 'a'), False)
    self.assertEqual(is_match.Solution().is_match('aa', 'a*'), True)
    self.assertEqual(is_match.Solution().is_match('ab', '.*'), True)
    self.assertEqual(is_match.Solution().is_match('aab', 'c*a*b'), True)
    self.assertEqual(is_match.Solution().is_match('mississippi', 'a'), False)


if __name__ == '__main__':
  unittest.main()