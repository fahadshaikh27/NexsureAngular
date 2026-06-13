import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-claim-settlements-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Claim Settlements" description="Settlement creation, lookup, and completion workspace." />

    <section class="page-card">
      <strong>Claim settlements module</strong>
      <p class="muted">Connect screens here using <code>ClaimSettlementsApiService</code>.</p>
    </section>
  `
})
export class ClaimSettlementsPageComponent {}
