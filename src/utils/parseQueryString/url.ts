/**
 * 解析URL字符串中的查询参数。
 *
 * @param url - 包含查询参数的URL字符串。
 * @returns 一个对象，包含URL中的查询参数。
 *
 * @example
 * ```typescript
 * const url = 'https://example.com?param1=value1&param2=value2';
 * const params = parseUrlParams(url);
 * console.log(params); // { param1: 'value1', param2: 'value2' }
 * ```
 */
const parseUrlParams = (url: string): {[key: string]: string} => {
	if (!url) return {};
	const params: { [key: string]: string } = {};
	const urlObj = new URL(url);
	const searchParams = urlObj.searchParams;
	if (!searchParams) return {};
	searchParams.forEach((value, key) => {
		params[key] = value;
	});
	return params;
}

export { parseUrlParams };