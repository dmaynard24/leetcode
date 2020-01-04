const strStr = require('./question-028');

test('gets the first index of the needle "ll" in the haystack "hello" to be 2', () => {
	expect(strStr('hello', 'll')).toBe(2);
});

test('gets the first index of the needle "bba" in the haystack "aaaaa" to be -1 since the needle is not in the haystack', () => {
	expect(strStr('aaaaa', 'bba')).toBe(-1);
});

test('gets the first index of the needle "a" in the haystack "a" to be 0', () => {
	expect(strStr('a', 'a')).toBe(0);
});
