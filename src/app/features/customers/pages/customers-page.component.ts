import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Customer Management" description="Customer details, nominees, and profile workflow area.">
      <button class="button" type="button">Add Customer</button>
    </app-page-header>

    <section class="page-card">
      <strong>Customer management module</strong>
      <p class="muted">Connect screens here using <code>CustomersApiService</code>.</p>
    </section>
  `
})
export class CustomersPageComponent {}
