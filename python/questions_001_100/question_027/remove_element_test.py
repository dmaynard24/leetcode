import unittest
from . import remove_element


class TestRemoveElement(unittest.TestCase):
  def test_remove_element(self):
    self.assertEqual(remove_element.Solution().remove_element([3, 2, 2, 3], 3),
                     2)
    self.assertEqual(
        remove_element.Solution().remove_element([0, 1, 2, 2, 3, 0, 4, 2], 2),
        5)


if __name__ == '__main__':
  unittest.main()