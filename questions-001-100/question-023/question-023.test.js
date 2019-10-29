const q = require('./question-023');

let l1 = new q.ListNode(1);
l1.next = new q.ListNode(4);
l1.next.next = new q.ListNode(5);

let l2 = new q.ListNode(1);
l2.next = new q.ListNode(3);
l2.next.next = new q.ListNode(4);

let l3 = new q.ListNode(2);
l3.next = new q.ListNode(6);

let solutionNode = new q.ListNode(1);
solutionNode.next = new q.ListNode(1);
solutionNode.next.next = new q.ListNode(2);
solutionNode.next.next.next = new q.ListNode(3);
solutionNode.next.next.next.next = new q.ListNode(4);
solutionNode.next.next.next.next.next = new q.ListNode(4);
solutionNode.next.next.next.next.next.next = new q.ListNode(5);
solutionNode.next.next.next.next.next.next.next = new q.ListNode(6);

test('expects that merging the lists [(1 -> 4 -> 5), (1 -> 3 -> 4), (2 -> 6)] will result in (1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6)', () => {
  expect(q.mergeKLists([l1, l2, l3])).toMatchObject(solutionNode);
});
