import { expect, test } from '@jest/globals';
import { uniqueUsingSet, uniqueUsingMap } from "../../utils/array/unique";

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


