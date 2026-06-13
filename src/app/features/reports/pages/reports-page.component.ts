import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Reports" description="Operational reports, dashboards, and export workflow area.">
      <button class="button" type="button">Export</button>
    </app-page-header>

    <section class="page-card">
      <strong>Reports module</strong>
      <p class="muted">Connect screens here using <code>ReportsApiService</code>.</p>
    </section>
  `
})
export class ReportsPageComponent {}
