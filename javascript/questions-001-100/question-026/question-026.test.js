const removeDuplicates = require('./question-026');

test('expects that, after the duplicates are removed from the array [1, 1, 2], the resulting length wll be 2', () => {
	expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test('expects that, after the duplicates are removed from the array [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], the resulting length wll be 5', () => {
	expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
