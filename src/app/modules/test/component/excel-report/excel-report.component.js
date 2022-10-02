"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExcelReportComponent = void 0;
var core_1 = require("@angular/core");
var ExcelReportComponent = /** @class */ (function () {
    function ExcelReportComponent(excelService) {
        var _this = this;
        this.excelService = excelService;
        this.data = {
            id: "A123",
            fullName: "Minh Tuan",
            grade: "12A11",
            resultList: [
                {
                    idSub: 1,
                    subjectName: "English",
                    score1: 8,
                    score2: 10,
                    classification: "Good"
                },
                {
                    idSub: 2,
                    subjectName: "Math",
                    score1: 8,
                    score2: 10,
                    classification: "Good"
                },
                {
                    idSub: 3,
                    subjectName: "Art",
                    score1: 8,
                    score2: 10,
                    classification: "Good"
                },
                {
                    idSub: 4,
                    subjectName: "History",
                    score1: 8,
                    score2: 10,
                    classification: "Good"
                },
                {
                    idSub: 5,
                    subjectName: "Chemistry",
                    score1: 8,
                    score2: 10,
                    classification: "Good"
                }
            ]
        };
        this.report = function () {
            _this.excelService.report(_this.data).subscribe();
        };
    }
    ExcelReportComponent.prototype.ngOnInit = function () {
    };
    ExcelReportComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-excel-report',
            templateUrl: './excel-report.component.html',
            styleUrls: ['./excel-report.component.css']
        })
    ], ExcelReportComponent);
    return ExcelReportComponent;
}());
exports.ExcelReportComponent = ExcelReportComponent;
