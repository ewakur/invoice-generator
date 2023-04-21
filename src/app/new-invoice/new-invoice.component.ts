import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent {
  invoiceForm: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'count': new FormControl(null, Validators.required),
    'price': new FormControl(null, Validators.required)
  });

  onSubmit() {
    console.log(this.invoiceForm.value);
  }

  addInvoice() {}
}
