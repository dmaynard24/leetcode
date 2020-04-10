const isMatch = require(`./question-010`);

test(`the regex pattern "a" does not match the entire string "aa"`, () => {
  expect(isMatch(`aa`, `a`)).toBe(false);
});

test(`the regex pattern "a*" matches the entire string "aa"`, () => {
  expect(isMatch(`aa`, `a*`)).toBe(true);
});

test(`the regex pattern ".*" matches the entire string "ab"`, () => {
  expect(isMatch(`ab`, `.*`)).toBe(true);
});

test(`the regex pattern "c*a*b" matches the entire string "aab"`, () => {
  expect(isMatch(`aab`, `c*a*b`)).toBe(true);
});

test(`the regex pattern "mis*is*p*." does not match th entiree string "mississippi"`, () => {
  expect(isMatch(`mississippi`, `a`)).toBe(false);
});
