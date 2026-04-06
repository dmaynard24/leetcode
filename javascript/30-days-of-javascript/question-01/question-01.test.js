const createHelloWorld = require(`./question-01`);

test(`expects the function to return 'Hello World'`, () => {
  const f = createHelloWorld();
  expect(f()).toBe('Hello World');
});

test(`expects the function to return 'Hello World' regardless of arguments passed`, () => {
  const f = createHelloWorld();
  expect(f({}, null, 42)).toBe('Hello World');
});
