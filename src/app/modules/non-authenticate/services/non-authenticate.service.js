"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NonAuthenticateService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var api_constant_1 = require("../../../constant/api-constant");
var exception_util_1 = require("../../../util/exception-util");
var NonAuthenticateService = /** @class */ (function () {
    function NonAuthenticateService(httpDAO) {
        this.httpDAO = httpDAO;
    }
    NonAuthenticateService.prototype.login = function (credentials) {
        return this.httpDAO.doPost(api_constant_1.APIConstant.API_NON_AUTH_LOGIN, credentials)
            .pipe((0, rxjs_1.catchError)(exception_util_1.ExceptionUtil.handleError));
    };
    NonAuthenticateService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], NonAuthenticateService);
    return NonAuthenticateService;
}());
exports.NonAuthenticateService = NonAuthenticateService;
