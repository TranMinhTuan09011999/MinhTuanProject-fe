"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NumberInputComponent = void 0;
var core_1 = require("@angular/core");
var add_comma_pipe_1 = require("../../shared/pipe/add-comma-pipe");
var forms_1 = require("@angular/forms");
var $ = require("jquery");
var validators_characters_1 = require("../../shared/util/validators-characters");
var NumberInputComponent = /** @class */ (function () {
    function NumberInputComponent(sanitizer, addCommaPipe) {
        this.sanitizer = sanitizer;
        this.addCommaPipe = addCommaPipe;
        this.disable = false;
        this.readonly = false;
        this.isDisplayLabel = false;
        this.checkInput = new core_1.EventEmitter();
        // only use for patternNumericalValue
        this.patternNumerical = false;
        this.patternNumericalValue = /^[+-]?[0-9]*$/;
        this.patternNumber = /^([0-9])$/;
        this.valueNumber = '';
        this.onChange = function () {
        };
        this.onTouch = function () {
        };
    }
    NumberInputComponent_1 = NumberInputComponent;
    NumberInputComponent.prototype.ngOnInit = function () {
        if (this.comma) {
            this.maxlengthWithComma = this.comma.maxlength + Math.ceil(this.comma.maxlength / 3) - 1;
        }
    };
    NumberInputComponent.prototype.keypress = function (event) {
        var patternNumber = this.patternNumber;
        if (this.patternNumerical) {
            if (event.target.selectionStart === 0) {
                patternNumber = this.patternNumericalValue;
            }
            else {
                patternNumber = this.patternNumber;
            }
        }
        var result;
        result = patternNumber.test(event.key);
        if (!result) {
            return result;
        }
    };
    NumberInputComponent.prototype.checkInputNumber = function (event) {
        var patternNumber = /^[0-9]*$/;
        var result;
        result = patternNumber.test(event.target.value);
        this.checkInput.emit(result);
    };
    NumberInputComponent.prototype.onPaste = function (event) {
        if (this.comma) {
            var pastedData = event.clipboardData.getData('text/plain');
            $('#' + this.numberInputId).val('');
            this.value = pastedData.replace(/,/g, '').substring(0, this.comma.maxlength);
            return false;
        }
    };
    NumberInputComponent.prototype.onChangeReplaceFullWidthNum = function (length) {
        var pattern = new RegExp(validators_characters_1.ValidatorsCharacters.FullWidthNumberRegex, 'g');
        if (this.value && this.value.match(pattern)) {
            if (length && this.value.length > length) {
                this.value = this.value.substring(0, length);
            }
            this.value = this.value.replace(pattern, function (s) { return String.fromCharCode(s.charCodeAt(0) - 0xFEE0); });
        }
    };
    Object.defineProperty(NumberInputComponent.prototype, "value", {
        get: function () {
            return this.valueNumber;
        },
        set: function (val) {
            if (val !== undefined && this.valueNumber !== val) {
                this.valueNumber = this.comma ? this.addCommaPipe.transform(val) : val;
            }
            this.onChange(this.valueNumber);
            this.onTouch(this.valueNumber);
            $('#' + this.numberInputId).val(this.valueNumber);
        },
        enumerable: false,
        configurable: true
    });
    NumberInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    NumberInputComponent.prototype.setWidth = function () {
        var style = '';
        if (this.width) {
            style = style.concat('width: ' + this.width + ';');
        }
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    var NumberInputComponent_1;
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "placeHolder");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "width");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "minlength");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "maxlength");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "controlName");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "defaultClass");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "errorClass");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "numberInputId");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "disable");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "readonly");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "isDisplayLabel");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "comma");
    __decorate([
        (0, core_1.Output)()
    ], NumberInputComponent.prototype, "checkInput");
    __decorate([
        (0, core_1.Input)()
    ], NumberInputComponent.prototype, "patternNumerical");
    NumberInputComponent = NumberInputComponent_1 = __decorate([
        (0, core_1.Component)({
            selector: 'app-number-input',
            templateUrl: './number-input.component.html',
            styleUrls: ['./number-input.component.css'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: (0, core_1.forwardRef)(function () { return NumberInputComponent_1; }),
                    multi: true
                },
                add_comma_pipe_1.AddCommaPipe,
            ]
        })
    ], NumberInputComponent);
    return NumberInputComponent;
}());
exports.NumberInputComponent = NumberInputComponent;
