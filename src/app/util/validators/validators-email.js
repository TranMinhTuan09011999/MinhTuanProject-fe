"use strict";
exports.__esModule = true;
exports.doValidatorEmail = exports.validatorEmailPattern = void 0;
function validatorEmailPattern(controlName) {
    return function (formGroup) {
        var numControl = formGroup.controls[controlName];
        if (numControl.errors && !numControl.errors["pattern"]) {
            return;
        }
        numControl.setErrors(doValidatorEmail(numControl));
    };
}
exports.validatorEmailPattern = validatorEmailPattern;
function doValidatorEmail(numControl) {
    var value = numControl.value;
    if (value) {
        if (isEmail(value)) {
            return null;
        }
        else {
            return { pattern: true };
        }
    }
}
exports.doValidatorEmail = doValidatorEmail;
function isEmail(value) {
    // all non-JP-characters are allow.
    // pattern: [whatever]@[whatever].[whatever]
    var emailPattern = '^[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+@[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+(\\.[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+)+$';
    if (value.match(emailPattern)) {
        return true;
    }
    return false;
}
