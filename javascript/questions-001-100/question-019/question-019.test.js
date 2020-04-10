const removeNthFromEnd = require(`./question-019`);
const ListNode = require(`../../util/ListNode`);

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

const solutionNode = new ListNode(1);
solutionNode.next = new ListNode(2);
solutionNode.next.next = new ListNode(3);
solutionNode.next.next.next = new ListNode(5);

test(`removing the 2nd node from the end of the list (1 -> 2 -> 3 -> 4 -> 5) will result in (1 -> 2 -> 3 -> 5)`, () => {
  expect(removeNthFromEnd(l1, 2)).toStrictEqual(solutionNode);
});
