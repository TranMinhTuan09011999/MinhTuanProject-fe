"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyLifeMyRulesPortalModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var my_life_my_rules_portal_routing_module_1 = require("./my-life-my-rules-portal-routing.module");
var my_life_my_rules_portal_component_1 = require("./my-life-my-rules-portal.component");
var my_life_my_rules_home_component_1 = require("./component/my-life-my-rules-home/my-life-my-rules-home.component");
var header_component_1 = require("./component/header/header.component");
var sidebar_component_1 = require("./component/sidebar/sidebar.component");
var footer_component_1 = require("./component/footer/footer.component");
var wallets_component_1 = require("./component/wallets/wallets.component");
var MyLifeMyRulesPortalModule = /** @class */ (function () {
    function MyLifeMyRulesPortalModule() {
    }
    MyLifeMyRulesPortalModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                my_life_my_rules_portal_component_1.MyLifeMyRulesPortalComponent,
                my_life_my_rules_home_component_1.MyLifeMyRulesHomeComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
                wallets_component_1.WalletsComponent
            ],
            imports: [
                common_1.CommonModule,
                my_life_my_rules_portal_routing_module_1.MyLifeMyRulesPortalRoutingModule
            ]
        })
    ], MyLifeMyRulesPortalModule);
    return MyLifeMyRulesPortalModule;
}());
exports.MyLifeMyRulesPortalModule = MyLifeMyRulesPortalModule;
