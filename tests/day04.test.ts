import { decode } from "../src/solutions/day04";

test("Day 4 - test Type", () => {
	expect(typeof decode("")).toBe("string");
});

test("Day 4 - test 1", () => {
	expect(decode("hola (odnum)")).toBe("hola mundo");
});

test("Day 4 - test 2", () => {
	expect(decode("(olleh) (dlrow)!")).toBe("hello world!");
});

test("Day 4 - test 3", () => {
	expect(decode("sa(u(cla)atn)s")).toBe("santaclaus");
});
