const chunk = require(`./question-21`);

test(`chunks arrays of different sizes correctly`, () => {
  expect(chunk([1, 2, 3, 4, 5], 1)).toStrictEqual([[1], [2], [3], [4], [5]]);
  expect(chunk([1, 9, 6, 3, 2], 3)).toStrictEqual([[1, 9, 6], [3, 2]]);
  expect(chunk([8, 5, 3, 2, 6], 6)).toStrictEqual([[8, 5, 3, 2, 6]]);
  expect(chunk([], 1)).toStrictEqual([]);
});