const q = require('./question-021');

let l1 = new q.ListNode(1);
l1.next = new q.ListNode(2);
l1.next.next = new q.ListNode(4);

let l2 = new q.ListNode(1);
l2.next = new q.ListNode(3);
l2.next.next = new q.ListNode(4);

let solutionNode = new q.ListNode(1);
solutionNode.next = new q.ListNode(1);
solutionNode.next.next = new q.ListNode(2);
solutionNode.next.next.next = new q.ListNode(3);
solutionNode.next.next.next.next = new q.ListNode(4);
solutionNode.next.next.next.next.next = new q.ListNode(4);

test('expects that merging the two lists (1 -> 2 -> 4) and (1 -> 3 -> 4) will result in (1 -> 1 -> 2 -> 3 -> 4 -> 4)', () => {
  expect(q.mergeTwoLists(l1, l2)).toStrictEqual(solutionNode);
});

let l3 = new q.ListNode(5);

let l4 = new q.ListNode(1);
l4.next = new q.ListNode(2);
l4.next.next = new q.ListNode(4);

nextSolutionNode = new q.ListNode(1);
nextSolutionNode.next = new q.ListNode(2);
nextSolutionNode.next.next = new q.ListNode(4);
nextSolutionNode.next.next.next = new q.ListNode(5);

test('expects that merging the two lists (5) and (1 -> 2 -> 4) will result in (1 -> 2 -> 4 -> 5)', () => {
  expect(q.mergeTwoLists(l3, l4)).toStrictEqual(nextSolutionNode);
});
