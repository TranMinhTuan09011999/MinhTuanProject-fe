import { Component, OnInit } from '@angular/core';
import {CustomHandleValidate} from "../../../../util/custom-handle-validate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonUtil} from "../../../../shared/util/common-util";
import {ValidatorsCharacters} from "../../../../shared/util/validators-characters";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  public settings: any = {};
  public dataSelect: Array<{ id?: number, language?: string }> = [];

  public formData!: FormGroup;
  public formValidation!: CustomHandleValidate;

  public infoShow: any = {};
  public show = false;

  // session 2
  public formData2!: FormGroup;
  public formValidation2!: CustomHandleValidate;
  public userName2: string = '';

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormData();
    this.initDropDown();

    // session 2
    this.initFormData2();
  }

  private initFormData = () => {
    this.formData = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      birthday: [null, []],
      phoneNumber: [null, [Validators.required]],
      sport: [null, []],
      travel: [null, []],
      book: [null, []],
      movie: [null, []],
      language: [null, [Validators.required]],
      note: [null, [Validators.required]]
    }, );
    this.formValidation = new CustomHandleValidate(this.formData);
  }

  private initDropDown = () => {
    this.settings = {
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

    this.dataSelect.push({id: 1, language: "English"});
    this.dataSelect.push({id: 2, language: "Vietnamese"});
    this.dataSelect.push({id: 3, language: "Chinese"});
  }

  submit = () => {
    if (!this.formValidation.isValidForm()) {
      return;
    }
    this.show = true;
    this.infoShow = this.formData.getRawValue();
    // similar
    const formVal = this.formData.value;
    console.log(this.infoShow);
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
    console.log(formVal);
  }

  convertBreakLineHtml(item: any) {
    return CommonUtil.convertBreakLineHtml(item);
  }

  // -------------------------------------------------- Session 2 ----------------------------------------------------------------------
  private initFormData2 = () => {
    this.formData2 = this.formBuilder.group({
      fullName: [null, [Validators.required, ValidatorsCharacters.FullWidthCharacter2]]
    }, );
    this.formValidation2 = new CustomHandleValidate(this.formData2);
  }

  hasValue2(key: string) {
    return this.formValidation2.hasValue(key);
  }

  submit2 = () => {
    console.log(this.formValidation2);
    if (!this.formValidation2.isValidForm()) {
      return;
    }
    const formVal2 = this.formData2.value;
    console.log(formVal2);
    this.userName2 = formVal2.fullName
  }
}
