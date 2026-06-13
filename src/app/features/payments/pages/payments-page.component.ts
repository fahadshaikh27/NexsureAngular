import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-payments-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Payments" description="Order creation, verification, history, and payment detail workspace." />

    <section class="page-card">
      <strong>Payments module</strong>
      <p class="muted">Connect screens here using <code>PaymentsApiService</code>.</p>
    </section>
  `
})
export class PaymentsPageComponent {}
