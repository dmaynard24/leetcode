const letterCombinations = require(`./question-017`);

test(`gets all possible letter combinations that the string "23" could represent in a phone number to be ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`, () => {
  expect(letterCombinations(`23`)).toStrictEqual([`ad`, `ae`, `af`, `bd`, `be`, `bf`, `cd`, `ce`, `cf`]);
});
