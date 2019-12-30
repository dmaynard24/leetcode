const isPalindrome = require('./question-009');

test('expects that 121 is a palindrome', () => {
	expect(isPalindrome(121)).toBe(true);
});

test('expects that -121 is not a palindrome', () => {
	expect(isPalindrome(-121)).toBe(false);
});

test('expects that 10 is not a palindrome', () => {
	expect(isPalindrome(10)).toBe(false);
});
