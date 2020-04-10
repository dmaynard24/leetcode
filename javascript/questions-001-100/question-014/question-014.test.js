const longestCommonPrefix = require(`./question-014`);

test(`the longest common prefix of strings ["flower", "flow", "flight"] to be "fl"`, () => {
  expect(longestCommonPrefix([`flower`, `flow`, `flight`])).toBe(`fl`);
});

test(`the longest common prefix of strings ["dog", "racecar", "car"] to be ""`, () => {
  expect(longestCommonPrefix([`dog`, `racecar`, `car`])).toBe(``);
});

test(`the longest common prefix of strings [] to be ""`, () => {
  expect(longestCommonPrefix([])).toBe(``);
});

test(`the longest common prefix of strings "" to be ""`, () => {
  expect(longestCommonPrefix(``)).toBe(``);
});
