const threeSum = require('./question-015');

test('expects the unique sets of elements a, b, c in [-1, 0, 1, 2, -1, -4] such that a + b + c = 0 to be [[-1, 0, 1], [-1, -1, 2]] when their terms are sorted in ascending order', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, 0, 1], [-1, -1, 2]]);
});
