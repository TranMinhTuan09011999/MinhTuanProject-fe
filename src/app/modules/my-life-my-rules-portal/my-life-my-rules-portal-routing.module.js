"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyLifeMyRulesPortalRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_constant_1 = require("../../constant/router-constant");
var my_life_my_rules_portal_component_1 = require("./my-life-my-rules-portal.component");
var my_life_my_rules_home_component_1 = require("./component/my-life-my-rules-home/my-life-my-rules-home.component");
var wallets_component_1 = require("./component/wallets/wallets.component");
var routes = [
    {
        path: router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path,
        component: my_life_my_rules_portal_component_1.MyLifeMyRulesPortalComponent,
        children: [
            {
                path: router_constant_1.RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path,
                component: my_life_my_rules_home_component_1.MyLifeMyRulesHomeComponent
            },
            {
                path: router_constant_1.RouterConstant.MY_LIFE_MY_RULES_PORTAL_WALLETS.path,
                component: wallets_component_1.WalletsComponent
            }
        ]
    }
];
var MyLifeMyRulesPortalRoutingModule = /** @class */ (function () {
    function MyLifeMyRulesPortalRoutingModule() {
    }
    MyLifeMyRulesPortalRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MyLifeMyRulesPortalRoutingModule);
    return MyLifeMyRulesPortalRoutingModule;
}());
exports.MyLifeMyRulesPortalRoutingModule = MyLifeMyRulesPortalRoutingModule;
