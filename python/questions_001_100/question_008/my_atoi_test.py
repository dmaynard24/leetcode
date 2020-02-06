import unittest, my_atoi


class TestMyAtoi(unittest.TestCase):
  def test_my_atoi(self):
    self.assertEqual(my_atoi.Solution().my_atoi('42'), 42)
    self.assertEqual(my_atoi.Solution().my_atoi('   -42'), -42)
    self.assertEqual(my_atoi.Solution().my_atoi('4193 with words'), 4193)
    self.assertEqual(my_atoi.Solution().my_atoi('words and 987'), 0)
    self.assertEqual(my_atoi.Solution().my_atoi('-91283472332'), -2147483648)
    self.assertEqual(my_atoi.Solution().my_atoi('-13+8'), -13)


if __name__ == '__main__':
  unittest.main()
