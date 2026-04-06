const filter = require(`./question-06`);

test(`filter function returns a new array with all filtered elements`, () => {
  const greaterThan10 = (n) => n > 10;
  expect(filter([0, 10, 20, 30], greaterThan10)).toStrictEqual([20, 30]);

  const firstIndex = (n, i) => i === 0;
  expect(filter([1, 2, 3], firstIndex)).toStrictEqual([1]);

  const plusOne = (n) => n + 1;
  expect(filter([-2, -1, 0, 1, 2], plusOne)).toStrictEqual([-2, 0, 1, 2]);
});
