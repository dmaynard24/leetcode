const intToRoman = require(`./question-012`);

test(`gets the roman numeral equivalent of 3 to be III`, () => {
  expect(intToRoman(3)).toBe(`III`);
});

test(`gets the roman numeral equivalent of 4 to be IV`, () => {
  expect(intToRoman(4)).toBe(`IV`);
});

test(`gets the roman numeral equivalent of 9 to be IX`, () => {
  expect(intToRoman(9)).toBe(`IX`);
});

test(`gets the roman numeral equivalent of 58 to be LVIII`, () => {
  expect(intToRoman(58)).toBe(`LVIII`);
});

test(`gets the roman numeral equivalent of 1994 to be MCMXCIV`, () => {
  expect(intToRoman(1994)).toBe(`MCMXCIV`);
});
