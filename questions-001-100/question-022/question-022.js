// Generate Parentheses

// Problem 22
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n == 1) {
    return ['()'];
  }

  let validCombos = [];

  let firstStr = '';
  for (let i = 0; i < n; i++) {
    firstStr = '(' + firstStr;
    firstStr += ')';
  }
  validCombos.push(firstStr);

  startStr = firstStr.slice(0, n - 1) + ')(' + firstStr.slice(n + 1);
  validCombos.push(startStr);

  let nextStr = startStr,
    prevStr = startStr;
  for (let offset = 1; offset < n - 1; offset++) {
    nextStr = nextStr.slice(0, n - 1 + offset) + ')(' + nextStr.slice(n + 1 + offset);
    prevStr = prevStr.slice(0, n - 1 - offset) + ')(' + prevStr.slice(n + 1 - offset);
    validCombos.push(nextStr);
    validCombos.push(prevStr);
  }

  if (n % 2 == 1) {
    let endStr = '';
    for (let i = 0; i < n; i++) {
      endStr += '()';
    }
    validCombos.push(endStr);
  }

  return validCombos;
};

console.log(generateParenthesis(4));

module.exports = generateParenthesis;
