import { addKey } from "../../utils/array/addkey";
import { expect, test } from '@jest/globals';

test("addKey", () => {
	const list = [
		{ name: "Alice" },
		{ name: "Bob" },
		{ name: "Charlie" },
	];
	const newList = addKey(list, 'selected', false);
	expect(newList).toEqual([
		{ name: "Alice", selected: false },
		{ name: "Bob", selected: false },
		{ name: "Charlie", selected: false },
	]);
});