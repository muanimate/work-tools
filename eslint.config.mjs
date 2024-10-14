import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
	...tseslint.configs.recommended,
	pluginJs.configs.recommended,
	{
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: ["src/**/*.{js,mjs,cjs,ts}"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"no-undef": "error",
		},
	},
	{
		ignores: [
			"node_modules/",
			"jest.config.js",
			"dist/",
			"webpack.config.mjs",
		],
	}
];