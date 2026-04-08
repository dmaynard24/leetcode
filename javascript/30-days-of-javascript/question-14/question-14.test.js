const cancellable = require(`./question-14`);

test(`prevents a function from executing if called before the delay time is up`, () => {
  const result = [];

  const fn = (x) => x * 5;
  const args = [2], t = 20, cancelTimeMs = 50;

  const start = performance.now();

  const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ 'time': diff, 'returned': fn(...argsArr) });
  }

  const cancel = cancellable(log, args, t);

  const maxT = Math.max(t, cancelTimeMs);

  setTimeout(cancel, cancelTimeMs);

  const ms = 20;
  const buffer = 3; // ms buffer
  setTimeout(() => {
    const [{ time, returned }] = result;
    expect(time).toBeGreaterThan(ms - buffer);
    expect(time).toBeLessThan(ms + buffer);
    expect(returned).toBe(10);
  }, maxT + 15)
});
