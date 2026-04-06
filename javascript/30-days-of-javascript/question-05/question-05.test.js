const map = require(`./question-05`);

test(`map function returns a new array with a transformation applied to each element`, () => {
  const plusOne = (n) => n + 1;
  expect(map([1, 2, 3], plusOne)).toStrictEqual([2, 3, 4]);

  const plusI = (n, i) => n + i;
  expect(map([1, 2, 3], plusI)).toStrictEqual([1, 3, 5]);

  const constant = () => 42;
  expect(map([10, 20, 30], constant)).toStrictEqual([42, 42, 42]);
});
