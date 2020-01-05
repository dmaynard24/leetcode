const myAtoi = require('./question-008');

test('expects "42" to be 42 when converted to a 32-bit integer', () => {
  expect(myAtoi('42')).toBe(42);
});

test('expects "   -42" to be -42 when converted to a 32-bit integer', () => {
  expect(myAtoi('   -42')).toBe(-42);
});

test('expects "4193 with words" to be 4193 when converted to a 32-bit integer', () => {
  expect(myAtoi('4193 with words')).toBe(4193);
});

test('expects "words and 987" to be 0 when converted to a 32-bit integer', () => {
  expect(myAtoi('words and 987')).toBe(0);
});

test('expects "-91283472332" to be -2147483648 when converted to a 32-bit integer', () => {
  expect(myAtoi('-91283472332')).toBe(-2147483648);
});

test('expects "-13+8" to be -13 when converted to a 32-bit integer', () => {
  expect(myAtoi('-13+8')).toBe(-13);
});
