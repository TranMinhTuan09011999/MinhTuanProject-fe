import {AbstractControl, FormGroup} from "@angular/forms";

export function validatorEmailPattern(controlName: string) {
  return (formGroup: FormGroup) => {
    const numControl = formGroup.controls[controlName];
    if (numControl.errors && !numControl.errors["pattern"]) {
      return;
    }
    numControl.setErrors(doValidatorEmail(numControl));
  };
}

export function doValidatorEmail(numControl: AbstractControl): any {
  const value = numControl.value;
  if (value) {
    if (isEmail(value)) {
      return null;
    } else {
      return {pattern: true};
    }
  }
}

function isEmail(value: any) {
  // all non-JP-characters are allow.
  // pattern: [whatever]@[whatever].[whatever]
  const emailPattern = '^[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+@[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+(\\.[\\w0-9.!#$%&\'*+-\\/=?^_{|}~"(),:;<>\\[\\\\\\]]+)+$';
  if (value.match(emailPattern)) {
    return true;
  }
  return false;
}
