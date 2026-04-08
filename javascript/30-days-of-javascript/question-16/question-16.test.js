const timeLimit = require(`./question-16`);

test(`sets the time limit on a function correctly`, () => {
  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
  limited(150).catch((err) => {
    expect(err).toBe('Time Limit Exceeded');
  });
});
