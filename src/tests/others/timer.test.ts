import Interval from '../../utils/others/timer';
import { expect, jest, describe, beforeEach, afterEach, it } from '@jest/globals';

jest.useFakeTimers();

describe('Interval', () => {
	let callback: jest.Mock;
	let interval: Interval;

	beforeEach(() => {
		callback = jest.fn();
		interval = new Interval(callback, 1000);
	});

	afterEach(() => {
		interval.clear();
	});

	it('should start the interval immediately if no initial delay is provided', () => {
		expect(callback).not.toHaveBeenCalled();
		jest.advanceTimersByTime(1000);
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should start the interval after the initial delay', () => {
		interval = new Interval(callback, 1000, 500);
		expect(callback).not.toHaveBeenCalled();
		jest.advanceTimersByTime(500);
		expect(callback).not.toHaveBeenCalled();
		jest.advanceTimersByTime(500);
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should call the callback repeatedly at the specified interval', () => {
		jest.advanceTimersByTime(3000);
		expect(callback).toHaveBeenCalledTimes(3);
	});

	it('should not start the interval if it is already running', () => {
		interval.start();
		jest.advanceTimersByTime(1000);
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should clear the interval', () => {
		interval.clear();
		jest.advanceTimersByTime(1000);
		expect(callback).not.toHaveBeenCalled();
	});

	it('should return the correct active status', () => {
		expect(interval.isActive()).toBe(true);
		interval.clear();
		expect(interval.isActive()).toBe(false);
	});
});