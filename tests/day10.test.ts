import { createChristmasTree } from "../src/solutions/day10";

test("Day 10 - type", () => {
	expect(typeof createChristmasTree("x", 1)).toBe("string");
});

test("Day 10 - test 1", () => {
	expect(createChristmasTree("x", 2)).toBe(" x\nx x\n |\n");
});

test("Day 10 - test 2", () => {
	expect(createChristmasTree("xyz", 3)).toBe("  x\n y z\nx y z\n  |\n");
});

test("Day 10 - test 3", () => {
	expect(createChristmasTree("xyz", 4)).toBe(
		"   x\n  y z\n x y z\nx y z x\n   |\n"
	);
});
