const divide = require('./question-029');

test('gets the quotient of 10 divided by 3 to be 3 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(10, 3)).toBe(3);
});

test('gets the quotient of 7 divided by -3 to be -3 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(7, -3)).toBe(-2);
});

test('gets the quotient of -100 divided by 25 to be -4 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(-100, 25)).toBe(-4);
});

test('gets the quotient of 100 divided by -25 to be -4 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(100, -25)).toBe(-4);
});

test('gets the quotient of 100 divided by 26 to be 3 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(100, 26)).toBe(3);
});

test('gets the quotient of -2147483648 divided by -1 to be 2147483647 (without using division, multiplication, or the mod operators)', () => {
  expect(divide(-2147483648, -1)).toBe(2147483647);
});
