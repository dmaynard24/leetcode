const createCounter = require(`./question-04`);

test(`increment, decrement, and reset functions return the updated count correctly`, () => {
  const counter = createCounter(5);
  expect(counter.increment()).toBe(6);
  expect(counter.reset()).toBe(5);
  expect(counter.decrement()).toBe(4);

  const newCounter = createCounter(0);
  expect(newCounter.increment()).toBe(1);
  expect(newCounter.increment()).toBe(2);
  expect(newCounter.decrement()).toBe(1);
  expect(newCounter.reset()).toBe(0);
  expect(newCounter.reset()).toBe(0);
});
