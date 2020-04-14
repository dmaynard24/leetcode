const { combinationSumTwo } = require(`./question-040`);

test(`all unique combinations of the set [10, 1, 2, 7, 6, 1, 5] that sum up to 8 to be [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]`, () => {
  expect(combinationSumTwo([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]);
});

test(`all unique combinations of the set [2, 5, 2, 1, 2] that sum up to 5 to be [[1, 2, 2], [5]]`, () => {
  expect(combinationSumTwo([2, 5, 2, 1, 2], 5)).toStrictEqual([[1, 2, 2], [5]]);
});
