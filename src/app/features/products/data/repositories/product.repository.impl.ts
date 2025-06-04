import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../domain/product.model';
import { IProductRepository } from '../../domain/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl implements IProductRepository {
  private http = inject(HttpClient);

  // The apiInterceptor will prepend environment.apiUrl to this path.
  // For development, environment.apiUrl will be '/api'.
  // So the request will go to '/api/bp/products'.
  // The proxy will then forward this to 'http://localhost:3002/bp/products'.
  private productPath = 'bp/products';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productPath);
  }

  // Implement other methods if IProductRepository defines them, e.g.:
  // getById(id: string): Observable<Product | undefined> {
  //   return this.http.get<Product>(`${this.productPath}/${id}`);
  // }
  //
  // add(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.productPath, product);
  // }
  //
  // update(product: Product): Observable<Product | undefined> {
  //   return this.http.put<Product>(`${this.productPath}/${product.id}`, product);
  // }
  //
  // delete(id: string): Observable<boolean> {
  //   return this.http.delete<boolean>(`${this.productPath}/${id}`);
  // }
}
