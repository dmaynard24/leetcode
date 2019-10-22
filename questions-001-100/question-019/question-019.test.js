const q = require('./question-019');

let l1 = new q.ListNode(1);
l1.next = new q.ListNode(2);
l1.next.next = new q.ListNode(3);
l1.next.next.next = new q.ListNode(4);
l1.next.next.next.next = new q.ListNode(5);

let solutionNode = new q.ListNode(1);
solutionNode.next = new q.ListNode(2);
solutionNode.next.next = new q.ListNode(3);
solutionNode.next.next.next = new q.ListNode(5);

test('expects that removing the 2nd node from the end of the list (1 -> 2 -> 3 -> 4 -> 5) will result in (1 -> 2 -> 3 -> 5)', () => {
  expect(q.removeNthFromEnd(l1, 2)).toStrictEqual(solutionNode);
});
