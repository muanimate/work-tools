/**
 * Creates a debounced function that delays invoking the provided function until after the specified delay has elapsed
 * since the last time the debounced function was invoked.
*
* @template T - The type of the function to debounce.
* @param {T} func - The function to debounce.
* @param {number} delay - The number of milliseconds to delay.
* @returns {(...args: Parameters<T>) => void} - A new debounced function.
*/
// eslint-disable-next-line no-unused-vars
export function debounce<T extends (...args: any[]) => void>( func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer); // 如果在 delay 时间内再次调用，则清除之前的定时器
    }
    timer = setTimeout(() => {
      func(...args); // 延迟后调用函数
    }, delay);
  };
}
