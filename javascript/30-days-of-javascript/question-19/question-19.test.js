const promiseAll = require(`./question-19`);

test(`returns the results of all promises in the order in which they were passed`, () => {
  const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
  ];

  promiseAll(functions).then(res => {
    expect(res[0]).toBe(4);
    expect(res[1]).toBe(10);
    expect(res[2]).toBe(16);
  });
});

test(`catches any errors immediately`, () => {
  const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
  ];

  promiseAll(functions)
    .catch(err => {
      expect(err).toBe('Error');
    });
});