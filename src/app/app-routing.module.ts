import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-invoice', pathMatch: 'full' },
  { path: 'new-invoice', component: NewInvoiceComponent },
  {
    path: 'preview-invoice',
    loadChildren: () =>
      import('./preview-invoice/preview-invoice.module').then(
        (m) => m.PreviewInvoiceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
