const q = require('./question-002');

let l1 = new q.ListNode(2);
l1.next = new q.ListNode(4);
l1.next.next = new q.ListNode(3);

let l2 = new q.ListNode(5);
l2.next = new q.ListNode(6);
l2.next.next = new q.ListNode(4);

let solutionNode = new q.ListNode(7);
solutionNode.next = new q.ListNode(0);
solutionNode.next.next = new q.ListNode(8);

test('expects the result of adding reversed digits of two linked lists (2 -> 4 -> 3) + (5 -> 6 -> 4) to be (7 -> 0 -> 8)', () => {
  expect(q.addTwoNumbers(l1, l2)).toStrictEqual(solutionNode);
});
