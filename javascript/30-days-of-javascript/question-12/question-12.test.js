const addTwoPromises = require(`./question-12`);

test(`returns the sum of the results of both promises`, () => {
  addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(res => expect(res).toBe(4));
  addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    new Promise((resolve) => setTimeout(() => resolve(5), 60)),
  ).then(res => expect(res).toBe(7));
});
