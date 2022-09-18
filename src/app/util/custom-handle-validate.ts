import {FormGroup} from '@angular/forms';

export class CustomHandleValidate {

  private formClone: any = {};

  constructor(private form: FormGroup) {

  }


  private storeCloneValidateForm() {
    for (const key in this.form.controls) {
      this.formClone[key] = {
        invalid: this.form.controls[key].invalid,
        errors: this.form.controls[key].errors
      }
    }
  }

  isValidForm(): boolean {
    this.storeCloneValidateForm();
    return this.form.valid;
  }

  validForm(): boolean {
    this.storeCloneValidateForm();
    return this.form.invalid;
  }

  getValidates(key: string) {
    const control = this.formClone[key];
    if(!control) {
      return false;
    }
    return (control.invalid);
  }

  hasError(key: string, errorCode: string) {
    if (!this.formClone[key] || !this.formClone[key]['errors'] || !this.formClone[key]['errors'][errorCode]) {
      return false;
    }
    return this.formClone[key]['errors'][errorCode];
  }
}
