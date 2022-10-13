"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = void 0;
var core_1 = require("@angular/core");
var router_constant_1 = require("../../../../../constant/router-constant");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.navigateToFormsElements = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.FORMS_ELEMENTS.path]).then();
        };
        this.navigateToFormsLayouts = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.FORMS_LAYOUTS.path]).then();
        };
        this.navigateToFormsEditors = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.FORMS_EDITORS.path]).then();
        };
        this.navigateToExcelReport = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.EXCEL_REPORT.path]).then();
        };
        this.navigateToTablesGeneral = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.TABLES_GENERAL.path]).then();
        };
        this.navigateToTablesData = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.TABLES_DATA.path]).then();
        };
        this.navigateToUI1 = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.UI1.path]).then();
        };
        this.navigateToUI2 = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.UI2.path]).then();
        };
        this.navigateToModal = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.MODAL.path]).then();
        };
        this.navigateToInputForm = function () {
            _this.router.navigate([router_constant_1.RouterConstant.TEST.path, router_constant_1.RouterConstant.INPUT_FORM.path]).then();
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
