import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'WorkToolsForDS',
			formats: ['es', 'cjs', 'umd', 'iife'],
			fileName: (format) => `Work-tools-for-ds.${format}.js`,
		},
		outDir: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		dts({
			outDir: 'dist/types',
			insertTypesEntry: true,
		}),
	],
});