import { expect, it, describe, jest } from '@jest/globals';
import { debounce } from '../../utils/others/debounce';

jest.useFakeTimers();

describe('debounce', () => {
	it('should call the function after the specified delay', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc();
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(1000);
		expect(func).toBeCalled();
	});

	it('should not call the function if called again within the delay period', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc();
		debouncedFunc();
		jest.advanceTimersByTime(500);
		debouncedFunc();

		jest.advanceTimersByTime(500);
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(500);
		expect(func).toBeCalledTimes(1);
	});

	it('should call the function with the correct arguments', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc('arg1', 'arg2');
		jest.advanceTimersByTime(1000);

		expect(func).toBeCalledWith('arg1', 'arg2');
	});

	it('should reset the timer if called again within the delay period', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc();
		jest.advanceTimersByTime(500);
		debouncedFunc();
		jest.advanceTimersByTime(500);

		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(500);
		expect(func).toBeCalledTimes(1);
	});
});