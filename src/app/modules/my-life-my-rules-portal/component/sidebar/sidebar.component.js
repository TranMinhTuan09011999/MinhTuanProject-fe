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
var router_constant_1 = require("../../../../constant/router-constant");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.navigateToHome = function () {
            _this.router.navigate([router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path, router_constant_1.RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path]).then();
        };
        this.navigateToMyWallets = function () {
            _this.router.navigate([router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path, router_constant_1.RouterConstant.MY_LIFE_MY_RULES_PORTAL_WALLETS.path]).then();
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
