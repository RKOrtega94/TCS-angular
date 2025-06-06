import { Observable } from 'rxjs';
import { IProductRepository } from './../product.repository';
import { Inject, Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsUsecase {
  constructor(
    @Inject('IProductRepository')
    private readonly _productRepository: IProductRepository
  ) {}

  execute(params: Record<string, any> | null): Observable<Product[]> {
    return this._productRepository.getAll(params);
  }
}
