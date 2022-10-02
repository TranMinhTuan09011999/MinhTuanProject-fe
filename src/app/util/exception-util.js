"use strict";
exports.__esModule = true;
exports.ExceptionUtil = void 0;
var rxjs_1 = require("rxjs");
var ExceptionUtil = /** @class */ (function () {
    function ExceptionUtil() {
    }
    ExceptionUtil.handleErrorText = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
        }
        return (0, rxjs_1.throwError)(errorMessage);
    };
    ExceptionUtil.handleError = function (error) {
        return (0, rxjs_1.throwError)(error);
    };
    return ExceptionUtil;
}());
exports.ExceptionUtil = ExceptionUtil;
