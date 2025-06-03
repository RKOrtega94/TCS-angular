import { Component } from '@angular/core';
import { TextField } from '@app/shared/components/fields/text-field/text-field';

@Component({
  selector: 'app-product-filter',
  imports: [TextField],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {}
