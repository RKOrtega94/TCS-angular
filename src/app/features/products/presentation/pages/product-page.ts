import { Component } from '@angular/core';
import { ProductFilter } from '../components/product-filter/product-filter';
import { ProductList } from '../components/product-list/product-list';
import { ProductAdd } from '../components/product-add/product-add';

@Component({
  selector: 'app-product-page',
  imports: [ProductFilter, ProductList, ProductAdd],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {}
