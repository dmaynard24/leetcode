const nextPermutation = require('./question-031');

test('expects the next lexicographic permutation of [1, 2, 3] to be [1, 3, 2]', () => {
  expect(nextPermutation([1, 2, 3])).toStrictEqual([1, 3, 2]);
});

test('expects the next lexicographic permutation of [3, 2, 1] to be [1, 2, 3]', () => {
  expect(nextPermutation([3, 2, 1])).toStrictEqual([1, 2, 3]);
});

test('expects the next lexicographic permutation of [1, 1, 5] to be [1, 5, 1]', () => {
  expect(nextPermutation([1, 1, 5])).toStrictEqual([1, 5, 1]);
});
