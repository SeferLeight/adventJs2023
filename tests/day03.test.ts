import { findNaughtyStep } from '../src/solutions/day03';

test('Day 3 - test Type', () => {
	expect(typeof findNaughtyStep('', '')).toBe('string');
});

test('Day 3 - test 1', () => {
	expect(findNaughtyStep('abcd', 'abcde')).toBe('e');
});

test('Day 3 - test 2', () => {
	expect(findNaughtyStep('stepfor', 'stepor')).toBe('f');
});

test('Day 3 - test 3', () => {
	expect(findNaughtyStep('abcde', 'abcde')).toBe('');
});
