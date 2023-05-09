import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewInvoiceComponent } from './preview-invoice.component';
import { PreviewInvoiceRoutingModule } from './preview-invoice-routing.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [PreviewInvoiceComponent],
  imports: [CommonModule, PreviewInvoiceRoutingModule, MatDividerModule],
})
export class PreviewInvoiceModule {}
