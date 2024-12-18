import { expect, describe, test } from '@jest/globals';
import { thousandseparator, replaceParams, formatPhone, getStrLenWithChars } from '../../index';

describe('thousandseparator', () => {
	test('should format number with thousand separators', () => {
		expect(thousandseparator(1234567)).toBe('1,234,567');
	});

	test('should format string number with thousand separators', () => {
		expect(thousandseparator('1234567')).toBe('1,234,567');
	});

	test('should format number with decimals and thousand separators', () => {
		expect(thousandseparator(1234567.89)).toBe('1,234,567.89');
	});

	test('should format string number with decimals and thousand separators', () => {
		expect(thousandseparator('1234567.89')).toBe('1,234,567.89');
	});

	test('should return empty string for empty input', () => {
		expect(thousandseparator('')).toBe('');
	});

	test('should return empty string for null input', () => {
		expect(thousandseparator(null as any)).toBe('');
	});

	test('should return empty string for undefined input', () => {
		expect(thousandseparator(undefined as any)).toBe('');
	});

	test('should return empty string for undefined input', () => {
		expect(thousandseparator("123,456,7.89")).toBe('123,456,7.89');
	});

});

describe('replaceParams', () => {
	test('should replace placeholders with corresponding values', () => {
		const str = 'Hello, {name}!';
		const params = { name: 'World' };
		expect(replaceParams(str, params)).toBe('Hello, World!');
	});

	test('should replace multiple placeholders with corresponding values', () => {
		const str = 'Hello, {name}! You have {count} new messages.';
		const params = { name: 'Alice', count: '5' };
		expect(replaceParams(str, params)).toBe('Hello, Alice! You have 5 new messages.');
	});

	test('should leave placeholders unchanged if no corresponding value is found', () => {
		const str = 'Hello, {name}! You have {count} new messages.';
		const params = { name: 'Alice' };
		expect(replaceParams(str, params)).toBe('Hello, Alice! You have {count} new messages.');
	});

	test('should handle empty string input', () => {
		const str = '';
		const params = { name: 'World' };
		expect(replaceParams(str, params)).toBe('');
	});

	test('should handle empty params object', () => {
		const str = 'Hello, {name}!';
		const params = {};
		expect(replaceParams(str, params)).toBe('Hello, {name}!');
	});
});

describe('formatPhone', () => {
	test('should handle phone number with more than 11 digits', () => {
		expect(formatPhone('12345678901')).toBe('123 4567 8901');
	});
});

describe('getStrLenWithChars', () => {
		test('should return correct length for half-width characters', () => {
			expect(getStrLenWithChars('abc')).toBe(3);
		});

		test('should return correct length for full-width characters', () => {
			expect(getStrLenWithChars('ａｂｃ')).toBe(6);
		});

		test('should return correct length for mixed half-width and full-width characters', () => {
			expect(getStrLenWithChars('aｂc')).toBe(4);
		});

		test('should return 0 for empty string', () => {
			expect(getStrLenWithChars('')).toBe(0);
		});

		test('should return correct length for string with spaces', () => {
			expect(getStrLenWithChars('a b c')).toBe(5);
		});

		test('should return correct length for string with 中文', () => {
			expect(getStrLenWithChars('你好啊')).toBe(6);
		});
	});