/**
 * Formats a given date according to the specified format string.
 *
 * The format string can contain the following placeholders:
 * - `YYYY`: Full year (e.g., 2023)
 * - `YY`: Last two digits of the year (e.g., 23)
 * - `MM`: Month (01-12)
 * - `DD`: Day of the month (01-31)
 * - `HH`: Hours in 24-hour format (00-23)
 * - `hh`: Hours in 12-hour format (01-12)
 * - `mm`: Minutes (00-59)
 * - `ss`: Seconds (00-59)
 * - `A`: AM/PM
 * - `a`: am/pm
 *
 * @param date - The date to format.
 * @param format - The format string.
 * @returns The formatted date string.
 */
const formatDate = (date: Date, format: string): string => {
	const year = date.getFullYear();
	const yearShort = year.toString().slice(-2); // get last 2 digits
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours24 = date.getHours();
	const hours12 = hours24 % 12 || 12; // 12-hour format
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const ampm = hours24 >= 12 ? 'PM' : 'AM'; // AM/PM

	const replacements: { [key: string]: string } = {
			"YYYY": year.toString(),
			"yyyy": year.toString(),
			"YY": yearShort,
			"MM": month.toString().padStart(2, "0"),
			"DD": day.toString().padStart(2, "0"),
			"dd": day.toString().padStart(2, "0"),
			"HH": hours24.toString().padStart(2, "0"),
			"hh": hours12.toString().padStart(2, "0"),
			"mm": minutes.toString().padStart(2, "0"),
			"ss": seconds.toString().padStart(2, "0"),
			"A": ampm,
			"a": ampm.toLowerCase()
	};

	return format.replace(/YYYY|yyyy|YY|MM|DD|dd|HH|hh|mm|ss|A|a/g, match => replacements[match]);
};

/**
 * Formats a given date as a relative time string (e.g., "刚刚", "5秒前", "3天前").
 * If the date is more than 3 days ago, it formats the date as 'YYYY-MM-DD'.
 *
 * @param date - The date to format.
 * @returns A string representing the relative time from the given date to now.
 */
const formmatTimeAgo = (date: Date): string => {
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	if (seconds < 5) return "刚刚";
	if (seconds < 60) return `${seconds}秒前`;
	if (minutes < 60) return `${minutes}分钟前`;
	if (hours < 24) return `${hours}小时前`;
	if (days < 3) return `${days}天前`;
	return formatDate(date, 'YYYY-MM-DD');
};

export {
	formmatTimeAgo,
	formatDate 
};