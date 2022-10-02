"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExcelService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var api_constant_1 = require("../../../constant/api-constant");
var exception_util_1 = require("../../../util/exception-util");
var ExcelService = /** @class */ (function () {
    function ExcelService(httpDAO) {
        this.httpDAO = httpDAO;
    }
    ExcelService.prototype.report = function (data) {
        return this.httpDAO.doPost(api_constant_1.APIConstant.API_TEST_EXCEL_EXPORT, data)
            .pipe((0, rxjs_1.catchError)(exception_util_1.ExceptionUtil.handleError));
    };
    ExcelService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ExcelService);
    return ExcelService;
}());
exports.ExcelService = ExcelService;
