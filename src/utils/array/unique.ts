const uniqueUsingSet = <T>(list: T[]): T[] => Array.from(new Set(list));

const uniqueUsingMap = <T>(list: T[]): T[] => {
	const map = new Map<T, T>();
	list.forEach(item => map.set(item, item));
	return Array.from(map.values());
};

export { uniqueUsingSet, uniqueUsingMap };