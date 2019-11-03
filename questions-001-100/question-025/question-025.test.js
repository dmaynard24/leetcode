const q = require('./question-025');

let head = new q.ListNode(1);
head.next = new q.ListNode(2);
head.next.next = new q.ListNode(3);
head.next.next.next = new q.ListNode(4);
head.next.next.next.next = new q.ListNode(5);

let solutionNode = new q.ListNode(2);
solutionNode.next = new q.ListNode(1);
solutionNode.next.next = new q.ListNode(4);
solutionNode.next.next.next = new q.ListNode(3);
solutionNode.next.next.next.next = new q.ListNode(5);

test('expects that when the linked list (1 -> 2 -> 3 -> 4 -> 5) has its nodes reversed 2 at a time, the resulting linked list will be (2 -> 1 -> 4 -> 3 -> 5)', () => {
  expect(q.reverseKGroup(head, 2)).toStrictEqual(solutionNode);
});

let head2 = new q.ListNode(1);
head2.next = new q.ListNode(2);
head2.next.next = new q.ListNode(3);
head2.next.next.next = new q.ListNode(4);
head2.next.next.next.next = new q.ListNode(5);

let solutionNode2 = new q.ListNode(3);
solutionNode2.next = new q.ListNode(2);
solutionNode2.next.next = new q.ListNode(1);
solutionNode2.next.next.next = new q.ListNode(4);
solutionNode2.next.next.next.next = new q.ListNode(5);

test('expects that when the linked list (1 -> 2 -> 3 -> 4 -> 5) has its nodes reversed 3 at a time, the resulting linked list will be (3 -> 2 -> 1 -> 4 -> 5)', () => {
  expect(q.reverseKGroup(head2, 3)).toStrictEqual(solutionNode2);
});
