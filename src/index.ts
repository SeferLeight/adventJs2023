import { findFirstRepeated } from './solutions/day01';
import { manufacture } from './solutions/day02';
import { findNaughtyStep } from './solutions/day03';

const day01Example = {
	gifts: [2, 1, 3, 5, 3, 2],
	expected: 3,
};

console.log(
	'Day 1',
	'Gifts',
	day01Example.gifts,
	'First Gift Repeated',
	findFirstRepeated(day01Example.gifts),
	'Expected',
	day01Example.expected
);

const day02Example = {
	gifts: ['tren', 'oso', 'pelota'],
	materials: 'tronesa',
	expected: ['tren', 'oso'],
};
console.log(
	'Day 2',
	'Gifts:',
	day02Example.gifts,
	'Materials:',
	day02Example.materials,
	'Gifts Manufacturable:',
	manufacture(day02Example.gifts, day02Example.materials),
	'Expected:',
	day02Example.expected
);

const day03Example = {
	original: 'abcd',
	modified: 'abcde',
	expected: 'e',
};
console.log(
	'Day 3',
	'Original:',
	day03Example.original,
	'Modified:',
	day03Example.modified,
	'Naughty Step:',
	findNaughtyStep(day03Example.original, day03Example.modified),
	'Expected:',
	day03Example.expected
);
