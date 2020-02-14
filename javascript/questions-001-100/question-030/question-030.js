// Substring with Concatenation of All Words

// Problem 30
// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// Example 1:
// Input:
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.

// Example 2:
// Input:
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// Output: []

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  if (s.length < 1 || words.length < 1) {
    return [];
  }

  const originalWordCounts = words.reduce((a, c) => {
    if (!a.has(c)) {
      a.set(c, 1);
    } else {
      a.set(c, a.get(c) + 1);
    }
    return a;
  }, new Map());
  let wordCounts;
  const wordLength = words[0].length;
  const matchLength = wordLength * words.length;
  const matches = [];

  const isMatch = function(start, totalLength) {
    if (totalLength === matchLength) {
      return true;
    }

    const word = s.substr(start, wordLength);
    if (wordCounts.has(word)) {
      const remainingWordCount = wordCounts.get(word);
      if (remainingWordCount > 0) {
        wordCounts.set(word, remainingWordCount - 1);
        const newTotalLength = totalLength + wordLength;
        return isMatch(start + wordLength, newTotalLength);
      }
    }

    return false;
  };

  for (let i = 0; i < s.length - matchLength + 1; i++) {
    const firstWord = s.substr(i, wordLength);
    if (originalWordCounts.has(firstWord)) {
      // reset used indices
      wordCounts = new Map(originalWordCounts);
      // test again
      if (isMatch(i, 0)) {
        matches.push(i);
      }
    }
  }

  return matches;
};

module.exports = findSubstring;
