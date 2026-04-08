const cancellable = require(`./question-15`);

test(`calls a function immediately and then on an interval until a cancel function is called`, () => {
  const result = [];

  const fn = (x) => x * 2;
  const args = [4], t = 35, cancelTimeMs = 190;

  const start = performance.now();

  const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
  }

  const cancel = cancellable(log, args, t);

  setTimeout(cancel, cancelTimeMs);

  const ms = t;
  const buffer = 7; // ms buffer
  setTimeout(() => {
    for (let i = 0; i < result.length; i++) {
      const { time, returned } = result[i];
      expect(time).toBeGreaterThan((ms * i) - buffer);
      expect(time).toBeLessThan((ms * i) + buffer);
      expect(returned).toBe(8);
    }
  }, cancelTimeMs + t + 15);
});
