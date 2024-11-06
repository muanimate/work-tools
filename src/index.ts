import arrayUtils from "./utils/array/index";
import stringUtils from "./utils/string/index";
import dateUtils from "./utils/date/index";
import rulesUtils from "./utils/rules/index";
import othersUtils from "./utils/others/index";
import parseQueryStringUtils from "./utils/parseQueryString/index";

export default {
  ...arrayUtils,
	...stringUtils,
	...dateUtils,
	...rulesUtils,
	...othersUtils,
	...parseQueryStringUtils
};

export { addKey, uniqueUsingSet, uniqueUsingMap, groupBy, isEquals, findPath } from "./utils/array/index";
export { thousandseparator, replaceParams, formatPhone, getStrLenWithChars } from "./utils/string/index";
export { formatTimeAgo, formatDate } from "./utils/date/index";
export { isVaildIdCard } from "./utils/rules/index";
export {debounce, throttle} from "./utils/others/index";
export { parseUrlParams } from "./utils/parseQueryString/index";