"use strict";
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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var router_constant_1 = require("../../../../constant/router-constant");
var forms_1 = require("@angular/forms");
var validators_email_1 = require("../../../../util/validators/validators-email");
var custom_handle_validate_1 = require("../../../../util/custom-handle-validate");
var portal_type_helper_1 = require("../../../../util/portal-type-helper");
var common_util_1 = require("../../../../util/common-util");
var session_attribute_1 = require("../../../../constant/session-attribute");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, activatedRoute, nonAuthenticateService, sessionService, screenService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.nonAuthenticateService = nonAuthenticateService;
        this.sessionService = sessionService;
        this.screenService = screenService;
        this.loginFormGroup = function () {
            _this.loginForm = _this.formBuilder.group({
                email: ['', [
                        forms_1.Validators.required
                    ]],
                password: ['', forms_1.Validators.required]
            }, {
                validator: [
                    (0, validators_email_1.validatorEmailPattern)('email')
                ]
            });
            _this.customValidate = new custom_handle_validate_1.CustomHandleValidate(_this.loginForm);
        };
        this.getValidates = function (key) {
            return _this.customValidate.getValidates(key);
        };
        this.hasError = function (key, errorCode) {
            return _this.customValidate.hasError(key, errorCode);
        };
        this.onSubmit = function () {
            _this.errorMessage = '';
            if (!_this.customValidate.isValidForm()) {
                return;
            }
            var dataPayload = _this.loginForm.value;
            dataPayload.portalType = portal_type_helper_1.PortalTypeHelper.getPortalType(_this.activatedRoute);
            console.log(dataPayload);
            // https://stackoverflow.com/questions/55472124/subscribe-is-deprecated-use-an-observer-instead-of-an-error-callback
            _this.nonAuthenticateService.login(dataPayload).subscribe({
                next: function (data) { return _this.nextSubmit(data); },
                error: function (error) { return _this.errorSubmit(error); },
                complete: function () { return console.info('complete'); }
            });
        };
        this.nextSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sessionService.setAttributeAsync(session_attribute_1.SessionAttribute.USER_DETAILS, data.userDetails)];
                    case 1:
                        _a.sent();
                        console.log(data);
                        if (portal_type_helper_1.PortalTypeHelper.isMyLifeMyRulesPortal()) {
                            this.screenService.goToHomePage();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.errorSubmit = function (error) {
            _this.errorMessage = common_util_1.CommonUtil.getMessageError(error);
            console.log(_this.errorMessage);
        };
        this.userRegister = function () {
            _this.router.navigate([router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path, router_constant_1.RouterConstant.NON_AUTHENTICATE_REGISTER.path]).then();
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormGroup();
    };
    LoginComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
