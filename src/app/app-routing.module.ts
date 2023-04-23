import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-invoice', pathMatch: 'full' },
  { path: 'new-invoice', component: NewInvoiceComponent },
  { path: 'preview-invoice', component: PreviewInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
