const createCounter = require(`./question-02`);

test(`expects the function to return the initial count when first called, then the count incremented by 1 on all subsequent calls`, () => {
  const counter = createCounter(10);
  expect(counter()).toBe(10);
  expect(counter()).toBe(11);
  expect(counter()).toBe(12);
  const newCounter = createCounter(-2);
  expect(newCounter()).toBe(-2);
  expect(newCounter()).toBe(-1);
  expect(newCounter()).toBe(0);
  expect(newCounter()).toBe(1);
  expect(newCounter()).toBe(2);
});
