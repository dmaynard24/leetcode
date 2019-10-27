// Generate Parentheses

// Problem 22
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "(((())))",
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

  function getFilteredCombos(arr, pick) {
    if (!pick) {
      return [[]];
    }
    if (!arr.length) {
      return [];
    }

    let first = arr[0],
      rest = arr.slice(1);

    // filter based on well-formed parens rule
    if (first > (n - pick) * 2) {
      return [];
    }

    return getFilteredCombos(rest, pick - 1)
      .map(combo => {
        return [first].concat(combo);
      })
      .concat(getFilteredCombos(rest, pick));
  }

  let indices = [...Array(n * 2 - 1).keys()],
    openIndicesCombos = getFilteredCombos(indices, n, n);

  return openIndicesCombos.reduce((a, c) => {
    let validComboArr = Array(n * 2).fill(')');
    c.forEach(i => {
      validComboArr.splice(i, 1, '(');
    });
    return a.concat(validComboArr.join(''));
  }, []);
};

module.exports = generateParenthesis;
