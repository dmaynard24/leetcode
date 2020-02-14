const generateParenthesis = require(`./question-022`);

test(`given 2 pairs of parentheses, expect all combos of valid parentheses to be ["(())", "()()"]`, () => {
  expect(generateParenthesis(2)).toStrictEqual([`(())`, `()()`]);
});

test(`given 3 pairs of parentheses, expect all combos of valid parentheses to be ["((()))", "(()())", "(())()", "()(())", "()()()"]`, () => {
  expect(generateParenthesis(3)).toStrictEqual([`((()))`, `(()())`, `(())()`, `()(())`, `()()()`]);
});
