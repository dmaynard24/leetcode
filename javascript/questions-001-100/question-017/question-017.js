// Letter Combinations of a Phone Number

// Problem 17
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  const phoneNumberLetters = {
    2: [`a`, `b`, `c`],
    3: [`d`, `e`, `f`],
    4: [`g`, `h`, `i`],
    5: [`j`, `k`, `l`],
    6: [`m`, `n`, `o`],
    7: [`p`, `q`, `r`, `s`],
    8: [`t`, `u`, `v`],
    9: [`w`, `x`, `y`, `z`],
  };

  const digitsArr = digits.split(``);

  const getCombos = function(index, combo) {
    let combos = [];

    if (index === digitsArr.length) {
      combos = combos.concat(combo);
    } else {
      const digitLetters = phoneNumberLetters[digitsArr[index]];

      for (let i = 0; i < digitLetters.length; i++) {
        const newCombo = combo + digitLetters[i];
        combos = combos.concat(getCombos(index + 1, newCombo));
      }
    }

    return combos;
  };

  return getCombos(0, ``);
};

module.exports = letterCombinations;
