"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpDaoWrapperService = void 0;
var core_1 = require("@angular/core");
var portal_type_enum_1 = require("../constant/portal-type.enum");
var string_util_1 = require("../util/string-util");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environments/environment");
var HttpDaoWrapperService = /** @class */ (function () {
    // use httpClient -> add HttpClientModule into NonAuthenticateModule
    function HttpDaoWrapperService(http) {
        this.http = http;
        this.baseURI = '';
        this.baseURINonAuth = 'auth/';
        this.baseURLMLMRPortal = 'portal/my-life-my-rules';
        this.baseURLSalesPortal = 'portal/sales/';
        this.baseURITest = 'test/';
        this.baseSession = 'session/';
        this.headerApplicationJson = new http_1.HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    HttpDaoWrapperService.prototype.doBuilderURLAPI = function (pathAPI, params) {
        var apiFull = environment_1.environment.baseURL + this.baseURI;
        if (pathAPI.module === portal_type_enum_1.PortalType.NON_AUTH || pathAPI.module === portal_type_enum_1.PortalType.AUTHENTICATED) {
            apiFull += this.baseURINonAuth;
        }
        else if (pathAPI.module === portal_type_enum_1.PortalType.TEST) {
            apiFull += this.baseURITest;
        }
        else if (pathAPI.module === portal_type_enum_1.PortalType.MY_LIFE_MY_RULES) {
            apiFull += this.baseURLMLMRPortal;
        }
        else if (pathAPI.module === portal_type_enum_1.PortalType.SALES) {
            apiFull += this.baseURLSalesPortal;
        }
        else if (pathAPI.module === portal_type_enum_1.PortalType.SESSION) {
            apiFull += this.baseSession;
        }
        else if (pathAPI.module === portal_type_enum_1.PortalType.DIRECT_LINK) {
            // use direct link
            return pathAPI.uri;
        }
        var tmpURI = pathAPI.uri;
        if (params) {
            tmpURI = string_util_1.StringUtil.formatString(tmpURI, params);
        }
        return (apiFull + tmpURI);
    };
    HttpDaoWrapperService.prototype.doPost = function (pathAPI, body, params) {
        var href = this.doBuilderURLAPI(pathAPI, params);
        return this.http.post(href, body, { headers: this.headerApplicationJson });
    };
    HttpDaoWrapperService.prototype.doPatch = function (pathAPI, body, params) {
        var href = this.doBuilderURLAPI(pathAPI, params);
        return this.http.patch(href, body, { headers: this.headerApplicationJson });
    };
    HttpDaoWrapperService.prototype.doGetTextResponse = function (pathAPI, params) {
        var href = this.doBuilderURLAPI(pathAPI, params);
        return this.http.get(href, { headers: this.headerApplicationJson, responseType: 'text' });
    };
    HttpDaoWrapperService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], HttpDaoWrapperService);
    return HttpDaoWrapperService;
}());
exports.HttpDaoWrapperService = HttpDaoWrapperService;
