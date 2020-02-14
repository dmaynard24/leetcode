const nextPermutation = require(`./question-031`);

test(`expects the next lexicographic permutation of [1, 2, 3] to be [1, 3, 2]`, () => {
  expect(nextPermutation([1, 2, 3])).toStrictEqual([1, 3, 2]);
});

test(`expects the next lexicographic permutation of [3, 2, 1] to be [1, 2, 3]`, () => {
  expect(nextPermutation([3, 2, 1])).toStrictEqual([1, 2, 3]);
});

test(`expects the next lexicographic permutation of [1, 2] to be [2, 1]`, () => {
  expect(nextPermutation([1, 2])).toStrictEqual([2, 1]);
});

test(`expects the next lexicographic permutation of [1, 3, 2] to be [2, 1, 3]`, () => {
  expect(nextPermutation([1, 3, 2])).toStrictEqual([2, 1, 3]);
});

test(`expects the next lexicographic permutation of [5, 4, 7, 5, 3, 2] to be [5, 5, 2, 3, 4, 7]`, () => {
  expect(nextPermutation([5, 4, 7, 5, 3, 2])).toStrictEqual([5, 5, 2, 3, 4, 7]);
});

test(`expects the next lexicographic permutation of [2, 3, 1] to be [3, 1, 2]`, () => {
  expect(nextPermutation([2, 3, 1])).toStrictEqual([3, 1, 2]);
});

test(`expects the next lexicographic permutation of [1, 4, 3, 2, 2] to be [2, 1, 2, 3, 4]`, () => {
  expect(nextPermutation([1, 4, 3, 2, 2])).toStrictEqual([2, 1, 2, 3, 4]);
});
