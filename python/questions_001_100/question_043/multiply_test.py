import unittest
from . import multiply


class TestMultiply(unittest.TestCase):
  def test_multiply(self):
    self.assertEqual(multiply.Solution().multiply('2', '3'), '6')
    self.assertEqual(multiply.Solution().multiply('123', '456'), '56088')
    self.assertEqual(multiply.Solution().multiply('12', '12'), '144')
    self.assertEqual(multiply.Solution().multiply('120', '10'), '1200')
    self.assertEqual(multiply.Solution().multiply('10', '120'), '1200')


if __name__ == '__main__':
  unittest.main()