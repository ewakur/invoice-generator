import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../shared/company.model';
import { CompanyDataService } from '../shared/company-data.service';
import { Subject, takeUntil } from 'rxjs';
import { Invoice } from '../shared/invoice.model';
import { InvoicesStorageService } from '../shared/invoices-storage.service';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
})
export class PreviewInvoiceComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<void> = new Subject<void>();
  public company: Company = { name: '', address: '', phones: [] };
  public invoices: Invoice[] = [];

  constructor(
    private companyDataService: CompanyDataService,
    private invoicesStorage: InvoicesStorageService
  ) {}

  ngOnInit() {
    this.companyDataService
      .getCompanyData()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((companyData: Company) => {
        this.company = companyData;
      });
    this.invoices = this.invoicesStorage.invoices;
  }

  public sumInvoices(): number {
    let sumInvoices: number = 0;
    this.invoices.map((invoice: Invoice) => {
      sumInvoices += invoice.count * invoice.price;
    });
    return sumInvoices;
  }

  ngOnDestroy() {
    this.onDestroy$.unsubscribe();
  }
}
