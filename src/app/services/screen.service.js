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
exports.ScreenService = void 0;
var core_1 = require("@angular/core");
var screen_caller_stack_data_1 = require("../models/screen-caller-stack-data");
var _ = require("lodash");
var session_attribute_1 = require("../constant/session-attribute");
var object_util_1 = require("../util/object-util");
var portal_type_helper_1 = require("../util/portal-type-helper");
var router_constant_1 = require("../constant/router-constant");
var common_util_1 = require("../shared/util/common-util");
var ScreenService = /** @class */ (function () {
    function ScreenService(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this._data = new screen_caller_stack_data_1.ScreenCallerStackData();
        this._clonedData = new screen_caller_stack_data_1.ScreenCallerStackData();
        this.overridingStateData = true;
    }
    /**
     * Navigate to the next screen.<br>
     *
     * @param nextScreenInfo The path and query params of the next screen.
     *        Can not be null.
     * @param currentScreenInfo The path and query params of the current screen.
     *        Can set to null if you don't want to go back to the current screen.
     * @param stateData State data you want to share across the screens (can be
     *   null).
     * @param removeDuplicated remove duplicated next screen flag.
     */
    ScreenService.prototype.navigateTo = function (nextScreenInfo, currentScreenInfo, stateData, removeDuplicated) {
        if (removeDuplicated === void 0) { removeDuplicated = true; }
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {};
                        this.setDataCurentScreen(currentScreenInfo);
                        this.storeDataNextScreen(nextScreenInfo, stateData);
                        this.removeDuplicatedPathPair();
                        return [4 /*yield*/, this.setSessionData()];
                    case 1:
                        _a.sent();
                        if (nextScreenInfo.queryParams) {
                            options.queryParams = nextScreenInfo.queryParams;
                        }
                        console.log(this._data);
                        this.searchCondition = null;
                        this.router.navigate(nextScreenInfo.path, options).then();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set data for the next screen.<br>
     *
     * @param currentScreenInfo The path and query params of the current screen.
     *        Can set to null if you don't want to go back to the current screen.
     * @param stateData State data you want to share across the screens (can be
     *   null).
     */
    ScreenService.prototype.setDataCurentScreen = function (currentScreenInfo) {
        if (currentScreenInfo) {
            if (!this._data.lastScreenInfoStack) {
                this._data.lastScreenInfoStack = [];
            }
            this._data.lastScreenInfoStack.push(currentScreenInfo);
        }
    };
    ScreenService.prototype.storeDataNextScreen = function (nextScreenInfo, stateData) {
        if (nextScreenInfo) {
            if (!this._data.lastScreenInfoStack) {
                this._data.lastScreenInfoStack = [];
            }
            if (stateData) {
                nextScreenInfo.stateData = stateData;
            }
            this._data.lastScreenInfoStack.push(nextScreenInfo);
        }
        this._data.stateData = nextScreenInfo === null || nextScreenInfo === void 0 ? void 0 : nextScreenInfo.stateData;
    };
    ScreenService.prototype.removeDuplicatedPathPair = function () {
        for (var _i = 0, _a = this._data.lastScreenInfoStack; _i < _a.length; _i++) {
            var screenInfo = _a[_i];
            var i = this._data.lastScreenInfoStack.indexOf(screenInfo);
            if ((i + 1) < this._data.lastScreenInfoStack.length) {
                var nextScreenInfo = this._data.lastScreenInfoStack[i + 1];
                if (_.isEqual(screenInfo.path, nextScreenInfo.path)) {
                    this._data.lastScreenInfoStack.splice(i, 1);
                }
            }
        }
    };
    ScreenService.prototype.setSessionData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sessionService.setAttributeAsync(session_attribute_1.SessionAttribute.SCREEN_CALLER_STACK_DATA, this._data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScreenService.prototype.findAndBackToPath = function (paths, fn) {
        return __awaiter(this, void 0, void 0, function () {
            var cleanedPaths, currentPath, currentScreenIndex_1, latestIndex, _i, _a, _b, i, screenInfo, _c, cleanedPaths_1, path;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this._data) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getData()];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // for case path include: [path]/:[param]
                        // for example:
                        // path: 'general-examination-result-display/:receptioncontrolnumber',
                        try {
                            cleanedPaths = paths.map(function (p) {
                                var index = p.indexOf('/');
                                return index > -1 ? p.substring(0, index) : p;
                            });
                            currentPath = location.pathname;
                            currentScreenIndex_1 = this._data.lastScreenInfoStack.length - 1;
                            if (object_util_1.ObjectUtil.nonNullAndNotEmpty(this._data.lastScreenInfoStack)) {
                                latestIndex = -1;
                                for (_i = 0, _a = this._data.lastScreenInfoStack.entries(); _i < _a.length; _i++) {
                                    _b = _a[_i], i = _b[0], screenInfo = _b[1];
                                    for (_c = 0, cleanedPaths_1 = cleanedPaths; _c < cleanedPaths_1.length; _c++) {
                                        path = cleanedPaths_1[_c];
                                        if (screenInfo.path.indexOf(path) !== -1) {
                                            latestIndex = i;
                                        }
                                    }
                                    if (('/' + screenInfo.path.toString().replace(/,+/g, '/')).includes(currentPath)) {
                                        currentScreenIndex_1 = i;
                                    }
                                }
                                this.navigateByUrl.apply(this, this._data.lastScreenInfoStack[latestIndex].path).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this._data.lastScreenInfoStack.splice(currentScreenIndex_1, 1);
                                                return [4 /*yield*/, this.setSessionData()];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/, true];
                            }
                        }
                        catch (_e) {
                            // this.router.navigate(this.getPortalTopScreenPath()).then();
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    ScreenService.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sessionService.getAttributeAsync(session_attribute_1.SessionAttribute.SCREEN_CALLER_STACK_DATA)];
                    case 1:
                        _a._data = _b.sent();
                        console.log(this._data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScreenService.prototype.navigateByUrl = function () {
        var path = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            path[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var options, url, nextScreenInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {};
                        url = '/' + path.join('/');
                        return [4 /*yield*/, this.restoringNavigation(url)];
                    case 1:
                        nextScreenInfo = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                if (nextScreenInfo) {
                                    if (nextScreenInfo.queryParams) {
                                        options.queryParams = nextScreenInfo.queryParams;
                                    }
                                    _this.router.navigate(nextScreenInfo.path, options).then(function () { return resolve(0); });
                                }
                                else {
                                    _this.router.navigate(path).then(function () { return resolve(0); });
                                }
                            })];
                }
            });
        });
    };
    // hande back/forward browser
    // format: /bsp/top-screen?abc=1&dev=2
    ScreenService.prototype.restoringNavigation = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var screenInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.backUrlHoder = url;
                        this._clonedData = this._data;
                        return [4 /*yield*/, this.getData()];
                    case 1:
                        _a.sent();
                        screenInfo = this.findScreenInfo(url);
                        if (!screenInfo) return [3 /*break*/, 3];
                        this.searchCondition = screenInfo.searchCondition;
                        if (this.overridingStateData) {
                            this._data.stateData = screenInfo.stateData;
                        }
                        return [4 /*yield*/, this.setSessionData()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.overridingStateData = true;
                        return [2 /*return*/, screenInfo];
                }
            });
        });
    };
    ScreenService.prototype.findScreenInfo = function (url) {
        url = this.trimUrl(url);
        console.log(this._data);
        if (this._data && this._data.lastScreenInfoStack && this._data.lastScreenInfoStack.length) {
            var lastIndex = -1;
            for (var _i = 0, _a = this._data.lastScreenInfoStack.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], i = _b[0], screenInfo = _b[1];
                if (common_util_1.CommonUtil.equals(url, '/' + screenInfo.path.join('/'))) {
                    lastIndex = i;
                }
            }
            if (lastIndex !== -1) {
                return this._data.lastScreenInfoStack[lastIndex];
            }
        }
        return null;
    };
    ScreenService.prototype.trimUrl = function (url) {
        return url.split('?')[0];
    };
    ScreenService.prototype.getSearchCondition = function () {
        var searchCondition = this.searchCondition;
        // reset data after init UI
        this.searchCondition = null;
        if (object_util_1.ObjectUtil.nonNullAndNotEmpty(searchCondition)) {
            return searchCondition;
        }
        return null;
    };
    ScreenService.prototype.goToHomePage = function () {
        this.router.navigate(this.getHomePortalScreenPath()).then();
    };
    ScreenService.prototype.getHomePortalScreenPath = function () {
        var paths = [portal_type_helper_1.PortalTypeHelper.getPathPortal()];
        console.log(paths);
        if (portal_type_helper_1.PortalTypeHelper.isMyLifeMyRulesPortal()) {
            paths.push(router_constant_1.RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path);
        }
        console.log(paths);
        return paths;
    };
    ScreenService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ScreenService);
    return ScreenService;
}());
exports.ScreenService = ScreenService;
