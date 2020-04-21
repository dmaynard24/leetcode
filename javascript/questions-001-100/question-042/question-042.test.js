const { trap } = require(`./question-042`);

test(`the amount of water that can be trapped in a 1-D elevation map of [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] is 6`, () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [0, 1, 0, 2] is 1`, () => {
  expect(trap([0, 1, 0, 2])).toBe(1);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [2, 0, 2] is 2`, () => {
  expect(trap([2, 0, 2])).toBe(2);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [4, 2, 3] is 1`, () => {
  expect(trap([4, 2, 3])).toBe(1);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [5, 4, 1, 2] is 1`, () => {
  expect(trap([5, 4, 1, 2])).toBe(1);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [2, 1, 0, 2] is 3`, () => {
  expect(trap([2, 1, 0, 2])).toBe(3);
});

test(`the amount of water that can be trapped in a 1-D elevation map of [5, 2, 1, 2, 1, 5] is 14`, () => {
  expect(trap([5, 2, 1, 2, 1, 5])).toBe(14);
});
