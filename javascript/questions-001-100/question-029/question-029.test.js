const divide = require(`./question-029`);

test(`the quotient of 10 divided by 3 to be 3 (without using division, multiplication, or the mod operators)`, () => {
  expect(divide(10, 3)).toBe(3);
});

test(`the quotient of 7 divided by -3 to be -3 (without using division, multiplication, or the mod operators)`, () => {
  expect(divide(7, -3)).toBe(-2);
});

test(`the quotient of -100 divided by 25 to be -4 (without using division, multiplication, or the mod operators)`, () => {
  expect(divide(-100, 25)).toBe(-4);
});

test(`the quotient of 1 divided by 1 to be 1 (without using division, multiplication, or the mod operators)`, () => {
  expect(divide(1, 1)).toBe(1);
});
