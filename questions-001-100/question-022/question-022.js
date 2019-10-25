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

  let arrLength = n * 2 - 2,
    pick = arrLength / 2;
  let openIndices = getCombos([...Array(arrLength).keys()], pick);

  for (let i = 0; i < openIndices.length; i++) {
    let validCombo = '(';

    let validComboArr = Array(arrLength).fill(')');
    openIndices[i].forEach(openIndex => {
      validComboArr.splice(openIndex, 1, '(');
    });
    validCombo += validComboArr.join('');

    validCombo += ')';
    console.log(validCombo, openIndices[i]);
    validCombos.push(validCombo);

    if (validCombo == lastValidCombo) {
      break;
    }
  }

  // validCombos.forEach(combo => console.log(combo));
  return validCombos;
};

function getCombos(arr, pick) {
  if (!pick) {
    return [[]];
  }
  if (!arr.length) {
    return [];
  }

  let first = arr[0],
    rest = arr.slice(1);

  return getCombos(rest, pick - 1)
    .map(combo => {
      return [first].concat(combo);
    })
    .concat(getCombos(rest, pick));
}

console.log(generateParenthesis(3));

module.exports = generateParenthesis;
