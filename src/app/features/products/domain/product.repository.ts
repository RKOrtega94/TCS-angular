import { Observable } from 'rxjs';
import { Product } from './product.model';

export interface IProductRepository {
  getAll(params: Record<string, any> | null): Observable<Product[]>;
  create(product: Product): Observable<Product>;
  validate(productId: string): Observable<boolean>;
}
