import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
})
export class TextField {
  placeholder = input<string>('');
  label = input<string | undefined>(undefined);
  controller = input<FormControl>(new FormControl());
  type = input<'text' | 'email' | 'password' | 'url'>('text');

  getError(): string | null {
    const errors = this.controller().errors;
    if (errors && Object.keys(errors).length > 0) {
      const errorKeys = Object.keys(errors);
      if (errorKeys.includes('required')) {
        return 'This field is required.';
      } else if (errorKeys.includes('minlength')) {
        return `Minimum length is ${errors['minlength'].requiredLength} characters.`;
      } else if (errorKeys.includes('maxlength')) {
        return `Maximum length is ${errors['maxlength'].requiredLength} characters.`;
      } else if (errorKeys.includes('email')) {
        return 'Please enter a valid email address.';
      } else if (errorKeys.includes('pattern')) {
        return 'Invalid format.';
      } else if (errorKeys.includes('minDate')) {
        return `Date must be after ${errors[
          'minDate'
        ].requiredDate.toLocaleDateString()}.`;
      } else if (errorKeys.includes('invalidProductId')) {
        return 'Invalid product ID.';
      }
    }
    return null;
  }
}
