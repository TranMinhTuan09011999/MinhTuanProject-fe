"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Ui1Component = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var Ui1Component = /** @class */ (function () {
    function Ui1Component() {
        var _this = this;
        this.userList = [
            {
                id: 1,
                name: "Minh Tuan",
                age: 23,
                DOB: "09-01-1999",
                phone: "0377730290",
                address: "Ho Chi Minh"
            },
            {
                id: 2,
                name: "Minh Tien",
                age: 22,
                DOB: "15-07-2000",
                phone: "0377730290",
                address: "Ho Chi Minh"
            },
            {
                id: 3,
                name: "Minh Tai",
                age: 23,
                DOB: "09-01-1999",
                phone: "0377730290",
                address: "Ho Chi Minh"
            },
            {
                id: 4,
                name: "Minh Nguyen",
                age: 23,
                DOB: "09-01-1999",
                phone: "0377730290",
                address: "Ho Chi Minh"
            },
            {
                id: 5,
                name: "Minh Tu",
                age: 23,
                DOB: "09-01-1999",
                phone: "0377730290",
                address: "Ho Chi Minh"
            }
        ];
        this.filersChecked = [];
        this.checkAll = function () {
            if (_this.filersChecked.length > 0 && _this.filersChecked.length === _this.userList.length) {
                return true;
            }
            else {
                return false;
            }
        };
        this.onCheckAll = function (event) {
            _this.filersChecked = [];
            _this.userList.forEach(function (value, index) {
                $("#cb".concat(index)).prop('checked', event.target.checked);
                if (event.target.checked) {
                    _this.filersChecked.push(value);
                }
            });
            console.log(_this.filersChecked);
        };
        this.onChange = function (item, event) {
            if (event.target.checked) {
                _this.filersChecked.push(item);
            }
            else {
                _this.filersChecked = _this.filersChecked.filter(function (ite) {
                    return ite !== item && ite.id !== item.id;
                });
            }
            if (_this.filersChecked.length > 0 && _this.filersChecked.length === _this.userList.length) {
                $("#cbAll").prop('checked', true);
            }
            else {
                $("#cbAll").prop('checked', false);
            }
        };
    }
    Ui1Component.prototype.ngOnInit = function () {
    };
    Ui1Component = __decorate([
        (0, core_1.Component)({
            selector: 'app-ui1',
            templateUrl: './ui1.component.html',
            styleUrls: ['./ui1.component.css']
        })
    ], Ui1Component);
    return Ui1Component;
}());
exports.Ui1Component = Ui1Component;
