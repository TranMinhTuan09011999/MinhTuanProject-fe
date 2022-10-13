"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddCommaPipe = void 0;
var core_1 = require("@angular/core");
var common_util_1 = require("../util/common-util");
var AddCommaPipe = /** @class */ (function () {
    function AddCommaPipe() {
    }
    AddCommaPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!common_util_1.CommonUtil.isNull(value)) {
            value += '';
            var comma = /,/g;
            value = value.replace(comma, '');
            var x = value.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
        return '';
    };
    AddCommaPipe = __decorate([
        (0, core_1.Pipe)({
            name: 'addComma'
        })
    ], AddCommaPipe);
    return AddCommaPipe;
}());
exports.AddCommaPipe = AddCommaPipe;
