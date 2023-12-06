import { maxDistance } from "../src/solutions/day06";

test("Day 6 - type", () => {
	expect(typeof maxDistance("")).toBe("number");
});

test("Day 6 - test 1", () => {
	expect(maxDistance(">>*<")).toBe(2);
});

test("Day 6 - test 2", () => {
	expect(maxDistance("<<<>")).toBe(2);
});

test("Day 6 - test 3", () => {
	expect(maxDistance(">***>")).toBe(5);
});
