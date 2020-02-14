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
const generateParenthesis = function(n) {
  if (n === 1) {
    return [`()`];
  }

  const getFilteredCombos = function(arr, pick) {
    if (!pick) {
      return [[]];
    }
    if (!arr.length) {
      return [];
    }

    const first = arr[0];
    const rest = arr.slice(1);

    // filter based on well-formed parens rule
    if (first > (n - pick) * 2) {
      return [];
    }

    return getFilteredCombos(rest, pick - 1)
      .map((combo) => [first].concat(combo))
      .concat(getFilteredCombos(rest, pick));
  };

  const indices = [...Array(n * 2 - 1).keys()];
  const openIndicesCombos = getFilteredCombos(indices, n);

  return openIndicesCombos.reduce((a, c) => {
    const validComboArr = Array(n * 2).fill(`)`);
    c.forEach((i) => {
      validComboArr.splice(i, 1, `(`);
    });
    return a.concat(validComboArr.join(``));
  }, []);
};

module.exports = generateParenthesis;
