import { Component } from '@angular/core';
import { InvoicesStorageService } from '../shared/invoices-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private invoicesStorage: InvoicesStorageService) {}

  public resetInvoiceStorage(): void {
    this.invoicesStorage.invoices = [];
  }
}
