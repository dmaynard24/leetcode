const maxArea = require(`./question-011`);

test(`the maximum area of vertical lines represented by [1, 8, 6, 2, 5, 4, 8, 3, 7] to be 49`, () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test(`the maximum area of vertical lines represented by [1, 1] to be 1`, () => {
  expect(maxArea([1, 1])).toBe(1);
});

test(`the maximum area of vertical lines represented by [1, 2, 1] to be 2`, () => {
  expect(maxArea([1, 2, 1])).toBe(2);
});

test(`the maximum area of vertical lines represented by [9, 6, 14, 11, 2, 2, 4, 9, 3, 8] to be 72`, () => {
  expect(maxArea([9, 6, 14, 11, 2, 2, 4, 9, 3, 8])).toBe(72);
});
