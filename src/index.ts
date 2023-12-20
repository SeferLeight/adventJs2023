import { findFirstRepeated } from './solutions/day01';
import { manufacture } from './solutions/day02';
import { findNaughtyStep } from './solutions/day03';
import { decode } from './solutions/day04';
import { cyberReindeer } from './solutions/day05';
import { maxDistance } from './solutions/day06';
import { drawGift } from './solutions/day07';
import { organizeGifts } from './solutions/day08';
import { adjustLights } from './solutions/day09';
import { createChristmasTree } from './solutions/day10';
import { getIndexsForPalindrome } from './solutions/day11';
import { checkIsValidCopy } from './solutions/day12';
import { calculateTime } from './solutions/day13';

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

const day04Example = {
	message: 'sa(u(cla)atn)s',
};
console.log(
	'Day 4',
	'Message:',
	day04Example.message,
	'Decoded:',
	decode(day04Example.message),
	'Expected:',
	'santaclaus'
);

const day05Example = {
	road: 'S..|...|..',
	time: 10,
};
console.log(
	'Day 5',
	'Road:',
	day05Example.road,
	'Time:',
	day05Example.time,
	'cyberReindeer:',
	cyberReindeer(day05Example.road, day05Example.time),
	'Expected:',
	[
		'S..|...|..',
		'.S.|...|..',
		'..S|...|..',
		'..S|...|..',
		'..S|...|..',
		'...S...*..',
		'...*S..*..',
		'...*.S.*..',
		'...*..S*..',
		'...*...S..',
	]
);

const day06Example = {
	movements: '>>*<',
};
console.log(
	'Day 6',
	'Movements:',
	day06Example.movements,
	'Max Distance:',
	maxDistance(day06Example.movements),
	'Expected:',
	2
);

const day07Example = {
	size: 3,
	symbol: '*',
};

console.log(
	'Day 7',
	'Size:',
	day07Example.size,
	'Symbol:',
	day07Example.symbol,
	'Gift:',
	drawGift(day07Example.size, day07Example.symbol),
	'Expected:',
	'***\n* *\n***\n'
);

const day08Example = {
	gifts: '77a',
};

console.log(
	'Day 8',
	'Gifts:',
	day08Example.gifts,
	'Organized Gifts:',
	organizeGifts(day08Example.gifts),
	'Expected:',
	'[a]{a}{a}(aaaaaaa)'
);

const day09Example = {
	lights: ['🔴', '🔴', '🟢', '🟢', '🔴'],
};

console.log(
	'Day 9',
	'Lights:',
	day09Example.lights,
	'Adjusted Lights:',
	adjustLights(day09Example.lights),
	'Expected:',
	2
);

const day10Example = {
	ornaments: 'xyz',
	height: 3,
};

console.log(
	'Day 10',
	'Ornaments:',
	day10Example.ornaments,
	'Height:',
	day10Example.height,
	'Christmas Tree:',
	createChristmasTree(day10Example.ornaments, day10Example.height),
	'Expected:',
	'  x\n y x\nz x y\n  |\n'
);

const day11Example = {
	word: 'abba',
};

console.log(
	'Day 11',
	'Word:',
	day11Example.word,
	'Indexs For Palindrome:',
	getIndexsForPalindrome(day11Example.word),
	'Expected:',
	[]
);

const day12Example = {
	original: 'Santa Claus is coming',
	copy: 'sa#ta cl#us is comin#',
};

console.log(
	'Day 12',
	'Original:',
	day12Example.original,
	'Copy:',
	day12Example.copy,
	'Is Valid Copy:',
	checkIsValidCopy(day12Example.original, day12Example.copy),
	'Expected:',
	true
);

const day13Example = {
	deliveries: ['00:00:00', '00:10:00', '02:00:00'],
};

console.log(
	'Day 13',
	'Deliveries:',
	day13Example.deliveries,
	'Time:',
	calculateTime(day13Example.deliveries),
	'Expected:',
	'02:10:00'
);
