import { TestBed } from '@angular/core/testing';

import { InvoicesStorageService } from './invoices-storage.service';

describe('InvoicesStorageService', () => {
  let service: InvoicesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
