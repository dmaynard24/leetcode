const isValid = require(`./question-020`);

test(`"()" is a valid string`, () => {
  expect(isValid(`()`)).toBe(true);
});

test(`"()[]{}" is a valid string`, () => {
  expect(isValid(`()[]{}`)).toBe(true);
});

test(`"(]" is not a valid string`, () => {
  expect(isValid(`(]`)).toBe(false);
});

test(`"([)]" is not a valid string`, () => {
  expect(isValid(`([)]`)).toBe(false);
});

test(`"{[]}" is a valid string`, () => {
  expect(isValid(`{[]}`)).toBe(true);
});
