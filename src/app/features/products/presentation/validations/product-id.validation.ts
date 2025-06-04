import { inject } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { VerifyProductIdUsecase } from '../../domain/use-cases/verify-product-id.usecase';

export function productIdValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) return null;

    const validate = inject(VerifyProductIdUsecase);

    validate.execute(value).subscribe({
      next: (isValid) => {
        if (!isValid) {
          control.setErrors({ invalidProductId: true });
        } else {
          control.setErrors(null);
        }
      },
    });

    return null;
  };
}
