const invertTree = require(`./question-226`);
const TreeNode = require(`../../util/TreeNode`);

test(`expects the result of inverting a binary tree [4, 2, 7, 1, 3, 6, 9] to be [4, 7, 2, 9, 6, 3, 1]`, () => {
  const t7 = TreeNode(9);
  const t6 = TreeNode(6);
  const t5 = TreeNode(3);
  const t4 = TreeNode(1);
  const t3 = TreeNode(7, t6, t7);
  const t2 = TreeNode(2, t4, t5);
  const t1 = TreeNode(4, t2, t3);

  const t3inverted = TreeNode(7, t7, t6);
  const t2inverted = TreeNode(2, t5, t4);
  const t1inverted = TreeNode(4, t3inverted, t2inverted);

  expect(invertTree(t1)).toStrictEqual(t1inverted);
});

test(`expects the result of inverting a binary tree [2, 1, 3] to be [2, 3, 1]`, () => {
  const t3 = TreeNode(3);
  const t2 = TreeNode(1);
  const t1 = TreeNode(2, t2, t3);

  const t1inverted = TreeNode(2, t3, t2);

  expect(invertTree(t1)).toStrictEqual(t1inverted);
});

test(`expects the result of inverting a binary tree [] to be []`, () => {
  const t1 = TreeNode();
  const t1inverted = TreeNode();

  expect(invertTree(t1)).toStrictEqual(t1inverted);
});
