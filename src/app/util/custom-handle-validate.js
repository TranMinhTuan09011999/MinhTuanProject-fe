"use strict";
exports.__esModule = true;
exports.CustomHandleValidate = void 0;
var CustomHandleValidate = /** @class */ (function () {
    function CustomHandleValidate(form) {
        this.form = form;
        this.formClone = {};
    }
    CustomHandleValidate.prototype.storeCloneValidateForm = function () {
        for (var key in this.form.controls) {
            this.formClone[key] = {
                invalid: this.form.controls[key].invalid,
                errors: this.form.controls[key].errors
            };
        }
    };
    CustomHandleValidate.prototype.isValidForm = function () {
        this.storeCloneValidateForm();
        return this.form.valid;
    };
    CustomHandleValidate.prototype.validForm = function () {
        this.storeCloneValidateForm();
        return this.form.invalid;
    };
    CustomHandleValidate.prototype.getValidates = function (key) {
        var control = this.formClone[key];
        if (!control) {
            return false;
        }
        return (control.invalid);
    };
    CustomHandleValidate.prototype.hasError = function (key, errorCode) {
        if (!this.formClone[key] || !this.formClone[key]['errors'] || !this.formClone[key]['errors'][errorCode]) {
            return false;
        }
        return this.formClone[key]['errors'][errorCode];
    };
    return CustomHandleValidate;
}());
exports.CustomHandleValidate = CustomHandleValidate;
