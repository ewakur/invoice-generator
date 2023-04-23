import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInvoiceComponent } from './preview-invoice.component';
import { InvoicesStorageService } from '../shared/invoices-storage.service';
import { CompanyDataService } from '../shared/company-data.service';
import { Invoice } from '../shared/invoice.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PreviewInvoiceComponent', () => {
  let component: PreviewInvoiceComponent;
  let fixture: ComponentFixture<PreviewInvoiceComponent>;
  let invoicesStorageService: InvoicesStorageService;
  let companyDataService: CompanyDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PreviewInvoiceComponent],
      providers: [InvoicesStorageService, CompanyDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewInvoiceComponent);
    component = fixture.componentInstance;
    invoicesStorageService = TestBed.inject(InvoicesStorageService);
    companyDataService = TestBed.inject(CompanyDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the company data from API', () => {
    const companyData = {
      name: 'Test',
      address: 'Test',
      phones: ['111-111-111', '222-222-222'],
    };

    const req = httpTestingController.expectOne(
      'https://company-data-a5278-default-rtdb.europe-west1.firebasedatabase.app/company.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(companyData);
    expect(component.company).toEqual(companyData);
  });

  it('should calculate sum of invoices', () => {
    const expectedInvoices: Invoice[] = [
      { name: 'Item 1', count: 2, price: 10 },
      { name: 'Item 2', count: 1, price: 5 },
    ];
    component.invoices = expectedInvoices;
    fixture.detectChanges();
    const expectedSum = 25;
    expect(component.sumInvoices()).toEqual(expectedSum);
  });
});
