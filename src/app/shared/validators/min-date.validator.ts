import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minDateValidator(minDate: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;

    const inputDate = new Date(control.value);

    if (isNaN(inputDate.getTime())) {
      return { invalidDate: { value: control.value } };
    }

    return inputDate >= minDate
      ? null
      : { minDate: { requiredDate: minDate, actualDate: inputDate } };
  };
}
