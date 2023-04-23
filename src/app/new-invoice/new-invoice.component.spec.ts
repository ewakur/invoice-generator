import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoiceComponent } from './new-invoice.component';
import { InvoicesStorageService } from '../shared/invoices-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

describe('NewInvoiceComponent', () => {
  let component: NewInvoiceComponent;
  let fixture: ComponentFixture<NewInvoiceComponent>;
  let invoicesStorageService: InvoicesStorageService;
  let snackBarSpy: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NewInvoiceComponent],
      providers: [InvoicesStorageService, MatSnackBar],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NewInvoiceComponent);
    component = fixture.componentInstance;
    invoicesStorageService = TestBed.inject(InvoicesStorageService);
    snackBarSpy = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set invoices in invoicesStorage and navigate to /preview-invoice', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    const invoiceToAdd = {
      name: new FormControl<string>('Test'),
      count: new FormControl<number>(1),
      price: new FormControl<number>(10),
    };
    component.invoiceForm.setControl(
      'invoice',
      new FormArray([new FormGroup(invoiceToAdd)])
    );

    component.onSubmit();

    expect(invoicesStorageService.invoices).toEqual([
      { name: 'Test', count: 1, price: 10 },
    ]);
    expect(routerSpy).toHaveBeenCalledWith(['/preview-invoice']);
  });

  it('should show snackbar when there are no items', () => {
    spyOn(snackBarSpy, 'open');
    component.invoiceForm = new FormGroup({
      invoice: new FormArray([]),
    });
    component.onSubmit();
    expect(snackBarSpy.open).toHaveBeenCalled();
  });

  it('should add new empty invoice to form', () => {
    component.addInvoice();
    expect((<FormArray>component.invoiceForm.get('invoice')).length).toBe(2);
  });

  it('should remove invoice from form', () => {
    component.removeInvoice(0);
    expect((<FormArray>component.invoiceForm.get('invoice')).length).toBe(0);
  });
});
