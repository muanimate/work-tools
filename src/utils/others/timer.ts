
/**
 * A class that provides a mechanism to execute a callback function at specified intervals.
 * 
 * @class Interval
 * @example
 * ```typescript
 * const interval = new Interval(() => {
 *   console.log('This will run every 1000ms');
 * }, 1000);
 * ```
 */
class Interval {
	private callback: () => void;
	private interval: number;
	private initialDelay: number;
	private timerId: NodeJS.Timeout | null;
	private isRunning: boolean;

	/**
	 * Creates an instance of Interval.
	 * 
	 * @param callback - The function to be executed at each interval.
	 * @param interval - The time interval in milliseconds between each execution of the callback.
	 * @param initialDelay - Optional initial delay in milliseconds before the first execution of the callback. Default is 0.
	 */
	constructor(callback: () => void, interval: number, initialDelay: number = 0) {
		this.callback = callback;
		this.interval = interval;
		this.initialDelay = initialDelay;
		this.timerId = null;
		this.isRunning = false;

		if (this.initialDelay > 0) {
			setTimeout(() => this.start(), this.initialDelay);
		} else {
			this.start();
		}
	};

	/**
	 * Starts the interval timer. If the timer is already running, this method does nothing.
	 */
	start(): void {
		if (this.isRunning) return; // 防止重复启动
		this.isRunning = true;

		const run = () => {
			try {
				this.callback();
			} catch (error) {
				console.error('定时任务出错:', error);
			}
			this.timerId = setTimeout(run, this.interval);
		};

		this.timerId = setTimeout(run, this.interval);
	};

	/**
	 * Clears the interval timer, stopping any further executions of the callback.
	 */
	clear(): void {
		if (this.timerId === null) return;
		clearTimeout(this.timerId as NodeJS.Timeout);
		this.timerId = null;
		this.isRunning = false; // 更新状态
	};

	/**
	 * Checks if the interval timer is currently running.
	 * 
	 * @returns A boolean indicating whether the interval timer is active.
	 */
	isActive(): boolean {
		return this.isRunning;
	};
	
}


export default Interval;

export { Interval };

