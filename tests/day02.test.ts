import { manufacture } from '../src/solutions/day02';

test('Day 2 - test Type', () => {
	expect(Array.isArray(manufacture([], ''))).toBe(true);
});

test('Day 2 - test 1', () => {
	expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([
		'tren',
		'oso',
	]);
});

test('Day 2 - test 2', () => {
	expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle']);
});

test('Day 2 - test 3', () => {
	expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([]);
});
