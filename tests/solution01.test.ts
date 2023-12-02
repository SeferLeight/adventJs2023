import { findFirstRepeated } from '../src/solutions/solution01'; // Add the import statement

test('Day 1 - test 1', () => {
	expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
});

test('Day 1 - test 2', () => {
	expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1);
});

test('Day 1 - test 3', () => {
	expect(findFirstRepeated([5, 1, 5, 1])).toBe(5);
});

test('Day 1 - type', () => {
	expect(typeof findFirstRepeated([])).toBe('number');
});
