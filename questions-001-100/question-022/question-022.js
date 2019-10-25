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

// 0 1 2
// 0 1 3
// 0 1 4
// 0 2 3
// 0 2 4

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n == 1) {
    return ['()'];
  }

  let validCombos = [];

  let lastValidCombo = '';
  for (let i = 0; i < n; i++) {
    lastValidCombo += '()';
  }

  let openIndices = [...Array(n).keys()],
    indexToChange = 2,
    offset = 1,
    validCombo = '';
  while (validCombo != lastValidCombo) {
    let validComboArr = Array(n * 2).fill(')');
    openIndices.forEach(index => {
      validComboArr.splice(index, 1, '(');
    });
    validCombo = validComboArr.join('');
    validCombos.push(validCombo);

    // remove the indexToChange variable, just loop down
    let openIndexVal = openIndices[indexToChange];
    if (openIndexVal < indexToChange + n - 1) {
      openIndices.splice(indexToChange, 1, openIndexVal + 1);
    } else {
      openIndices = [0].concat(
        [...Array(n).keys()].slice(1).map(val => {
          return val + offset;
        })
      );
      offset++;
    }

    console.log(openIndices);
    validCombo = '()()()';
  }

  return validCombos;
};

console.log(generateParenthesis(3));

module.exports = generateParenthesis;
