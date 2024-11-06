export type ListItem = {
	[key: string]: any;
}

export type TreeNode<T, K, U> = {
	[key: string]: any;
	children?: TreeNode<T, K, U>[];
	// eslint-disable-next-line no-undef
	[key in K]: string;
	// eslint-disable-next-line no-undef
	[key in U]: string;
}