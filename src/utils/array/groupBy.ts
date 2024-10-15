/**
 * Groups an array of objects by a specified key.
 *
 * @template T - The type of objects in the list.
 * @template K - The key of the object to group by.
 * @param {T[]} list - The array of objects to be grouped.
 * @param {K} key - The key to group the objects by.
 * @returns {Map<T[K], T[]>} A Map where the keys are the values of the specified key in the objects,
 * and the values are arrays of objects that have that key value.
 */
export function groupBy<T, K extends keyof T>(list: T[], key: K): Map<T[K], T[]> {
  return list.reduce((map, item) => {
    const keyValue = item[key]; // 获取当前项的key值
    if (!map.has(keyValue)) {
      map.set(keyValue, []); // 如果map中不存在该key值，初始化为空数组
    }
    map.get(keyValue)!.push(item); // 将当前项添加到该key值的数组中
    return map; // 返回更新后的map
  }, new Map<T[K], T[]>()); // 使用泛型创建Map
}
