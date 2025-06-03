import { Injectable } from '@angular/core';
import { IProductRepository } from '../../domain/product.repository';
import { Observable, of } from 'rxjs';
import { Product } from '../../domain/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl implements IProductRepository {
  private products: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description 1' },
    { id: '2', name: 'Product 2', description: 'Description 2' },
    { id: '3', name: 'Product 3', description: 'Description 3' },
  ];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }
}
