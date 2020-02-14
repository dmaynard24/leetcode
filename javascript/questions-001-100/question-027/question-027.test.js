const removeElement = require(`./question-027`);

test(`expects that the length of [3, 2, 2, 3] will be 2 after all instances of 3 are removed in place`, () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test(`expects that the length of [0, 1, 2, 2, 3, 0, 4, 2] will be 5 after all instances of 2 are removed in place`, () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
