import { TestBed } from '@angular/core/testing';

import { CreateProductUsecase } from './create-product.usecase';

describe('CreateProductUsecase', () => {
  let service: CreateProductUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProductUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
