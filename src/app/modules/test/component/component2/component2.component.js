"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Component2Component = void 0;
var core_1 = require("@angular/core");
var router_constant_1 = require("../../../../constant/router-constant");
var Component2Component = /** @class */ (function () {
    function Component2Component(screenService) {
        var _this = this;
        this.screenService = screenService;
        this.back = function () {
            debugger;
            _this.screenService.findAndBackToPath([
                router_constant_1.RouterConstant.COMPONENT_1.path
            ])["catch"](_this.handleError);
        };
        this.handleError = function (error) {
        };
    }
    Component2Component.prototype.ngOnInit = function () {
    };
    Component2Component = __decorate([
        (0, core_1.Component)({
            selector: 'app-component2',
            templateUrl: './component2.component.html',
            styleUrls: ['./component2.component.css']
        })
    ], Component2Component);
    return Component2Component;
}());
exports.Component2Component = Component2Component;
