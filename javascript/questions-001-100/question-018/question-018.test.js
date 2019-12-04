const fourSum = require('./question-018');

test('expects the unique sets of elements a, b, c in [1, 0, -1, 2, -1, -4] such that a + b + c = 0 to be [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] when their terms are sorted in ascending order', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
});
