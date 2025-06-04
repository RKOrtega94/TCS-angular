import { Injectable } from '@angular/core';
import { IProductRepository } from '../../domain/product.repository';
import { Observable, of } from 'rxjs';
import { Product } from '../../domain/product.model';
import { ApiService } from '@app/core/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl
  extends ApiService
  implements IProductRepository
{
  #basePath: string = 'bp/products';

  getAll(params: Record<string, any> | null): Observable<Product[]> {
    return this.GET<Product[]>(this.#basePath, { params });
  }

  create(product: Product): Observable<Product> {
    return this.POST<Product>(this.#basePath, product);
  }

  validate(productId: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.#basePath}/verification/${productId}`
    );
  }
}
