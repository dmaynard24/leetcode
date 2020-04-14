const { firstMissingPositive } = require(`./question-041`);

test(`the first missing positive integer in the unsorted array [1, 2, 0] is 3`, () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});

test(`the first missing positive integer in the unsorted array [3, 4, -1, 1] is 2`, () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});

test(`the first missing positive integer in the unsorted array [7, 8, 9, 11, 12] is 1`, () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});
