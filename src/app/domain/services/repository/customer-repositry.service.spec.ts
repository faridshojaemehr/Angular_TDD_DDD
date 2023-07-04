import { TestBed } from '@angular/core/testing';

import { CustomerRepositryService } from './customer-repositry.service';

describe('CustomerRepositryService', () => {
  let service: CustomerRepositryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRepositryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
