import { organizeGifts } from "../src/solutions/day08";

test("Day 8 - type", () => {
	expect(typeof organizeGifts("")).toBe("string");
});

test("Day 8 - test 1", () => {
	expect(organizeGifts("76a11b")).toBe("[a]{a}{a}(aaaaaa){b}(b)");
});

test("Day 8 - test 2", () => {
	expect(organizeGifts("20a")).toBe("{a}{a}");
});

test("Day 8 - test 3", () => {
	expect(organizeGifts("70b120a4c")).toBe("[b]{b}{b}[a][a]{a}{a}(cccc)");
});
