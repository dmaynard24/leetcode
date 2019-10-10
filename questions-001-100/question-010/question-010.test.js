const isMatch = require('./question-010');

test('expects that the regex pattern "a" does not match the string "aa"', () => {
  expect(isMatch('aa', 'a')).toBe(false);
});

test('expects that the regex pattern "a*" matches the string "aa"', () => {
  expect(isMatch('aa', 'a*')).toBe(true);
});

test('expects that the regex pattern ".*" matches the string "ab"', () => {
  expect(isMatch('ab', '.*')).toBe(true);
});

test('expects that the regex pattern "c*a*b" matches the string "aab"', () => {
  expect(isMatch('aab', 'c*a*b')).toBe(true);
});

test('expects that the regex pattern "mis*is*p*." does not match the string "mississippi"', () => {
  expect(isMatch('mississippi', 'a')).toBe(false);
});
