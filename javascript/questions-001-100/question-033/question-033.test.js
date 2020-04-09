const { search } = require(`./question-033`);

test(`expects that the index of 3 in the array [4, 5, 6, 7, 0, 1, 2] is -1 because 3 is not present`, () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test(`expects that the index of 0 in the array [4, 5, 6, 7, 0, 1, 2] is 4`, () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test(`expects that the index of 1 in the array [1] is 0`, () => {
  expect(search([1], 1)).toBe(0);
});

test(`expects that the index of 3 in the array [3, 1] is 0`, () => {
  expect(search([3, 1], 3)).toBe(0);
});

test(`expects that the index of 3 in the array [3, 5, 1] is 0`, () => {
  expect(search([3, 5, 1], 3)).toBe(0);
});

test(`expects that the index of 1 in the array [1, 3] is 0`, () => {
  expect(search([1, 3], 1)).toBe(0);
});

test(`expects that the index of 8 in the array [4, 5, 6, 7, 8, 1, 2, 3] is 4`, () => {
  expect(search([4, 5, 6, 7, 8, 1, 2, 3], 8)).toBe(4);
});
