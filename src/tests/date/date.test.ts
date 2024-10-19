import { formatDate, formmatTimeAgo } from '../../utils/date/date';
import { expect, describe, it } from '@jest/globals';

describe('formatDate', () => {
	it('should format date as YYYY-MM-DD', () => {
		const date = new Date(2023, 9, 5); // October 5, 2023
		const format = 'YYYY-MM-DD';
		const result = formatDate(date, format);
		expect(result).toBe('2023-10-05');
	});

	it('should format date as DD/MM/YYYY', () => {
		const date = new Date(2023, 9, 5); // October 5, 2023
		const format = 'DD/MM/YYYY';
		const result = formatDate(date, format);
		expect(result).toBe('05/10/2023');
	});

	it('should format date and time as YYYY-MM-DD hh:mm:ss', () => {
		const date = new Date(2023, 9, 5, 14, 30, 15); // October 5, 2023, 14:30:15
		const format = 'YYYY-MM-DD hh:mm:ss';
		const result = formatDate(date, format);
		expect(result).toBe('2023-10-05 02:30:15');
	});

	it('should format date and time as DD/MM/YYYY hh:mm', () => {
		const date = new Date(2023, 9, 5, 9, 5); // October 5, 2023, 09:05
		const format = 'DD/MM/YYYY hh:mm';
		const result = formatDate(date, format);
		expect(result).toBe('05/10/2023 09:05');
	});

	it('should pad single digit month and day with zero', () => {
		const date = new Date(2023, 0, 5); // January 5, 2023
		const format = 'YYYY-MM-DD';
		const result = formatDate(date, format);
		expect(result).toBe('2023-01-05');
	});

	it('should pad single digit hours, minutes, and seconds with zero', () => {
		const date = new Date(2023, 9, 5, 4, 3, 2); // October 5, 2023, 04:03:02
		const format = 'hh:mm:ss';
		const result = formatDate(date, format);
		expect(result).toBe('04:03:02');
	});
});

describe('formmatTimeAgo', () => {

	it('should return "刚刚" for dates less than 5 seconds ago', () => {
		const date = new Date(Date.now() - 3000); // 3 seconds ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('刚刚');
	});

	it('should return seconds ago for dates less than a minute ago', () => {
		const date = new Date(Date.now() - 45000); // 45 seconds ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('45秒前');
	});

	it('should return minutes ago for dates less than an hour ago', () => {
		const date = new Date(Date.now() - 1800000); // 30 minutes ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('30分钟前');
	});

	it('should return hours ago for dates less than a day ago', () => {
		const date = new Date(Date.now() - 7200000); // 2 hours ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('2小时前');
	});

	it('should return days ago for dates less than 3 days ago', () => {
		const date = new Date(Date.now() - 172800000); // 2 days ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('2天前');
	});

	it('should return formatted date for dates more than 3 days ago', () => {
		const date = new Date('2023-10-01T14:30:00Z'); // 4 days ago
		const result = formmatTimeAgo(date);
		expect(result).toBe('2023-10-01');
	});
});