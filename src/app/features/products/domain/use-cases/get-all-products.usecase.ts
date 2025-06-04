import { Observable } from 'rxjs';
import { ProductRepositoryImpl } from '../../data/repositories/product.repository.impl';
import { IProductRepository } from './../product.repository';
import { Inject, inject, Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsUsecase {
  constructor(
    @Inject('IProductRepository')
    private readonly _productRepository: IProductRepository
  ) {}

  execute(): Observable<Product[]> {
    return this._productRepository.getAll();
  }
}
