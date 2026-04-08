const TimeLimitedCache = require(`./question-17`);

test(`handles get, set, and count correctly with time limits`, () => {
  const timeLimitedCache = new TimeLimitedCache()
  expect(timeLimitedCache.set(1, 42, 100)).toBe(false);
  expect(timeLimitedCache.get(1)).toBe(42);
  expect(timeLimitedCache.count()).toBe(1);

  setTimeout(() => {
    expect(timeLimitedCache.get(1)).toBe(-1);
    expect(timeLimitedCache.count()).toBe(0);
  }, 110);
});
