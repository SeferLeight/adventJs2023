import { checkIsValidCopy } from '../src/solutions/day12';

test('Day 12 - type', () => {
	expect(typeof checkIsValidCopy).toBe('function');
});

test('Day 12 - test 1', () => {
	expect(
		checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
	).toBe(true);
});

test('Day 12 - test 2', () => {
	expect(
		checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
	).toBe(false);
});

test('Day 12 - test 3', () => {
	expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true);
});

test('Day 12 - test 4', () => {
	expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false);
});
