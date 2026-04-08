const debounce = require(`./question-18`);

test(`returns a debounced version of a given function that will be cancelled if called again within the delay period`, () => {
  const log = jest.fn();

  const debouncedLog = debounce(log, 100);
  debouncedLog('Hello');
  debouncedLog('Hello');
  debouncedLog('Hello');

  expect(log).toHaveBeenCalledTimes(0);

  setTimeout(() => {
    expect(log).toHaveBeenCalledTimes(1);
  }, 100);
});
