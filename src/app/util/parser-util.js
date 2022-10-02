"use strict";
exports.__esModule = true;
exports.ParserUtil = void 0;
var ParserUtil = /** @class */ (function () {
    function ParserUtil() {
    }
    ParserUtil.parseBoolean = function (str) {
        if (str === 1 || str === 'true' || str === true) {
            return true;
        }
        return false;
    };
    ParserUtil.parseNumber = function (str) {
        try {
            return Number.parseInt(str, 0);
        }
        catch (error) {
            return 0;
        }
    };
    ParserUtil.parseJSon = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (error) {
            return str;
        }
    };
    ParserUtil.parseString = function (value) {
        if (value) {
            return value + '';
        }
        return '';
    };
    return ParserUtil;
}());
exports.ParserUtil = ParserUtil;
