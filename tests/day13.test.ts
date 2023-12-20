import { calculateTime } from '../src/solutions/day13';

test('Day 13 - type', () => {
	expect(typeof calculateTime).toBe('function');
});

test('Day 13 - test 1', () => {
	expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00');
});

test('Day 13 - test 2', () => {
	expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00');
});

test('Day 13 - test 3', () => {
	expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe(
		'-05:29:00'
	);
});
