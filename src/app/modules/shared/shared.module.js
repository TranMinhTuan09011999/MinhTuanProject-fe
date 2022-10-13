"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var content_dialog_component_1 = require("../../components/content-dialog/content-dialog.component");
var number_input_component_1 = require("../../components/number-input/number-input.component");
var null_hyphen_pipe_1 = require("../../shared/pipe/null-hyphen.pipe");
var add_comma_pipe_1 = require("../../shared/pipe/add-comma-pipe");
var forms_1 = require("@angular/forms");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                content_dialog_component_1.ContentDialogComponent,
                null_hyphen_pipe_1.NullHyphenPipe,
                number_input_component_1.NumberInputComponent,
                add_comma_pipe_1.AddCommaPipe
            ],
            exports: [
                content_dialog_component_1.ContentDialogComponent,
                number_input_component_1.NumberInputComponent // If NumberInputComponent is used in test module, we should declare it in exports
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
