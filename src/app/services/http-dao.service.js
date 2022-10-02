"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpDAOService = void 0;
var core_1 = require("@angular/core");
var HttpDAOService = /** @class */ (function () {
    function HttpDAOService(authorizeService, httpDaoWrapperService) {
        this.authorizeService = authorizeService;
        this.httpDaoWrapperService = httpDaoWrapperService;
    }
    HttpDAOService.prototype.doPost = function (pathAPI, body, params) {
        this.authorizeService.hasPermitAPI(pathAPI).then();
        return this.httpDaoWrapperService.doPost(pathAPI, body, params);
    };
    HttpDAOService.prototype.doPatch = function (pathAPI, body, params) {
        this.authorizeService.hasPermitAPI(pathAPI).then();
        return this.httpDaoWrapperService.doPatch(pathAPI, body, params);
    };
    HttpDAOService.prototype.doGetTextResponse = function (pathAPI, params) {
        this.authorizeService.hasPermitAPI(pathAPI).then();
        return this.httpDaoWrapperService.doGetTextResponse(pathAPI, params);
    };
    HttpDAOService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], HttpDAOService);
    return HttpDAOService;
}());
exports.HttpDAOService = HttpDAOService;
