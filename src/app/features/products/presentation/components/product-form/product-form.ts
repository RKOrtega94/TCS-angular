import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextField } from '@app/shared/components/fields/text-field/text-field';
import { ProductFormControllers } from './product.form';

@Component({
  selector: 'app-product-form',
  imports: [TextField, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productForm = ProductFormControllers;
  formGroup = new FormGroup(this.productForm);
}
