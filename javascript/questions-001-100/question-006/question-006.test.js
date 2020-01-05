const convert = require('./question-006');

test('expects the string "PAYPALISHIRING" to return "PAHNAPLSIIGYIR" when run through the ZigZag convert function with 3 rows', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('expects the string "PAYPALISHIRING" to return "PINALSIGYAHRPI" when run through the ZigZag convert function with 4 rows', () => {
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});

test('expects the string "ABC" to return "ACB" when run through the ZigZag convert function with 2 rows', () => {
  expect(convert('ABC', 2)).toBe('ACB');
});
