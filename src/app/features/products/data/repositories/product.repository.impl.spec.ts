import { TestBed } from '@angular/core/testing';

import { ProductRepositoryImpl } from './product.repository.impl';

describe('ProductRepositoryImpl', () => {
  let service: ProductRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
