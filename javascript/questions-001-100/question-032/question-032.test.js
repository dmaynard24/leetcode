const longestValidParentheses = require('./question-032');

test('expects the length of the longest valid (well-formed) parentheses substring of "(()" to be 2', () => {
	expect(longestValidParentheses('(()')).toBe(2);
});

test('expects the length of the longest valid (well-formed) parentheses substring of ")()())()()(" to be 4', () => {
	expect(longestValidParentheses(')()())()()(')).toBe(4);
});

test('expects the length of the longest valid (well-formed) parentheses substring of ")()())" to be 4', () => {
	expect(longestValidParentheses(')()())')).toBe(4);
});

test('expects the length of the longest valid (well-formed) parentheses substring of "))())((())))" to be 6', () => {
	expect(longestValidParentheses('))())((())))')).toBe(6);
});

test('expects the length of the longest valid (well-formed) parentheses substring of "))())()()())" to be 6', () => {
	expect(longestValidParentheses('))())()()())')).toBe(6);
});

test('expects the length of the longest valid (well-formed) parentheses substring of "()()(()" to be 4', () => {
	expect(longestValidParentheses('()()(()')).toBe(4);
});

test('expects the length of the longest valid (well-formed) parentheses substring of "(()(((()" to be 2', () => {
	expect(longestValidParentheses('(()(((()')).toBe(2);
});

test('expects the length of the longest valid (well-formed) parentheses substring of "(()()" to be 4', () => {
	expect(longestValidParentheses('(()()')).toBe(4);
});

test('expects the length of the longest valid (well-formed) parentheses substring of ")(((((()())()()))()(()))(" to be 22', () => {
	expect(longestValidParentheses(')(((((()())()()))()(()))(')).toBe(22);
});
