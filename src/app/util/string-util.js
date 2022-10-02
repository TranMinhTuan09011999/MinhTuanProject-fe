"use strict";
exports.__esModule = true;
exports.StringUtil = void 0;
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.formatString = function (str, params) {
        Object.keys(params).forEach(function (key) {
            str = str.replace(new RegExp('\\{' + key + '\\}', 'gi'), params[key]);
        });
        return str;
    };
    StringUtil.parseString = function (value) {
        return String(value);
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
