import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product.model'; // Adjusted path
import { GetAllProductsUseCase } from '../../domain/use-cases/get-all-products.use-case'; // Adjusted path
import { ProductFilter } from '../components/product-filter/product-filter';
import { ProductList } from '../components/product-list/product-list';
import { ProductAdd } from '../components/product-add/product-add';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, ProductFilter, ProductList, ProductAdd], // Add CommonModule here
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit {
  products$: Observable<Product[]>;

  private getAllProductsUseCase = inject(GetAllProductsUseCase);

  ngOnInit(): void {
    this.products$ = this.getAllProductsUseCase.execute();
  }
}
