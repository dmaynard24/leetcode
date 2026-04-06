const reduce = require(`./question-07`);

test(`reduce function returns the final element after the reducer has been applied to each element of the array`, () => {
  const sum = (a, c) => a + c;
  expect(reduce([1, 2, 3, 4], sum, 0)).toBe(10);

  const sumTwo = (a, c) => a + c * c;
  expect(reduce([1, 2, 3, 4], sumTwo, 100)).toBe(130);

  const sumThree = () => 0;
  expect(reduce([], sumThree, 25)).toBe(25);
});
