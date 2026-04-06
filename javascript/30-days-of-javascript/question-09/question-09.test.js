const argumentsLength = require(`./question-09`);

test(`returns the number of arguments`, () => {
  expect(argumentsLength(5)).toBe(1);
  expect(argumentsLength({}, null, '3')).toBe(3);
});
