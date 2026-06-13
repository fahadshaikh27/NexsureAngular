import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-claims-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Claims" description="Claim creation, review, approval, and rejection workspace.">
      <button class="button" type="button">Create Claim</button>
    </app-page-header>

    <section class="page-card">
      <strong>Claims module</strong>
      <p class="muted">Connect screens here using <code>ClaimsApiService</code>.</p>
    </section>
  `
})
export class ClaimsPageComponent {}
