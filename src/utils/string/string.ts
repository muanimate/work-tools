/**
 * Formats a number or numeric string with thousand separators.
 *
 * @param str - The number or numeric string to be formatted.
 * @returns A string with thousand separators.
 *
 * @example
 * ```typescript
 * thousandseparator(1234567); // "1,234,567"
 * thousandseparator("1234567.89"); // "1,234,567.89"
 * ```
 */
const thousandseparator = (str: string | number): string => {
	if (!str) return '';
	const parts = str.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

/**
 * Replaces placeholders in a string with corresponding values from a parameters object.
 *
 * @param str - The string containing placeholders in the format `{key}`.
 * @param params - An object where keys correspond to placeholder names and values are the replacements.
 * @returns The string with placeholders replaced by their corresponding values from the params object.
 */
const replaceParams = (str: string, params: { [key: string]: string }): string => {
	return str.replace(/{(\w+)}/g, (_, key) => params[key] || `{${key}}`);
}


/**
 * Formats a phone number string by inserting spaces between groups of digits.
 *
 * @param phone - The phone number string to format. It should be a string of digits.
 * @returns The formatted phone number string with spaces inserted.
 */
const formatPhone = (phone: string): string => {
	return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
}


const isHalfWidth = (charCode: number): boolean => {
	return (charCode >= 0x0001 && charCode <= 0x007e) || (charCode >= 0xff60 && charCode <= 0xff9f);
};

/**
 * Calculates the length of a string, where half-width characters count as 1 and full-width characters count as 2.
 *
 * @param val - The input string to be measured.
 * @returns The calculated length of the string.
 */
const getStrLenWithChars = (val: string): number => {
  let count = 0;
	for (const char of val) {
		const c = char.charCodeAt(0);
		count += isHalfWidth(c) ? 1 : 2;
	}
  return count;
};

export {
	thousandseparator,
	replaceParams,
	formatPhone,
	getStrLenWithChars
}