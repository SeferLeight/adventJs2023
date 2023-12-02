import { findFirstRepeated } from './solutions/day01';
import { manufacture } from './solutions/day02';

const giftsDay01: number[] = [2, 1, 3, 5, 3, 2];
console.log(
	'Day 1',
	'Gifts',
	giftsDay01,
	'First Gift Repeated',
	findFirstRepeated(giftsDay01)
);

const giftsDay02 = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
console.log(
	'Day 2',
	'Gifts:',
	giftsDay02,
	'Materials:',
	materials,
	'Gifts Manufacturable:',
	manufacture(giftsDay02, materials)
);
