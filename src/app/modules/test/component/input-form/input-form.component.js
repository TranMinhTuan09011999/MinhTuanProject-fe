"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputFormComponent = void 0;
var core_1 = require("@angular/core");
var custom_handle_validate_1 = require("../../../../util/custom-handle-validate");
var forms_1 = require("@angular/forms");
var common_util_1 = require("../../../../shared/util/common-util");
var InputFormComponent = /** @class */ (function () {
    function InputFormComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.settings = {};
        this.dataSelect = [];
        this.infoShow = {};
        this.initFormData = function () {
            _this.formData = _this.formBuilder.group({
                fullName: [null, [forms_1.Validators.required]],
                gender: [null, [forms_1.Validators.required]],
                birthday: [null, []],
                phoneNumber: [null, [forms_1.Validators.required]],
                sport: [null, []],
                travel: [null, []],
                book: [null, []],
                movie: [null, []],
                language: [null, [forms_1.Validators.required]],
                note: [null, [forms_1.Validators.required]]
            });
            _this.formValidation = new custom_handle_validate_1.CustomHandleValidate(_this.formData);
        };
        this.initDropDown = function () {
            _this.settings = {
                idField: 'id',
                textField: 'language',
                selectAllText: 'All',
                unSelectAllText: 'Not All',
                searchPlaceholderText: 'Search',
                itemsShowLimit: 2,
                limitSelection: 2,
                allowSearchFilter: true,
                closeDropDownOnSelection: true,
                noDataAvailablePlaceholderText: 'No data'
            };
            _this.dataSelect.push({ id: 1, language: "English" });
            _this.dataSelect.push({ id: 2, language: "Vietnamese" });
            _this.dataSelect.push({ id: 3, language: "Chinese" });
        };
        this.submit = function () {
            debugger;
            if (!_this.formValidation.isValidForm()) {
                return;
            }
            _this.infoShow = _this.formData.getRawValue();
            console.log(_this.infoShow);
            // birthday : {year: 2022, month: 10, day: 5}
            // book: null
            // fullName: "abc"
            // gender: "Male"
            // language: [
            //   {id: 1, language: 'English'}
            //   {id: 2, language: 'Vietnamese'}
            // ]
            // movie: null
            // note: "abcdef"
            // phoneNumber: "0377730290"
            // sport: true
            // travel: true
        };
    }
    InputFormComponent.prototype.ngOnInit = function () {
        this.initFormData();
        this.initDropDown();
    };
    InputFormComponent.prototype.convertBreakLineHtml = function (item) {
        return common_util_1.CommonUtil.convertBreakLineHtml(item);
    };
    InputFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-input-form',
            templateUrl: './input-form.component.html',
            styleUrls: ['./input-form.component.css']
        })
    ], InputFormComponent);
    return InputFormComponent;
}());
exports.InputFormComponent = InputFormComponent;
