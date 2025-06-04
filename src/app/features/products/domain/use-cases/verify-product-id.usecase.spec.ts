import { TestBed } from '@angular/core/testing';

import { VerifyProductIdUsecase } from './verify-product-id.usecase';

describe('VerifyProductIdUsecase', () => {
  let service: VerifyProductIdUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyProductIdUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
