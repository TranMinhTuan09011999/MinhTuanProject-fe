"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormEditorsComponent = void 0;
var core_1 = require("@angular/core");
var FormEditorsComponent = /** @class */ (function () {
    function FormEditorsComponent() {
    }
    FormEditorsComponent.prototype.ngOnInit = function () {
    };
    FormEditorsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-form-editors',
            templateUrl: './form-editors.component.html',
            styleUrls: ['./form-editors.component.css']
        })
    ], FormEditorsComponent);
    return FormEditorsComponent;
}());
exports.FormEditorsComponent = FormEditorsComponent;
