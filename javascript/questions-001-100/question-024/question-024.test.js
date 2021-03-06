const swapPairs = require(`./question-024`);
const ListNode = require(`../../util/ListNode`);

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const solutionNode = new ListNode(2);
solutionNode.next = new ListNode(1);
solutionNode.next.next = new ListNode(4);
solutionNode.next.next.next = new ListNode(3);

test(`swapping each adjacent node in (1 -> 2 -> 3 -> 4) will result in (2 -> 1 -> 4 -> 3)`, () => {
  expect(swapPairs(head)).toStrictEqual(solutionNode);
});
