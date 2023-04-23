import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuComponent } from './menu.component';
import { InvoicesStorageService } from '../shared/invoices-storage.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let invoiceStorageService: InvoicesStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [InvoicesStorageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    invoiceStorageService = TestBed.inject(InvoicesStorageService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should reset invoice table', function () {
    spyOnProperty(invoiceStorageService, 'invoices').and.returnValue([]);
    component.resetInvoiceStorage();
    expect(invoiceStorageService.invoices).toEqual([]);
  });
});
