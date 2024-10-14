const regionCodes: { [key: string]: string } = {
	'11': '北京',
	'12': '天津',
	'13': '河北',
	'14': '山西',
	'15': '内蒙古',
	'21': '辽宁',
	'22': '吉林',
	'23': '黑龙江',
	'31': '上海',
	'32': '江苏',
	'33': '浙江',
	'34': '安徽',
	'35': '福建',
	'36': '江西',
	'37': '山东',
	'41': '河南',
	'42': '湖北',
	'43': '湖南',
	'44': '广东',
	'45': '广西',
	'46': '海南',
	'50': '重庆',
	'51': '四川',
	'52': '贵州',
	'53': '云南',
	'54': '西藏',
	'61': '陕西',
	'62': '甘肃',
	'63': '青海',
	'64': '宁夏',
	'65': '新疆',
	'71': '台湾',
	'81': '香港',
	'82': '澳门',
};

const validateMainlandID = (id: string): boolean => {
	const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	const checkCodes = '10X98765432';
	let sum = 0;
	for (let i = 0; i < 17; i++) {
		sum += parseInt(id[i]) * weights[i];
	}
	const mod = sum % 11;
	const last = checkCodes[mod];
	return last === id[17].toUpperCase();
}

const isVaildIdCard = (idCard: string): boolean => {
	const mainlandRegex18 = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
	const mainlandRegex15 = /^[1-9]\d{7}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}$/;

	if (idCard.length === 18) {
		if (!mainlandRegex18.test(idCard)) return false;
		return validateMainlandID(idCard);
	}

	if (idCard.length === 15) {
		return mainlandRegex15.test(idCard);
	}

	const hkRegex = /^[A-Z]\d{6}\([0-9A]\)$/;
	if (hkRegex.test(idCard)) return true;

	const macauRegex = /^[1|5|7]\d{6}\([0-9]\)$/;
	if (macauRegex.test(idCard)) return true;

	const taiwanRegex = /^[A-Z][12]\d{8}$/;
	if (taiwanRegex.test(idCard)) return true;

	return false;
};

export {
	isVaildIdCard,
	regionCodes
}