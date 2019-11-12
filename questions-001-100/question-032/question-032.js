/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let openStackLen = 0,
    potentialLen = 0,
    longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      openStackLen++;
    } else {
      if (openStackLen > 0) {
        potentialLen += 2;
      }
      openStackLen--;

      if (openStackLen == 0) {
        longest = Math.max(potentialLen, longest);
      } else if (openStackLen < 0) {
        potentialLen = 0;
        openStackLen = 0;
      }
    }
  }

  if (openStackLen == 0) {
    return Math.max(potentialLen, longest);
  }

  return longest;
};

console.log(longestValidParentheses(')()())()()('));
