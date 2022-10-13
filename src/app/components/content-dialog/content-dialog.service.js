"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContentDialogService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ContentDialogService = /** @class */ (function () {
    function ContentDialogService() {
        var _this = this;
        this.defaultId = 'dlg-default';
        this.lstModal = [];
        this.setModel = function (modelRef) {
            _this.model = modelRef;
            var id = modelRef['id'];
            if (!id) {
                id = _this.defaultId;
            }
            _this.lstModal.push({ modalId: id, modalRef: modelRef });
        };
        this.open = function (dlgId) {
            if (dlgId !== undefined) {
                var tmpModal = _this.getModal(dlgId);
                console.log(tmpModal);
                tmpModal.modalRef.open(dlgId);
            }
            else {
                _this.model.open(dlgId);
            }
            $(function () {
                window.preventTabIndexOutside();
            });
        };
    }
    ContentDialogService.prototype.getModal = function (dlgId) {
        var tmpId = this.defaultId;
        if (dlgId) {
            tmpId = dlgId;
        }
        var modal = this.lstModal.find(function (m) { return m.modalId === tmpId; });
        if (modal) {
            return modal;
        }
        else {
            (0, rxjs_1.throwError)('can not get modal');
        }
    };
    ContentDialogService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ContentDialogService);
    return ContentDialogService;
}());
exports.ContentDialogService = ContentDialogService;
