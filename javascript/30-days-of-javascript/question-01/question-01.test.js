const createHelloWorld = require(`./question-01`);

test(`returns 'Hello World'`, () => {
  const f = createHelloWorld();
  expect(f()).toBe('Hello World');
});

test(`returns 'Hello World' regardless of arguments passed`, () => {
  const f = createHelloWorld();
  expect(f({}, null, 42)).toBe('Hello World');
});
