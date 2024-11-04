import { calcMul, calcAdd, getAbs, calcReduce } from '../../utils/number/index';
import { expect, test, describe } from '@jest/globals';
describe('calcMul', () => {
	test('multiplies two integers correctly', () => {
		expect(calcMul(2, 3)).toBe(6);
	});

	test('multiplies two floating point numbers correctly', () => {
		expect(calcMul(2.5, 4.2)).toBeCloseTo(10.5);
	});

	test('multiplies an integer and a floating point number correctly', () => {
		expect(calcMul(5, 2.5)).toBeCloseTo(12.5);
	});

	test('multiplies two negative numbers correctly', () => {
		expect(calcMul(-2, -3)).toBe(6);
	});

	test('multiplies a positive and a negative number correctly', () => {
		expect(calcMul(2, -3)).toBe(-6);
	});

	test('multiplies by zero correctly', () => {
		expect(calcMul(0, 5)).toBe(0);
		expect(calcMul(5, 0)).toBe(0);
	});

	test('multiplies two floating point numbers with different decimal places correctly', () => {
		expect(calcMul(1.234, 5.6789)).toBeCloseTo(7.0066526);
	});

	test('throws an error when one of the parameters is not a number', () => {
		expect(() => calcMul(NaN, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcMul(5, NaN)).toThrow('Both parameters must be finite numbers');
		expect(() => calcMul(Infinity, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcMul(5, Infinity)).toThrow('Both parameters must be finite numbers');
	});

});

describe('calcAdd', () => {
	test('adds two integers correctly', () => {
		expect(calcAdd(2, 3)).toBe(5);
	});

	test('adds two floating point numbers correctly', () => {
		expect(calcAdd(2.5, 4.2)).toBeCloseTo(6.7);
	});

	test('adds an integer and a floating point number correctly', () => {
		expect(calcAdd(5, 2.5)).toBeCloseTo(7.5);
	});

	test('adds two negative numbers correctly', () => {
		expect(calcAdd(-2, -3)).toBe(-5);
	});

	test('adds a positive and a negative number correctly', () => {
		expect(calcAdd(2, -3)).toBe(-1);
	});

	test('adds zero correctly', () => {
		expect(calcAdd(0, 5)).toBe(5);
		expect(calcAdd(5, 0)).toBe(5);
	});

	test('adds two floating point numbers with different decimal places correctly', () => {
		expect(calcAdd(1.234, 5.6789)).toBeCloseTo(6.9129);
	});

	test('throws an error when one of the parameters is not a number', () => {
		expect(() => calcAdd(NaN, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcAdd(5, NaN)).toThrow('Both parameters must be finite numbers');
		expect(() => calcAdd(Infinity, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcAdd(5, Infinity)).toThrow('Both parameters must be finite numbers');
	});

});
describe('getAbs', () => {
	test('returns the absolute value of a positive integer', () => {
		expect(getAbs(5)).toBe(5);
	});

	test('returns the absolute value of a negative integer', () => {
		expect(getAbs(-5)).toBe(-5);
	});

	test('returns the absolute value of a positive floating point number', () => {
		expect(getAbs(5.5)).toBe(5);
	});

	test('returns the absolute value of a negative floating point number', () => {
		expect(getAbs(-5.5)).toBe(-5);
	});

	test('returns 0 for 0', () => {
		expect(getAbs(0)).toBe(0);
	});

	test('throws an error when the parameter is not a number', () => {
		expect(() => getAbs(NaN)).toThrow('The parameter must be a number');
		expect(() => getAbs(Infinity)).toThrow('The parameter must be a number');
		expect(() => getAbs('string' as any)).toThrow('The parameter must be a number');
	});

});

describe('calcReduce', () => {
	test('subtracts two integers correctly', () => {
		expect(calcReduce(5, 3)).toBe(2);
	});

	test('subtracts two floating point numbers correctly', () => {
		expect(calcReduce(5.5, 2.2)).toBeCloseTo(3.3);
	});

	test('subtracts an integer and a floating point number correctly', () => {
		expect(calcReduce(5, 2.5)).toBeCloseTo(2.5);
	});

	test('subtracts two negative numbers correctly', () => {
		expect(calcReduce(-5, -3)).toBe(-2);
	});

	test('subtracts a positive and a negative number correctly', () => {
		expect(calcReduce(5, -3)).toBe(8);
	});

	test('subtracts zero correctly', () => {
		expect(calcReduce(5, 0)).toBe(5);
		expect(calcReduce(0, 5)).toBe(-5);
	});

	test('subtracts two floating point numbers with different decimal places correctly', () => {
		expect(calcReduce(5.6789, 1.234)).toBeCloseTo(4.4449);
	});

	test('throws an error when one of the parameters is not a number', () => {
		expect(() => calcReduce(NaN, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcReduce(5, NaN)).toThrow('Both parameters must be finite numbers');
		expect(() => calcReduce(Infinity, 5)).toThrow('Both parameters must be finite numbers');
		expect(() => calcReduce(5, Infinity)).toThrow('Both parameters must be finite numbers');
	});
});