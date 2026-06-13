import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-policies-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Policies" description="Policy create, approval, renewal, and listing workspace.">
      <button class="button" type="button">Create Policy</button>
    </app-page-header>

    <section class="page-card">
      <strong>Policy module</strong>
      <p class="muted">Connect screens here using <code>PoliciesApiService</code>.</p>
    </section>
  `
})
export class PoliciesPageComponent {}
