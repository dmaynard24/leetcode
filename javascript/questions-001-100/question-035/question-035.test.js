const { searchInsert } = require(`./question-035`);

test(`the index of 5 in the sorted array [1, 3, 5, 6] is 2`, () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test(`the index of 2 in the sorted array [1, 3, 5, 6] would be 1`, () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});
