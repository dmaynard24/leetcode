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
  let validCombos = [];

  let lastValidCombo = '';
  for (let i = 0; i < n; i++) {
    lastValidCombo += '()';
  }

  let openIndices = [...Array(n).keys()],
    offset = 1,
    validCombo = '';
  while (validCombo != lastValidCombo) {
    let validComboArr = Array(n * 2).fill(')');
    openIndices.forEach(index => {
      validComboArr.splice(index, 1, '(');
    });
    validCombo = validComboArr.join('');
    validCombos.push(validCombo);

    if (validCombo == lastValidCombo) {
      break;
    }

    for (let i = openIndices.length - 1; i > 0; i--) {
      let openIndexVal = openIndices[i];
      if (openIndexVal < i * 2) {
        openIndices.splice(i, 1, openIndexVal + 1);
        break;
      } else if (openIndexVal == i * 2) {
        // close but still need to refactor 'reset' logic. (don't increase all values starting from index 1)
        openIndices = [0].concat(
          [...Array(n).keys()].slice(1).map((val, index) => {
            val = Math.min(val + offset, (index + 1) * 2);
            return val;
          })
        );
        offset++;
        break;
      }
    }
  }

  return validCombos;
};

console.log(generateParenthesis(4));

module.exports = generateParenthesis;
