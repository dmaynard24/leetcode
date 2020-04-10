const { searchRange } = require(`./question-034`);

test(`the first and last index of 8 in the array [5, 7, 7, 8, 8, 10] is [3, 4]`, () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
});

test(`the first and last index of 6 in the array [5, 7, 7, 8, 8, 10] is [-1, -1] to be [-1, -1] because 6 is not present`, () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
});
