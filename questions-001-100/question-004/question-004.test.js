const findMedianSortedArrays = require('./question-004');

test('gets the median of two sorted arrays [1, 3] and [2] to be 2', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test('gets the median of two sorted arrays [1, 2] and [3, 4] to be 2.5', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

test('gets the median of two sorted arrays [1, 3, 8, 9, 15] and [7, 11, 18, 19, 21, 25] to be 11', () => {
  expect(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25])).toBe(11);
});
