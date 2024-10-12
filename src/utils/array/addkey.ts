/**
 * Add a key and value to each object in an array if the key does not already exist.
 *
 * @template T - The type of the objects in the array.
 * @template K - The type of the key to be added.
 * @template V - The type of the value to be added.
 * 
 * @param {T[]} list - The array of objects to which the key and value will be added.
 * @param {K} keyword - The key to be added to each object.
 * @param {V} value - The value to be associated with the key.
 * @returns {(T & Record<K, V>)[]} A new array with the key and value added to each object if the key did not already exist.
 */
const addKey = <T extends Record<string, any>, K extends string, V>(list: T[], keyword: K, value: V): (T & Record<K,V>)[] => {
	// check if it is an array
	if (!Array.isArray(list)) return [];

	// use map to iterate and add new property
	const newList = list.map(item => {
		// if the property does not exist in the object, add it
		if (!(keyword in item)) {
			return { ...item, [keyword]: value };
		}
		return item;
	});

	return newList;
};


export { addKey };