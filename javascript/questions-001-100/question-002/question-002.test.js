const addTwoNumbers = require(`./question-002`);
const ListNode = require(`../../util/ListNode`);

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const solutionNode = new ListNode(7);
solutionNode.next = new ListNode(0);
solutionNode.next.next = new ListNode(8);

test(`expects the result of adding reversed digits of two linked lists (2 -> 4 -> 3) + (5 -> 6 -> 4) to be (7 -> 0 -> 8)`, () => {
  expect(addTwoNumbers(l1, l2)).toStrictEqual(solutionNode);
});
