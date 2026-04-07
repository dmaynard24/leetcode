const memoize = require(`./question-11`);

test(`returns the result of the function on the first call and then the memoized result on subsequent calls`, () => {
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
  expect(memoizedFn(2, 3)).toBe(5); // 5
  expect(memoizedFn(2, 3)).toBe(5); // 5
  expect(callCount).toBe(1);
});
