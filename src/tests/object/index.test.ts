import { expect, it, describe } from '@jest/globals';
import { simpleFilterEmpty, isNotEmpty, deepFilterEmpty, filterEmpty } from '../../index';

describe('simpleFilterEmpty', () => {
	it('should filter out null values', () => {
		const data = { a: 1, b: null, c: 3 };
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should filter out empty strings', () => {
		const data = { a: 1, b: '', c: 3 };
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should filter out empty arrays', () => {
		const data = { a: 1, b: [], c: 3 };
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should keep non-empty values', () => {
		const data = { a: 1, b: 'hello', c: [1, 2, 3], d: { nested: 'value' } };
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: { nested: 'value' } });
	});

	it('should handle an empty object', () => {
		const data = {};
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({});
	});

	it('should handle an object with only empty values', () => {
		const data = { a: null, b: '', c: [] };
		const result = simpleFilterEmpty(data);
		expect(result).toEqual({});
	});
});

describe('isNotEmpty', () => {
	it('should return false for null', () => {
		expect(isNotEmpty(null)).toBe(false);
	});

	it('should return false for undefined', () => {
		expect(isNotEmpty(undefined)).toBe(false);
	});

	it('should return false for empty string', () => {
		expect(isNotEmpty('')).toBe(false);
	});

	it('should return false for empty array', () => {
		expect(isNotEmpty([])).toBe(false);
	});

	it('should return false for empty object', () => {
		expect(isNotEmpty({})).toBe(false);
	});

	it('should return true for non-empty string', () => {
		expect(isNotEmpty('hello')).toBe(true);
	});

	it('should return true for non-empty array', () => {
		expect(isNotEmpty([1, 2, 3])).toBe(true);
	});

	it('should return true for non-empty object', () => {
		expect(isNotEmpty({ key: 'value' })).toBe(true);
	});

});
describe('deepFilterEmpty', () => {
	it('should filter out null values deeply', () => {
		const data = { a: 1, b: { c: null, d: 2 }, e: null };
		const result = deepFilterEmpty(data);
		expect(result).toEqual({ a: 1, b: { d: 2 } });
	});

	it('should filter out empty strings deeply', () => {
		const data = { a: 1, b: { c: '', d: 2 }, e: '' };
		const result = deepFilterEmpty(data);
		expect(result).toEqual({ a: 1, b: { d: 2 } });
	});

	it('should filter out empty arrays deeply', () => {
		const data = { a: 1, b: { c: [], d: 2 }, e: [] };
		const result = deepFilterEmpty(data);
		expect(result).toEqual({ a: 1, b: { d: 2 } });
	});

	it('should keep non-empty values deeply', () => {
		const data = { a: 1, b: { c: 'hello', d: [1, 2, 3], e: { nested: 'value' } } };
		const result = deepFilterEmpty(data);
		expect(result).toEqual({ a: 1, b: { c: 'hello', d: [1, 2, 3], e: { nested: 'value' } } });
	});

	it('should handle an empty object', () => {
		const data = {};
		const result = deepFilterEmpty(data);
		expect(result).toEqual(undefined);
	});

	it('should handle an object with only empty values deeply', () => {
		const data = { a: null, b: '', c: [] };
		const result = deepFilterEmpty(data);
		expect(result).toEqual(undefined);
	});

	it('should handle nested empty objects', () => {
		const data = { a: { b: { c: {} } } };
		const result = deepFilterEmpty(data);
		expect(result).toEqual(undefined);
	});

	it('should handle nested arrays with empty values', () => {
		const data = { a: [null, '', [], { b: null }] };
		const result = deepFilterEmpty(data);
		expect(result).toEqual(undefined);
	});

});

describe('filterEmpty', () => {
	it('should filter out null values', () => {
		const data = { a: 1, b: null, c: 3 };
		const result = filterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should filter out undefined values', () => {
		const data = { a: 1, b: undefined, c: 3 };
		const result = filterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should filter out empty strings', () => {
		const data = { a: 1, b: '', c: 3 };
		const result = filterEmpty(data);
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should keep non-empty values', () => {
		const data = { a: 1, b: 'hello', c: [1, 2, 3], d: { nested: 'value', d: null, f: [], g: {} } };
		const result = filterEmpty(data);
		expect(result).toEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: { nested: 'value', f: [], g: {} } });
	});

	it('should handle an empty object', () => {
		const data = {};
		const result = filterEmpty(data);
		expect(result).toEqual({});
	});

	it('should handle an object with only empty values', () => {
		const data = { a: null, b: undefined, c: '' };
		const result = filterEmpty(data);
		expect(result).toEqual({});
	});
});