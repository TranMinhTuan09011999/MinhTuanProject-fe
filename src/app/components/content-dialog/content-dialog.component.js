"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContentDialogComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var ContentDialogComponent = /** @class */ (function () {
    function ContentDialogComponent(service, sanitizer) {
        var _this = this;
        this.service = service;
        this.sanitizer = sanitizer;
        this.closeWhenOutside = true;
        this.isShowClose = true;
        this.isCompletionModal = false;
        this.eventOpen = new core_1.EventEmitter();
        this.clickClose = new core_1.EventEmitter();
        this.eventOutside = new core_1.EventEmitter();
        this.isOpening = false;
        this.isOpenById = false;
        this.open = function (dlgId) {
            console.log(dlgId);
            _this.close(function () {
                if (dlgId === undefined) {
                    dlgId = _this.id;
                }
                // @ts-ignore
                document.getElementById("".concat(dlgId)).click();
                if (_this.isCompletionModal) {
                    $('[autofocus]').focus();
                }
                _this.isOpening = true;
                _this.isOpenById = true;
                _this.eventOpen.emit();
            });
        };
        this.close = function (cb) {
            // close all modal
            var elements = document.getElementsByClassName('m-modal-content');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            _this.onClose(cb);
        };
        this.onClose = function (cb) {
            if (_this.isOpening) {
                window.$('.m-modal-content').css('display', 'none');
                // Note: Add node_modules/jquery/dist/jquery.min.js into angular.json
                $(function () {
                    // (window as any).$('.modalTrigger--close').click();
                    // $('.m-modal').fadeOut();
                    window.clearTabIndex();
                    // Note:
                    // if (cb && 'function' === typeof cb) { // check cb has value + cb is a function or not
                    //   cb(data); // call cb function -> bc function in line 45 / close()
                    // }
                    if (cb && typeof cb === 'function') {
                        cb();
                    }
                });
                _this.isOpening = false;
                _this.isOpenById = false;
                _this.clickClose.emit();
            }
            else {
                if (cb && typeof cb === 'function') {
                    cb();
                }
            }
        };
        this.classHeaderTextAlign = function () {
            if (_this.headerTextAlign !== null && _this.headerTextAlign !== undefined) {
                if (_this.headerTextAlign === 'right') {
                    return 'modal__ttl modal__ttl--text-align-right';
                }
                else if (_this.headerTextAlign === 'left') {
                    return 'modal__ttl modal__ttl--text-align-left';
                }
            }
            return 'modal__ttl';
        };
        this.clickOutside = function () {
            if (_this.isOpenById && _this.isOpening) {
                if (_this.isSubmit) {
                    return false;
                }
                $('#' + _this.contentId).css({ display: 'none' });
                _this.isOpening = false;
                _this.eventOutside.emit();
                return;
            }
            $(function () {
                window.clearTabIndex();
            });
            _this.eventOutside.emit();
        };
    }
    ContentDialogComponent.prototype.ngOnInit = function () {
        this.modalTriggerClose = 'modalTrigger--close';
        this.bodyContainer.createEmbeddedView(this.body);
        this.footerContainer.createEmbeddedView(this.footer);
        var model = this;
        this.service.setModel(model);
        this.contentId = "".concat(this.id, "-content");
        $(function () {
            window.attentionTrigger(), window.modalInteraction(), window.pushInteraction();
        });
    };
    ContentDialogComponent.prototype.setWidth = function () {
        var style = '';
        if (this.width) {
            style = style.concat('width: ' + this.width + ';');
        }
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    ContentDialogComponent.prototype.setHeightModalItem = function () {
        var style = '';
        if (this.heightModelItem) {
            style = style.concat('height: ' + this.heightModelItem + ';');
        }
        if (this.heightModelItem && this.scrollY) {
            style = style.concat('overflow-y: auto;');
        }
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "header");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "headerTextAlign");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "closeWhenOutside");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "isShowClose");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "id");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "isCompletionModal");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "modalTriggerClose");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "width");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "heightModelItem");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "scrollY");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "body");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "footer");
    __decorate([
        (0, core_1.Input)()
    ], ContentDialogComponent.prototype, "isSubmit");
    __decorate([
        (0, core_1.Output)()
    ], ContentDialogComponent.prototype, "eventOpen");
    __decorate([
        (0, core_1.Output)()
    ], ContentDialogComponent.prototype, "clickClose");
    __decorate([
        (0, core_1.Output)()
    ], ContentDialogComponent.prototype, "eventOutside");
    __decorate([
        (0, core_1.ViewChild)('bodyContainer', { read: core_1.ViewContainerRef, static: true })
    ], ContentDialogComponent.prototype, "bodyContainer");
    __decorate([
        (0, core_1.ViewChild)('footerContainer', { read: core_1.ViewContainerRef, static: true })
    ], ContentDialogComponent.prototype, "footerContainer");
    ContentDialogComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-content-dialog',
            templateUrl: './content-dialog.component.html',
            styleUrls: ['./content-dialog.component.css']
        })
    ], ContentDialogComponent);
    return ContentDialogComponent;
}());
exports.ContentDialogComponent = ContentDialogComponent;
