import { expect, it, describe } from '@jest/globals';
import { parseUrlParams } from '../../utils/parseQueryString/url';

describe('parseUrlParams', () => {
	it('should return an empty object if the URL is empty', () => {
		const result = parseUrlParams('');
		expect(result).toEqual({});
	});

	it('should return an empty object if the URL has no query parameters', () => {
		const result = parseUrlParams('https://example.com');
		expect(result).toEqual({});
	});

	it('should parse single query parameter correctly', () => {
		const result = parseUrlParams('https://example.com?name=John');
		expect(result).toEqual({ name: 'John' });
	});

	it('should parse multiple query parameters correctly', () => {
		const result = parseUrlParams('https://example.com?name=John&age=30');
		expect(result).toEqual({ name: 'John', age: '30' });
	});

	it('should handle query parameters with empty values', () => {
		const result = parseUrlParams('https://example.com?name=&age=30');
		expect(result).toEqual({ name: '', age: '30' });
	});

	it('should handle query parameters with special characters', () => {
		const result = parseUrlParams('https://example.com?name=John%20Doe&age=30');
		expect(result).toEqual({ name: 'John Doe', age: '30' });
	});
});