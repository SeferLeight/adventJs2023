import { adjustLights } from "../src/solutions/day09";

test("Day 9 - type", () => {
	expect(typeof adjustLights([""])).toBe("number");
});

test("Day 9 - test 1", () => {
	expect(adjustLights(["🔴", "🟢", "🔴", "🟢", "🔴", "🟢"])).toBe(0);
});

test("Day 9 - test 2", () => {
	expect(adjustLights(["🔴", "🔴", "🔴", "🟢", "🔴", "🟢"])).toBe(1);
});

test("Day 9 - test 3", () => {
	expect(adjustLights(["🔴", "🔴", "🔴", "🔴", "🔴", "🟢"])).toBe(2);
});

test("Day 9 - test 4", () => {
	expect(adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴"])).toBe(2);
});
