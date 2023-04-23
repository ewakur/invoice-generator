import { Injectable } from '@angular/core';
import { Invoice } from './invoice.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoicesStorageService {
  private _invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject<
    Invoice[]
  >([]);

  constructor() {}

  get invoices(): Invoice[] {
    return this._invoices.value;
  }

  set invoices(addedInvoices: Invoice[]) {
    this._invoices.next(addedInvoices);
  }
}
