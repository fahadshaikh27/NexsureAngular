import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-premiums-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Premium Management" description="Premium calculation, premium setup, and premium tracking workflow area." />

    <section class="page-card">
      <strong>Premium management module</strong>
      <p class="muted">Connect screens here using <code>PremiumsApiService</code>.</p>
    </section>
  `
})
export class PremiumsPageComponent {}
