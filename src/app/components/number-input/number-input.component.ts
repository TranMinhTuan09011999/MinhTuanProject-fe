import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {AddCommaPipe} from "../../shared/pipe/add-comma-pipe";
import { DomSanitizer } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as $ from 'jquery';
import {ValidatorsCharacters} from "../../shared/util/validators-characters";

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true
    },
    AddCommaPipe,
  ]
})
export class NumberInputComponent implements OnInit {

  @Input() placeHolder!: string;
  @Input() width: any;
  @Input() minlength: any;
  @Input() maxlength: any;
  @Input() controlName: any;
  @Input() defaultClass: any;
  @Input() errorClass: any;
  @Input() numberInputId!: string;
  @Input() disable = false;
  @Input() readonly = false;
  @Input() isDisplayLabel = false;
  @Input() comma: any; // ex: {maxlength: 25}
  @Output() checkInput: EventEmitter<any> = new EventEmitter();
  // only use for patternNumericalValue
  @Input() patternNumerical = false;
  public patternNumericalValue = /^[+-]?[0-9]*$/;
  public patternNumber = /^([0-9])$/;
  public maxlengthWithComma!: number;

  valueNumber = '';

  constructor(private sanitizer: DomSanitizer, private addCommaPipe: AddCommaPipe) { }

  ngOnInit(): void {
    if (this.comma) {
      this.maxlengthWithComma = this.comma.maxlength + Math.ceil(this.comma.maxlength / 3) - 1;
    }
  }

  keypress(event: any): any {
    let patternNumber = this.patternNumber;
    if (this.patternNumerical) {
      if (event.target.selectionStart === 0) {
        patternNumber = this.patternNumericalValue;
      } else {
        patternNumber = this.patternNumber;
      }
    }
    let result;
    result = patternNumber.test(event.key);
    if (!result) {
      return result;
    }
  }

  checkInputNumber(event: any) {
    const patternNumber = /^[0-9]*$/;
    let result;
    result = patternNumber.test(event.target.value);
    this.checkInput.emit(result);
  }

  onPaste(event: any): any {
    if (this.comma) {
      const pastedData = event.clipboardData.getData('text/plain');
      $('#' + this.numberInputId).val('');
      this.value = pastedData.replace(/,/g, '').substring(0, this.comma.maxlength);
      return false;
    }
  }

  onChangeReplaceFullWidthNum(length: any) {
    const pattern = new RegExp(ValidatorsCharacters.FullWidthNumberRegex, 'g');
    if (this.value && this.value.match(pattern)) {
      if (length && this.value.length > length) {
        this.value = this.value.substring(0, length);
      }
      this.value = this.value.replace(pattern, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
    }
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  get value() {
    return this.valueNumber;
  }

  set value(val) {
    if (val !== undefined && this.valueNumber !== val) {
      this.valueNumber = this.comma ? this.addCommaPipe.transform(val) : val;
    }
    this.onChange(this.valueNumber);
    this.onTouch(this.valueNumber);

    $('#' + this.numberInputId).val(this.valueNumber);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setWidth() {
    let style = '';
    if (this.width) {
      style = style.concat('width: ' + this.width + ';');
    }
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
