# Merge k Sorted Lists

# Problem 23
# Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

# Example:
# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

from typing import List
from ...util import listnode
from ..question_021 import merge_two_lists

merge_two_lists = merge_two_lists.Solution().merge_two_lists


class Solution:
  def merge_k_lists(self, lists: List[listnode.ListNode]) -> listnode.ListNode:
    if len(lists) == 0:
      return None

    while len(lists) > 1:
      offset = 1 if len(lists) % 2 == 0 else 2
      for i in range(0, len(lists) - offset, 2):
        if len(lists) < i + 2:
          break
        lists.insert(i, merge_two_lists(lists[i], lists[i + 1]))
        lists.pop(i + 1)
        lists.pop(i + 1)

    return lists[0]
