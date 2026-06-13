import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-underwriting-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Underwriting" description="Risk evaluation, approval, and rejection workflow area." />

    <section class="page-card">
      <strong>Underwriting module</strong>
      <p class="muted">Connect screens here using <code>UnderwritingApiService</code>.</p>
    </section>
  `
})
export class UnderwritingPageComponent {}
