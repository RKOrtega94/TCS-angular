import { FormControl, Validators } from '@angular/forms';
import { minDateValidator } from '@app/shared/validators/min-date.validator';

interface FormInterface {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  logo: FormControl<string | null>;
  releaseDate: FormControl<Date | null>;
  reviewDate: FormControl<Date | null>;
}

export const ProductFormControllers: FormInterface = {
  id: new FormControl<string | null>(null, {
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ],
  }),
  name: new FormControl<string | null>(null, {
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ],
  }),
  description: new FormControl<string | null>(null, {
    validators: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ],
  }),
  logo: new FormControl<string | null>(null, {
    validators: [
      Validators.required,
      Validators.pattern(
        /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/
      ),
    ],
  }),
  releaseDate: new FormControl<Date | null>(null, {
    validators: [Validators.required, minDateValidator(new Date())],
  }),
  reviewDate: new FormControl<Date | null>(null, {
    validators: [Validators.required, minDateValidator(new Date())],
  }),
};
