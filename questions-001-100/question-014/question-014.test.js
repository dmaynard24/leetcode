const longestCommonPrefix = require('./question-014');

test('gets the longest common prefix of strings ["flower", "flow", "flight"] to be "fl"', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
});

test('gets the longest common prefix of strings ["dog", "racecar", "car"] to be ""', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
});

test('gets the longest common prefix of strings [] to be ""', () => {
  expect(longestCommonPrefix([])).toBe('');
});
