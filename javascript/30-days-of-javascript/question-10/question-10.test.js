const once = require(`./question-10`);

test(`returns the result of the function on the first call, then undefined for all subsequent calls`, () => {
  let fn = (a, b, c) => a + b + c;
  let onceFn = once(fn);
  expect(onceFn(1, 2, 3)).toBe(6);
  expect(onceFn(2, 3, 6)).toBe(undefined);

  fn = (a, b, c) => a * b * c;
  onceFn = once(fn);
  expect(onceFn(5, 7, 4)).toBe(140);
  expect(onceFn(2, 3, 6)).toBe(undefined);
  expect(onceFn(4, 6, 8)).toBe(undefined);
});
