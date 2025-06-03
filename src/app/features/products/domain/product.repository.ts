import { Observable } from 'rxjs';
import { Product } from './product.model';

export interface IProductRepository {
  getAll(): Observable<Product[]>;
}
