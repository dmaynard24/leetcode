const isEmpty = require(`./question-20`);

test(`returns true for empty objects or arrays`, () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
});

test(`returns false for populated objects or arrays`, () => {
  expect(isEmpty({ 'name': 'Dave' })).toBe(false);
  expect(isEmpty([1, null, {}])).toBe(false);
});