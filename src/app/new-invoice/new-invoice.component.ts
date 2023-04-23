import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvoicesStorageService } from '../shared/invoices-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent {
  invoiceForm: FormGroup = new FormGroup({
    invoice: new FormArray([NewInvoiceComponent.invoiceFormGroup()]),
  });

  constructor(
    private _snackBar: MatSnackBar,
    private invoicesStorage: InvoicesStorageService,
    private router: Router
  ) {}

  private static invoiceFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      count: new FormControl<number>(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern('^[0-9]+$'),
      ]),
      price: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern('^[0-9]+$'),
      ]),
    });
  }

  public onSubmit(): void {
    if (this.invoiceForm.valid && this.invoiceForm.value['invoice'].length) {
      this.invoicesStorage.invoices = this.invoiceForm.value['invoice'];
      this.router.navigate(['/preview-invoice']);
    } else if (!this.invoiceForm.value['invoice'].length) {
      this.openSnackBar('Please add items', 'Ok');
    }
  }

  get controls(): AbstractControl[] {
    return (<FormArray>this.invoiceForm.get('invoice')).controls;
  }

  public addInvoice(): void {
    (<FormArray>this.invoiceForm.get('invoice')).push(
      NewInvoiceComponent.invoiceFormGroup()
    );
  }

  public removeInvoice(index: number): void {
    (<FormArray>this.invoiceForm.get('invoice')).removeAt(index);
  }

  private openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
