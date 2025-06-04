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

  getAll(): Observable<Product[]> {
    return this.GET<Product[]>(this.#basePath);
  }
}
