const myExpect = require(`./question-03`);

describe('toBe', () => {
  test(`returns true when the values passed are equal`, () => {
    expect(myExpect(5).toBe(5)).toBe(true);
  });
  test(`throws an error when the values passed are not equal`, () => {
    expect(() => myExpect(5).toBe(null)).toThrow('Not Equal');
  });
});

describe('notToBe', () => {
  test(`returns true when the values passed are not equal`, () => {
    expect(myExpect(5).notToBe(null)).toBe(true);
  });
  test(`throws an error when the values passed are equal`, () => {
    expect(() => myExpect(5).notToBe(5)).toThrow('Equal');
  });
});
