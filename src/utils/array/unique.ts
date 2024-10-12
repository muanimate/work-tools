const uniqueUsingSet = <T>(list: T[]): T[] => Array.from(new Set(list));

/**
 * Returns a new array with unique elements from the provided list.
 * 
 * This function uses a `Map` to ensure that each element in the list is unique.
 * 
 * @template T - The type of elements in the list.
 * @param {T[]} list - The array from which to extract unique elements.
 * @returns {T[]} A new array containing only unique elements from the original list.
 */
const uniqueUsingMap = <T>(list: T[]): T[] => {
	const map = new Map<T, T>();
	list.forEach(item => map.set(item, item));
	return Array.from(map.values());
};

/**
 * Returns a new array with unique elements based on a specified key.
 *
 * @template T - The type of the elements in the array.
 * @template K - The key of the elements to determine uniqueness.
 * @param {T[]} list - The array of elements to filter for uniqueness.
 * @param {K} id - The key to use for determining uniqueness.
 * @returns {T[]} A new array with unique elements based on the specified key.
 */
const uniqueById = <T, K extends keyof T>(list: T[], id: K): T[] => {
	const map = new Map<T[K], T>();
	list.forEach(item => map.set(item[id], item));
	return Array.from(map.values());
};

export { uniqueUsingSet, uniqueUsingMap, uniqueById };