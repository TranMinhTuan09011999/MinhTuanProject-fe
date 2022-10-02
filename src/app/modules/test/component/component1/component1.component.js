"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Component1Component = void 0;
var core_1 = require("@angular/core");
var search_condition_1 = require("../model/search-condition");
var object_util_1 = require("../../../../util/object-util");
var router_constant_1 = require("../../../../constant/router-constant");
var Component1Component = /** @class */ (function () {
    function Component1Component(formBuilder, screenService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.screenService = screenService;
        this.searchCondition = new search_condition_1.SearchCondition();
        this.searchFormGroup = function () {
            _this.searchForm = _this.formBuilder.group({
                lastName: [''],
                firstName: [''],
                phoneNumber: ['']
            });
        };
        this.onSubmit = function () {
            _this.searchCondition = _this.patchSearchConditionFormData(_this.searchForm.value);
            console.log(_this.searchCondition);
            var currentScreenInfo = {
                path: [
                    router_constant_1.RouterConstant.TEST.path,
                    router_constant_1.RouterConstant.COMPONENT_1.path
                ],
                searchCondition: _this.searchCondition
            };
            var nextScreenInfo = {
                path: [
                    router_constant_1.RouterConstant.TEST.path,
                    router_constant_1.RouterConstant.COMPONENT_2.path
                ], queryParams: {
                    receptionControlNum: 12345
                }
            };
            _this.screenService.navigateTo(nextScreenInfo, currentScreenInfo)["catch"](_this.handleError);
        };
        this.handleError = function (error) {
        };
    }
    Component1Component.prototype.ngOnInit = function () {
        this.searchFormGroup();
        this.fillSearchDataFromSession().then();
    };
    /**
     * Merge the current search conditions with the new one.
     * Remove any properties which are null or empty.
     * @param formDataValue New search options data
     */
    Component1Component.prototype.patchSearchConditionFormData = function (formDataValue) {
        var result = __assign(__assign({}, this.searchCondition), formDataValue);
        // set null to empty string value
        Object.keys(result).forEach(function (key) {
            if (!object_util_1.ObjectUtil.nonNullAndNotEmpty(result[key])) {
                result[key] = null;
            }
        });
        return result;
    };
    Component1Component.prototype.fillSearchDataFromSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.screenService.getSearchCondition()];
                    case 1:
                        searchData = _a.sent();
                        console.log(searchData);
                        if (searchData) {
                            this.fillFormData(searchData);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Component1Component.prototype.fillFormData = function (data) {
        this.searchForm.setValue({
            lastName: data ? data.lastName : null,
            firstName: data ? data.firstName : null,
            phoneNumber: data ? data.phoneNumber : null
        });
    };
    Component1Component = __decorate([
        (0, core_1.Component)({
            selector: 'app-component1',
            templateUrl: './component1.component.html',
            styleUrls: ['./component1.component.css']
        })
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
