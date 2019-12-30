const romanToInt = require('./question-013');

test('gets the integer equivalent of the roman numeral III to be 3', () => {
	expect(romanToInt('III')).toBe(3);
});

test('gets the integer equivalent of the roman numeral IV to be 4', () => {
	expect(romanToInt('IV')).toBe(4);
});

test('gets the integer equivalent of the roman numeral IX to be 9', () => {
	expect(romanToInt('IX')).toBe(9);
});

test('gets the integer equivalent of the roman numeral LVIII to be 58', () => {
	expect(romanToInt('LVIII')).toBe(58);
});

test('gets the integer equivalent of the roman numeral MCMXCIV to be 1994', () => {
	expect(romanToInt('MCMXCIV')).toBe(1994);
});
