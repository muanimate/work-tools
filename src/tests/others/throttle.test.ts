import { expect, it, describe, jest, beforeEach } from '@jest/globals';
import { throttle } from '../../utils/others/throttle';

jest.useFakeTimers();

describe('throttle', () => {
	let func: jest.Mock;
	// eslint-disable-next-line no-unused-vars
	let throttledFunc: (...args: any[]) => void;

	beforeEach(() => {
		func = jest.fn();
		throttledFunc = throttle(func, 1000);
	});

	it('should call the function immediately on the first call', () => {
		throttledFunc();
		expect(func).toHaveBeenCalledTimes(1);
	});

	it('should not call the function again if called within the delay period', () => {
		throttledFunc();
		throttledFunc();
		expect(func).toHaveBeenCalledTimes(1);
	});

	it('should call the function again after the delay period', () => {
		throttledFunc();
		jest.advanceTimersByTime(1000);
		throttledFunc();
		expect(func).toHaveBeenCalledTimes(2);
	});

	it('should pass the correct arguments to the throttled function', () => {
		throttledFunc(1, 2, 3);
		expect(func).toHaveBeenCalledWith(1, 2, 3);
	});

	it('should log throttled calls with arguments', () => {
		console.log = jest.fn();
		throttledFunc(1, 2, 3);
		throttledFunc(4, 5, 6);
		expect(console.log).toHaveBeenCalledWith('Throttled call with arguments:', [4, 5, 6]);
	});
});