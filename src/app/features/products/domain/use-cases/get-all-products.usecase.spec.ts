import { TestBed } from '@angular/core/testing';

import { GetAllProductsUsecase } from './get-all-products.usecase';

describe('GetAllProductsUsecase', () => {
  let service: GetAllProductsUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllProductsUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
