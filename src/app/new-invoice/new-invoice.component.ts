import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent {

  invoiceForm: FormGroup = new FormGroup({
    'invoice': new FormArray([this.invoiceFormGroup()])
  })

  private invoiceFormGroup(): FormGroup {
    return new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'count': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[0-9]+$')]),
      'price': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern('^[0-9]+$')])
    });
  }

  onSubmit() {
    console.log(this.invoiceForm.value);
  }

  get controls(): AbstractControl[] {
    return (<FormArray>this.invoiceForm.get('invoice')).controls;
  }

  addInvoice(): void {
    (<FormArray>this.invoiceForm.get('invoice')).push(this.invoiceFormGroup());
  }

  removeInvoice(index: number): void {
    (<FormArray>this.invoiceForm.get('invoice')).removeAt(index);
  }
}
