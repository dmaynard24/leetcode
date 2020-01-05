const reverse = require('./question-007');

test('gets the reverse value of 123 to be 321', () => {
  expect(reverse(123)).toBe(321);
});

test('gets the reverse value of -123 to be -321', () => {
  expect(reverse(-123)).toBe(-321);
});

test('gets the reverse value of 120 to be 21', () => {
  expect(reverse(120)).toBe(21);
});
