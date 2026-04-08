const sleep = require(`./question-13`);

test(`sleeps for the specified amount of ms`, () => {
  let t = Date.now()
  const ms = 100;
  const buffer = 3; // ms buffer
  sleep(ms).then(() => {
    const sleepMs = Date.now() - t;
    expect(sleepMs).toBeGreaterThan(ms - buffer);
    expect(sleepMs).toBeLessThan(ms + buffer);
  });
});
