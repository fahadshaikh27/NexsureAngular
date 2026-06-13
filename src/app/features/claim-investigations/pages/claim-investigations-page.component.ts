import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-claim-investigations-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Claim Investigations" description="Investigation create, update, list, and delete workspace." />

    <section class="page-card">
      <strong>Claim investigations module</strong>
      <p class="muted">Connect screens here using <code>ClaimInvestigationsApiService</code>.</p>
    </section>
  `
})
export class ClaimInvestigationsPageComponent {}
