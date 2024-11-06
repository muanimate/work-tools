import { TreeNode } from '../../types';

const isEquals = (arr1: any[], arr2: any[]): boolean => {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((value, index) => value === arr2[index]);
};

const findPath = <T, K extends string, U extends string>(
	code: string,
	tree: TreeNode<T, K, U>[],
	key: K,
	targetKey: U
): string[] | null => {
	const find = (node: TreeNode<T, K, U>[], targetCode: string, path: string[]): string[] | null => {
		for (const item of node) {
			path.push(item[targetKey]);
			if (item[key] === targetCode) return path;
			if (item.children) {
				const result = find(item.children, targetCode, path);
				if (result) return result;
			}
			path.pop();
		}
		return null;
	}
	return find(tree, code, []);
}

export { isEquals, findPath };