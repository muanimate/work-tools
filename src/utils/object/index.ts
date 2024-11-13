const EmptyList = [null, undefined, ''];
type AnyObject = Record<string, any>;

/**
 * 递归地过滤空字符串、undefined 和 null 的对象或数组
 * 
 * @param input - 输入的对象或数组
 * @returns 返回一个过滤掉空值的对象或数组
 */
const filterEmpty = <T extends AnyObject>(input: T): T => {
  if (Array.isArray(input)) {
    // 如果是数组，递归处理每个元素
	return input.filter(item => !EmptyList.includes(item)).map(filterEmpty) as unknown as T;
  } else if (typeof input === 'object' && input !== null) {
    // 如果是对象，递归处理每个属性
	return Object.entries(input).reduce((acc, [key, value]) => {
	  const filteredValue = filterEmpty(value);
	  if (!EmptyList.includes(filteredValue)) {
			acc[key] = filteredValue;
	  }
	  return acc;
	}, {} as Record<string, any>) as T;
  }
  return input; // 如果是基础类型（例如 string、number），直接返回
};

/**
 * Checks if a value is not empty.
 * 
 * A value is considered empty if it is:
 * - Included in the `EmptyList`
 * - An array with a length of 0
 * - An object with no keys
 * 
 * @param value - The value to check.
 * @returns `true` if the value is not empty, `false` otherwise.
 */
const isNotEmpty = (value: any) => {
	if (value === null || value === undefined) return false;
	if (typeof value === 'string' && value.trim() === '') return false;
	if (Array.isArray(value) && value.length === 0) return false;
	if (typeof value === 'object' && Object.keys(value).length === 0) return false;
	return true;
}


/**
 * Filters out properties from an object that have empty values.
 *
 * @template T - The type of the input object.
 * @param {T} data - The object to be filtered.
 * @returns {Record<string, T[keyof T]>} - A new object with only the properties that have non-empty values.
 */
const simpleFilterEmpty = <T extends Record<string, any>>(data: T): Record<string, T[keyof T]> => {
  return Object.keys(data).reduce((acc, key) => {
    const value = data[key];
    if (isNotEmpty(value)) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, T[keyof T]>);
};

/**
 * Recursively filters out empty values from an object or array.
 * 
 * This function traverses through the input object or array and removes any properties or elements that are:
 * - `undefined`
 * - `null`
 * - empty strings (`''`)
 * - empty arrays (`[]`)
 * 
 * @template T - The type of the input object.
 * @param {T} obj - The object or array to be filtered.
 * @returns {Partial<T> | undefined} - A new object or array with empty values removed, or `undefined` if the input is empty.
 */
const deepFilterEmpty = <T extends AnyObject>(obj: T): Partial<T> | undefined => {
	if (obj && typeof obj === 'object') {
		if (Array.isArray(obj)) {
			const filteredArray = obj.map(deepFilterEmpty).filter(item => {
				return isNotEmpty(item);
			});
			return filteredArray.length > 0 ? filteredArray as unknown as Partial<T> : undefined;
		} else {
			const filteredObj: AnyObject = {};
			for (const key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					const value = deepFilterEmpty(obj[key]);
					if (isNotEmpty(value)) {
						filteredObj[key] = value;
					}
				}
			}
			return Object.keys(filteredObj).length > 0 ? filteredObj as Partial<T> : undefined;
		}
	}
	return obj;
}



export default {
	isNotEmpty,
	filterEmpty,
	simpleFilterEmpty,
	deepFilterEmpty
}

export {
	isNotEmpty,
	filterEmpty,
	simpleFilterEmpty,
	deepFilterEmpty
};