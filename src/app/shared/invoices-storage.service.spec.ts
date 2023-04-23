import { TestBed } from '@angular/core/testing';

import { InvoicesStorageService } from './invoices-storage.service';
import { Invoice } from './invoice.model';

describe('InvoicesStorageService', () => {
  let service: InvoicesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get invoices', () => {
    const mockInvoices: Invoice[] = [
      { name: 'Item 1', count: 2, price: 10 },
      { name: 'Item 2', count: 3, price: 15 },
    ];
    service.invoices = mockInvoices;
    expect(service.invoices).toEqual(mockInvoices);
  });
});
