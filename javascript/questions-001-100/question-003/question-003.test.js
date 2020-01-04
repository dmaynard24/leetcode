const lengthOfLongestSubstring = require('./question-003');

test('gets the length of the longest substring without repeating characters in "abcabcbb" to be 3', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('gets the length of the longest substring without repeating characters in "bbbbb" to be 1', () => {
	expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('gets the length of the longest substring without repeating characters in "dvdf" to be 3', () => {
	expect(lengthOfLongestSubstring('dvdf')).toBe(3);
});

test('gets the length of the longest substring without repeating characters in "pwwkew" to be 3', () => {
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
