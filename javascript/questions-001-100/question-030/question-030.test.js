const findSubstring = require('./question-030');

test('gets all starting indices of concatenated combos of ["foo", "bar"] in the string "barfoothefoobarman" to be [0, 9]', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toStrictEqual([0, 9]);
});

test('gets all starting indices of concatenated combos of ["word", "good", "best", "word"] in the string "wordgoodgoodgoodbestword" to be []', () => {
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toStrictEqual([]);
});

test('gets all starting indices of concatenated combos of ["fooo", "barr", "wing", "ding", "wing"] in the string "lingmindraboofooowingdingbarrwingmonkeypoundcake" to be [13]', () => {
  expect(findSubstring('lingmindraboofooowingdingbarrwingmonkeypoundcake', ['fooo', 'barr', 'wing', 'ding', 'wing'])).toStrictEqual([13]);
});

test('gets all starting indices of concatenated combos of ["a"] in the string "a" to be [0]', () => {
  expect(findSubstring('a', ['a'])).toStrictEqual([0]);
});

test('gets all starting indices of concatenated combos of ["bar", "foo", "the"] in the string "barfoofoobarthefoobarman" to be [6, 9, 12]', () => {
  expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toStrictEqual([6, 9, 12]);
});
