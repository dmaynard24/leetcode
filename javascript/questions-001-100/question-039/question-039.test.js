const { combinationSum } = require(`./question-039`);

test(`all unique combinations of the set [2, 3, 6, 7] that sum up to 7 to be [[7], [3, 2, 2]]`, () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[7], [3, 2, 2]]);
});

test(`all unique combinations of the set [2, 3, 5] that sum up to 8 to be [[5, 3], [3, 3, 2], [2, 2, 2, 2]]`, () => {
  expect(combinationSum([2, 3, 5], 8)).toStrictEqual([
    [5, 3],
    [3, 3, 2],
    [2, 2, 2, 2],
  ]);
});
