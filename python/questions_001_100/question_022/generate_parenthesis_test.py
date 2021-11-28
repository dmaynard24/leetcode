import unittest
from . import generate_parenthesis


class TestGenerateParenthesis(unittest.TestCase):
  def test_generate_parenthesis(self):
    self.assertEqual(generate_parenthesis.Solution().generate_parenthesis(2),
                     ['(())', '()()'])
    self.assertEqual(generate_parenthesis.Solution().generate_parenthesis(3),
                     ['((()))', '(()())', '(())()', '()(())', '()()()'])


if __name__ == '__main__':
  unittest.main()