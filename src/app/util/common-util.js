"use strict";
exports.__esModule = true;
exports.CommonUtil = void 0;
var _ = require("underscore");
var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
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
    return CommonUtil;
}());
exports.CommonUtil = CommonUtil;
