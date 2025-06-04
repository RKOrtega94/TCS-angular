import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductFilter } from '../components/product-filter/product-filter';
import { ProductList } from '../components/product-list/product-list';
import { ProductAdd } from '../components/product-add/product-add';
import { GetAllProductsUsecase } from '../../domain/use-cases/get-all-products.usecase';
import { Product } from '../../domain/product.model';

interface ProductState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

@Component({
  selector: 'app-product-page',
  imports: [ProductFilter, ProductList, ProductAdd],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit {
  #getAllProducts = inject(GetAllProductsUsecase);
  #state = signal<ProductState>(initialState);
  products = computed(() => this.#state().products);
  loading = computed(() => this.#state().loading);

  ngOnInit(): void {
    this.#getAllProducts.execute().subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
    });
  }
}
