const mergeTwoLists = require(`./question-021`);
const ListNode = require(`../../util/ListNode`);

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const solutionNode = new ListNode(1);
solutionNode.next = new ListNode(1);
solutionNode.next.next = new ListNode(2);
solutionNode.next.next.next = new ListNode(3);
solutionNode.next.next.next.next = new ListNode(4);
solutionNode.next.next.next.next.next = new ListNode(4);

test(`merging the two lists (1 -> 2 -> 4) and (1 -> 3 -> 4) will result in (1 -> 1 -> 2 -> 3 -> 4 -> 4)`, () => {
  expect(mergeTwoLists(l1, l2)).toStrictEqual(solutionNode);
});

const l3 = new ListNode(5);

const l4 = new ListNode(1);
l4.next = new ListNode(2);
l4.next.next = new ListNode(4);

nextSolutionNode = new ListNode(1);
nextSolutionNode.next = new ListNode(2);
nextSolutionNode.next.next = new ListNode(4);
nextSolutionNode.next.next.next = new ListNode(5);

test(`merging the two lists (5) and (1 -> 2 -> 4) will result in (1 -> 2 -> 4 -> 5)`, () => {
  expect(mergeTwoLists(l3, l4)).toStrictEqual(nextSolutionNode);
});
