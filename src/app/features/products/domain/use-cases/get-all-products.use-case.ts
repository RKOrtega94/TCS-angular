import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { IProductRepository } from '../product.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  execute(): Observable<Product[]> {
    return this.productRepository.getAll();
  }
}
