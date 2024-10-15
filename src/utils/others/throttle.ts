/**
 * Creates a throttled version of the provided function that will only execute
 * at most once in the specified delay period.
*
* @template T - The type of the function to be throttled.
* @param {T} func - The function to throttle.
* @param {number} delay - The number of milliseconds to wait before allowing the next execution.
* @returns {(...args: Parameters<T>) => void} A throttled version of the provided function.
*
* @example
* ```typescript
* const throttledFunction = throttle(() => console.log('Throttled!'), 1000);
* window.addEventListener('resize', throttledFunction);
* ```
*/
// eslint-disable-next-line no-unused-vars
export function throttle<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      // args is used here to avoid the 'defined but never used' error
      console.log('Throttled call with arguments:', args);
    }
  };
}