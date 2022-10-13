"use strict";
exports.__esModule = true;
exports.CommonUtil = void 0;
var _ = require("underscore");
var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    CommonUtil.getValueWithDefaultHyphen = function (object, property) {
        if (property === void 0) { property = ''; }
        return this.getValueWithDefault(object, property, '-');
    };
    CommonUtil.getValueWithDefault = function (object, property, defaultValue) {
        if (object || _.isNumber(object) || _.isString(object)) {
            if (_.isNumber(object) || (_.isString(object) && !_.isEmpty(object))) {
                return object;
            }
            else if ((_.isString(object) && _.isEmpty(object))) {
                return defaultValue;
            }
            if (property.indexOf('.') !== -1) {
                var arrKey = property.split('.');
                var value = void 0;
                for (var _i = 0, arrKey_1 = arrKey; _i < arrKey_1.length; _i++) {
                    var iterator = arrKey_1[_i];
                    if (value) {
                        value = value[iterator];
                    }
                    else {
                        value = object[iterator];
                    }
                }
                return _.isUndefined(value) ? defaultValue : value;
            }
            return _.isUndefined(object[property]) ? defaultValue : object[property];
        }
        return defaultValue;
    };
    CommonUtil.equals = function (obj1, obj2) {
        return String(obj1).toLocaleUpperCase() === String(obj2).toLocaleUpperCase();
    };
    CommonUtil.getMessageError = function (error) {
        var message = '';
        if (error && error.status !== 0 && error.error) {
            if (error.error.message) {
                message = error.error.message;
            }
            else if (error.error.errorMessage) {
                message = error.error.errorMessage;
            }
            else if (error.error.errorMsg) {
                message = error.error.errorMsg;
            }
            else if (error.error.error) {
                message = error.error.error;
            }
            else if (error.error) {
                var errorJson = this.isJSON(error.error);
                if (errorJson) {
                    if (errorJson.errorMsg) {
                        message = errorJson.errorMsg;
                    }
                    else if (errorJson.error) {
                        message = errorJson.error;
                    }
                }
                else if (_.isString(error.error)) {
                    message = error.error;
                }
            }
        }
        return message;
    };
    CommonUtil.isJSON = function (data) {
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return false;
        }
    };
    CommonUtil.isNull = function (value) {
        return (_.isUndefined(value) || _.isNull(value));
    };
    CommonUtil.convertBreakLineHtml = function (content) {
        if (content) {
            content = content.replace(/\\n/g, '<br/>');
            content = content.replace(/\n/g, '<br/>');
        }
        return content;
    };
    return CommonUtil;
}());
exports.CommonUtil = CommonUtil;
