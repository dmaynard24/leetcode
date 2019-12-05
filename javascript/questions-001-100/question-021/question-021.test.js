const mergeTwoLists = require('./question-021'),
  ListNode = require('../../util/ListNode');

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let solutionNode = new ListNode(1);
solutionNode.next = new ListNode(1);
solutionNode.next.next = new ListNode(2);
solutionNode.next.next.next = new ListNode(3);
solutionNode.next.next.next.next = new ListNode(4);
solutionNode.next.next.next.next.next = new ListNode(4);

test('expects that merging the two lists (1 -> 2 -> 4) and (1 -> 3 -> 4) will result in (1 -> 1 -> 2 -> 3 -> 4 -> 4)', () => {
  expect(mergeTwoLists(l1, l2)).toStrictEqual(solutionNode);
});

let l3 = new ListNode(5);

let l4 = new ListNode(1);
l4.next = new ListNode(2);
l4.next.next = new ListNode(4);

nextSolutionNode = new ListNode(1);
nextSolutionNode.next = new ListNode(2);
nextSolutionNode.next.next = new ListNode(4);
nextSolutionNode.next.next.next = new ListNode(5);

test('expects that merging the two lists (5) and (1 -> 2 -> 4) will result in (1 -> 2 -> 4 -> 5)', () => {
  expect(mergeTwoLists(l3, l4)).toStrictEqual(nextSolutionNode);
});
