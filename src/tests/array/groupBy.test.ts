import { groupBy } from '../../utils/array/groupBy';
import { expect, describe, it } from '@jest/globals';

describe('groupBy', () => {
	it('should group objects by a specified key', () => {
		const list = [
			{ category: 'fruit', name: 'apple' },
			{ category: 'fruit', name: 'banana' },
			{ category: 'vegetable', name: 'carrot' },
			{ category: 'vegetable', name: 'lettuce' },
		];

		const result = groupBy(list, 'category');
		expect(result.get('fruit')).toEqual([
			{ category: 'fruit', name: 'apple' },
			{ category: 'fruit', name: 'banana' },
		]);
		expect(result.get('vegetable')).toEqual([
			{ category: 'vegetable', name: 'carrot' },
			{ category: 'vegetable', name: 'lettuce' },
		]);
	});

	it('should return an empty map when given an empty array', () => {
		const list: { category: string; name: string }[] = [];
		const result = groupBy(list, 'category');
		expect(result.size).toBe(0);
	});

	it('should handle grouping by a key with undefined values', () => {
		const list = [
			{ category: 'fruit', name: 'apple' },
			{ category: undefined, name: 'unknown' },
			{ category: 'vegetable', name: 'carrot' },
		];

		const result = groupBy(list, 'category');
		expect(result.get('fruit')).toEqual([{ category: 'fruit', name: 'apple' }]);
		expect(result.get('vegetable')).toEqual([{ category: 'vegetable', name: 'carrot' }]);
		expect(result.get(undefined)).toEqual([{ category: undefined, name: 'unknown' }]);
	});

	it('should handle grouping by a key with null values', () => {
		const list = [
			{ category: 'fruit', name: 'apple' },
			{ category: null, name: 'unknown' },
			{ category: 'vegetable', name: 'carrot' },
		];

		const result = groupBy(list, 'category');
		expect(result.get('fruit')).toEqual([{ category: 'fruit', name: 'apple' }]);
		expect(result.get('vegetable')).toEqual([{ category: 'vegetable', name: 'carrot' }]);
		expect(result.get(null)).toEqual([{ category: null, name: 'unknown' }]);
	});

	it('should handle grouping by a key with mixed types', () => {
		const list = [
			{ category: 'fruit', name: 'apple' },
			{ category: 1, name: 'one' },
			{ category: 'vegetable', name: 'carrot' },
			{ category: 1, name: 'another one' },
		];

		const result = groupBy(list, 'category');
		expect(result.get('fruit')).toEqual([{ category: 'fruit', name: 'apple' }]);
		expect(result.get('vegetable')).toEqual([{ category: 'vegetable', name: 'carrot' }]);
		expect(result.get(1)).toEqual([
			{ category: 1, name: 'one' },
			{ category: 1, name: 'another one' },
		]);
	});
});