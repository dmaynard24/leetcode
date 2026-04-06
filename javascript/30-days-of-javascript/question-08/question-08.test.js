const compose = require(`./question-08`);

test(`returns the result of the initial argument being passed through the composed functions`, () => {
  let fn = compose([x => x + 1, x => x * x, x => 2 * x]);
  expect(fn(4)).toBe(65);

  fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
  expect(fn(1)).toBe(1000);

  fn = compose([]);
  expect(fn(42)).toBe(42);
});
