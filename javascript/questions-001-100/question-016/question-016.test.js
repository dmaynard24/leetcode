const threeSumClosest = require('./question-016');

test('gets the sum of the three integers in the set [-1, 2, 1, -4] that is closest to the 1 to be 2', () => {
	expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});
