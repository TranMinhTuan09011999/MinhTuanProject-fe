"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NonAuthenticateModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_component_1 = require("./components/login/login.component");
var non_authenticate_component_1 = require("./non-authenticate.component");
var register_component_1 = require("./components/register/register.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var non_authenticate_routing_module_1 = require("./non-authenticate-routing.module");
var NonAuthenticateModule = /** @class */ (function () {
    function NonAuthenticateModule() {
    }
    NonAuthenticateModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                non_authenticate_component_1.NonAuthenticateComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                http_1.HttpClientModule,
                common_1.CommonModule,
                non_authenticate_routing_module_1.NonAuthenticateRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], NonAuthenticateModule);
    return NonAuthenticateModule;
}());
exports.NonAuthenticateModule = NonAuthenticateModule;
