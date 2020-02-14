const isValid = require(`./question-020`);

test(`expects that "()" is a valid string`, () => {
  expect(isValid(`()`)).toBe(true);
});

test(`expects that "()[]{}" is a valid string`, () => {
  expect(isValid(`()[]{}`)).toBe(true);
});

test(`expects that "(]" is not a valid string`, () => {
  expect(isValid(`(]`)).toBe(false);
});

test(`expects that "([)]" is not a valid string`, () => {
  expect(isValid(`([)]`)).toBe(false);
});

test(`expects that "{[]}" is a valid string`, () => {
  expect(isValid(`{[]}`)).toBe(true);
});
