const mergeKLists = require(`./question-023`);
const ListNode = require(`../../util/ListNode`);

const l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const l3 = new ListNode(2);
l3.next = new ListNode(6);

const solutionNode = new ListNode(1);
solutionNode.next = new ListNode(1);
solutionNode.next.next = new ListNode(2);
solutionNode.next.next.next = new ListNode(3);
solutionNode.next.next.next.next = new ListNode(4);
solutionNode.next.next.next.next.next = new ListNode(4);
solutionNode.next.next.next.next.next.next = new ListNode(5);
solutionNode.next.next.next.next.next.next.next = new ListNode(6);

test(`expects that merging the lists [(1 -> 4 -> 5), (1 -> 3 -> 4), (2 -> 6)] will result in (1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6)`, () => {
  expect(mergeKLists([l1, l2, l3])).toStrictEqual(solutionNode);
});
