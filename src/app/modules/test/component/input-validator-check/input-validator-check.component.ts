import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomHandleValidate} from "../../../../util/custom-handle-validate";

@Component({
  selector: 'app-input-validator-check',
  templateUrl: './input-validator-check.component.html',
  styleUrls: ['./input-validator-check.component.css']
})
export class InputValidatorCheckComponent implements OnInit {

  public formData!: FormGroup;
  public formValidation!: CustomHandleValidate;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormData();
  }

  private initFormData = () => {
    this.formData = this.formBuilder.group({
      dateFrom: [null, [Validators.required]],
      dateTo: [null, [Validators.required]],
    });
    this.formValidation = new CustomHandleValidate(this.formData);
  }

}
