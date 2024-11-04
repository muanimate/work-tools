const getAbs = (num: number): number => {
	if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
		throw new Error('The parameter must be a number');
	}
	return num < 0 ? Math.ceil(num) : Math.floor(num);
};

const getDecimalCount = (num: number): number => {
	const str = num.toString();
	return str.includes('.') ? str.split('.')[1].length : 0;
};

const calcMul = (num1: number, num2: number): number => {
	if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
		throw new Error('Both parameters must be finite numbers');
	}
	const s1 = getDecimalCount(num1);
	const s2 = getDecimalCount(num2);
	const m = Math.pow(10, s1 + s2);
	return (num1 * m) * (num2 * m) / (m * m);
}

const calcAdd = (num1: number, num2: number): number => {
	if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
		throw new Error('Both parameters must be finite numbers');
	}
	const s1 = getDecimalCount(num1);
	const s2 = getDecimalCount(num2);
	const m = Math.pow(10, Math.max(s1, s2));
	return (num1 * m + num2 * m) / m;
}

const calcReduce = (num1: number, num2: number): number => {
	if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
		throw new Error('Both parameters must be finite numbers');
	}
	const s1 = getDecimalCount(num1);
	const s2 = getDecimalCount(num2);
	const m = Math.pow(10, Math.max(s1, s2));
	return (num1 * m - num2 * m) / m;
}


export default {
	getAbs,
	calcAdd,
	calcReduce,
	calcMul
}

export { getAbs, calcMul, calcAdd, calcReduce };