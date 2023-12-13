import { getIndexsForPalindrome } from '../src/solutions/day11';

test('Day 11 - type', () => {
	expect(typeof getIndexsForPalindrome).toBe('function');
});

test('Day 11 - test 1', () => {
	expect(getIndexsForPalindrome('abba')).toEqual([]);
});

test('Day 11 - test 2', () => {
	expect(getIndexsForPalindrome('abca')).toEqual(null);
});

test('Day 11 - test 3', () => {
	expect(getIndexsForPalindrome('abab')).toEqual([0, 1]);
});

test('Day 11 - test 4', () => {
	expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3]);
});
