require(`./question-22`);

test(`returns -1 when the array is empty`, () => {
  expect([].last()).toBe(-1);
});

test(`returns the last element of a populated array`, () => {
  expect(['Dave', null, 5].last()).toBe(5);
});