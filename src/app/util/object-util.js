"use strict";
exports.__esModule = true;
exports.ObjectUtil = void 0;
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    ObjectUtil.nonNullAndNotEmpty = function (obj, trimmed) {
        var _this = this;
        if (trimmed === void 0) { trimmed = true; }
        var isNotNullAndUndefined = this.nonNull(obj);
        if (isNotNullAndUndefined) {
            if (Array.isArray(obj)) {
                // @ts-ignore
                return obj.length && obj.indexOf(undefined) === -1;
            }
            else if (trimmed && typeof obj === 'string') {
                return !!obj.trim();
            }
            else if (typeof obj === 'object') {
                return Object.keys(obj).findIndex(function (key) { return _this.nonNullAndNotEmpty(obj[key]); }) > -1;
            }
        }
        return isNotNullAndUndefined;
    };
    ObjectUtil.nonNull = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return ObjectUtil;
}());
exports.ObjectUtil = ObjectUtil;
