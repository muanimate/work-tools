import { expect, test } from '@jest/globals';
import { uniqueUsingSet, uniqueUsingMap, uniqueById } from "../../utils/array/unique";

test("uniqueUsingSet", () => {
	const list = [1, 2, 3, 1, 2, 3, 4];
	const uniqueList = uniqueUsingSet(list);
	expect(uniqueList).toEqual([1, 2, 3, 4]);
});

test("uniqueUsingMap", () => {
	const list = [1, 2, 3, 1, 2, 3, 4];
	const uniqueList = uniqueUsingMap(list);
	expect(uniqueList).toEqual([1, 2, 3, 4]);
});

test("uniqueUsingMap", () => {
	const list = [1, 2, 3, 1, 2, 3, 4];
	const uniqueList = uniqueUsingMap(list);
	expect(uniqueList).toEqual([1, 2, 3, 4]);
});

test("uniqueUsingSet with empty array", () => {
	const list: number[] = [];
	const uniqueList = uniqueUsingSet(list);
	expect(uniqueList).toEqual([]);
});

test("uniqueUsingMap with empty array", () => {
	const list: number[] = [];
	const uniqueList = uniqueUsingMap(list);
	expect(uniqueList).toEqual([]);
});

test("uniqueUsingSet with strings", () => {
	const list = ["a", "b", "a", "c", "b"];
	const uniqueList = uniqueUsingSet(list);
	expect(uniqueList).toEqual(["a", "b", "c"]);
});

test("uniqueUsingMap with strings", () => {
	const list = ["a", "b", "a", "c", "b"];
	const uniqueList = uniqueUsingMap(list);
	expect(uniqueList).toEqual(["a", "b", "c"]);
});

test("uniqueUsingSet with mixed types", () => {
	const list = [1, "1", 2, "2", 1, "1"];
	const uniqueList = uniqueUsingSet(list);
	expect(uniqueList).toEqual([1, "1", 2, "2"]);
});

test("uniqueUsingMap with mixed types", () => {
	const list = [1, "1", 2, "2", 1, "1"];
	const uniqueList = uniqueUsingMap(list);
	expect(uniqueList).toEqual([1, "1", 2, "2"]);
});

test("uniqueById with objects", () => {
	const list = [
		{ id: 1, value: "a" },
		{ id: 2, value: "b" },
		{ id: 1, value: "c" },
		{ id: 3, value: "d" },
		{ id: 2, value: "e" }
	];
	const uniqueList = uniqueById(list, "id");
	expect(uniqueList).toEqual([
		{ id: 1, value: "c" },
		{ id: 2, value: "e" },
		{ id: 3, value: "d" }
	]);
});

test("uniqueById with empty array", () => {
	const list: { id: number, value: string }[] = [];
	const uniqueList = uniqueById(list, "id");
	expect(uniqueList).toEqual([]);
});

test("uniqueById with different key", () => {
	const list = [
		{ id: 1, value: "a" },
		{ id: 2, value: "b" },
		{ id: 1, value: "c" },
		{ id: 3, value: "d" },
		{ id: 2, value: "e" }
	];
	const uniqueList = uniqueById(list, "value");
	expect(uniqueList).toEqual([
		{ id: 1, value: "a" },
		{ id: 2, value: "b" },
		{ id: 1, value: "c" },
		{ id: 3, value: "d" },
		{ id: 2, value: "e" }
	]);
});


