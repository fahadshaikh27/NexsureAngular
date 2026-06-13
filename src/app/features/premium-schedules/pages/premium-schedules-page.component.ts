import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-premium-schedules-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Premium Schedules" description="Installment generation, lookup, update, and paid marking workspace." />

    <section class="page-card">
      <strong>Premium schedules module</strong>
      <p class="muted">Connect screens here using <code>PremiumSchedulesApiService</code>.</p>
    </section>
  `
})
export class PremiumSchedulesPageComponent {}
