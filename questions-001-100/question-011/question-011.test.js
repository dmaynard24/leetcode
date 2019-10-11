const maxArea = require('./question-011');

test('gets the maximum area of vertical lines represented by [1, 8, 6, 2, 5, 4, 8, 3, 7] to be 49', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('gets the maximum area of vertical lines represented by [1, 1] to be 1', () => {
  expect(maxArea([1, 1])).toBe(1);
});

test('gets the maximum area of vertical lines represented by [1, 2, 1] to be 2', () => {
  expect(maxArea([1, 2, 1])).toBe(2);
});
