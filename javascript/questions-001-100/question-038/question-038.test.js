const { countAndSay } = require(`./question-038`);

test(`the 1st term of the count and say sequence is '1'`, () => {
  expect(countAndSay(1)).toBe(`1`);
});

test(`the 2nd term of the count and say sequence is '11'`, () => {
  expect(countAndSay(2)).toBe(`11`);
});

test(`the 3rd term of the count and say sequence is '21'`, () => {
  expect(countAndSay(3)).toBe(`21`);
});

test(`the 4th term of the count and say sequence is '1211'`, () => {
  expect(countAndSay(4)).toBe(`1211`);
});

test(`the 5th term of the count and say sequence is '111221'`, () => {
  expect(countAndSay(5)).toBe(`111221`);
});
