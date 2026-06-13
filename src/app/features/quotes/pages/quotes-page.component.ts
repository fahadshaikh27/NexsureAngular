import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Quotes" description="Quote generation, quote listing, and conversion workflow area.">
      <button class="button" type="button">Create Quote</button>
    </app-page-header>

    <section class="page-card">
      <strong>Quote module</strong>
      <p class="muted">Connect screens here using <code>QuotesApiService</code>.</p>
    </section>
  `
})
export class QuotesPageComponent {}
