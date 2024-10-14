import { expect, it, describe } from '@jest/globals';
import { isVaildIdCard } from '../../utils/rules/idCard';

describe('isVaildIdCard', () => {
	it('should return true for valid 18-digit mainland ID', () => {
		expect(isVaildIdCard('11010519491231002X')).toBe(true);
	});

	it('should return false for invalid 18-digit mainland ID', () => {
		expect(isVaildIdCard('110105194912310021')).toBe(false);
	});

	it('should return true for valid 15-digit mainland ID', () => {
		expect(isVaildIdCard('110105491231002')).toBe(true);
	});

	it('should return false for invalid 16-digit mainland ID', () => {
		expect(isVaildIdCard('110105491231001x')).toBe(false);
	});

	it('should return true for valid Hong Kong ID', () => {
		expect(isVaildIdCard('A123456(7)')).toBe(true);
	});

	it('should return true for valid Macau ID', () => {
		expect(isVaildIdCard('1571234(5)')).toBe(true);
	});

	it('should return true for valid Taiwan ID', () => {
		expect(isVaildIdCard('A123456789')).toBe(true);
	});


	it('should return false for completely invalid ID', () => {
		expect(isVaildIdCard('1234567890')).toBe(false);
	});
});