import { Inject, Injectable } from '@angular/core';
import { IProductRepository } from '../product.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyProductIdUsecase {
  constructor(
    @Inject('IProductRepository')
    private readonly _productRepository: IProductRepository
  ) {}

  execute(productId: string): Observable<boolean> {
    return this._productRepository.validate(productId);
  }
}
