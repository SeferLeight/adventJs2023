import { cyberReindeer } from "../src/solutions/day05";

test("Day 5 - test Type", () => {
	expect(Array.isArray(cyberReindeer("", 1))).toBe(true);
});

test("Day 5 - test 1", () => {
	expect(cyberReindeer("S..|...|..", 10)).toEqual([
		"S..|...|..",
		".S.|...|..",
		"..S|...|..",
		"..S|...|..",
		"..S|...|..",
		"...S...*..",
		"...*S..*..",
		"...*.S.*..",
		"...*..S*..",
		"...*...S..",
	]);
});

test("Day 5 - test 2", () => {
	expect(cyberReindeer("S.|.", 4)).toEqual(["S.|.", ".S|.", ".S|.", ".S|."]);
});

test("Day 5 - test 3", () => {
	expect(cyberReindeer("S.|.|.", 7)).toEqual([
		"S.|.|.",
		".S|.|.",
		".S|.|.",
		".S|.|.",
		".S|.|.",
		"..S.*.",
		"..*S*.",
	]);
});
