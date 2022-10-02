"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NonAuthenticateRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var router_constant_1 = require("../../constant/router-constant");
var non_authenticate_component_1 = require("./non-authenticate.component");
var register_component_1 = require("./components/register/register.component");
var portal_type_enum_1 = require("../../constant/portal-type.enum");
var routes = [
    {
        path: router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path,
        component: non_authenticate_component_1.NonAuthenticateComponent,
        children: [
            {
                path: router_constant_1.RouterConstant.NON_AUTHENTICATE_LOGIN.path,
                component: login_component_1.LoginComponent,
                data: { breadcrumb: router_constant_1.RouterConstant.NON_AUTHENTICATE_LOGIN.label, portalType: portal_type_enum_1.PortalType.MY_LIFE_MY_RULES } // data is used to get for activatedRoute
            },
            {
                path: router_constant_1.RouterConstant.NON_AUTHENTICATE_REGISTER.path,
                component: register_component_1.RegisterComponent
            }
        ]
    }
];
var NonAuthenticateRoutingModule = /** @class */ (function () {
    function NonAuthenticateRoutingModule() {
    }
    NonAuthenticateRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], NonAuthenticateRoutingModule);
    return NonAuthenticateRoutingModule;
}());
exports.NonAuthenticateRoutingModule = NonAuthenticateRoutingModule;
