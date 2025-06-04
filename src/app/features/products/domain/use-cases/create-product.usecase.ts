import { Inject, Injectable } from '@angular/core';
import { IProductRepository } from '../product.repository';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateProductUsecase {
  constructor(
    @Inject('IProductRepository')
    private readonly _productRepository: IProductRepository
  ) {}

  excecute(product: Product): Observable<Product> {
    return this._productRepository.create(product);
  }
}
