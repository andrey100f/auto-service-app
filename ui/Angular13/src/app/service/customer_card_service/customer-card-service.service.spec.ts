import { TestBed } from '@angular/core/testing';

import { CustomerCardServiceService } from './customer-card-service.service';

describe('CustomerCardServiceService', () => {
  let service: CustomerCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
