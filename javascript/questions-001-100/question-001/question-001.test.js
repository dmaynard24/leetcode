const twoSum = require('./question-001');

test('expects the first two indices of numbers in [2, 7, 11, 15] that add up to 9 to be [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('expects the first two indices of numbers in [2, 7, 11, 15] that add up to 13 to be [0, 2]', () => {
  expect(twoSum([2, 7, 11, 15], 13)).toStrictEqual([0, 2]);
});
