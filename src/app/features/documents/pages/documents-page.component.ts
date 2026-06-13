import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-documents-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Documents" description="Policy, claim, and KYC upload, review, and download workspace.">
      <button class="button" type="button">Upload</button>
    </app-page-header>

    <section class="page-card">
      <strong>Documents module</strong>
      <p class="muted">Connect screens here using <code>DocumentsApiService</code>.</p>
    </section>
  `
})
export class DocumentsPageComponent {}
