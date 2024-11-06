import { isEquals, findPath } from '../../utils/array/others';
import { TreeNode } from '../../types';
import { expect, test, describe } from '@jest/globals';

describe('isEquals', () => {
	test('returns true for equal arrays', () => {
		expect(isEquals([1, 2, 3], [1, 2, 3])).toBe(true);
	});

	test('returns false for arrays of different lengths', () => {
		expect(isEquals([1, 2, 3], [1, 2])).toBe(false);
	});

	test('returns false for arrays with different elements', () => {
		expect(isEquals([1, 2, 3], [1, 2, 4])).toBe(false);
	});

	test('returns true for empty arrays', () => {
		expect(isEquals([], [])).toBe(true);
	});
});

describe('findPath', () => {
	type TestNode = TreeNode<{ name: string }, 'id', 'name'>;

	const tree: TestNode[] = [
		{
			id: '1',
			name: 'root',
			children: [
				{
					id: '2',
					name: 'child1',
					children: [
						{
							id: '3',
							name: 'grandchild1',
						},
					],
				},
				{
					id: '4',
					name: 'child2',
				},
			],
		},
	];

	test('finds path to a node', () => {
		expect(findPath('3', tree, 'id', 'name')).toEqual(['root', 'child1', 'grandchild1']);
	});

	test('returns null if node is not found', () => {
		expect(findPath('5', tree, 'id', 'name')).toBeNull();
	});

	test('finds path to a root node', () => {
		expect(findPath('1', tree, 'id', 'name')).toEqual(['root']);
	});

	test('finds path to a child node', () => {
		expect(findPath('4', tree, 'id', 'name')).toEqual(['root', 'child2']);
	});
});