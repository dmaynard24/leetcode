const q = require('./question-024');

let head = new q.ListNode(1);
head.next = new q.ListNode(2);
head.next.next = new q.ListNode(3);
head.next.next.next = new q.ListNode(4);

let solutionNode = new q.ListNode(2);
solutionNode.next = new q.ListNode(1);
solutionNode.next.next = new q.ListNode(4);
solutionNode.next.next.next = new q.ListNode(3);

test('expects that swapping each adjacent node in (1 -> 2 -> 3 -> 4) will result in (2 -> 1 -> 4 -> 3)', () => {
  expect(q.swapPairs(head)).toStrictEqual(solutionNode);
});
