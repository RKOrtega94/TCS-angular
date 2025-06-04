import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductFilter } from '../components/product-filter/product-filter';
import { ProductList } from '../components/product-list/product-list';
import { ProductAdd } from '../components/product-add/product-add';
import { GetAllProductsUsecase } from '../../domain/use-cases/get-all-products.usecase';
import { Product } from '../../domain/product.model';
import { FormControl } from '@angular/forms';

interface ProductState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

@Component({
  imports: [ProductFilter, ProductList, ProductAdd],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit {
  #getAllProducts = inject(GetAllProductsUsecase);
  #state = signal<ProductState>(initialState);
  products = computed(() => this.#state().products);
  loading = computed(() => this.#state().loading);
  searchController = new FormControl<string>('');

  ngOnInit(): void {
    this.#getAllProducts
      .execute({ name: this.searchController.value })
      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.error(err);
        },
      });
  }
}
