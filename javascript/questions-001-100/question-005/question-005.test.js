const longestPalindrome = require('./question-005');

test('gets the longest palindrome substring in the string "babad" to be "bab"', () => {
  expect(longestPalindrome('babad')).toBe('bab');
});

test('gets the longest palindrome substring in the string "cbbd" to be "bb"', () => {
  expect(longestPalindrome('cbbd')).toBe('bb');
});

test('gets the longest palindrome substring in the string "aaaa" to be "aaaa"', () => {
  expect(longestPalindrome('aaaa')).toBe('aaaa');
});
